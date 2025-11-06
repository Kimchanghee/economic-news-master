# EconNews — Economic News Aggregator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.9+-blue)](https://www.python.org/)

EconNews는 FastAPI 백엔드와 Next.js 프론트엔드로 구성된 다국어 경제 뉴스 애그리게이터입니다. 글로벌 RSS 데이터에서 경제 관련 헤드라인을 수집하고, Gemini AI 요약과 Firestore 저장을 지원합니다.

## Features

- **Multi-language Support**: 15개 언어 지원 (en, ko, ja, zh, es, fr, de, it, pt, ru, ar, hi, id, vi, th)
- **Real-time News Aggregation**: RSS 피드 기반 자동 뉴스 수집
- **AI-Powered Summarization**: Google Gemini API를 활용한 뉴스 요약
- **SEO & AEO Optimized**: 완벽한 메타 태그, 구조화 데이터, sitemap/robots
- **PWA Support**: Progressive Web App으로 모바일 앱처럼 사용 가능
- **Admin Dashboard**: 뉴스 관리 및 통계 대시보드
- **Dark/Light Theme**: 뉴스 포털(다크), 관리자(라이트) 테마

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Data Fetching**: SWR
- **Language**: TypeScript

### Backend
- **Framework**: FastAPI
- **Database**: Firestore (optional, local JSON fallback)
- **AI**: Google Gemini API
- **Authentication**: JWT

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.9+
- (Optional) Google Cloud account for Firestore
- (Optional) Google AI Studio account for Gemini API

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NEWS.git
   cd NEWS
   ```

2. **Setup Backend**
   ```bash
   cd backend
   python -m venv .venv

   # Windows
   .venv\Scripts\activate

   # Linux/Mac
   source .venv/bin/activate

   pip install -r requirements.txt
   ```

3. **Configure Backend Environment**

   Create `backend/.env` file:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   GCP_PROJECT_ID=your_gcp_project_id
   JWT_SECRET_KEY=your_secret_key_here
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123
   ENVIRONMENT=development
   DEBUG=true
   ```

4. **Run Backend**
   ```bash
   uvicorn main:app --reload
   # API available at http://localhost:8000
   ```

5. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Configure Frontend Environment**

   Create `frontend/.env.local` file:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

7. **Run Frontend**
   ```bash
   npm run dev
   # App available at http://localhost:3000
   ```

## Project Structure

```
NEWS/
├── backend/                 # FastAPI backend
│   ├── config/             # Configuration files
│   ├── routers/            # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   ├── data/               # Local data storage
│   ├── main.py             # FastAPI app entry point
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container
│
├── frontend/               # Next.js frontend
│   ├── app/               # Next.js 14 App Router
│   │   ├── [lang]/       # Localized pages
│   │   ├── admin/        # Admin dashboard
│   │   ├── news/         # News pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── sitemap.ts    # Dynamic sitemap
│   │   ├── robots.ts     # Robots.txt
│   │   └── manifest.ts   # PWA manifest
│   ├── public/           # Static assets
│   ├── package.json      # Node dependencies
│   ├── SEO_CHECKLIST.md  # SEO implementation guide
│   └── Dockerfile        # Frontend container
│
├── docs/                  # Documentation
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
│
├── README.md             # This file
├── CONTRIBUTING.md       # Contribution guide
└── LICENSE               # MIT License
```

## API Endpoints

### Public Endpoints
- `GET /news` - Get news list with filters
- `GET /news/{id}` - Get single news article
- `POST /news/{id}/like` - Like news article
- `POST /news/{id}/view` - Increment view count

### Admin Endpoints (Requires JWT)
- `POST /admin/login` - Admin authentication
- `GET /admin/dashboard` - Get dashboard statistics
- `POST /admin/collect` - Trigger news collection
- `DELETE /admin/news/{id}` - Delete news article

### API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Multi-language Support

EconNews supports 15 languages with dedicated landing pages:

| Language | Code | Route |
|----------|------|-------|
| English | en | /en |
| Korean | ko | /ko |
| Japanese | ja | /ja |
| Chinese | zh | /zh |
| Spanish | es | /es |
| French | fr | /fr |
| German | de | /de |
| Italian | it | /it |
| Portuguese | pt | /pt |
| Russian | ru | /ru |
| Arabic | ar | /ar |
| Hindi | hi | /hi |
| Indonesian | id | /id |
| Vietnamese | vi | /vi |
| Thai | th | /th |

Each language page includes:
- Localized meta tags and Open Graph
- FAQ schema for AEO
- hreflang alternates
- Localized content

## SEO & AEO Features

EconNews implements comprehensive SEO and Answer Engine Optimization:

- **Dynamic Sitemap**: Auto-generated with language alternates
- **Robots.txt**: AI crawler-friendly rules (GPTBot, Google-Extended, Claude, CCBot)
- **Structured Data**: Organization, WebSite, NewsArticle, FAQ, BreadcrumbList schemas
- **Meta Tags**: Complete Open Graph and Twitter Card support
- **PWA Manifest**: Full Progressive Web App support
- **hreflang Tags**: Proper multi-language SEO

See [frontend/SEO_CHECKLIST.md](frontend/SEO_CHECKLIST.md) for details.

## Docker Support

Build and run with Docker:

### Backend
```bash
cd backend
docker build -t econnews-backend .
docker run -p 8000:8000 --env-file .env econnews-backend
```

### Frontend
```bash
cd frontend
docker build -t econnews-frontend .
docker run -p 3000:3000 econnews-frontend
```

### Docker Compose (Coming Soon)
```bash
docker-compose up
```

## Development

### Backend Development
```bash
cd backend
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development
```bash
cd frontend
npm run dev
# or
npm run build && npm start  # Production build
```

### Linting
```bash
# Frontend
cd frontend
npm run lint

# Backend
cd backend
black .
flake8 .
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Firestore production deployment
- [ ] Elasticsearch integration for advanced search
- [ ] User authentication and favorites
- [ ] Real-time news updates via WebSocket
- [ ] Mobile apps (React Native)
- [ ] Newsletter subscription
- [ ] Social media sharing analytics
- [ ] GraphQL API support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/NEWS/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/NEWS/discussions)
- **Email**: support@econnews.dev

## Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) - Modern Python web framework
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Google Gemini](https://ai.google.dev/) - AI summarization
- [Firestore](https://firebase.google.com/docs/firestore) - Cloud database

---

Made with ❤️ by the EconNews Team
