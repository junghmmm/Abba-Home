# Abba Home Here & Now — 홈페이지

안산 다문화 선교 공동체 **아바홈히어랜나우** 소개 사이트 (정적 HTML · 빌드 불필요)

## 페이지
| 파일 | 내용 |
|---|---|
| `index.html` | 홈 — 소개, 목요열방예배 안내, 사역 카드, 사진, 최근 소식 |
| `about.html` | 소개 — 비전 · 사명 · 핵심가치(Call/Abide/Go) · 성경적 토대 · 대표 |
| `ministries.html` | 5개 사역 상세 |
| `news.html` | 사역 소식 게시판(사역별 필터, 카드/목록 보기) + 갤러리 |
| `contact.html` | 일반 문의 / 사역 협력 문의 폼 + 후원 안내 |

## 콘텐츠 수정 — `data.js` 한 파일만 고치면 됩니다
- **사진 추가**: `images` 폴더를 만들어 사진을 넣고 (GitHub에서 Add file → Upload files 로 images 폴더째 끌어다 놓기) `image: "images/파일명.jpg"` 로 적기
- **소식 추가**: `POSTS` 맨 위에 항목 하나 복사해서 추가 (`ministry` 는 worship / tangtang / joy / coaching / churches 중 하나)
- **갤러리**: `GALLERY` 에 `{ image: "images/xxx.jpg", caption: "설명" }` 추가
- **홈 대표 사진**: `index.html` 의 `<div class="hero-bg">` 를
  `<div class="hero-bg photo" style="background-image:url('images/hero.jpg')">` 로 변경
- 사진은 가로 1600px 이하, JPG로 줄여서 올리면 빠릅니다.

## 다국어 (한국어 · English · 中文 · Français · සිංහල)
- 오른쪽 위 🌐 버튼으로 언어 선택 (선택은 브라우저에 기억됨, 링크에 `?lang=en` 붙여 공유 가능)
- 고정 문구 번역은 `i18n.js`, 사역/소식/사진 설명 번역은 `data.js` 의 `_en / _zh / _fr / _si` 필드
- 소식 글을 한국어만 적으면 다른 언어에서도 한국어로 보입니다. `title_en` 등만 적어두면 영어가 기본 대체어로 쓰입니다.

## 문의 폼 → abbahomeherennow@gmail.com
[FormSubmit](https://formsubmit.co) 을 사용합니다 (무료, 서버 불필요).
**배포 후 첫 문의를 한 번 보내면** abbahomeherennow@gmail.com 으로 "Activate Form" 메일이 옵니다.
그 메일의 버튼을 한 번 눌러야 이후 문의가 정상적으로 전달됩니다. (스팸함도 확인)

## 배포 (GitHub + Vercel)
1. GitHub에서 새 저장소 생성 (예: `abbahome`) → 이 폴더 전체 업로드
   ```bash
   git init && git add . && git commit -m "Abba Home website"
   git branch -M main
   git remote add origin https://github.com/<계정>/abbahome.git
   git push -u origin main
   ```
2. vercel.com → **Add New… → Project** → 위 저장소 **Import**
3. Framework Preset: **Other**, Build Command 비움, Output Directory 비움 → **Deploy**
4. 이후 GitHub에 수정본을 push 하면 자동 재배포됩니다.
5. 도메인 연결: Vercel 프로젝트 → Settings → Domains
