/* 관리자 사진 업로드 API (비밀번호 필요)
   POST {password, name, contentType, data(base64)} → Vercel Blob 에 저장하고 공개 주소를 돌려줍니다. */
const { put } = require("@vercel/blob");
const crypto = require("crypto");

const ALLOWED_ORIGINS = ["https://www.abbahome.co.kr", "https://abbahome.co.kr", "https://abba-home.vercel.app", "https://talkcloud.kakao.com"];
const TYPES = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
const same = (a, b) => {
  const x = Buffer.from(String(a || "")), y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

module.exports = async (req, res) => {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    if (!process.env.ADMIN_PASSWORD || !same(body.password, process.env.ADMIN_PASSWORD)) {
      await new Promise(r => setTimeout(r, 800));
      return res.status(401).json({ error: "password" });
    }
    const ext = TYPES[body.contentType];
    if (!ext) return res.status(400).json({ error: "type" });
    const buf = Buffer.from(String(body.data || ""), "base64");
    if (!buf.length || buf.length > 3 * 1024 * 1024) return res.status(400).json({ error: "size" });
    const name = String(body.name || "photo").toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 60) || "photo";
    const blob = await put(`media/${name}.${ext}`, buf, { access: "public", addRandomSuffix: true, contentType: body.contentType });
    return res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server" });
  }
};
