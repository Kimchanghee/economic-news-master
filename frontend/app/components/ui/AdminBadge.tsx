export function AdminBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-sm text-blue-100">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-xl">🛠️</span>
      <div>
        <p className="font-semibold text-blue-100">실시간 대시보드</p>
        <p className="text-xs text-blue-200">관리자 페이지에서 뉴스 데이터와 수집 현황을 관리하세요.</p>
      </div>
    </div>
  );
}

