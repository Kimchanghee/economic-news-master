import { LocaleSEO, CategorySEO } from "./types";

export const svSEO: LocaleSEO = {
  title: "Ekonominyheter - Globala Ekonomiska Uppdateringar i Realtid",
  description: "AI-driven realtidskurering av ekonominyheter. Få de senaste nyheterna om företag, finans, teknologi, kryptovaluta och mer på 20 språk.",
  keywords: ["ekonominyheter", "realtidsnyheter", "global ekonomi", "finansnyheter", "företagsnyheter", "aktiemarknaden", "kryptovaluta", "tekniknyheter", "AI-nyhetskurering", "flerspråkiga nyheter"],
  ogTitle: "Ekonominyheter - Globala Uppdateringar i Realtid",
  ogDescription: "AI-driven realtidskurering av ekonominyheter på 20 språk.",
  ogType: "website",
  ogImage: "/og-image-sv.jpg",
  ogUrl: "https://economic-news.com/sv",
  ogSiteName: "Ekonominyheter",
  twitterCard: "summary_large_image",
  twitterTitle: "Ekonominyheter - Globala Uppdateringar",
  twitterDescription: "Ekonominyheter i realtid på 20 språk",
  twitterImage: "/twitter-card-sv.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/sv",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "sv",
  locale: "sv_SE",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "pl_PL", "tr_TR", "el_GR"],
};

export const svCategorySEO: CategorySEO = {
  all: { title: "Alla Ekonominyheter", description: "Bläddra bland alla kategorier av de senaste ekonominyheterna", keywords: ["alla nyheter", "ekonomisk översikt", "ekonominyheter i realtid"] },
  business: { title: "Företagsnyheter", description: "Globala företagstrender, ledningsstrategier och branschanalys", keywords: ["företag", "företagsnyheter", "ledning", "branschtrender", "startups"] },
  finance: { title: "Finansnyheter", description: "Uppdateringar om aktiemarknader, obligationer, investeringar, bank och försäkring", keywords: ["finans", "aktier", "investering", "obligationer", "bank", "värdepapper"] },
  technology: { title: "Tekniknyheter", description: "Artificiell intelligens, big data, molnberäkning, cybersäkerhet och teknologiska innovationer", keywords: ["teknologi", "IT", "artificiell intelligens", "AI", "big data", "moln"] },
  crypto: { title: "Kryptovaluta Nyheter", description: "Bitcoin, Ethereum, blockchain, NFT och DeFi-marknader", keywords: ["kryptovaluta", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Marknadsnyheter", description: "Realtidsuppdateringar om börser, valutakurser, råvaror och terminer", keywords: ["marknader", "börs", "valutor", "råvaror", "terminer"] },
  economy: { title: "Ekonominyheter", description: "Makroekonomiska indikatorer, ekonomisk politik, handel och industripolitik", keywords: ["ekonomi", "makroekonomi", "ekonomisk politik", "handel", "BNP"] },
  global: { title: "Globala Nyheter", description: "Analys av ekonomiska trender per land, internationell handel och globala ekonomiska frågor", keywords: ["global", "världsekonomi", "internationell handel", "utländsk ekonomi"] },
};

