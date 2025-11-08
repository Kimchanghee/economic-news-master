# Sitemap 타입 오류 수정

## 문제
Next.js 14.1.0의 `MetadataRoute.Sitemap` 타입에 `alternates` 속성이 존재하지 않아 빌드 실패

## 해결
`frontend/app/sitemap.ts`에서 `alternates` 속성 제거

## Git 명령어 (PowerShell)

```powershell
git add frontend/app/sitemap.ts
git commit -m "fix: sitemap.ts 타입 오류 수정 - alternates 속성 제거"
git push origin main
```

## 빠른 실행

```powershell
git add frontend/app/sitemap.ts; git commit -m "fix: sitemap.ts 타입 오류 수정"; git push origin main
```

## 변경 내용
- sitemap의 각 URL 객체에서 `alternates` 속성 제거
- hreflang 대체 언어 정보는 메타데이터 레벨에서 처리
- sitemap은 단순히 URL 목록만 제공

