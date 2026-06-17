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

  // Best-effort click logging. Never let logging block the redirect.
  try {
    if (process.env.KV_REST_API_URL) {
      const { kv } = require("@vercel/kv");
      await Promise.all([
        kv.incr(`clicks:${creator}`),
        kv.incr(`clicks:${creator}:${platform}`),
      ]);
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
