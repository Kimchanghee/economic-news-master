import { CATEGORIES } from "@/ui/constants/categories";
import { getUIText, type Language } from "@/ui/constants/translations";

interface FooterProps {
  language?: Language;
}

export function Footer({ language = "ko" }: FooterProps) {
  const t = getUIText(language);

  const getCategoryLabel = (category: typeof CATEGORIES[0]) => {
    if (language === "en") return category.labelEn;
    if (language === "ja") return category.labelJa;
    return category.labelKo;
  };

  return (
    <footer className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 text-sm text-slate-500 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-300">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-blue-700 dark:text-blue-200">
            <span>📰</span>
            <span className="font-semibold">EconNews</span>
          </div>
          <p>{t.companyDescription}</p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">{t.categoriesTitle}</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {CATEGORIES.map((category) => (
              <li key={category.id} className="flex items-center gap-2">
                <span>{category.icon}</span>
                {getCategoryLabel(category)}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">{t.infoTitle}</h4>
          <ul className="space-y-2">
            <li>
              <a href="/api-docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2">
                <span>📡</span>
                <span>{t.apiDocs}</span>
              </a>
            </li>
            <li>{t.termsOfService}</li>
            <li>{t.privacyPolicy}</li>
            <li>{t.customerSupport}</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        © {new Date().getFullYear()} EconNews. {t.allRightsReserved}
      </div>
    </footer>
  );
}
