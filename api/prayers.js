/* 아바홈 기도요청 API
   GET  /api/prayers                       → 공개 동의 + 관리자 승인된 기도제목 (이름·연락처 제외)
   POST {action:"submit", name, contact, text, share}  → 누구나 기도요청 보내기
   POST {action:"pray", id}                → "함께 기도했어요" +1
   POST {password, action:"list" | "approve" | "done" | "delete", id, value} → 관리자 전용
   저장: Vercel Blob (prayers/ 폴더에 최신본 1개 유지) */
const { put, list, del } = require("@vercel/blob");
const crypto = require("crypto");

const PREFIX = "prayers/";
const MAX_ITEMS = 1000;

async function readAll() {
  const { blobs } = await list({ prefix: PREFIX });
  if (!blobs.length) return { items: [], blobs };
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  const r = await fetch(blobs[0].url, { cache: "no-store" });
  const data = r.ok ? await r.json() : { items: [] };
  return { items: Array.isArray(data.items) ? data.items : [], blobs };
}
async function writeAll(items, oldBlobs) {
  await put(PREFIX + "prayers.json", JSON.stringify({ items, updatedAt: new Date().toISOString() }), {
    access: "public", addRandomSuffix: true, contentType: "application/json"
  });
  if (oldBlobs.length) await del(oldBlobs.map(b => b.url)).catch(() => {});
}
const same = (a, b) => {
  const x = Buffer.from(String(a || "")), y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};
const clean = (s, n) => String(s || "").replace(/\s+$/g, "").trim().slice(0, n);
const pub = it => ({ id: it.id, text: it.text, date: it.date, prayed: it.prayed || 0 });

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const { items } = await readAll();
      return res.status(200).json({ items: items.filter(i => i.share && i.approved).map(pub) });
    }
    if (req.method !== "POST") return res.status(405).json({ error: "method" });
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const { action } = body;

    if (action === "submit") {
      if (body.website) return res.status(200).json({ ok: true }); /* 스팸 방지용 숨은 칸 */
      const text = clean(body.text, 1500);
      if (text.length < 2) return res.status(400).json({ error: "invalid" });
      const { items, blobs } = await readAll();
      items.unshift({
        id: crypto.randomUUID(), date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString(),
        name: clean(body.name, 40), contact: clean(body.contact, 80), text,
        share: !!body.share, approved: false, done: false, prayed: 0
      });
      await writeAll(items.slice(0, MAX_ITEMS), blobs);
      return res.status(200).json({ ok: true });
    }
    if (action === "pray") {
      const { items, blobs } = await readAll();
      const it = items.find(i => i.id === body.id && i.share && i.approved);
      if (!it) return res.status(404).json({ error: "notfound" });
      it.prayed = (it.prayed || 0) + 1;
      await writeAll(items, blobs);
      return res.status(200).json({ prayed: it.prayed });
    }

    if (!process.env.ADMIN_PASSWORD || !same(body.password, process.env.ADMIN_PASSWORD)) {
      await new Promise(r => setTimeout(r, 800));
      return res.status(401).json({ error: "password" });
    }
    const { items, blobs } = await readAll();
    if (action === "list") return res.status(200).json({ items });
    const it = items.find(i => i.id === body.id);
    if (action === "delete") {
      const next = items.filter(i => i.id !== body.id);
      await writeAll(next, blobs);
      return res.status(200).json({ items: next });
    }
    if (!it) return res.status(404).json({ error: "notfound" });
    if (action === "approve") it.approved = !!body.value && it.share;
    else if (action === "done") it.done = !!body.value;
    else return res.status(400).json({ error: "action" });
    await writeAll(items, blobs);
    return res.status(200).json({ items });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server" });
  }
};
