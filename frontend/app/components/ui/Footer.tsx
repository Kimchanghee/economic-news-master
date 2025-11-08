import { CATEGORIES } from "@/ui/constants/categories";

export function Footer() {
  return (
    <footer className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 text-sm text-slate-500 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-300">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-blue-700 dark:text-blue-200">
            <span>📰</span>
            <span className="font-semibold">EconNews</span>
          </div>
          <p>
            아시아 경제 뉴스를 실시간으로 제공하는 디지털 뉴스룸입니다. 아시아 주요 국가의 시장, 통화, 정책, 기술 뉴스를 한 번에 확인하세요.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">카테고리</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {CATEGORIES.map((category) => (
              <li key={category.id} className="flex items-center gap-2">
                <span>{category.icon}</span>
                {category.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">정보</h4>
          <ul className="space-y-2">
            <li>
              <a href="/api-docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2">
                <span>📡</span>
                <span>API 문서</span>
              </a>
            </li>
            <li>이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>고객센터 · support@econnews.dev</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        © {new Date().getFullYear()} EconNews. All rights reserved.
      </div>
    </footer>
  );
}
