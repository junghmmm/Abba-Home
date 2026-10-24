/* =========================================================
   다국어 번역 사전 — ko / en / zh / fr / si(싱할라어)
   페이지의 기본(한국어) 문구는 HTML에 그대로 있고,
   다른 언어를 고르면 data-i18n="키" 가 붙은 요소가 아래 번역으로 바뀝니다.
   ========================================================= */
window.LANGS = [
  { code: "ko", label: "한국어", short: "KO" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "si", label: "සිංහල", short: "සිං" }
];

window.I18N = {
  /* ---------- 함께한 나라들 / 유튜브 ---------- */
  "foot.yt": { ko: "아바홈 공식 유튜브", en: "Official YouTube channel", zh: "官方 YouTube 频道", fr: "Chaîne YouTube officielle", si: "නිල YouTube නාලිකාව" },
  "home.nat.h2": { ko: "<span id=\"nation-count\">14</span>개 나라, 한 가족", en: "<span id=\"nation-count\">14</span> nations, one family", zh: "<span id=\"nation-count\">14</span>个国家，一个家", fr: "<span id=\"nation-count\">14</span> nations, une seule famille", si: "ජාතීන් <span id=\"nation-count\">14</span>ක්, එක් පවුලක්" },
  "home.nat.p": {
    ko: "지금까지 이 나라들에서 온 형제자매들이 아바홈에서 함께 예배하고 식탁을 나누었습니다. 그들의 삶을 통해 각 나라에 복음의 씨앗이 심겼고, 지금도 자라고 있습니다.",
    en: "Brothers and sisters from these nations have worshiped and shared the table with us at Abba Home. Through their lives the seed of the gospel has been planted in each of these nations — and it is still growing.",
    zh: "至今，来自这些国家的弟兄姊妹在Abba Home一同敬拜、同桌用餐。借着他们的生命，福音的种子已撒在各自的国家，并且仍在成长。",
    fr: "Des frères et sœurs venus de ces nations ont adoré et partagé la table avec nous à Abba Home. À travers leur vie, la semence de l’Évangile a été plantée dans chacune de ces nations — et elle continue de grandir.",
    si: "මෙම රටවලින් පැමිණි සහෝදර සහෝදරියන් Abba Home හි අප සමඟ නමස්කාර කර එකම මේසයේ ආහාර බෙදා ගත්හ. ඔවුන්ගේ ජීවිත තුළින් එක් එක් රටේ ශුභාරංචියේ බීජ රෝපණය වී ඇති අතර, ඒවා තවමත් වර්ධනය වෙමින් පවතී."
  },
  /* ---------- 공통 ---------- */
  "nav.home": { ko: "홈", en: "Home", zh: "首页", fr: "Accueil", si: "මුල් පිටුව" },
  "nav.about": { ko: "소개", en: "About", zh: "关于我们", fr: "À propos", si: "අප ගැන" },
  "nav.ministries": { ko: "사역", en: "Ministries", zh: "事工", fr: "Ministères", si: "සේවාවන්" },
  "nav.news": { ko: "사역소식", en: "News", zh: "事工消息", fr: "Actualités", si: "පුවත්" },
  "nav.schedule": { ko: "일정", en: "Schedule", zh: "日程", fr: "Agenda", si: "දින දර්ශනය" },
  "nav.contact": { ko: "문의하기", en: "Contact", zh: "联系我们", fr: "Contact", si: "අමතන්න" },

  "foot.desc": {
    ko: "안산에서 열방의 이웃과 함께 예배하고, 보냄 받은 자로 살아가는 선교 공동체입니다.",
    en: "A missional community in Ansan that worships with neighbors from the nations and lives as those who are sent.",
    zh: "在安山与列邦邻舍一同敬拜、活出被差遣生命的宣教群体。",
    fr: "Une communauté missionnaire à Ansan qui adore avec des voisins venus des nations et vit en envoyée.",
    si: "ජාතීන්ගෙන් පැමිණි අසල්වැසියන් සමඟ නමස්කාර කරමින්, යවනු ලැබූවන් ලෙස ජීවත් වන අන්සාන්හි මිෂනාරි ප්‍රජාවකි."
  },
  "tagline": {
    ko: "길 잃은 자들이 부르심의 길을 찾는 곳",
    en: "Where the lost find the path to their calling",
    zh: "迷失之人寻见呼召之路的地方",
    fr: "Là où les égarés trouvent le chemin de leur appel",
    si: "අතරමං වූවන් තම කැඳවීමේ මාවත සොයාගන්නා තැන"
  },
  "addr": {
    ko: "경기도 안산시 상록구 석호로 229-1 (2층)",
    en: "2F, 229-1 Seokho-ro, Sangnok-gu, Ansan-si, Gyeonggi-do, Korea",
    zh: "京畿道安山市常绿区石湖路 229-1（2楼）",
    fr: "2e étage, 229-1 Seokho-ro, Sangnok-gu, Ansan, Gyeonggi-do, Corée",
    si: "2 වන මහල, 229-1 සියොක්හෝ-රෝ, සංනොක්-ගු, අන්සාන්, ග්යොංගි-දෝ, කොරියාව"
  },
  "foot.worship": { ko: "목요열방예배 · 매주 목 19:30", en: "Thursday Worship · Thu 7:30 PM", zh: "周四列邦敬拜 · 每周四 19:30", fr: "Culte du jeudi · jeudi 19h30", si: "බ්‍රහස්පතින්දා නමස්කාරය · ප.ව. 7:30" },
  "foot.meal": { ko: "식사 · 18:30부터", en: "Dinner · from 6:30 PM", zh: "晚餐 · 18:30 起", fr: "Repas · dès 18h30", si: "රාත්‍රී ආහාර · ප.ව. 6:30 සිට" },
  "leader.name": { ko: "남동현 목사", en: "Rev. Nam Dong-hyun", zh: "Nam Dong-hyun 牧师", fr: "Pasteur Nam Dong-hyun", si: "ගරු නාම් දොං-හියොන්" },
  "leader.title": { ko: "대표", en: "Director", zh: "负责人", fr: "Responsable", si: "අධ්‍යක්ෂ" },

  "val.call": { ko: "부르심", en: "Calling", zh: "呼召", fr: "Appel", si: "කැඳවීම" },
  "val.abide": { ko: "함께 있음", en: "Abiding", zh: "同在", fr: "Demeurer", si: "රැඳී සිටීම" },
  "val.go": { ko: "나아감", en: "Going", zh: "前行", fr: "Aller", si: "ඉදිරියට යාම" },

  "btn.contact": { ko: "문의하기", en: "Contact us", zh: "联系我们", fr: "Nous contacter", si: "අප අමතන්න" },
  "btn.coop": { ko: "사역 협력 문의", en: "Partnership inquiry", zh: "事工合作咨询", fr: "Demande de partenariat", si: "හවුල්කාරිත්ව විමසීම" },
  "btn.viewNews": { ko: "사역 소식 보기", en: "View news", zh: "查看事工消息", fr: "Voir les actualités", si: "පුවත් බලන්න" },
  "link.allMin": { ko: "전체 사역 보기 →", en: "All ministries →", zh: "查看全部事工 →", fr: "Tous les ministères →", si: "සියලු සේවාවන් →" },
  "link.allNews": { ko: "소식 전체 보기 →", en: "All news →", zh: "查看全部消息 →", fr: "Toutes les actualités →", si: "සියලු පුවත් →" },

  /* ---------- 홈 ---------- */
  "home.hero.h1": {
    en: "Where the lost<br>find the path to their calling<br><em>Here &amp; Now</em>",
    zh: "迷失的人<br>寻见呼召之路的地方<br><em>Here &amp; Now</em>",
    fr: "Là où les égarés<br>trouvent le chemin de leur appel<br><em>Here &amp; Now</em>",
    si: "අතරමං වූවන්<br>තම කැඳවීමේ මාවත සොයාගන්නා තැන<br><em>Here &amp; Now</em>"
  },
  "home.hero.lead": {
    en: "Abba Home Here & Now is a missional community in Ansan that worships alongside neighbors from the nations, and walks with them as they return to God the Father and live as those who are sent.",
    zh: "Abba Home Here & Now 是位于安山的宣教群体，与来自列国的邻舍一同敬拜，陪伴他们回到天父那里，并活出被差遣者的生命。",
    fr: "Abba Home Here & Now est une communauté missionnaire à Ansan qui adore aux côtés de voisins venus des nations, et les accompagne dans leur retour vers Dieu le Père pour vivre en envoyés.",
    si: "Abba Home Here & Now යනු අන්සාන්හි ජාතීන්ගෙන් පැමිණි අසල්වැසියන් සමඟ නමස්කාර කරමින්, ඔවුන් දෙවි පියාණන් වෙත නැවත පැමිණ යවනු ලැබූවන් ලෙස ජීවත් වන තෙක් ඔවුන් සමඟ ගමන් කරන මිෂනාරි ප්‍රජාවකි."
  },
  "home.hero.btn1": { en: "Thursday Worship", zh: "周四列邦敬拜", fr: "Culte du jeudi", si: "බ්‍රහස්පතින්දා නමස්කාරය" },
  "home.hero.btn2": { en: "About Abba Home →", zh: "认识 Abba Home →", fr: "Découvrir Abba Home →", si: "Abba Home ගැන →" },
  "home.st.h2": {
    en: "<b>God’s people</b><br>living as sent ones",
    zh: "活出被差遣身份的<br><b>神的子民</b>",
    fr: "<b>Le peuple de Dieu</b><br>vivant en envoyés",
    si: "යවනු ලැබූවන් ලෙස<br>ජීවත් වන <b>දෙවියන්ගේ සෙනඟ</b>"
  },
  "home.st.p1": {
    en: "We call those who are lost to return to God the Father through Jesus Christ, and help them recover their identity as His beloved children.",
    zh: "我们呼召迷失的人借着耶稣基督回到父神那里，帮助他们恢复作为蒙爱的神儿女的身份。",
    fr: "Nous appelons ceux qui sont perdus à revenir à Dieu le Père par Jésus-Christ, et nous les aidons à retrouver leur identité d’enfants bien-aimés de Dieu.",
    si: "අතරමං වූවන් යේසුස් ක්‍රිස්තුන් වහන්සේ තුළින් දෙවි පියාණන් වෙත නැවත පැමිණෙන ලෙස අපි කැඳවන අතර, දෙවියන්ගේ ප්‍රේමණීය දරුවන් ලෙස ඔවුන්ගේ අනන්‍යතාව යළි ලබා ගැනීමට උදව් කරමු."
  },
  "home.st.p2": {
    en: "Transformed in the Word by the power of the Holy Spirit, they are raised up as Father-hearted leaders — and we walk with them as they are sent into everyday life and among the nations.",
    zh: "他们在圣灵的大能中借着神的话语被改变，成为怀有父心的领袖，并被差遣进入生活现场与列邦——我们一路同行。",
    fr: "Transformés dans la Parole par la puissance du Saint-Esprit, ils deviennent des leaders au cœur de Père — et nous marchons avec eux lorsqu’ils sont envoyés dans leur quotidien et parmi les nations.",
    si: "ශුද්ධාත්මයාණන්ගේ බලයෙන් වචනය තුළ පරිවර්තනය වී, ඔවුන් පියාණන්ගේ හදවත දරන නායකයන් ලෙස නැගී සිටිති — එදිනෙදා ජීවිතයට හා ජාතීන් අතරට ඔවුන් යවනු ලබන මාවතේ අපි ඔවුන් සමඟ ගමන් කරමු."
  },
  "home.st.link": { en: "Read our vision & mission →", zh: "查看异象与使命 →", fr: "Notre vision et notre mission →", si: "අපගේ දැක්ම සහ මෙහෙවර →" },
  "home.w.h2": {
    en: "Every Thursday,<br>the nations gather at one table",
    zh: "每周四，<br>列邦围坐同一张餐桌",
    fr: "Chaque jeudi,<br>les nations se retrouvent autour d’une même table",
    si: "සෑම බ්‍රහස්පතින්දාවකම<br>ජාතීන් එකම මේසයක් වටා එක්රැස් වෙති"
  },
  "home.w.p": {
    en: "Beyond nationality and culture, we share a meal and worship together. Whether it’s your first time or your Korean is still growing, everyone is welcome.",
    zh: "跨越国籍与文化，我们一同用餐、一同敬拜。无论是第一次来，还是韩语还不太流利，都热烈欢迎。",
    fr: "Au-delà des nationalités et des cultures, nous partageons un repas et adorons ensemble. Que ce soit votre première visite ou que votre coréen soit encore hésitant, vous êtes le bienvenu.",
    si: "ජාතිකත්වය හා සංස්කෘතිය ඉක්මවා අපි එකට ආහාර බෙදාගෙන එකට නමස්කාර කරමු. ඔබ පළමු වරට පැමිණියත්, කොරියානු භාෂාව තවමත් හොඳින් නොදැන සිටියත්, සැමට සාදරයෙන් පිළිගනිමු."
  },
  "home.w.t1b": { en: "Shared Table", zh: "共享餐桌", fr: "Repas partagé", si: "එකට ආහාර" },
  "home.w.t1s": { en: "Every Thursday · Dinner provided", zh: "每周四 · 提供晚餐", fr: "Chaque jeudi · Repas offert", si: "සෑම බ්‍රහස්පතින්දාවකම · රාත්‍රී ආහාර ලබා දේ" },
  "home.w.t2b": { en: "All Nations Worship", zh: "周四列邦敬拜", fr: "Culte des nations", si: "සියලු ජාතීන්ගේ නමස්කාරය" },
  "home.w.t2s": { en: "Every Thursday · Multi-ethnic worship", zh: "每周四 · 多民族联合敬拜", fr: "Chaque jeudi · Culte multiethnique", si: "සෑම බ්‍රහස්පතින්දාවකම · බහු ජාතික නමස්කාරය" },
  "home.w.t3t": { en: "📍 Ansan", zh: "📍 安山", fr: "📍 Ansan", si: "📍 අන්සාන්" },
  "home.w.t3b": { en: "229-1 Seokho-ro, 2F", zh: "石湖路 229-1，2楼", fr: "229-1 Seokho-ro, 2e étage", si: "229-1 සියොක්හෝ-රෝ, 2 වන මහල" },
  "home.w.t3s": { en: "Sangnok-gu, Ansan, Gyeonggi-do", zh: "京畿道安山市常绿区", fr: "Sangnok-gu, Ansan, Gyeonggi-do", si: "සංනොක්-ගු, අන්සාන්, ග්යොංගි-දෝ" },
  "home.min.h2": { en: "Our Ministries", zh: "Abba Home 的事工", fr: "Nos ministères", si: "අපගේ සේවාවන්" },
  "home.gal.h2": { ko: "함께한 순간들", en: "Moments Together", zh: "共同的时光", fr: "Moments partagés", si: "එකට ගත කළ මොහොත" },
  "home.gal.p": {
    en: "Scenes of worship and shared meals, children’s laughter, and the road we walk together.",
    zh: "敬拜与餐桌、孩子们的欢笑，以及一同走过的路上的点滴。",
    fr: "Culte et repas partagés, rires d’enfants, et le chemin que nous parcourons ensemble.",
    si: "නමස්කාරය සහ එකට ආහාර, දරුවන්ගේ සිනහව, අප එකට ගමන් කරන මාවතේ දර්ශන."
  },
  "home.news.h2": { ko: "사역 소식", en: "News", zh: "事工消息", fr: "Actualités", si: "පුවත්" },
  "cta.h2": {
    en: "We’re looking for co-workers<br>to worship and be sent with us.",
    zh: "我们期待与你一同敬拜、<br>一同被差遣的同工。",
    fr: "Nous attendons des partenaires<br>pour adorer et être envoyés avec nous.",
    si: "අප සමඟ නමස්කාර කිරීමට සහ යවනු ලැබීමට<br>සම සේවකයන් බලාපොරොත්තු වෙමු."
  },

  /* ---------- 소개 ---------- */
  "about.p": {
    en: "Abba Home Here & Now is a missional community based in Ansan, Gyeonggi-do. We worship alongside multicultural neighbors and walk with them as they return to the Father’s home and follow the path of their calling.",
    zh: "Abba Home Here & Now 是以京畿道安山为中心的宣教群体，与多元文化的邻舍一同敬拜，陪伴他们回到天父的家，走上呼召之路。",
    fr: "Abba Home Here & Now est une communauté missionnaire basée à Ansan (Gyeonggi-do). Nous adorons aux côtés de voisins multiculturels et les accompagnons dans leur retour à la maison du Père et sur le chemin de leur appel.",
    si: "Abba Home Here & Now යනු ග්යොංගි-දෝ, අන්සාන් කේන්ද්‍ර කරගත් මිෂනාරි ප්‍රජාවකි. බහු සංස්කෘතික අසල්වැසියන් සමඟ නමස්කාර කරමින්, ඔවුන් පියාණන්ගේ නිවසට නැවත පැමිණ තම කැඳවීමේ මාවතේ ගමන් කරන තෙක් අපි ඔවුන් සමඟ සිටිමු."
  },
  "about.h1": { en: "Abba Home Here &amp; Now", zh: "Abba Home Here &amp; Now", fr: "Abba Home Here &amp; Now", si: "Abba Home Here &amp; Now" },
  "about.v.eb": { en: "Vision Statement", zh: "异象 · Vision", fr: "Vision", si: "දැක්ම · Vision" },
  "about.v.h2": {
    en: "God’s People<br>Living as Sent Ones",
    zh: "活出被差遣身份的<br>神的子民",
    fr: "Le peuple de Dieu<br>vivant en envoyés",
    si: "යවනු ලැබූවන් ලෙස ජීවත් වන<br>දෙවියන්ගේ සෙනඟ"
  },
  "about.v.sub": { en: "보냄 받은 자로 살아가는 하나님의 사람들" },
  "about.m.h2": { en: "Mission", zh: "使命", fr: "Mission", si: "මෙහෙවර" },
  "about.m.p": {
    en: "From the moment the lost return to the Father until they are sent out again to the nations — we walk the whole journey with them.",
    zh: "从迷失的人回到父那里，直到再次被差遣到列邦——我们全程同行。",
    fr: "Du retour des égarés vers le Père jusqu’à leur envoi vers les nations — nous faisons tout le chemin avec eux.",
    si: "අතරමං වූවන් පියාණන් වෙත නැවත පැමිණෙන මොහොතේ සිට ඔවුන් නැවත ජාතීන් වෙත යවනු ලබන තෙක් — මුළු ගමනේදීම අපි ඔවුන් සමඟ සිටිමු."
  },
  "about.s1b": { en: "Call", zh: "呼召", fr: "Appeler", si: "කැඳවීම" },
  "about.s1s": { en: "the lost to return to God the Father through Jesus Christ", zh: "迷失的人借着耶稣基督回到父神那里", fr: "les égarés à revenir à Dieu le Père par Jésus-Christ", si: "අතරමං වූවන් යේසුස් ක්‍රිස්තුන් වහන්සේ තුළින් දෙවි පියාණන් වෙත නැවත පැමිණීමට" },
  "about.s2b": { en: "Restore", zh: "恢复", fr: "Restaurer", si: "යළි ගොඩනැංවීම" },
  "about.s2s": { en: "their identity as beloved children of God", zh: "作为蒙爱的神儿女的身份", fr: "leur identité d’enfants bien-aimés de Dieu", si: "දෙවියන්ගේ ප්‍රේමණීය දරුවන් ලෙස ඔවුන්ගේ අනන්‍යතාව" },
  "about.s3b": { en: "Transform", zh: "改变", fr: "Transformer", si: "පරිවර්තනය" },
  "about.s3s": { en: "by the power of the Holy Spirit through the Word", zh: "在圣灵的大能中借着神的话语得以更新", fr: "par la puissance du Saint-Esprit à travers la Parole", si: "වචනය තුළින් ශුද්ධාත්මයාණන්ගේ බලයෙන්" },
  "about.s4b": { en: "Raise up", zh: "建立", fr: "Former", si: "නැංවීම" },
  "about.s4s": { en: "Father-hearted leaders", zh: "怀有父心的领袖", fr: "des leaders au cœur de Père", si: "පියාණන්ගේ හදවත දරන නායකයන් ලෙස" },
  "about.s5b": { en: "Send & walk with", zh: "差遣并同行", fr: "Envoyer et accompagner", si: "යැවීම සහ සමඟ ගමන් කිරීම" },
  "about.s5s": {
    en: "into everyday life and among the nations as sent by the Triune God, walking with them on the path of their calling",
    zh: "随着三一神的差遣进入生活现场与列邦，并在呼召的路上与他们同行",
    fr: "dans leur quotidien et parmi les nations, envoyés par le Dieu trinitaire, en marchant avec eux sur le chemin de leur appel",
    si: "ත්‍රිත්ව දෙවියන්ගේ යැවීම අනුව එදිනෙදා ජීවිතයට හා ජාතීන් අතරට, ඔවුන්ගේ කැඳවීමේ මාවතේ ඔවුන් සමඟ ගමන් කරමින්"
  },
  "about.full1": {
    en: "Abba Home Here & Now calls the lost to return to the Father through Jesus Christ, helps them recover their identity as His beloved children and be transformed by the power of the Holy Spirit through the Word, raises them up as Father-hearted leaders, sends them forth as those sent by the Triune God into their everyday contexts and among the nations, and walks with them on the path of their calling.",
    zh: "Abba Home Here & Now 呼召迷失的人借着耶稣基督回到父神那里，帮助他们恢复作为蒙爱的神儿女的身份，并在圣灵的大能中借着神的话语被改变，最终将他们建立为怀有父心的领袖，随着三一神的差遣，差派他们进入生活现场与列邦，并在呼召的路上与他们同行。",
    fr: "Abba Home Here & Now appelle les égarés à revenir au Père par Jésus-Christ, les aide à retrouver leur identité d’enfants bien-aimés et à être transformés par la puissance du Saint-Esprit à travers la Parole, les forme comme des leaders au cœur de Père, les envoie, comme envoyés du Dieu trinitaire, dans leur quotidien et parmi les nations, et marche avec eux sur le chemin de leur appel.",
    si: "Abba Home Here & Now අතරමං වූවන් යේසුස් ක්‍රිස්තුන් වහන්සේ තුළින් පියාණන් වෙත නැවත පැමිණීමට කැඳවයි; දෙවියන්ගේ ප්‍රේමණීය දරුවන් ලෙස ඔවුන්ගේ අනන්‍යතාව යළි ලබා ගැනීමටත්, වචනය තුළින් ශුද්ධාත්මයාණන්ගේ බලයෙන් පරිවර්තනය වීමටත් උදව් කරයි; පියාණන්ගේ හදවත දරන නායකයන් ලෙස ඔවුන් නංවයි; ත්‍රිත්ව දෙවියන්ගේ යැවීම අනුව ඔවුන් එදිනෙදා ජීවිතයට හා ජාතීන් අතරට යවයි; ඔවුන්ගේ කැඳවීමේ මාවතේ ඔවුන් සමඟ ගමන් කරයි."
  },
  "about.full2": {
    en: "아바홈히어랜나우는 길 잃은 이들이 예수 그리스도를 통하여 하나님 아버지께 돌아오도록 부르고, 그들이 사랑받는 하나님의 자녀로서의 정체성을 회복하고 성령의 권능으로 말씀 안에서 변화되도록 도와, 마침내 아버지의 마음을 품은 리더로 세워 삼위 하나님의 보내심을 따라 삶의 자리와 열방으로 파송하며, 그들이 부르심의 길을 걸어가도록 함께한다."
  },
  "about.val.h2": { en: "Core Values", zh: "核心价值", fr: "Valeurs fondamentales", si: "මූලික වටිනාකම්" },
  "about.mark": {
    en: "“And he went up on the mountain and <b>called</b> to him those whom he desired, and they came to him. And he appointed twelve … so that they might <b>be with him</b> and he might <b>send them out</b> to preach and have authority to cast out demons.”",
    zh: "“耶稣上了山，随自己的意思<b>叫人来</b>；他们便来到他那里。他就设立十二个人，要他们<b>常和自己同在</b>，也要<b>差他们去</b>传道，并给他们权柄赶鬼。”",
    fr: "« Il monta ensuite sur la montagne ; il <b>appela</b> ceux qu’il voulut, et ils vinrent auprès de lui. Il en établit douze, pour les <b>avoir avec lui</b>, et pour les <b>envoyer</b> prêcher avec le pouvoir de chasser les démons. »",
    si: "“උන්වහන්සේ කන්දට නැඟී, තමන් කැමති අයව <b>කැඳවූ සේක</b>; ඔව්හු උන්වහන්සේ වෙතට පැමිණියෝය. තමන් සමඟ <b>සිටීමටත්</b>, දේශනා කිරීමටත් යක්ෂයන් දුරු කිරීමේ බලය ඇතිව <b>යැවීමටත්</b> උන්වහන්සේ දොළොස් දෙනෙකු පත් කළ සේක.”"
  },
  "about.mark.cite": { en: "MARK 3:13–15", zh: "马可福音 3:13–15", fr: "MARC 3.13–15", si: "මාර්ක් 3:13–15" },
  "about.v1p": {
    en: "He calls those He desires. Responding to that call, we invite the lost into the Father’s home.",
    zh: "主呼召祂所愿意的人。我们回应这呼召，邀请迷失的人回到父的家。",
    fr: "Il appelle ceux qu’il veut. En répondant à cet appel, nous invitons les égarés dans la maison du Père.",
    si: "උන්වහන්සේ කැමති අය කැඳවන සේක. එම කැඳවීමට ප්‍රතිචාර දක්වමින්, අපි අතරමං වූවන්ට පියාණන්ගේ නිවසට ආරාධනා කරමු."
  },
  "about.v2p": {
    en: "Before being sent, there is abiding. In the Word, in worship and in fellowship around the table, we remain with the Lord and with one another.",
    zh: "被差遣之前先有同在。在神的话语、敬拜和餐桌的团契中，我们与主同在，也彼此同在。",
    fr: "Avant l’envoi, il y a la présence. Dans la Parole, le culte et la communion autour de la table, nous demeurons avec le Seigneur et les uns avec les autres.",
    si: "යැවීමට පෙර රැඳී සිටීම තිබේ. වචනය, නමස්කාරය සහ ආහාර මේසයේ සහභාගිත්වය තුළ අපි ස්වාමින් වහන්සේ සමඟත් එකිනෙකා සමඟත් රැඳී සිටිමු."
  },
  "about.v3p": {
    en: "The Lord sends out those who have been with Him. We live as sent ones in our everyday lives and among the nations.",
    zh: "主差遣那些与祂同在的人。我们以被差遣者的身份活在生活现场与列邦之中。",
    fr: "Le Seigneur envoie ceux qui ont été avec lui. Nous vivons en envoyés dans notre quotidien et parmi les nations.",
    si: "උන්වහන්සේ සමඟ සිටි අය ස්වාමින් වහන්සේ යවන සේක. අපි අපගේ එදිනෙදා ජීවිතයේත් ජාතීන් අතරත් යවනු ලැබූවන් ලෙස ජීවත් වෙමු."
  },
  "about.f.eb": { en: "Biblical Foundation", zh: "圣经根基 · Biblical Foundation", fr: "Fondement biblique", si: "බයිබලීය පදනම" },
  "about.luke": {
    en: "“The Spirit of the Lord is on me, because he has anointed me to preach good news to the poor. He has sent me to proclaim release to the captives, recovering of sight to the blind, to deliver those who are crushed, and to proclaim the acceptable year of the Lord.”",
    zh: "“主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人；差遣我报告：被掳的得释放，瞎眼的得看见，叫那受压制的得自由，报告神悦纳人的禧年。”",
    fr: "« L’Esprit du Seigneur est sur moi, parce qu’il m’a oint pour annoncer une bonne nouvelle aux pauvres ; il m’a envoyé pour proclamer aux captifs la délivrance, et aux aveugles le recouvrement de la vue, pour renvoyer libres les opprimés, pour publier une année de grâce du Seigneur. »",
    si: "“සමිඳාණන් වහන්සේගේ ආත්මය මා කෙරෙහි ය; මන්ද දිළින්දන්ට ශුභාරංචිය දේශනා කිරීමට උන්වහන්සේ මා අභිෂේක කළ සේක. සිරකරුවන්ට නිදහසත්, අන්ධයන්ට නැවත පෙනීමත් ප්‍රකාශ කිරීමටත්, පීඩිතයන් නිදහස් කිරීමටත්, සමිඳාණන් වහන්සේගේ කරුණාවේ වර්ෂය ප්‍රකාශ කිරීමටත් උන්වහන්සේ මා එවූ සේක.”"
  },
  "about.luke.cite": { en: "LUKE 4:18–19 (cf. ISAIAH 61:1–2)", zh: "路加福音 4:18–19（参 以赛亚书 61:1–2）", fr: "LUC 4.18–19 (cf. ÉSAÏE 61.1–2)", si: "ලූක් 4:18–19 (සසඳන්න යෙසායා 61:1–2)" },
  "about.leader.p": {
    en: "Worshiping alongside multicultural neighbors in Ansan, he serves multi-ethnic families and churches as well as missional leaders. His hope is that Abba Home will be like the father’s house that welcomes home the son who was lost and is found — a community where anyone can return, rest, be restored, and be sent out again.",
    zh: "他在安山与多元文化的邻舍一同敬拜，服事多民族家庭、教会和宣教领袖。他盼望 Abba Home 能像迎接失而复得之儿子的父家一样，成为任何人都能回来、安息、恢复并再次被差遣的群体。",
    fr: "Il adore aux côtés de voisins multiculturels à Ansan et sert des familles et des Églises multiethniques ainsi que des leaders missionnaires. Il espère qu’Abba Home sera comme la maison du père qui accueille le fils perdu et retrouvé — une communauté où chacun peut revenir, se reposer, être restauré et être de nouveau envoyé.",
    si: "ඔහු අන්සාන්හි බහු සංස්කෘතික අසල්වැසියන් සමඟ නමස්කාර කරමින්, බහු ජාතික පවුල්, සභා සහ මිෂනාරි නායකයන්ට සේවය කරයි. නැති වී නැවත සොයාගත් පුත්‍රයා පිළිගන්නා පියාගේ නිවස මෙන්, ඕනෑම කෙනෙකුට නැවත පැමිණ, විවේක ගෙන, යළි ගොඩනැගී, නැවත යවනු ලැබිය හැකි ප්‍රජාවක් ලෙස Abba Home වීම ඔහුගේ බලාපොරොත්තුවයි."
  },
  "about.leader.btn": { en: "Join us · Contact", zh: "加入我们 · 联系", fr: "Nous rejoindre · Contact", si: "එක්වන්න · අමතන්න" },

  /* ---------- 사역 ---------- */
  "min.p": {
    en: "Starting from worship and reaching families, children, leaders and churches — we carry out five ministries in the flow of Call, Abide and Go.",
    zh: "从敬拜出发，延伸到家庭与孩子、领袖与教会——在呼召（Call）、同在（Abide）、前行（Go）的脉络中开展五项事工。",
    fr: "Du culte jusqu’aux familles, aux enfants, aux leaders et aux Églises — nous menons cinq ministères dans le mouvement Appeler, Demeurer, Aller.",
    si: "නමස්කාරයෙන් ආරම්භ කර පවුල්, දරුවන්, නායකයන් සහ සභා දක්වා — කැඳවීම (Call), රැඳී සිටීම (Abide), ඉදිරියට යාම (Go) යන ගලායාම තුළ අපි සේවාවන් පහක් කරගෙන යමු."
  },
  "min.cta": { en: "Would you like to join or partner with our ministry?", zh: "想加入或与我们的事工合作吗？", fr: "Vous souhaitez rejoindre ou soutenir nos ministères ?", si: "අපගේ සේවාවට එක්වීමට හෝ හවුල් වීමට කැමතිද?" },
  "min.newsOf": { ko: "{name} 소식 보기 →", en: "News from {name} →", zh: "查看{name}消息 →", fr: "Actualités : {name} →", si: "{name} පුවත් →" },

  /* ---------- 사역소식 ---------- */
  "news.p": {
    en: "Stories of laughing, eating and worshiping together on the field. Browse by ministry.",
    zh: "分享在事工现场一同欢笑、用餐、敬拜的故事。可按事工分类浏览。",
    fr: "Des histoires de rires, de repas et de culte partagés sur le terrain. Filtrez par ministère.",
    si: "ක්ෂේත්‍රයේ එකට සිනාසුණු, ආහාර ගත්, නමස්කාර කළ කතා. සේවාව අනුව බලන්න."
  },
  "tab.all": { ko: "전체", en: "All", zh: "全部", fr: "Tous", si: "සියල්ල" },
  "view.card": { ko: "카드", en: "Cards", zh: "卡片", fr: "Cartes", si: "කාඩ්" },
  "view.list": { ko: "목록", en: "List", zh: "列表", fr: "Liste", si: "ලැයිස්තුව" },
  "news.empty": { ko: "아직 등록된 소식이 없습니다.", en: "No news yet.", zh: "暂无消息。", fr: "Aucune actualité pour le moment.", si: "තවමත් පුවත් නැත." },

  /* ---------- 문의 ---------- */
  "c.h1": { en: "Contact &amp; Support", zh: "联系与支持", fr: "Contact et soutien", si: "සම්බන්ධතා සහ සහාය" },
  "c.p": {
    en: "Feel free to reach out about joining worship, taking part in ministry, partnership or giving. Your message goes straight to Abba Home’s inbox.",
    zh: "关于参加敬拜、参与事工、合作与奉献的任何问题，都欢迎留言。您的留言将直接发送到 Abba Home 的邮箱。",
    fr: "N’hésitez pas à nous écrire pour participer au culte, au ministère, pour un partenariat ou un don. Votre message arrive directement dans la boîte d’Abba Home.",
    si: "නමස්කාරයට සහභාගී වීම, සේවාවට එක්වීම, හවුල්කාරිත්වය හෝ පරිත්‍යාග ගැන ඕනෑම දෙයක් නිදහසේ අපට ලියන්න. ඔබේ පණිවිඩය කෙලින්ම Abba Home වෙත ලැබේ."
  },
  "c.addr": { en: "Address", zh: "地址", fr: "Adresse", si: "ලිපිනය" },
  "c.worship": { en: "Thursday Worship", zh: "周四敬拜", fr: "Culte du jeudi", si: "බ්‍රහස්පතින්දා නමස්කාරය" },
  "c.leader": { en: "Director", zh: "负责人", fr: "Responsable", si: "අධ්‍යක්ෂ" },
  "c.phone": { en: "Phone", zh: "电话", fr: "Téléphone", si: "දුරකථනය" },
  "c.email": { en: "Email", zh: "邮箱", fr: "E-mail", si: "ඊමේල්" },
  "c.time": { en: "Every Thursday, 7:30 PM", zh: "每周四 晚上 7:30", fr: "Chaque jeudi à 19h30", si: "සෑම බ්‍රහස්පතින්දාවකම ප.ව. 7:30" },
  "c.meal": { en: "Dinner served from 6:30 PM", zh: "18:30 起提供晚餐", fr: "Repas offert dès 18h30", si: "ප.ව. 6:30 සිට රාත්‍රී ආහාර" },
  "c.sup.h": { ko: "후원 안내", en: "Support us", zh: "支持我们", fr: "Nous soutenir", si: "අපට සහාය වන්න" },
  "c.sup.p": {
    en: "Your prayers and gifts support the table and worship that serve our multicultural neighbors, and help raise up children and leaders.",
    zh: "您的代祷与奉献将用于服事多元文化邻舍的餐桌与敬拜，以及培育孩子和领袖。",
    fr: "Vos prières et vos dons soutiennent les repas et le culte au service de nos voisins multiculturels, ainsi que la formation des enfants et des leaders.",
    si: "ඔබේ යාච්ඤා සහ පරිත්‍යාග, බහු සංස්කෘතික අසල්වැසියන්ට සේවය කරන ආහාර මේසයටත් නමස්කාරයටත්, දරුවන් සහ නායකයන් ගොඩනැංවීමටත් යොදා ගැනේ."
  },
  "c.bank": { ko: "우리은행 1005-804-736600", en: "Woori Bank 1005-804-736600", zh: "友利银行 1005-804-736600", fr: "Woori Bank 1005-804-736600", si: "වූරි බැංකුව 1005-804-736600" },
  "copy": { ko: "복사", en: "Copy", zh: "复制", fr: "Copier", si: "පිටපත් කරන්න" },
  "copied": { ko: "복사됨", en: "Copied", zh: "已复制", fr: "Copié", si: "පිටපත් විය" },
  "c.map": { en: "View on Naver Map →", zh: "在 Naver 地图中查看 →", fr: "Voir sur Naver Map →", si: "Naver සිතියමේ බලන්න →" },
  "f.general": { en: "General inquiry", zh: "一般咨询", fr: "Demande générale", si: "සාමාන්‍ය විමසීම" },
  "f.name": { en: "Name", zh: "姓名", fr: "Nom", si: "නම" },
  "f.phone": { en: "Phone", zh: "联系电话", fr: "Téléphone", si: "දුරකථන අංකය" },
  "f.email": { en: "Email", zh: "邮箱", fr: "E-mail", si: "ඊමේල්" },
  "f.emailPh": { en: "Email for our reply", zh: "用于接收回复的邮箱", fr: "E-mail pour notre réponse", si: "පිළිතුර ලැබීමට ඊමේල්" },
  "f.org": { en: "Organization / Church", zh: "所属机构 / 教会", fr: "Organisation / Église", si: "සංවිධානය / සභාව" },
  "f.area": { en: "Area of interest", zh: "希望合作的领域", fr: "Domaine souhaité", si: "සහයෝගය දීමට කැමති ක්ෂේත්‍රය" },
  "f.subject": { en: "Subject", zh: "标题", fr: "Objet", si: "මාතෘකාව" },
  "f.message": { en: "Message", zh: "内容", fr: "Message", si: "පණිවිඩය" },
  "f.choose": { ko: "선택해주세요", en: "Please select", zh: "请选择", fr: "Veuillez choisir", si: "තෝරන්න" },
  "f.opt.give": { ko: "후원 / 물품 지원", en: "Giving / In-kind support", zh: "奉献 / 物资支持", fr: "Dons / soutien matériel", si: "පරිත්‍යාග / ද්‍රව්‍ය සහාය" },
  "f.opt.vol": { ko: "자원봉사", en: "Volunteering", zh: "志愿服务", fr: "Bénévolat", si: "ස්වේච්ඡා සේවය" },
  "f.opt.etc": { ko: "기타", en: "Other", zh: "其他", fr: "Autre", si: "වෙනත්" },
  "f.consent": {
    en: "I agree to the collection of my name, phone number and email in order to reply to my inquiry (deleted promptly after replying).",
    zh: "我同意为回复咨询而收集姓名、电话与邮箱（回复后立即删除）。",
    fr: "J’accepte la collecte de mon nom, téléphone et e-mail pour répondre à ma demande (supprimés dès la réponse envoyée).",
    si: "මගේ විමසීමට පිළිතුරු දීම සඳහා නම, දුරකථන අංකය සහ ඊමේල් එකතු කිරීමට මම එකඟ වෙමි (පිළිතුරු දුන් පසු වහාම මකා දමනු ලැබේ)."
  },
  "f.req": { en: "* Required", zh: "* 为必填项", fr: "* Champs obligatoires", si: "* අනිවාර්යයි" },
  "f.submit": { ko: "문의 보내기", en: "Send message", zh: "发送", fr: "Envoyer", si: "යවන්න" },
  "f.sending": { ko: "보내는 중…", en: "Sending…", zh: "发送中…", fr: "Envoi…", si: "යවමින්…" },
  "f.ok": {
    ko: "문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다. 감사합니다!",
    en: "Thank you! Your message has been received. We’ll get back to you soon.",
    zh: "感谢您！留言已收到，我们会尽快回复。",
    fr: "Merci ! Votre message a bien été reçu. Nous vous répondrons rapidement.",
    si: "ස්තූතියි! ඔබේ පණිවිඩය ලැබුණි. අපි ඉක්මනින් පිළිතුරු දෙන්නෙමු."
  },
  "f.err": {
    ko: "전송에 실패했습니다. 잠시 후 다시 시도하시거나 {email} 로 직접 보내주세요.",
    en: "Sending failed. Please try again later or email us directly at {email}.",
    zh: "发送失败。请稍后再试，或直接发送邮件至 {email}。",
    fr: "L’envoi a échoué. Réessayez plus tard ou écrivez-nous directement à {email}.",
    si: "යැවීම අසාර්ථක විය. පසුව නැවත උත්සාහ කරන්න, නැතහොත් {email} වෙත කෙලින්ම ඊමේල් කරන්න."
  }
};
