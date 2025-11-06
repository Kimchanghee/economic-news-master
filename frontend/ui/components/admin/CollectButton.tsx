type CollectButtonProps = {
  onCollect: () => void;
};

export function CollectButton({ onCollect }: CollectButtonProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow lg:col-span-2">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">수집 관리</h3>
      <p className="mb-4 text-sm text-gray-500">최신 뉴스를 즉시 수집하고 대시보드를 업데이트합니다.</p>
      <button
        onClick={onCollect}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        지금 수집하기
      </button>
    </div>
  );
}

