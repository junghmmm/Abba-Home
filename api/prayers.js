/* 아바홈 기도요청 API
   GET  /api/prayers                       → 공개 동의 + 관리자 승인된 기도제목 (이름·연락처 제외)
   POST {action:"submit", name, contact, text, share}  → 누구나 기도요청 보내기
   POST {action:"pray", id}                → "함께 기도했어요" +1
   POST {password, action:"list" | "approve" | "translate" | "done" | "delete", id, value} → 관리자 전용
   공개 승인 시 기도제목을 홈페이지 5개 언어로 자동 번역해 함께 저장합니다.
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
const pub = it => ({ id: it.id, text: it.ai ? "" : it.text, src: it.src, ai: !!it.ai, tr: it.tr || null, date: it.date, prayed: it.prayed || 0 });

/* ---------- 기본 번역 (AI 번역이 안 될 때 쓰는 MyMemory 무료 번역) ----------
   공개 승인된 기도제목을 홈페이지 언어(ko·en·zh·fr·si)로 한 번 번역해 저장해 둡니다. */
const LANGS = { ko: "ko-KR", en: "en-GB", zh: "zh-CN", fr: "fr-FR", si: "si-LK" };
const detect = t => /[\uac00-\ud7a3]/.test(t) ? "ko" : "en";
function chunks(text, max = 450) {
  const parts = String(text).split(/(?<=[.!?。！？\n])\s*/);
  const out = []; let cur = "";
  for (const p of parts) {
    if ((cur + " " + p).length > max && cur) { out.push(cur); cur = ""; }
    if (p.length > max) { for (let i = 0; i < p.length; i += max) out.push(p.slice(i, i + max)); continue; }
    cur = cur ? cur + " " + p : p;
  }
  if (cur) out.push(cur);
  return out;
}
async function mm(q, from, to) {
  const u = "https://api.mymemory.translated.net/get?" + new URLSearchParams({ q, langpair: `${LANGS[from]}|${LANGS[to]}`, de: "abbahomeherennow@gmail.com" });
  const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 9000);
  try {
    const r = await fetch(u, { signal: ctl.signal });
    const j = await r.json();
    const t = j && j.responseData && j.responseData.translatedText;
    if (!t || j.responseStatus != 200 || /MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID/i.test(t)) throw new Error("mm");
    return t;
  } finally { clearTimeout(tm); }
}
async function translateAll(text) {
  const src = detect(text), tr = {};
  const pieces = chunks(text);
  await Promise.all(Object.keys(LANGS).filter(l => l !== src).map(async l => {
    try { tr[l] = (await Promise.all(pieces.map(p => mm(p, src, l)))).join(" "); } catch (e) {}
  }));
  return { src, tr };
}
/* ---------- 새 기도요청 이메일 알림 (FormSubmit, 키 필요 없음) ---------- */
const NOTIFY_TO = process.env.PRAYER_NOTIFY_EMAIL || "abbahomeherennow@gmail.com";
async function notify(it) {
  const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 8000);
  try {
    await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(NOTIFY_TO), {
      method: "POST", signal: ctl.signal,
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: "https://www.abbahome.co.kr", Referer: "https://www.abbahome.co.kr/prayer" },
      body: JSON.stringify({
        _subject: "🙏 새 기도요청이 도착했습니다 - 아바홈",
        _template: "table", _captcha: "false",
        "이름": it.name || "(익명)", "연락처": it.contact || "(없음)",
        "홈페이지 나눔 희망": it.share ? "예 (관리자 승인 후 게시)" : "아니오 (비공개)",
        "기도제목": it.text, "받은 날짜": it.createdAt,
        "관리 페이지": "https://www.abbahome.co.kr/prayer (맨 아래 '관리자')"
      })
    });
  } finally { clearTimeout(tm); }
}
/* ---------- AI 번역 (Vercel AI Gateway) ----------
   맥락을 읽고, 공동체가 함께 기도하도록 3인칭 기도제목으로 다듬어 5개 언어로 만듭니다. */
