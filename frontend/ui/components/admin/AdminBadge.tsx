export function AdminBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-lg text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
        🛠
      </span>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">관리자 전용</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">대시보드에서 기사와 수집 상태를 관리하세요.</p>
      </div>
    </div>
  );
}
