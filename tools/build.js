/* 배포 때마다 실행 (vercel.json buildCommand)
   data.js 의 사역 소식으로 news/<id>.html 개별 페이지, rss.xml, sitemap.xml 을 만듭니다. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const f of fs.readdirSync(ROOT)) if (![".git", "public", "tools", "node_modules", ".vercel"].includes(f)) fs.cpSync(path.join(ROOT, f), path.join(OUT, f), { recursive: true });
const SITE_URL = "https://www.abbahome.co.kr";
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "data.js"), "utf8"), ctx);
const W = ctx.window, POSTS = W.POSTS || [], MIN = W.MINISTRIES || [];
const esc = s => String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const paras = s => String(s || "").split(/\n+/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join("\n");
const minName = id => (MIN.find(m => m.id === id) || {}).name || "";
const minNameEn = id => (MIN.find(m => m.id === id) || {}).name_en || "";
const abs = u => u ? SITE_URL + "/" + u.replace(/^\//, "") : "";
const today = new Date().toISOString().slice(0, 10);

fs.mkdirSync(path.join(OUT, "news"), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, "news"))) if (f.endsWith(".html")) fs.unlinkSync(path.join(OUT, "news", f));

for (const p of POSTS) {
  const url = `${SITE_URL}/news/${p.id}`;
  const imgs = p.images || [];
  const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<base href="/">
<title>${esc(p.title)} | 아바홈히어랜나우</title>
<meta name="description" content="${esc(p.excerpt)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.excerpt)}">
<meta property="og:url" content="${url}">
${imgs[0] ? `<meta property="og:image" content="${abs(imgs[0])}">` : ""}
<meta property="article:published_time" content="${esc(p.date)}">
<link rel="alternate" type="application/rss+xml" title="아바홈 사역 소식" href="${SITE_URL}/rss.xml">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Noto+Sans+KR:wght@400;500;600&family=Noto+Serif+KR:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<style>
.art{max-width:760px;margin:0 auto}
.art .meta{display:flex;gap:12px;align-items:center;margin-bottom:18px;color:var(--muted)}
.art .body p{margin:0 0 1.1em;line-height:1.85}
.art figure{margin:28px 0;border-radius:var(--radius);overflow:hidden}
.art figure img{display:block;width:100%;height:auto}
.art .en{margin-top:48px;padding-top:32px;border-top:1px solid rgba(60,40,30,.15);color:var(--ink-2)}
.art .en h2{font-family:var(--serif);font-size:22px;margin-bottom:14px}
.art .back{display:inline-block;margin-top:44px}
</style>
</head>
<body data-page="news">
<div class="page-hero">
  <div class="wrap">
    <span class="eyebrow">Ministry News · ${esc(minNameEn(p.ministry))}</span>
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.excerpt)}</p>
  </div>
</div>
<section style="padding-top:60px">
  <div class="wrap">
    <article class="art">
      <div class="meta"><a class="badge" href="news.html?m=${esc(p.ministry)}">${esc(minName(p.ministry))}</a><time datetime="${esc(p.date)}">${esc(p.date.replace(/-/g, "."))}</time></div>
      ${imgs[0] ? `<figure><img src="${esc(imgs[0])}" alt="${esc(p.title)}"></figure>` : ""}
      <div class="body">
${paras(p.body || p.excerpt)}
      </div>
      ${imgs.slice(1).map(s => `<figure><img src="${esc(s)}" alt="${esc(p.title)}" loading="lazy"></figure>`).join("\n      ")}
      ${p.title_en ? `<div class="en" lang="en"><h2>${esc(p.title_en)}</h2>
${paras(p.body_en || p.excerpt_en)}
      </div>` : ""}
      <a class="link-arrow back" href="news.html">← 사역 소식 전체 보기</a>
    </article>
  </div>
</section>
<script src="data.js"></script>
<script src="i18n.js"></script>
<script src="main.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, "news", `${p.id}.html`), html);
}

/* rss.xml */
const rfc = d => new Date(d + "T12:00:00+09:00").toUTCString();
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>아바홈히어랜나우 사역 소식</title>
<link>${SITE_URL}/news</link>
<description>안산 다문화 선교 공동체 아바홈히어랜나우(Abba Home Here &amp; Now)의 사역 소식</description>
<language>ko</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${POSTS.map(p => `<item>
<title>${esc(p.title)}</title>
<link>${SITE_URL}/news/${p.id}</link>
<guid isPermaLink="true">${SITE_URL}/news/${p.id}</guid>
<pubDate>${rfc(p.date)}</pubDate>
<category>${esc(minName(p.ministry))}</category>
<description>${esc(p.excerpt)}</description>
</item>`).join("\n")}
</channel>
</rss>
`;
fs.writeFileSync(path.join(OUT, "rss.xml"), rss);

/* sitemap.xml */
const pages = [["", "1.0", "weekly", today], ["about", "0.8", "monthly", today], ["ministries", "0.8", "monthly", today], ["news", "0.9", "weekly", today], ["contact", "0.5", "yearly", today]];
const urls = pages.map(([u, pr, f, d]) => ({ loc: `${SITE_URL}/${u}`, pr, f, d }))
  .concat(POSTS.map(p => ({ loc: `${SITE_URL}/news/${p.id}`, pr: "0.7", f: "monthly", d: p.date })));
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.d}</lastmod>
    <changefreq>${u.f}</changefreq>
    <priority>${u.pr}</priority>
  </url>`).join("\n")}
</urlset>
`);
console.log(`built ${POSTS.length} news pages, rss.xml, sitemap.xml`);
