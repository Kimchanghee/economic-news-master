type CollectButtonProps = {
  onCollect: () => void;
};

export function CollectButton({ onCollect }: CollectButtonProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-blue-600/10 via-slate-100 to-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:from-blue-500/10 dark:via-transparent lg:col-span-2">
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">수집 제어</h3>
      <p className="mb-5 text-sm text-slate-500 dark:text-slate-300">최신 헤드라인을 즉시 갱신하고 로그를 확인하세요.</p>
      <button
        onClick={onCollect}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        지면 업데이트 실행
      </button>
    </div>
  );
}