const GLOSSARY = "아바홈 / 아바홈히어랜나우 = Abba Home / Abba Home Here & Now (never 'Avahome' or 'Ava Home'); 그레비 = Grevi (never 'Gravy'); 남동현 목사 = Rev. Dong-hyun Nam; 목요열방예배 = Thursday All Nations Worship; 안산 = Ansan.";
const SYS = `You prepare prayer requests for the public prayer wall of Abba Home (아바홈), a multicultural Christian mission community in Ansan, Korea, where people from many nations worship together.
Read the submitted request carefully and understand its full context and emotion. Then write it as a prayer item shared BY THE COMMUNITY ABOUT the person — third person, as if a fellow member is asking everyone to pray (e.g. Korean "…을 위해 함께 기도해 주세요", English "Please pray for …").
Rules:
- Keep every fact and need; do not invent, exaggerate or add anything.
- Warm, respectful, natural church language in each language. Not word-for-word: convey the meaning as a native speaker would write it.
- Leave out phone numbers, emails, addresses or other identifying contact details.
- Proper nouns / glossary (always follow): ${GLOSSARY}
- Transliterate other personal names consistently and sensibly in every language.
Return ONLY a JSON object with exactly these keys: "ko" (Korean), "en" (English), "zh" (Simplified Chinese), "fr" (French), "si" (Sinhala, natural modern Sinhala in Sinhala script).`;
const MODELS = ["anthropic/claude-sonnet-4.5", "anthropic/claude-sonnet-4", "openai/gpt-4.1-mini", "openai/gpt-4o-mini", "google/gemini-2.5-flash"];
async function aiTranslate(text) {
  const key = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;
  if (!key) throw new Error("no AI gateway token");
  const errs = [];
  for (const model of MODELS) {
    const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 40000);
    try {
      const r = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
        method: "POST", signal: ctl.signal,
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
        body: JSON.stringify({ model, temperature: 0.3, max_tokens: 3000, messages: [{ role: "system", content: SYS }, { role: "user", content: text }] })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) { errs.push(model + ": " + r.status + " " + JSON.stringify(j.error || j).slice(0, 160)); continue; }
      const out = String(j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || "");
      const m = out.match(/\{[\s\S]*\}/);
      const o = m ? JSON.parse(m[0]) : null;
      if (o && ["ko", "en", "zh", "fr", "si"].every(k => typeof o[k] === "string" && o[k].trim())) {
        const tr = {}; for (const k of ["ko", "en", "zh", "fr", "si"]) tr[k] = o[k].trim().slice(0, 3000);
        return { tr, model };
      }
      errs.push(model + ": bad output");
    } catch (e) { errs.push(model + ": " + (e.name === "AbortError" ? "timeout" : e.message)); }
    finally { clearTimeout(tm); }
  }
  throw new Error(errs.join(" | "));
}
async function ensureTr(it, force) {
  if (!force && it.ai) return false;
  try {
    const { tr, model } = await aiTranslate(it.text);
    it.tr = tr; it.ai = true; it.aiModel = model; it.src = detect(it.text); it.trErr = ""; it.trAt = Date.now();
    return true;
  } catch (e) {
    it.trErr = String(e.message || e).slice(0, 600); it.trAt = Date.now();
    if (!it.tr || Object.keys(it.tr).length < 4) { const { src, tr } = await translateAll(it.text); it.src = src; it.tr = { ...(it.tr || {}), ...tr }; }
    return false;
  }
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const { items, blobs } = await readAll();
      const shown = items.filter(i => i.share && i.approved);
      /* 아직 번역이 없는 제목은 1시간에 한 번씩 몇 개만 번역해서 저장 */
      const todo = shown.filter(i => !i.ai && (!i.trAt || Date.now() - i.trAt > 3600e3)).slice(0, 2);
      if (todo.length) {
        let changed = false;
        for (const it of todo) { it.trAt = Date.now(); changed = (await ensureTr(it).catch(() => false)) || changed; }
        await writeAll(items, blobs).catch(() => {});
      }
      return res.status(200).json({ items: shown.map(pub) });
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
      await notify(items[0]).catch(() => {});
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
    if (action === "approve") { it.approved = !!body.value && it.share; if (it.approved) await ensureTr(it).catch(() => {}); }
    else if (action === "translate") { await ensureTr(it, true).catch(() => {}); }
    else if (action === "done") it.done = !!body.value;
    else return res.status(400).json({ error: "action" });
    await writeAll(items, blobs);
    return res.status(200).json({ items });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server" });
  }
};
