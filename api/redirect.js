// Per-creator smart redirect for golivesimulator.com/r/<creator>
// - sniffs the device from the User-Agent → sends iPhones to the App Store,
//   Android to Play, desktop to the landing page
// - tags the destination so Apple (ct) and Google (referrer) attribute the
//   install to that creator
// - best-effort logs a click to Vercel KV (no-op if KV isn't connected yet)
//
// Wired up via vercel.json:  /r/:creator  ->  /api/redirect?creator=:creator

const APP_STORE_ID = "6504121037";
const PLAY_PACKAGE = "com.golivesimulator.app";
const LANDING = "https://golivesimulator.com";

// Link-preview crawlers, ad reviewers, scanners, and CLI tools. These hit the
// URL the moment it's pasted/shared (TikTok ad review, iMessage, Slack, etc.)
// and would otherwise each count as a "click". Matched case-insensitively.
const BOT_UA =
  /bot|crawler|spider|crawl|facebookexternalhit|slack|twitter|discord|telegram|whatsapp|linkedin|pinterest|embedly|quora|skype|vkshare|redditbot|applebot|bytespider|tiktok|bytedance|headless|phantom|preview|monitor|curl|wget|python-requests|axios|go-http|java\/|okhttp|libwww|httpclient|fetch|scan/i;

// How long (seconds) to treat repeat hits from the same IP+creator as one
// click. Collapses rapid prefetch/retry bursts and refreshes.
const DEDUP_TTL = 6 * 60 * 60; // 6 hours

module.exports = async (req, res) => {
  const creator =
    String(req.query.creator || "unknown")
      .toLowerCase()
      .replace(/[^a-z0-9_.-]/g, "")
      .slice(0, 40) || "unknown";

  const ua = req.headers["user-agent"] || "";
  const platform = /android/i.test(ua)
    ? "android"
    : /iphone|ipad|ipod/i.test(ua)
    ? "ios"
    : "other";

  // Only GETs from a real browser count. HEAD/prefetch and empty UAs are
  // almost always machines, not people.
  const method = (req.method || "GET").toUpperCase();
  const isHuman = method === "GET" && ua && !BOT_UA.test(ua);

  // Best-effort click logging. Never let logging block the redirect.
  try {
    if (isHuman && process.env.KV_REST_API_URL) {
      const { kv } = require("@vercel/kv");

      // First-hit-wins per IP+creator inside the TTL window, so one person
      // refreshing or a burst of retries only counts once.
      const ipRaw = req.headers["x-forwarded-for"] || "";
      const ip = String(ipRaw).split(",")[0].trim() || "noip";
      const firstSeen = await kv.set(
        `seen:${creator}:${ip}`,
        1,
        { ex: DEDUP_TTL, nx: true }
      );

      if (firstSeen) {
        await Promise.all([
          kv.incr(`clicks:${creator}`),
          kv.incr(`clicks:${creator}:${platform}`),
        ]);
      }
    }
  } catch (_) {}

  const appStore = `https://apps.apple.com/us/app/go-live-simulator/id${APP_STORE_ID}?ct=${encodeURIComponent(
    creator
  )}`;
  const play = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${encodeURIComponent(
    `utm_source=${creator}&utm_medium=creator`
  )}`;

  const dest =
    platform === "android" ? play : platform === "ios" ? appStore : LANDING;

  res.setHeader("Cache-Control", "no-store");
  res.writeHead(302, { Location: dest });
  res.end();
};
