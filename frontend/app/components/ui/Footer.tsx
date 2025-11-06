import { CATEGORIES } from "@/app/constants/categories";

export function Footer() {
  return (
    <footer className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-sm text-slate-400">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-blue-200">
            <span>💰</span>
            <span className="font-semibold">EconNews</span>
          </div>
          <p>
            EconNews는 글로벌 경제 뉴스를 한곳에 모아 제공하는 애그리게이터 서비스입니다. 빠른 의사결정을 위한 요약, 필터, 통계를 제공합니다.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-white">카테고리</h4>
          <ul className="space-y-2 text-slate-300">
            {CATEGORIES.map((category) => (
              <li key={category.id}>{category.label}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-white">정보</h4>
          <ul className="space-y-2">
            <li>이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>고객센터: support@econnews.dev</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} EconNews. All rights reserved.
      </div>
    </footer>
  );
}

