(function () {
  const S = window.SITE, M = window.MINISTRIES || [], P = window.POSTS || [], G = window.GALLERY || [];
  const DICT = window.I18N || {}, LANGS = window.LANGS || [];
  const page = document.body.dataset.page || "home";
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- 언어 ---------- */
  const codes = LANGS.map(l => l.code);
  const qs = new URLSearchParams(location.search);
  const store = { get() { try { return localStorage.getItem("abba-lang"); } catch (e) { return null; } }, set(v) { try { localStorage.setItem("abba-lang", v); } catch (e) {} } };
  const browser = (navigator.language || "ko").slice(0, 2).toLowerCase();
  let lang = qs.get("lang") || store.get() || (codes.includes(browser) ? browser : "ko");
  if (!codes.includes(lang)) lang = "ko";
  if (qs.get("lang")) store.set(lang);
  document.documentElement.lang = lang;

  const t = (key, vars) => {
    const e = DICT[key] || {};
    let s = e[lang] ?? e.ko ?? "";
    if (vars) Object.keys(vars).forEach(k => (s = s.split("{" + k + "}").join(vars[k])));
    return s;
  };
  /* 데이터 필드: name → name_en ... (없으면 한국어) */
  const L = (obj, field) => (lang !== "ko" && (obj[field + "_" + lang] || obj[field + "_en"])) || obj[field] || "";
  const mName = m => (lang === "ko" ? m.name : (m["name_" + lang] || m.name_en || m.name));
  const mSub = m => (lang === "ko" ? m.name_en : m.name);

  /* 정적 문구 번역 */
  if (lang !== "ko") {
    $$("[data-i18n]").forEach(el => { const e = DICT[el.dataset.i18n]; if (e && e[lang] != null) el.innerHTML = e[lang]; });
    $$("[data-i18n-ph]").forEach(el => { const e = DICT[el.dataset.i18nPh]; if (e && e[lang] != null) el.placeholder = e[lang]; });
  }

  /* 기본 배경 그라디언트 (사진이 없을 때) */
  const GRADS = [
    "linear-gradient(135deg,#b07247 0%,#5b3424 100%)",
    "linear-gradient(160deg,#8e3b28 0%,#2f1f19 100%)",
    "linear-gradient(140deg,#c9a27a 0%,#7a4a33 100%)",
    "linear-gradient(150deg,#6d5a4a 0%,#2a211c 100%)",
    "linear-gradient(130deg,#a5563a 0%,#3b2620 100%)",
    "linear-gradient(145deg,#bf8f6a 0%,#4f3427 100%)"
  ];
  const ph = (img, i = 0) => img
    ? `<div class="ph" style="background-image:url('${esc(img)}')"></div>`
    : `<div class="ph empty" style="--g:${GRADS[i % GRADS.length]}"></div>`;
  const minById = id => M.find(m => m.id === id) || { name: "" };
  const fmtDate = d => d ? d.replace(/-/g, ".") : "";

  /* 페이지 제목 */
  const titleKey = { about: "nav.about", ministries: "nav.ministries", news: "nav.news", contact: "nav.contact" }[page];
  if (titleKey && lang !== "ko") document.title = `${t(titleKey)} | Abba Home Here & Now`;

  /* ---------- header ---------- */
  const NAV = [
    ["index.html", "nav.home", "home"],
    ["about.html", "nav.about", "about"],
    ["ministries.html", "nav.ministries", "ministries"],
    ["news.html", "nav.news", "news"],
    ["schedule.html", "nav.schedule", "schedule"],
    ["prayer.html", "nav.prayer", "prayer"]
  ];
  const cur = LANGS.find(l => l.code === lang) || LANGS[0];
  const header = document.createElement("header");
  header.className = "site-header" + (page === "home" ? "" : " light");
  header.innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html"><b>Abba Home</b><small>HERE &amp; NOW</small></a>
      <nav class="menu">
        ${NAV.map(([h, k, p]) => `<a href="${h}" class="${p === page ? "active" : ""}">${esc(t(k))}</a>`).join("")}
        <a href="contact.html" class="cta ${page === "contact" ? "active" : ""}">${esc(t("nav.contact"))}</a>
      </nav>
      <div class="lang">
        <button class="lang-btn" aria-haspopup="true" aria-label="Language">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>
          <span>${esc(cur.short)}</span>
        </button>
        <ul class="lang-menu" role="menu">
          ${LANGS.map(l => `<li><button role="menuitem" data-lang="${l.code}" class="${l.code === lang ? "on" : ""}" lang="${l.code}">${esc(l.label)}</button></li>`).join("")}
        </ul>
      </div>
      <button class="burger" aria-label="Menu"><span></span><span></span></button>
    </div>`;
  document.body.prepend(header);
  $(".burger", header).onclick = () => header.classList.toggle("nav-open");
  const langBox = $(".lang", header);
  $(".lang-btn", header).onclick = e => { e.stopPropagation(); langBox.classList.toggle("open"); };
  document.addEventListener("click", () => langBox.classList.remove("open"));
  $$(".lang-menu button", header).forEach(b => b.onclick = () => {
    store.set(b.dataset.lang);
    const u = new URL(location.href); u.searchParams.delete("lang");
    location.href = u.toString();
  });
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  if (page === "home") { onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); }

  /* ---------- footer ---------- */
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="brand"><b>Abba Home Here &amp; Now</b><small>${esc(t("tagline"))}</small></div>
          <p style="margin-top:18px;max-width:340px">${esc(t("foot.desc"))}</p>
          ${S.youtube ? `<a class="foot-yt" href="${esc(S.youtube)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>${esc(t("foot.yt"))}</a>` : ""}
        </div>
        <div>
          <h5>VISIT</h5>
          <ul>
            <li>${esc(t("addr"))}</li>
            <li>${esc(t("foot.worship"))}</li>
            <li>${esc(t("foot.meal"))}</li>
          </ul>
        </div>
        <div>
          <h5>CONTACT</h5>
          <ul>
            <li>${esc(t("leader.title"))} ${esc(t("leader.name"))}</li>
            <li><a href="tel:${S.phone.replace(/-/g, "")}">${esc(S.phone)}</a></li>
            <li><a href="mailto:${S.email}">${esc(S.email)}</a></li>
          </ul>
        </div>
        <div>
          <h5>SUPPORT</h5>
          <ul>
            <li>${esc(t("c.sup.h"))}</li>
            <li class="foot-acct"><span>${esc(t("c.bank"))}</span><button class="foot-copy" data-copy="1005804736600">${esc(t("copy"))}</button></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© ${new Date().getFullYear()} Abba Home Here &amp; Now. All rights reserved.</span>
        <span>"…he was lost, and is found." — Luke 15:24</span>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- nations ---------- */
  const natWrap = $("#nations");
  if (natWrap) {
    const flag = c => c.toUpperCase().replace(/./g, ch => String.fromCodePoint(127397 + ch.charCodeAt(0)));
    natWrap.innerHTML = (window.NATIONS || []).map(n => `<li class="nation reveal"><span class="flag" aria-hidden="true">${flag(n.code)}</span><span>${esc(lang === "ko" ? n.name : (n["name_" + lang] || n.name_en || n.name))}</span></li>`).join("");
    const cnt = $("#nation-count"); if (cnt) cnt.textContent = (window.NATIONS || []).length;
  }

  /* ---------- ministries (home cards) ---------- */
  const minCards = $("#min-cards");
  if (minCards) {
    minCards.innerHTML = M.map((m, i) => `
      <a class="min-card reveal" href="ministries.html#${m.id}">
        ${ph(m.image, i)}
        <span class="num">0${i + 1}</span>
        <h3>${esc(mName(m))}</h3>
        <div class="en">${esc(mSub(m))}</div>
        <p>${esc(L(m, "summary"))}</p>
      </a>`).join("");
  }

  /* ---------- ministries (detail list) ---------- */
  const minList = $("#min-list");
  if (minList) {
    minList.innerHTML = M.map((m, i) => `
      <article class="min-row reveal" id="${m.id}">
        <div class="n">0${i + 1}</div>
        <div>
          <h3>${esc(mName(m))}</h3>
          <div class="en">${esc(mSub(m))}</div>
          ${m.schedule ? `<span class="sched">${esc(L(m, "schedule"))}</span>` : ""}
          <div class="img">${ph(m.image, i)}</div>
        </div>
        <div class="desc">
          <p>${esc(L(m, "summary"))}</p>
          ${lang === "ko" && m.summary_en ? `<p class="e">${esc(m.summary_en)}</p>` : ""}
          <p style="margin-top:22px"><a class="link-arrow" href="news.html?m=${m.id}">${esc(t("min.newsOf", { name: mName(m) }))}</a></p>
        </div>
      </article>`).join("");
    if (location.hash) setTimeout(() => { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }, 50);
  }

  /* ---------- gallery ---------- */
  const gal = $("#gallery");
  if (gal) {
    gal.innerHTML = G.map((g, i) => {
      const n = (g.images || [g.image]).filter(Boolean).length;
      return `
      <figure class="gal-item reveal" data-i="${i}">
        ${ph(g.image, i + 2)}
        ${g.image ? "" : `<span class="empty-label">PHOTO</span>`}
        ${n > 1 ? `<span class="gal-count">${n}</span>` : ""}
        ${g.caption ? `<figcaption>${esc(L(g, "caption"))}</figcaption>` : ""}
      </figure>`;
    }).join("");
    gal.addEventListener("click", e => {
      const f = e.target.closest(".gal-item");
      if (!f) return;
      const g = G[+f.dataset.i];
      const list = (g.images || [g.image]).filter(Boolean);
      if (!list.length) return;
      let k = 0;
      const show = () => {
        openModal(`<div class="album"><img src="${esc(list[k])}" alt="${esc(L(g, "caption"))}">
          <div class="album-bar"><span>${esc(L(g, "caption"))}</span>${list.length > 1 ? `<span class="album-num">${k + 1} / ${list.length}</span>` : ""}</div>
          ${list.length > 1 ? `<button class="album-nav prev" aria-label="Previous">‹</button><button class="album-nav next" aria-label="Next">›</button>` : ""}</div>`);
        const a = document.querySelector(".modal .album");
        a.addEventListener("click", ev => {
          const b = ev.target.closest(".album-nav");
          if (!b) return;
          ev.stopPropagation();
          k = (k + (b.classList.contains("next") ? 1 : -1) + list.length) % list.length;
          show();
        });
      };
      show();
    });
    document.addEventListener("keydown", e => {
      const a = document.querySelector(".modal.open .album");
      if (!a) return;
      const b = a.querySelector(e.key === "ArrowRight" ? ".next" : e.key === "ArrowLeft" ? ".prev" : null);
      if (b) b.click();
    });
  }

  /* ---------- news board ---------- */
  const postWrap = $("#posts");
  if (postWrap) {
    const limit = +postWrap.dataset.limit || 0;
    let filter = qs.get("m") || "all";
    let view = "card";
    const tabs = $("#tabs");
    if (tabs) {
      tabs.innerHTML = [`<button class="tab" data-f="all">${esc(t("tab.all"))}</button>`]
        .concat(M.map(m => `<button class="tab" data-f="${m.id}">${esc(mName(m))}</button>`)).join("");
      tabs.onclick = e => { const b = e.target.closest(".tab"); if (b) { filter = b.dataset.f; render(); } };
    }
    $$(".view-toggle button").forEach(b => { b.textContent = t("view." + b.dataset.v); b.onclick = () => { view = b.dataset.v; render(); }; });

    function render() {
      $$(".tab").forEach(x => x.classList.toggle("on", x.dataset.f === filter));
      $$(".view-toggle button").forEach(b => b.classList.toggle("on", b.dataset.v === view));
      let list = P.filter(p => filter === "all" || p.ministry === filter);
      if (limit) list = list.slice(0, limit);
      if (!list.length) { postWrap.className = "posts"; postWrap.innerHTML = `<div class="empty-msg">${esc(t("news.empty"))}</div>`; return; }
      if (view === "list") {
        postWrap.className = "board-list";
        postWrap.innerHTML = list.map((p, i) => `
          <div class="row" data-id="${p.id}">
            <span class="no">${String(list.length - i).padStart(2, "0")}</span>
            <div class="ttl"><b>${esc(L(p, "title"))}</b><span>${esc(L(p, "excerpt"))}</span></div>
            <span class="badge">${esc(mName(minById(p.ministry)))}</span>
            <time>${fmtDate(p.date)}</time>
          </div>`).join("");
      } else {
        postWrap.className = "posts";
        postWrap.innerHTML = list.map((p, i) => `
          <article class="post" data-id="${p.id}">
            <div class="thumb">${ph(p.images && p.images[0], i + 1)}</div>
            <div class="meta"><span class="badge">${esc(mName(minById(p.ministry)))}</span><time>${fmtDate(p.date)}</time></div>
            <h3>${esc(L(p, "title"))}</h3>
            <p>${esc(L(p, "excerpt"))}</p>
          </article>`).join("");
      }
    }
    postWrap.addEventListener("click", e => {
      const el = e.target.closest("[data-id]");
      if (!el) return;
      const p = P.find(x => x.id === el.dataset.id);
      const imgs = p.images || [];
      openModal(`
        <div class="modal-box">
          <div class="cover">${ph(imgs[0], 1)}</div>
          <div class="modal-body">
            <span class="badge">${esc(mName(minById(p.ministry)))}</span>
            <h2>${esc(L(p, "title"))}</h2>
            <time>${fmtDate(p.date)}</time>
            <div class="txt">${esc(L(p, "body") || L(p, "excerpt"))}</div>
            ${imgs.length > 1 ? `<div class="more-imgs">${imgs.slice(1).map(s => `<img src="${esc(s)}" alt="" loading="lazy">`).join("")}</div>` : ""}
            <p style="margin-top:22px"><a class="link-arrow" href="news/${esc(p.id)}">${esc({ ko: "이 소식 페이지로 보기 · 공유하기 →", en: "Open this story · Share →", zh: "打开此消息 · 分享 →", fr: "Ouvrir cet article · Partager →", si: "මෙම පුවත විවෘත කරන්න · බෙදාගන්න →" }[lang] || "Open →")}</a></p>
          </div>
        </div>`);
    });
    render();
  }

  /* ---------- modal ---------- */
  let modal;
  function openModal(html) {
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      document.body.append(modal);
      modal.addEventListener("click", e => { if (e.target === modal || e.target.classList.contains("modal-close") || e.target.closest(".lightbox")) closeModal(); });
      document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
    }
    modal.innerHTML = `<button class="modal-close" aria-label="Close">×</button>${html}`;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() { if (modal) { modal.classList.remove("open"); document.body.style.overflow = ""; } }

  /* ---------- copy account ---------- */
  $$("[data-copy]").forEach(b => {
    b.textContent = t("copy");
    b.onclick = () => {
      const v = b.dataset.copy;
      (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).then(() => {
        b.textContent = t("copied"); setTimeout(() => (b.textContent = t("copy")), 1600);
      }).catch(() => prompt("", v));
    };
  });

  /* ---------- contact form (FormSubmit → abbahomeherennow@gmail.com) ---------- */
  const form = $("#contact-form");
  if (form) {
    const area = form.area;
    area.innerHTML = `<option value="">${esc(t("f.choose"))}</option>` +
      M.map(m => `<option value="${esc(m.name)}">${esc(mName(m))}</option>`).join("") +
      ["f.opt.give", "f.opt.vol", "f.opt.etc"].map(k => `<option value="${esc(DICT[k].ko)}">${esc(t(k))}</option>`).join("");
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = t("f.submit");

    const setType = () => form.classList.toggle("is-coop", form.type.value === "coop");
    $$("input[name=type]", form).forEach(r => r.onchange = setType);
    if (qs.get("type") === "coop") form.querySelector("input[value=coop]").checked = true;
    setType();

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const status = $("#form-status");
      if (form._honey.value) return;
      const isCoop = form.type.value === "coop";
      const data = {
        "문의유형": isCoop ? "사역 협력 문의" : "일반 문의",
        "작성 언어": cur.label,
        "이름": form.name.value,
        "이메일": form.email.value,
        "연락처": form.phone.value || "-",
        ...(isCoop ? { "소속/단체": form.org.value || "-", "협력 희망 분야": form.area.value || "-" } : {}),
        "제목": form.subject.value,
        "내용": form.message.value,
        _subject: `[아바홈 홈페이지] ${isCoop ? "사역협력문의" : "문의"} - ${form.subject.value}`,
        _replyto: form.email.value,
        _template: "table",
        _captcha: "false"
      };
      btn.disabled = true; btn.textContent = t("f.sending");
      status.className = "form-status";
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${S.email}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        const j = await res.json().catch(() => ({}));
        if (!res.ok || j.success === "false" || j.success === false) throw new Error(j.message || "fail");
        status.className = "form-status ok";
        status.textContent = t("f.ok");
        form.reset(); setType();
      } catch (err) {
        status.className = "form-status err";
        status.innerHTML = esc(t("f.err")).replace("{email}", `<a href="mailto:${S.email}" style="text-decoration:underline">${S.email}</a>`);
      } finally {
        btn.disabled = false; btn.textContent = t("f.submit");
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .12 }) : null;
  const observe = () => $$(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  observe();
  new MutationObserver(observe).observe(document.body, { childList: true, subtree: true });
})();
