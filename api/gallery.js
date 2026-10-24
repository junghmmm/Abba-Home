/* '함께한 순간들' 사진첩 API
   GET  /api/gallery                         → 누구나 사진첩 보기 ({albums: null} 이면 data.js 기본값 사용)
   POST /api/gallery {password, action: "check" | "save", albums}
        → 비밀번호(ADMIN_PASSWORD)가 맞을 때만 저장. 빠진 업로드 사진(media/gallery-*)은 저장소에서도 지웁니다.
   저장: Vercel Blob (gallery/ 폴더에 최신본 1개 유지) */
const { put, list, del } = require("@vercel/blob");
const crypto = require("crypto");

const PREFIX = "gallery/";

async function readAlbums() {
  const { blobs } = await list({ prefix: PREFIX });
  if (!blobs.length) return { albums: null, blobs };
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  const r = await fetch(blobs[0].url, { cache: "no-store" });
  const data = r.ok ? await r.json() : {};
  return { albums: Array.isArray(data.albums) ? data.albums : null, blobs };
}
const same = (a, b) => {
  const x = Buffer.from(String(a || "")), y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};
const okUrl = u => typeof u === "string" && u.length < 400 && (/^images\/[\w.-]+$/.test(u) || /^https:\/\/[\w.-]+\.public\.blob\.vercel-storage\.com\//.test(u));
const txt = (s, n) => String(s || "").trim().slice(0, n);
function clean(albums) {
  return (Array.isArray(albums) ? albums : []).slice(0, 40).map(a => {
    const images = (Array.isArray(a.images) ? a.images : []).filter(okUrl).slice(0, 60);
    return { image: images[0] || "", images, caption: txt(a.caption, 80), caption_en: txt(a.caption_en, 120) };
  }).filter(a => a.images.length || a.caption);
}
const allUrls = albums => new Set((albums || []).flatMap(a => a.images || []));

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const { albums } = await readAlbums();
      return res.status(200).json({ albums });
    }
    if (req.method !== "POST") return res.status(405).json({ error: "method" });
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    if (!process.env.ADMIN_PASSWORD || !same(body.password, process.env.ADMIN_PASSWORD)) {
      await new Promise(r => setTimeout(r, 800));
      return res.status(401).json({ error: "password" });
    }
    if (body.action === "check") return res.status(200).json({ ok: true });
    if (body.action !== "save") return res.status(400).json({ error: "action" });
    const { albums: old, blobs } = await readAlbums();
    const albums = clean(body.albums);
    await put(PREFIX + "gallery.json", JSON.stringify({ albums, updatedAt: new Date().toISOString() }), {
      access: "public", addRandomSuffix: true, contentType: "application/json"
    });
    if (blobs.length) await del(blobs.map(b => b.url)).catch(() => {});
    const keep = allUrls(albums);
    const gone = [...allUrls(old)].filter(u => !keep.has(u) && /\/media\/gallery-/.test(u));
    if (gone.length) await del(gone).catch(() => {});
    return res.status(200).json({ albums });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server" });
  }
};
