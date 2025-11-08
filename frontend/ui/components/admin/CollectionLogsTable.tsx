type CollectionLog = {
  id: string;
  executed_at: string;
  total_collected: number;
  language: string;
  operator: string;
};

type CollectionLogsTableProps = {
  logs: CollectionLog[];
};

export function CollectionLogsTable({ logs }: CollectionLogsTableProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">최근 수집 로그</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">시간</th>
              <th className="px-4 py-3 text-left">언어</th>
              <th className="px-4 py-3 text-left">수집 수</th>
              <th className="px-4 py-3 text-left">실행자</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {logs.map((log) => (
              <tr key={log.id} className="text-slate-600 dark:text-slate-300">
                <td className="px-4 py-3">{new Date(log.executed_at).toLocaleString()}</td>
                <td className="px-4 py-3 uppercase">{log.language}</td>
                <td className="px-4 py-3">{log.total_collected}</td>
                <td className="px-4 py-3">{log.operator}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  최근 수집 기록이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
