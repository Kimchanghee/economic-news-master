import { Trash2 } from "lucide-react";

type NewsItem = {
  id: string;
  title: string;
  source: string;
  category: string;
  views: number;
  likes: number;
  published_at: string;
};

type NewsManagementTableProps = {
  items: NewsItem[];
  onDelete: (id: string) => void;
};

export function NewsManagementTable({ items, onDelete }: NewsManagementTableProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">기사 목록</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">총 {items.length}건</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">제목</th>
              <th className="px-4 py-3 text-left">출처</th>
              <th className="px-4 py-3 text-left">카테고리</th>
              <th className="px-4 py-3 text-left">조회</th>
              <th className="px-4 py-3 text-left">좋아요</th>
              <th className="px-4 py-3 text-right">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {items.map((item) => (
              <tr key={item.id} className="text-slate-600 dark:text-slate-200">
                <td className="max-w-[280px] truncate px-4 py-3 font-medium text-slate-900 dark:text-white">
                  {item.title}
                </td>
                <td className="px-4 py-3">{item.source}</td>
                <td className="px-4 py-3 uppercase">{item.category}</td>
                <td className="px-4 py-3">{item.views}</td>
                <td className="px-4 py-3">{item.likes}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="inline-flex items-center gap-1 rounded-full border border-red-200/80 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-500/50 dark:text-red-200 dark:hover:bg-red-500/10"
                  >
                    <Trash2 size={14} />
                    삭제
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  표시할 기사가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
