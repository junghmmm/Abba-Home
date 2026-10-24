/* 아바홈 일정 API
   GET  /api/events              → 누구나 일정 목록 보기
   POST /api/events  {password, action: "check" | "save" | "delete", event | id}
        → 비밀번호(ADMIN_PASSWORD 환경변수)가 맞을 때만 추가·수정·삭제
   저장: Vercel Blob (events/ 폴더에 최신본 1개 유지) */
const { put, list, del } = require("@vercel/blob");
const crypto = require("crypto");

const PREFIX = "events/";

async function readEvents() {
  const { blobs } = await list({ prefix: PREFIX });
  if (!blobs.length) return { events: [], blobs };
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  const r = await fetch(blobs[0].url, { cache: "no-store" });
  const data = r.ok ? await r.json() : { events: [] };
  return { events: Array.isArray(data.events) ? data.events : [], blobs };
}

async function writeEvents(events, oldBlobs) {
  await put(PREFIX + "events.json", JSON.stringify({ events, updatedAt: new Date().toISOString() }), {
    access: "public", addRandomSuffix: true, contentType: "application/json"
  });
  if (oldBlobs.length) await del(oldBlobs.map(b => b.url)).catch(() => {});
}

const same = (a, b) => {
  const x = Buffer.from(String(a || "")), y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};
const clean = (s, n) => String(s || "").trim().slice(0, n);
const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s);

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const { events } = await readEvents();
      return res.status(200).json({ events });
    }
    if (req.method !== "POST") return res.status(405).json({ error: "method" });

    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    if (!process.env.ADMIN_PASSWORD || !same(body.password, process.env.ADMIN_PASSWORD)) {
      await new Promise(r => setTimeout(r, 800));
      return res.status(401).json({ error: "password" });
    }
    if (body.action === "check") return res.status(200).json({ ok: true });

    const { events, blobs } = await readEvents();
    if (body.action === "save") {
      const e = body.event || {};
      const ev = {
        id: clean(e.id, 40) || crypto.randomUUID(),
        title: clean(e.title, 120),
        date: clean(e.date, 10),
        endDate: clean(e.endDate, 10),
        time: clean(e.time, 20),
        place: clean(e.place, 120),
        note: clean(e.note, 1000)
      };
      if (!ev.title || !isDate(ev.date)) return res.status(400).json({ error: "invalid" });
      if (ev.endDate && (!isDate(ev.endDate) || ev.endDate < ev.date)) ev.endDate = "";
      const i = events.findIndex(x => x.id === ev.id);
      if (i >= 0) events[i] = ev; else events.push(ev);
      events.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
      await writeEvents(events, blobs);
      return res.status(200).json({ events });
    }
    if (body.action === "delete") {
      const next = events.filter(x => x.id !== body.id);
      await writeEvents(next, blobs);
      return res.status(200).json({ events: next });
    }
    return res.status(400).json({ error: "action" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server" });
  }
};
