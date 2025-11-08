# Git Commands for SEO/AEO Implementation

## 변경사항 확인
```powershell
git status
```

## 변경사항 스테이징
```powershell
git add frontend/ui/seo
git add frontend/app/[lang]/layout.tsx
git add frontend/app/robots.ts
git add frontend/app/sitemap.ts
git add frontend/ui/components/common/StructuredData.tsx
git add frontend/SEO_AEO_IMPLEMENTATION.md
git add GIT_COMMANDS.md
```

## 커밋
```powershell
git commit -m "feat: 20개 언어 SEO/AEO 최적화 구현

- 각 언어별 SEO 메타데이터 파일 생성 (20개 언어)
- Schema.org 구조화된 데이터 (JSON-LD) 추가
- Organization, Website, FAQ, NewsArticle, Breadcrumb 스키마
- 다국어 hreflang 태그 및 동적 sitemap 생성
- Open Graph 및 Twitter Card 메타데이터 완성
- robots.txt 및 canonical URL 설정
- Next.js Metadata API 통합
- AEO (Answer Engine Optimization) 지원

Co-authored-by: AI Assistant <assistant@cursor.com>"
```

## 푸시
```powershell
git push origin main
```

## 전체 명령어 (한번에 실행)
```powershell
git add frontend/ui/seo frontend/app/[lang]/layout.tsx frontend/app/robots.ts frontend/app/sitemap.ts frontend/ui/components/common/StructuredData.tsx frontend/SEO_AEO_IMPLEMENTATION.md GIT_COMMANDS.md; git commit -m "feat: 20개 언어 SEO/AEO 최적화 구현"; git push origin main
```

