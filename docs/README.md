# EconNews — Economic News Aggregator

EconNews는 FastAPI 백엔드와 Next.js 프론트엔드로 구성된 경제 뉴스 애그리게이터입니다. 글로벌 RSS 데이터에서 경제 관련 헤드라인을 수집하고, Gemini 요약(선택)과 Firestore 저장(선택)을 지원합니다. 다크 테마 뉴스 포털과 라이트 테마 관리자 대시보드를 제공합니다.

## 구성 요소

- **backend/** — FastAPI, Feedparser, Firestore 연동(선택), Gemini Summarizer(선택)
- **frontend/** — Next.js 14 App Router, Tailwind CSS, SWR 기반 데이터 페칭
- **docs/** — 운영 및 개발 문서

각각의 서비스는 Dockerfile을 사용해 독립적으로 컨테이너화할 수 있습니다.

## 빠른 시작

```bash
# 리포지토리 초기화 (사용자 프롬프트 참고)
mkdir economic-news && cd economic-news

# 백엔드 의존성 설치
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# 환경 변수 설정 (.env 파일은 이미 템플릿 제공)
uvicorn main:app --reload

# 새 터미널에서 프론트엔드 실행
cd ../frontend
npm install
npm run dev
```

## 환경 변수

### 백엔드 (`backend/.env`)

| 키 | 설명 |
| --- | --- |
| `GEMINI_API_KEY` | Google Generative AI 키 (없으면 요약 기능 비활성) |
| `GCP_PROJECT_ID` | Firestore 프로젝트 ID (없으면 로컬 JSON 저장소 사용) |
| `JWT_SECRET_KEY` | JWT 서명 시크릿 |
| `ADMIN_EMAIL` | 관리자 이메일 |
| `ADMIN_PASSWORD` | 관리자 비밀번호 |
| `ENVIRONMENT` | 환경 이름 (development, production 등) |
| `DEBUG` | 디버그 모드 플래그 |

### 프론트엔드 (`frontend/.env.local`)

| 키 | 기본값 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | `http://localhost:8000` | 백엔드 API 엔드포인트 |
| `NEXT_PUBLIC_SITE_URL` | `https://econnews.example.com` | SEO용 정규 사이트 URL (sitemap/robots에서 사용) |

## API 개요

- `GET /news` — 카테고리/언어 필터로 뉴스 목록 조회
- `POST /news/{id}/like` — 좋아요 증가
- `POST /news/{id}/view` — 조회수 증가
- `POST /admin/login` — 관리자 인증 (JWT 토큰 발급)
- `GET /admin/dashboard` — 통계 및 최근 수집 로그 조회
- `POST /admin/collect` — 수집 작업 즉시 실행
- `DELETE /admin/news/{id}` — 뉴스 삭제

자세한 경로 및 스키마는 FastAPI 자동 문서(`/docs`, `/redoc`)에서 확인할 수 있습니다.

## UI/UX 특징

### 뉴스 포털 (Dark Theme)
- 다크 슬레이트 팔레트, 블루 강조
- 반응형 카드 그리드 (1→2→3 컬럼)
- 호버 애니메이션, 카테고리/언어 필터, 좋아요·조회수 액션

### 관리자 대시보드 (Light Theme)
- 로그인 카드 + 블루 그래디언트 배경
- 통계 카드, 카테고리 분포 그래프, 수집 관리, 로그 테이블
- 뉴스 관리 탭: 목록, 조회/좋아요 정보, 삭제 액션

## 테스트 및 검증

- FastAPI: `pytest` 또는 `httpx` 기반 통합 테스트 추가 가능
- Next.js: `npm run lint`로 기본 린트 수행
- Docker: `docker build` 명령으로 각 서비스 이미지 생성

## SEO & AEO 자산

- `/[lang]` (15개 언어: en, ko, ja, zh, es, fr, de, it, pt, ru, ar, hi, id, vi, th) 경로에 전용 랜딩 페이지 제공
- `app/[lang]/locales/` 디렉터리에서 언어별 콘텐츠를 모듈로 관리해 번역과 유지보수 용이
- `app/sitemap.ts`에서 정규 URL과 언어별 페이지를 sitemap으로 노출
- `app/robots.ts`에서 `NEXT_PUBLIC_SITE_URL` 기반의 `sitemap.xml`과 크롤링 정책을 정의
- 모든 언어 페이지에 FAQ JSON-LD 스키마를 포함하여 답변형 엔진 친화적으로 구성

## 폴더 구조

```
economic-news/
├─ backend/
│  ├─ config/
│  ├─ routers/
│  ├─ services/
│  ├─ utils/
│  ├─ data/
│  ├─ main.py
│  └─ Dockerfile
├─ frontend/
│  ├─ app/
│  ├─ package.json
│  └─ Dockerfile
└─ docs/
   └─ README.md
```

## 향후 확장 아이디어

1. Firestore 인증키를 사용한 배포 및 컬렉션 보안 규칙 강화
2. Next.js 서버 액션을 활용한 백엔드 프록시 (`/api`) 구현
3. 뉴스 카드 즐겨찾기, 검색 기능 추가
4. Elasticsearch 연동으로 전문 검색 강화

---

문의: `support@econnews.dev`
