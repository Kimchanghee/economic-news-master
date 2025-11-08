import { Heart, Newspaper } from "lucide-react";
import { CATEGORIES } from "@/ui/constants/categories";
import type { NewsItem } from "@/ui/types/news";

type NewsCardProps = {
  item: NewsItem;
  onLike: (id: string) => void;
  onView: (id: string) => void;
};

export function NewsCard({ item, onLike, onView }: NewsCardProps) {
  const published = new Date(item.published_at);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(published);

  const category = CATEGORIES.find((cat) => cat.id === item.category);

  const handleRead = () => {
    onView(item.id);
    window.open(item.link, "_blank", "noopener");
  };

  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-slate-900 shadow-lg dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-white">
      <div className="relative h-48 overflow-hidden">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-4xl dark:bg-slate-800">
            {category?.icon ?? "📰"}
          </div>
        )}
        <span className="badge absolute right-4 top-4 bg-blue-600/90 text-white shadow dark:bg-blue-500/90">
          {category?.label ?? "뉴스"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
          <span className="font-semibold text-blue-600 dark:text-blue-300">속보</span>
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">{item.title}</h3>
        <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
              {item.source}
            </span>
            <span>조회 {item.views}</span>
            <span>좋아요 {item.likes}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={handleRead}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <Newspaper size={16} />
              전체 기사 보기
            </button>
            <button
              onClick={() => onLike(item.id)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Heart size={16} />
              스크랩
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
