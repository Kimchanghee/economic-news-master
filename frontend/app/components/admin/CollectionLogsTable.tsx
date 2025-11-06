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
    <div className="rounded-2xl bg-white p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">최근 수집 로그</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">시간</th>
              <th className="px-4 py-3 text-left">언어</th>
              <th className="px-4 py-3 text-left">수집 수</th>
              <th className="px-4 py-3 text-left">실행자</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log) => (
              <tr key={log.id} className="text-gray-600">
                <td className="px-4 py-3">{new Date(log.executed_at).toLocaleString()}</td>
                <td className="px-4 py-3 uppercase">{log.language}</td>
                <td className="px-4 py-3">{log.total_collected}</td>
                <td className="px-4 py-3">{log.operator}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                  아직 수집 로그가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

