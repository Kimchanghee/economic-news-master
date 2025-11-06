type DashboardHeaderProps = {
  onLogout: () => void;
};

export function DashboardHeader({ onLogout }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">뉴스 관리 시스템</h1>
        <p className="text-sm text-gray-500">데이터 통계, 수집 상태, 뉴스 리스트를 한눈에 확인하세요.</p>
      </div>
      <button
        onClick={onLogout}
        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
      >
        로그아웃
      </button>
    </header>
  );
}

