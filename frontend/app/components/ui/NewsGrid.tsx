import { NewsCard } from "./NewsCard";
import type { NewsItem } from "@/ui/types/news";

type NewsGridProps = {
  items: NewsItem[];
  onLike: (id: string) => void;
  onView: (id: string) => void;
};

export function NewsGrid({ items, onLike, onView }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} onLike={onLike} onView={onView} />
      ))}
    </div>
  );
}

