/* 오늘 나에게 주시는 말씀 — 랜덤 성경 구절 카드 (기도요청 페이지)
   한국어: 개역한글 / English: KJV (두 번역 모두 저작권 보호기간이 끝난 공개 번역) */
(function () {
  const V = [
    ["요한복음 3:16", "John 3:16", "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라", "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."],
    ["시편 23:1", "Psalm 23:1", "여호와는 나의 목자시니 내가 부족함이 없으리로다", "The LORD is my shepherd; I shall not want."],
    ["이사야 41:10", "Isaiah 41:10", "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라", "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."],
    ["빌립보서 4:13", "Philippians 4:13", "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", "I can do all things through Christ which strengtheneth me."],
    ["마태복음 11:28", "Matthew 11:28", "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
    ["예레미야 29:11", "Jeremiah 29:11", "여호와의 말씀이니라 너희를 향한 나의 생각은 내가 아나니 평안이요 재앙이 아니니라 너희 장래에 소망을 주려 하는 생각이라", "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."],
    ["잠언 3:5–6", "Proverbs 3:5–6", "너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라", "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths."],
    ["로마서 8:28", "Romans 8:28", "우리가 알거니와 하나님을 사랑하는 자 곧 그 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라", "And we know that all things work together for good to them that love God, to them who are the called according to his purpose."],
    ["누가복음 15:20", "Luke 15:20", "이에 일어나서 아버지께로 돌아가니라 아직도 상거가 먼데 아버지가 저를 보고 측은히 여겨 달려가 목을 안고 입을 맞추니", "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him."],
    ["누가복음 15:24", "Luke 15:24", "이 내 아들은 죽었다가 다시 살아났으며 내가 잃었다가 다시 얻었노라", "For this my son was dead, and is alive again; he was lost, and is found."],
    ["시편 46:1", "Psalm 46:1", "하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라", "God is our refuge and strength, a very present help in trouble."],
    ["여호수아 1:9", "Joshua 1:9", "내가 네게 명한 것이 아니냐 마음을 강하게 하고 담대히 하라 두려워 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라", "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."],
    ["이사야 40:31", "Isaiah 40:31", "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리의 날개치며 올라감 같을 것이요 달음박질하여도 곤비치 아니하겠고 걸어가도 피곤치 아니하리로다", "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."],
    ["마태복음 6:33", "Matthew 6:33", "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라", "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."],
    ["요한복음 14:27", "John 14:27", "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라", "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."],
    ["시편 119:105", "Psalm 119:105", "주의 말씀은 내 발에 등이요 내 길에 빛이니이다", "Thy word is a lamp unto my feet, and a light unto my path."],
    ["고린도후서 5:17", "2 Corinthians 5:17", "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새것이 되었도다", "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new."],
    ["데살로니가전서 5:16–18", "1 Thessalonians 5:16–18", "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라", "Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you."],
    ["요한일서 4:18", "1 John 4:18", "사랑 안에 두려움이 없고 온전한 사랑이 두려움을 내어 쫓나니", "There is no fear in love; but perfect love casteth out fear."],
    ["예레미야애가 3:22–23", "Lamentations 3:22–23", "여호와의 자비와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것들이 아침마다 새로우니 주의 성실이 크도소이다", "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness."],
    ["시편 34:18", "Psalm 34:18", "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다", "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit."],
    ["베드로전서 5:7", "1 Peter 5:7", "너희 염려를 다 주께 맡기라 이는 저가 너희를 권고하심이니라", "Casting all your care upon him; for he careth for you."],
    ["스바냐 3:17", "Zephaniah 3:17", "너의 하나님 여호와가 너의 가운데 계시니 그는 구원을 베푸실 전능자시라 그가 너로 인하여 기쁨을 이기지 못하여 하며 너를 잠잠히 사랑하며 너로 인하여 즐거이 부르며 기뻐하시리라", "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing."],
    ["이사야 43:1", "Isaiah 43:1", "두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라", "Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine."],
    ["시편 27:1", "Psalm 27:1", "여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요 여호와는 나의 생명의 능력이시니 내가 누구를 무서워하리요", "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?"],
    ["요한복음 15:5", "John 15:5", "나는 포도나무요 너희는 가지라 저가 내 안에, 내가 저 안에 있으면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무 것도 할 수 없음이라", "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing."],
    ["로마서 15:13", "Romans 15:13", "소망의 하나님이 모든 기쁨과 평강을 믿음 안에서 너희에게 충만케 하사 성령의 능력으로 소망이 넘치게 하시기를 원하노라", "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost."],
    ["민수기 6:24–26", "Numbers 6:24–26", "여호와는 네게 복을 주시고 너를 지키시기를 원하며 여호와는 그 얼굴로 네게 비취사 은혜 베푸시기를 원하며 여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace."]
  ];

  const lang = document.documentElement.lang || "ko";
  const T = {
    ko: { btn: "오늘 나에게 주시는 말씀 받기", sub: "기도하는 마음으로 버튼을 눌러 보세요", head: "오늘 나에게 주시는 말씀", save: "사진으로 저장", again: "다른 말씀 받기", close: "닫기", hint: "휴대폰에서는 '사진으로 저장' 후 '이미지 저장'을 누르면 앨범에 저장돼요." },
    en: { btn: "Receive Today’s Word for Me", sub: "Tap with a prayerful heart", head: "Today’s Word for You", save: "Save as image", again: "Another verse", close: "Close", hint: "On your phone, tap “Save as image”, then “Save Image” to keep it in your photos." },
    zh: { btn: "领受今天给我的话语", sub: "怀着祷告的心点击", head: "今天给你的话语", save: "保存为图片", again: "换一节经文", close: "关闭", hint: "在手机上点击“保存为图片”，再选择“存储图像”即可保存到相册。" },
    fr: { btn: "Recevoir la Parole du jour", sub: "Appuyez avec un cœur qui prie", head: "La Parole du jour pour vous", save: "Enregistrer l’image", again: "Un autre verset", close: "Fermer", hint: "Sur téléphone, appuyez sur « Enregistrer l’image » puis « Enregistrer » pour la garder dans vos photos." },
    si: { btn: "අද මට ලැබෙන වචනය", sub: "යාච්ඤා සහගත හදවතින් ඔබන්න", head: "අද ඔබට ලැබෙන වචනය", save: "රූපයක් ලෙස සුරකින්න", again: "තවත් පදයක්", close: "වසන්න", hint: "දුරකථනයේ “රූපයක් ලෙස සුරකින්න” ඔබා පසුව “Save Image” තෝරන්න." }
  };
  const L = T[lang] || T.en;
  const esc = s => String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const host = document.getElementById("verse-cta");
  if (!host) return;

  const css = document.createElement("style");
  css.textContent = `
.vcta{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;background:linear-gradient(135deg,#7a3b25,#b5603d);color:#fff;border-radius:20px;padding:22px 26px;margin-bottom:40px;box-shadow:0 10px 30px rgba(122,59,37,.18)}
.vcta b{display:block;font-family:var(--serif);font-size:20px;font-weight:600}
.vcta span{font-size:13.5px;opacity:.85}
.vcta button{border:0;background:#fff;color:#7a3b25;border-radius:99px;padding:12px 22px;font-size:15px;font-weight:600;cursor:pointer;white-space:nowrap}
.vcta button:hover{background:#fbeee6}
.vdlg{border:0;padding:0;background:transparent;max-width:min(440px,calc(100% - 28px));width:100%;margin:auto;inset:0;overflow:visible}
.vdlg::backdrop{background:rgba(20,14,11,.7)}
.vdlg img{display:block;width:100%;height:auto;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.4);background:#f6efe6;aspect-ratio:4/5}
.vacts{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px}
.vacts button{border:0;border-radius:99px;padding:11px 18px;font-size:14.5px;cursor:pointer;background:#fff;color:#2a1f1a}
.vacts .vsave{background:#b5603d;color:#fff;font-weight:600}
.vhint{color:rgba(255,255,255,.75);font-size:12.5px;text-align:center;margin-top:10px;line-height:1.5}`;
  document.head.appendChild(css);

  host.innerHTML = `<div class="vcta"><div><b>📖 ${esc(L.btn)}</b><span>${esc(L.sub)}</span></div><button type="button" id="v-open">${esc(L.btn)}</button></div>`;
  const dlg = document.createElement("dialog");
  dlg.className = "vdlg";
  dlg.innerHTML = `<img id="v-img" alt=""><div class="vacts"><button type="button" class="vsave" id="v-save">⬇ ${esc(L.save)}</button><button type="button" id="v-again">↻ ${esc(L.again)}</button><button type="button" id="v-close">${esc(L.close)}</button></div><p class="vhint">${esc(L.hint)}</p>`;
  document.body.appendChild(dlg);
  const $ = id => document.getElementById(id);

  /* ---------- 카드 그리기 (1080×1350, 인스타 카드뉴스 비율) ---------- */
  const W = 1080, H = 1350;
  function wrap(ctx, text, maxW) {
    const words = text.split(" "), lines = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? cur + " " + w : w;
      if (ctx.measureText(test).width <= maxW) { cur = test; continue; }
      if (cur) lines.push(cur);
      if (ctx.measureText(w).width <= maxW) { cur = w; continue; }
      cur = "";
      for (const ch of w) { if (ctx.measureText(cur + ch).width > maxW) { lines.push(cur); cur = ch; } else cur += ch; }
    }
    if (cur) lines.push(cur);
    return lines;
  }
  function fit(ctx, text, font, size, min, maxW, maxH, lh) {
    for (let s = size; s >= min; s -= 2) {
      ctx.font = font.replace("{s}", s);
      const lines = wrap(ctx, text, maxW);
      if (lines.length * s * lh <= maxH) return { s, lines };
    }
    ctx.font = font.replace("{s}", min);
    return { s: min, lines: wrap(ctx, text, maxW) };
  }
  async function draw(v) {
    const koFirst = lang === "ko";
    const main = koFirst ? v[2] : v[3], mainRef = koFirst ? v[0] : v[1];
    const sub = koFirst ? v[3] : v[2], subRef = koFirst ? v[1] : v[0];
    try { await Promise.all(['600 60px "Noto Serif KR"', '500 30px "Noto Sans KR"', 'italic 400 34px "Fraunces"', '500 34px "Fraunces"'].map(f => document.fonts.load(f, main + sub + "가"))); } catch (e) {}
    const c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    /* 배경 */
    const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#fbf5ec"); g.addColorStop(1, "#efe1cf"); x.fillStyle = g; x.fillRect(0, 0, W, H);
    const r = x.createRadialGradient(W * 0.85, H * 0.12, 20, W * 0.85, H * 0.12, 520); r.addColorStop(0, "rgba(181,96,61,.28)"); r.addColorStop(1, "rgba(181,96,61,0)"); x.fillStyle = r; x.fillRect(0, 0, W, H);
    const r2 = x.createRadialGradient(W * 0.1, H * 0.95, 20, W * 0.1, H * 0.95, 480); r2.addColorStop(0, "rgba(122,59,37,.16)"); r2.addColorStop(1, "rgba(122,59,37,0)"); x.fillStyle = r2; x.fillRect(0, 0, W, H);
    x.strokeStyle = "rgba(122,59,37,.25)"; x.lineWidth = 2; x.strokeRect(48, 48, W - 96, H - 96);
    /* 머리글 */
    x.fillStyle = "#b5603d"; x.textAlign = "center"; x.textBaseline = "alphabetic";
    x.font = '500 30px "Noto Sans KR", sans-serif';
    const d = new Date(), ds = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
    x.fillText(L.head + "  ·  " + ds, W / 2, 150);
    x.fillStyle = "rgba(181,96,61,.35)"; x.font = '600 160px "Fraunces", serif'; x.fillText("“", W / 2, 300);
    /* 본문 */
    const padX = 120, maxW = W - padX * 2;
    x.fillStyle = "#2a1f1a";
    const m = fit(x, main, koFirst ? '600 {s}px "Noto Serif KR", serif' : 'italic 400 {s}px "Fraunces", serif', 62, 36, maxW, 560, 1.55);
    let y = 330 + m.s;
    for (const ln of m.lines) { x.fillText(ln, W / 2, y); y += m.s * 1.55; }
    x.fillStyle = "#b5603d"; x.font = '600 36px "Noto Serif KR", serif'; y += 10; x.fillText("— " + mainRef, W / 2, y);
    /* 보조 번역 */
    y += 60;
    x.strokeStyle = "rgba(122,59,37,.25)"; x.beginPath(); x.moveTo(W / 2 - 60, y); x.lineTo(W / 2 + 60, y); x.stroke();
    y += 50;
    x.fillStyle = "rgba(42,31,26,.62)";
    const sb = fit(x, sub, koFirst ? 'italic 400 {s}px "Fraunces", serif' : '500 {s}px "Noto Serif KR", serif', 30, 22, maxW, H - 190 - y, 1.5);
    for (const ln of sb.lines) { x.fillText(ln, W / 2, y); y += sb.s * 1.5; }
    x.font = '500 24px "Noto Sans KR", sans-serif'; x.fillText(subRef, W / 2, y + 4);
    /* 바닥글 */
    x.fillStyle = "#7a3b25"; x.font = '500 34px "Fraunces", serif'; x.fillText("Abba Home Here & Now", W / 2, H - 120);
    x.fillStyle = "rgba(42,31,26,.5)"; x.font = '500 22px "Noto Sans KR", sans-serif'; x.fillText("www.abbahome.co.kr", W / 2, H - 82);
    return c;
  }

  let canvas = null, last = -1;
  async function show() {
    let i; do { i = Math.floor(Math.random() * V.length); } while (i === last && V.length > 1);
    last = i;
    canvas = await draw(V[i]);
    $("v-img").src = canvas.toDataURL("image/jpeg", 0.92);
    $("v-img").alt = (lang === "ko" ? V[i][0] + " " + V[i][2] : V[i][1] + " " + V[i][3]);
    if (!dlg.open) { dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", ""); document.body.style.overflow = "hidden"; }
  }
  async function save() {
    if (!canvas) return;
    const blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", 0.92));
    const name = "abbahome-verse-" + new Date().toISOString().slice(0, 10) + ".jpg";
    const file = new File([blob], name, { type: "image/jpeg" });
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent));
    if (mobile && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: L.head }); return; } catch (e) { if (e && e.name === "AbortError") return; }
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }
  const close = () => { dlg.close ? dlg.close() : dlg.removeAttribute("open"); };
  dlg.addEventListener("close", () => (document.body.style.overflow = ""));
  dlg.addEventListener("click", e => { if (e.target === dlg) close(); });
  $("v-open").onclick = show;
  $("v-again").onclick = show;
  $("v-close").onclick = close;
  $("v-save").onclick = save;
})();
