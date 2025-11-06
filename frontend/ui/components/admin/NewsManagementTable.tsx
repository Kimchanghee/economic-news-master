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
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">뉴스 목록</h3>
        <span className="text-sm text-gray-500">총 {items.length}건</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">제목</th>
              <th className="px-4 py-3 text-left">출처</th>
              <th className="px-4 py-3 text-left">카테고리</th>
              <th className="px-4 py-3 text-left">조회수</th>
              <th className="px-4 py-3 text-left">좋아요</th>
              <th className="px-4 py-3 text-right">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr key={item.id} className="text-gray-600">
                <td className="max-w-[280px] truncate px-4 py-3 font-medium text-gray-900">{item.title}</td>
                <td className="px-4 py-3">{item.source}</td>
                <td className="px-4 py-3 uppercase">{item.category}</td>
                <td className="px-4 py-3">{item.views}</td>
                <td className="px-4 py-3">{item.likes}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="inline-flex items-center gap-1 rounded-lg bg-red-100 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-200"
                  >
                    <Trash2 size={14} />
                    삭제
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                  표시할 뉴스가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

