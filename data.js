/* =========================================================
   아바홈 히어랜나우 — 콘텐츠 데이터
   사진·사역 내용은 이 파일만 수정하면 사이트 전체에 반영됩니다.
   이미지 파일은 images 폴더에 넣고 경로를 적어주세요. (예: "images/worship-01.jpg")
   image 를 비워두면("") 디자인된 기본 배경이 표시됩니다.

   [다국어] 각 항목은 한국어가 기본이고, 다른 언어는 뒤에 _en / _zh / _fr / _si 를 붙여 적습니다. (해당 언어가 없으면 영어 → 한국어 순으로 표시)
   예) title: "목요열방예배", title_en: "Thursday Worship", title_zh: "周四敬拜"
   번역을 비워두면 한국어(사역 이름은 영어)로 표시됩니다.
   ========================================================= */

window.SITE = {
  email: "abbahomeherennow@gmail.com",
  phone: "010-8783-9253"
};

/* ---------- 사역 (사역소개 + 게시판 카테고리) ---------- */
window.MINISTRIES = [
  {
    id: "worship",
    name: "목요열방예배",
    name_en: "All Nations Worship",
    name_zh: "周四列邦敬拜",
    name_fr: "Culte des nations",
    name_si: "සියලු ජාතීන්ගේ නමස්කාරය",
    summary: "국적과 문화를 넘어 함께 예배하며 하나님 아버지 안에서 한 가족으로 세워지는 열방의 예배 공동체입니다.",
    summary_en: "A worshiping community where people from different nations and cultures become one family in God the Father.",
    summary_zh: "跨越国籍与文化一同敬拜，在父神里成为一家人的列邦敬拜群体。",
    summary_fr: "Une communauté d’adoration où des personnes de nations et de cultures différentes deviennent une seule famille en Dieu le Père.",
    summary_si: "විවිධ ජාතීන්ගෙන් හා සංස්කෘතීන්ගෙන් පැමිණි අය දෙවි පියාණන් තුළ එක පවුලක් වන නමස්කාර ප්‍රජාවකි.",
    schedule: "매주 목요일 오후 7:30 예배 · 6:30부터 식사",
    schedule_en: "Worship every Thursday 7:30 PM · Dinner from 6:30 PM",
    schedule_zh: "每周四 19:30 敬拜 · 18:30 起用餐",
    schedule_fr: "Culte chaque jeudi à 19h30 · Repas dès 18h30",
    schedule_si: "සෑම බ්‍රහස්පතින්දාවකම ප.ව. 7:30 නමස්කාරය · ප.ව. 6:30 සිට ආහාර",
    image: ""
  },
  {
    id: "tangtang",
    name: "아바홈탕탕스쿨",
    name_en: "Abba Home Tangtang School",
    name_zh: "Abba Home 堂堂学校",
    name_fr: "École Tangtang d’Abba Home",
    name_si: "Abba Home ටැංටැං පාසල",
    summary: "성령의 권능으로 말씀 안에서 변화되어 아버지의 마음을 품은 리더로 성장하도록 돕는 선교적 리더십 훈련입니다.",
    summary_en: "A missional leadership journey that helps people be transformed by the Holy Spirit through the Word and grow as Father-hearted leaders.",
    summary_zh: "在圣灵的大能中借着神的话语被改变，成长为怀有父心之领袖的宣教领袖训练。",
    summary_fr: "Un parcours de leadership missionnaire pour être transformé par le Saint-Esprit à travers la Parole et grandir comme des leaders au cœur de Père.",
    summary_si: "වචනය තුළින් ශුද්ධාත්මයාණන් විසින් පරිවර්තනය වී, පියාණන්ගේ හදවත දරන නායකයන් ලෙස වර්ධනය වීමට උපකාර වන මිෂනාරි නායකත්ව පුහුණුවකි.",
    image: ""
  },
  {
    id: "joy",
    name: "기쁨의 학교",
    name_en: "School of Joy",
    name_zh: "喜乐学校",
    name_fr: "École de la joie",
    name_si: "සතුටේ පාසල",
    summary: "다민족 가정과 자녀들이 사랑과 돌봄 속에서 하나님이 주신 존귀한 정체성과 기쁨을 발견하도록 함께합니다.",
    summary_en: "A caring community where multi-ethnic families and children discover their God-given dignity, identity, and joy.",
    summary_zh: "陪伴多民族家庭与孩子在爱与关怀中，发现神所赐的尊贵身份与喜乐。",
    summary_fr: "Une communauté bienveillante où les familles et les enfants multiethniques découvrent la dignité, l’identité et la joie que Dieu leur donne.",
    summary_si: "බහු ජාතික පවුල් සහ දරුවන් ප්‍රේමය හා රැකවරණය තුළ දෙවියන් දුන් ගෞරවය, අනන්‍යතාව සහ සතුට සොයා ගැනීමට අපි ඔවුන් සමඟ සිටිමු.",
    image: ""
  },
  {
    id: "coaching",
    name: "선교리더십코칭",
    name_en: "Coaching for Missional Leaders",
    name_zh: "宣教领袖教练",
    name_fr: "Coaching pour leaders missionnaires",
    name_si: "මිෂනාරි නායකයින් සඳහා පුහුණු කිරීම",
    summary: "리더들이 하나님께 받은 부르심을 분별하고 삶과 사역의 현장에서 그 길을 지속적으로 걸어가도록 코칭하고 동행합니다.",
    summary_en: "Coaching and walking with missional leaders as they discern God's calling and faithfully pursue it in life and ministry.",
    summary_zh: "陪伴领袖分辨从神领受的呼召，并在生活与事工现场持续走在这条路上。",
    summary_fr: "Accompagner et coacher des leaders missionnaires pour qu’ils discernent l’appel de Dieu et le suivent fidèlement dans leur vie et leur ministère.",
    summary_si: "නායකයන්ට දෙවියන්ගේ කැඳවීම හඳුනාගෙන ජීවිතයේ හා සේවයේ එය විශ්වාසවන්තව අනුගමනය කිරීමට පුහුණු කරමින් ඔවුන් සමඟ ගමන් කරමු.",
    image: ""
  },
  {
    id: "churches",
    name: "다민족교회 섬김",
    name_en: "Serving Multi-ethnic Churches",
    name_zh: "服事多民族教会",
    name_fr: "Au service des Églises multiethniques",
    name_si: "බහු ජාතික සභාවලට සේවය",
    summary: "말씀의 설교와 티칭, 리더십 지원을 통해 다민족 교회가 건강하게 세워지고 선교적 공동체로 성장하도록 섬깁니다.",
    summary_en: "Serving multi-ethnic churches through preaching, teaching, and leadership support so they may grow as healthy missional communities.",
    summary_zh: "通过讲道、教导与领袖支持，服事多民族教会健康成长为宣教群体。",
    summary_fr: "Servir les Églises multiethniques par la prédication, l’enseignement et le soutien aux leaders, afin qu’elles grandissent comme des communautés missionnaires saines.",
    summary_si: "දේශනා, ඉගැන්වීම සහ නායකත්ව සහාය තුළින් බහු ජාතික සභා සෞඛ්‍ය සම්පන්න මිෂනාරි ප්‍රජාවන් ලෙස වර්ධනය වීමට සේවය කරමු.",
    image: ""
  }
];

