type DashboardHeaderProps = {
  onLogout: () => void;
};

export function DashboardHeader({ onLogout }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
          Newsroom console
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">편집국 운영 현황</h1>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          실시간 수집 상태, 카테고리 분포, 기사 관리 기능을 한곳에서 확인하세요.
        </p>
      </div>
      <button
        onClick={onLogout}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-400 hover:text-red-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-red-400/70 dark:hover:text-red-300"
      >
        로그아웃
      </button>
    </header>
  );
}
