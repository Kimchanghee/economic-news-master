import { Heart, Newspaper } from "lucide-react";
import { CATEGORIES } from "@/ui/constants/categories";
import { getUIText, type Language } from "@/ui/constants/translations";
import type { NewsItem } from "@/ui/types/news";

type NewsCardProps = {
  item: NewsItem;
  onLike: (id: string) => void;
  onView: (id: string) => void;
  language?: Language;
};

export function NewsCard({ item, onLike, onView, language = "ko" }: NewsCardProps) {
  const t = getUIText(language);

  const published = new Date(item.published_at);
  const locale = language === "en" ? "en-US" : language === "ja" ? "ja-JP" : "ko-KR";
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(published);

  const category = CATEGORIES.find((cat) => cat.id === item.category);

  // Get localized content
  const getLocalizedTitle = () => {
    if (language === "en" && item.title_en) return item.title_en;
    if (language === "ja" && item.title_ja) return item.title_ja;
    if (language === "ko" && item.title_ko) return item.title_ko;
    return item.title;
  };

  const getLocalizedSummary = () => {
    if (language === "en" && item.summary_en) return item.summary_en;
    if (language === "ja" && item.summary_ja) return item.summary_ja;
    if (language === "ko" && item.summary_ko) return item.summary_ko;
    return item.summary;
  };

  const getCategoryLabel = () => {
    if (!category) return language === "en" ? "News" : language === "ja" ? "ニュース" : "뉴스";
    if (language === "en") return category.labelEn;
    if (language === "ja") return category.labelJa;
    return category.labelKo;
  };

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
          {getCategoryLabel()}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
          <span className="font-semibold text-blue-600 dark:text-blue-300">
            {language === "en" ? "BREAKING" : language === "ja" ? "速報" : "속보"}
          </span>
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">{getLocalizedTitle()}</h3>
        <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{getLocalizedSummary()}</p>
        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
              {item.source}
            </span>
            <span>{item.views} {t.views}</span>
            <span>{item.likes} {t.likes}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={handleRead}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <Newspaper size={16} />
              {t.readMore}
            </button>
            <button
              onClick={() => onLike(item.id)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Heart size={16} />
              {language === "en" ? "Save" : language === "ja" ? "保存" : "스크랩"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
