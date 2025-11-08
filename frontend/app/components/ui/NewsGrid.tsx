import { NewsCard } from "./NewsCard";
import type { NewsItem } from "@/ui/types/news";
import { AdSlot } from "@/ui/components/ads/AdSlot";
import type { Language } from "@/ui/constants/translations";

type NewsGridProps = {
  items: NewsItem[];
  onLike: (id: string) => void;
  onView: (id: string) => void;
  language?: Language;
};

export function NewsGrid({ items, onLike, onView, language = "ko" }: NewsGridProps) {
  const blocks: JSX.Element[] = [];

  const adLabel = language === "en" ? "Sponsored insight" : language === "ja" ? "スポンサー広告" : "스폰서 광고";

  items.forEach((item, index) => {
    blocks.push(<NewsCard key={item.id} item={item} onLike={onLike} onView={onView} language={language} />);

    if ((index + 1) % 3 === 0) {
      blocks.push(
        <div key={`inline-ad-${item.id}-${index}`} className="sm:col-span-2 xl:col-span-3">
          <AdSlot slotId={`inline-${index}`} format="inline" label={adLabel} />
        </div>
      );
    }
  });

  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">{blocks}</div>;
}

