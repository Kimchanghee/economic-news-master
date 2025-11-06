import { Newspaper } from "lucide-react";
import { CATEGORIES } from "@/ui/constants/categories";
import type { NewsItem } from "@/ui/types/news";

type NewsCardProps = {
  item: NewsItem;
  onLike: (id: string) => void;
  onView: (id: string) => void;
};

export function NewsCard({ item, onLike, onView }: NewsCardProps) {
  const published = new Date(item.published_at);
  const formattedDate = `${published.getFullYear()}.${String(published.getMonth() + 1).padStart(2, "0")}.${String(
    published.getDate()
  ).padStart(2, "0")}`;

  const handleRead = () => {
    onView(item.id);
    window.open(item.link, "_blank", "noopener");
  };

  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
      <div className="relative h-48 overflow-hidden">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-800 text-4xl">
            {CATEGORIES.find((cat) => cat.id === item.category)?.icon ?? "📰"}
          </div>
        )}
        <span className="badge absolute right-3 top-3 bg-blue-600/80 text-white">
          {CATEGORIES.find((cat) => cat.id === item.category)?.label ?? "뉴스"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <header className="space-y-2">
          <h3 className="line-clamp-2 text-xl font-semibold text-white">{item.title}</h3>
          <p className="line-clamp-3 text-sm text-slate-300">{item.summary}</p>
        </header>

        <div className="mt-auto space-y-4 text-sm text-slate-400">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-200">{item.source}</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
            <span>조회수 {item.views}</span>
            <span>좋아요 {item.likes}</span>
          </div>
          <button
            onClick={handleRead}
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            <Newspaper size={16} />
            기사 읽기
          </button>
          <button
            onClick={() => onLike(item.id)}
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
          >
            ❤️ 좋아요
          </button>
        </div>
      </div>
    </article>
  );
}

