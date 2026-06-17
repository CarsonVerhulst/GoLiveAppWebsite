// Read per-creator click counts from Vercel KV as JSON.
// Protected by a shared secret: /api/stats?key=YOUR_STATS_KEY
// (set STATS_KEY in the Vercel project's Environment Variables)
// The outreach dashboard can pull this to show clicks next to each creator.

module.exports = async (req, res) => {
  if (!process.env.STATS_KEY || req.query.key !== process.env.STATS_KEY) {
    res.writeHead(401);
    return res.end("unauthorized");
  }
  try {
    const { kv } = require("@vercel/kv");
    const keys = await kv.keys("clicks:*");
    const out = {};
    for (const k of keys) out[k.replace("clicks:", "")] = await kv.get(k);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify(out, null, 2));
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
};