/* ---------- 사역 소식 게시판 ----------
   새 글은 맨 위에 추가하세요.
   ministry: 위 MINISTRIES 의 id  (worship / tangtang / joy / coaching / churches)
   images: 여러 장 가능 ["images/a.jpg", "images/b.jpg"]
   다른 언어: title_en, excerpt_en, body_en ... (선택)
------------------------------------------- */
window.POSTS = [
  {
    id: "p1",
    ministry: "worship",
    date: "2026-10-23",
    title: "목요열방예배 — 함께 식탁을 나누고 예배합니다",
    title_en: "Thursday Worship — sharing a table, worshiping together",
    excerpt: "매주 목요일 저녁, 여러 나라에서 온 이웃들과 식사를 나누고 한 가족으로 예배합니다.",
    excerpt_en: "Every Thursday evening we share a meal with neighbors from many nations and worship as one family.",
    body: "매주 목요일 오후 6시 30분부터 함께 식사를 나누고, 7시 30분에 예배를 드립니다.\n처음 오시는 분도, 한국어가 서툰 분도 누구나 환영합니다.\n\n(예시 글입니다. 실제 사역 소식과 사진으로 교체해 주세요.)",
    body_en: "Every Thursday we share dinner from 6:30 PM and worship at 7:30 PM.\nFirst-time visitors and those still learning Korean are all welcome.\n\n(Sample post — please replace with real news and photos.)",
    images: []
  },
  {
    id: "p2",
    ministry: "joy",
    date: "2026-10-12",
    title: "기쁨의 학교 — 아이들과 함께한 가을 나들이",
    title_en: "School of Joy — an autumn outing with the children",
    excerpt: "다민족 가정의 아이들과 함께 자연 속에서 뛰놀며 웃음을 나눈 하루.",
    excerpt_en: "A day of playing and laughing in nature with children from multi-ethnic families.",
    body: "(예시 글입니다. 실제 사역 소식과 사진으로 교체해 주세요.)",
    body_en: "(Sample post — please replace with real news and photos.)",
    images: []
  },
  {
    id: "p3",
    ministry: "tangtang",
    date: "2026-09-28",
    title: "아바홈탕탕스쿨 — 말씀으로 세워지는 리더들",
    title_en: "Tangtang School — leaders built up by the Word",
    excerpt: "말씀과 성령 안에서 아버지의 마음을 품은 리더로 자라가는 훈련의 여정.",
    excerpt_en: "A training journey of growing into Father-hearted leaders in the Word and the Spirit.",
    body: "(예시 글입니다. 실제 사역 소식과 사진으로 교체해 주세요.)",
    body_en: "(Sample post — please replace with real news and photos.)",
    images: []
  },
  {
    id: "p4",
    ministry: "churches",
    date: "2026-09-14",
    title: "다민족교회 섬김 — 설교와 티칭 사역",
    title_en: "Serving multi-ethnic churches — preaching and teaching",
    excerpt: "다민족 교회가 건강한 선교적 공동체로 서도록 말씀과 리더십으로 섬깁니다.",
    excerpt_en: "Serving multi-ethnic churches with the Word and leadership so they stand as healthy missional communities.",
    body: "(예시 글입니다. 실제 사역 소식과 사진으로 교체해 주세요.)",
    body_en: "(Sample post — please replace with real news and photos.)",
    images: []
  }
];

/* ---------- 활동 사진 갤러리 ---------- */
window.GALLERY = [
  { image: "", caption: "목요열방예배", caption_en: "Thursday Worship", caption_zh: "周四列邦敬拜", caption_fr: "Culte du jeudi", caption_si: "බ්‍රහස්පතින්දා නමස්කාරය" },
  { image: "", caption: "함께하는 식탁", caption_en: "Shared table", caption_zh: "共享餐桌", caption_fr: "Repas partagé", caption_si: "එකට ආහාර" },
  { image: "", caption: "기쁨의 학교", caption_en: "School of Joy", caption_zh: "喜乐学校", caption_fr: "École de la joie", caption_si: "සතුටේ පාසල" },
  { image: "", caption: "아바홈탕탕스쿨", caption_en: "Tangtang School", caption_zh: "堂堂学校", caption_fr: "École Tangtang", caption_si: "ටැංටැං පාසල" },
  { image: "", caption: "자연 속 나들이", caption_en: "Outing in nature", caption_zh: "自然郊游", caption_fr: "Sortie nature", caption_si: "සොබාදහමේ චාරිකාව" },
  { image: "", caption: "다민족 가족", caption_en: "Multi-ethnic family", caption_zh: "多民族家庭", caption_fr: "Famille multiethnique", caption_si: "බහු ජාතික පවුල" }
];
