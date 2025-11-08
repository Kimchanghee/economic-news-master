import { LocaleSEO, CategorySEO } from "./types";

export const plSEO: LocaleSEO = {
  title: "Wiadomości Ekonomiczne - Globalne Aktualizacje Ekonomiczne w Czasie Rzeczywistym",
  description: "Kuracja wiadomości ekonomicznych w czasie rzeczywistym napędzana przez AI. Otrzymuj najnowsze wiadomości o biznesie, finansach, technologii, kryptowalutach i więcej w 20 językach.",
  keywords: ["wiadomości ekonomiczne", "wiadomości w czasie rzeczywistym", "globalna ekonomia", "wiadomości finansowe", "wiadomości biznesowe", "giełda", "kryptowaluta", "wiadomości technologiczne", "kuracja wiadomości AI", "wielojęzyczne wiadomości"],
  ogTitle: "Wiadomości Ekonomiczne - Globalne Aktualizacje w Czasie Rzeczywistym",
  ogDescription: "Kuracja wiadomości ekonomicznych w czasie rzeczywistym napędzana przez AI w 20 językach.",
  ogType: "website",
  ogImage: "/og-image-pl.jpg",
  ogUrl: "https://economic-news.com/pl",
  ogSiteName: "Wiadomości Ekonomiczne",
  twitterCard: "summary_large_image",
  twitterTitle: "Wiadomości Ekonomiczne - Globalne Aktualizacje",
  twitterDescription: "Wiadomości ekonomiczne w czasie rzeczywistym w 20 językach",
  twitterImage: "/twitter-card-pl.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/pl",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "pl",
  locale: "pl_PL",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "tr_TR", "el_GR"],
};

export const plCategorySEO: CategorySEO = {
  all: { title: "Wszystkie Wiadomości Ekonomiczne", description: "Przeglądaj wszystkie kategorie najnowszych wiadomości ekonomicznych", keywords: ["wszystkie wiadomości", "przegląd ekonomiczny", "wiadomości ekonomiczne w czasie rzeczywistym"] },
  business: { title: "Wiadomości Biznesowe", description: "Globalne trendy korporacyjne, strategie zarządzania i analiza branżowa", keywords: ["biznes", "wiadomości korporacyjne", "zarządzanie", "trendy branżowe", "startupy"] },
  finance: { title: "Wiadomości Finansowe", description: "Aktualizacje dotyczące rynków akcji, obligacji, inwestycji, bankowości i ubezpieczeń", keywords: ["finanse", "akcje", "inwestycje", "obligacje", "bankowość", "papiery wartościowe"] },
  technology: { title: "Wiadomości Technologiczne", description: "Sztuczna inteligencja, big data, przetwarzanie w chmurze, cyberbezpieczeństwo i innowacje technologiczne", keywords: ["technologia", "IT", "sztuczna inteligencja", "AI", "big data", "chmura"] },
  crypto: { title: "Wiadomości o Kryptowalutach", description: "Bitcoin, Ethereum, blockchain, NFT i rynki DeFi", keywords: ["kryptowaluta", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Wiadomości Rynkowe", description: "Aktualizacje w czasie rzeczywistym dotyczące giełd, kursów walut, towarów i kontraktów terminowych", keywords: ["rynki", "giełda", "waluty", "towary", "kontrakty terminowe"] },
  economy: { title: "Wiadomości Ekonomiczne", description: "Wskaźniki makroekonomiczne, polityka ekonomiczna, handel i polityka przemysłowa", keywords: ["ekonomia", "makroekonomia", "polityka ekonomiczna", "handel", "PKB"] },
  global: { title: "Wiadomości Globalne", description: "Analiza trendów ekonomicznych według kraju, handel międzynarodowy i globalne problemy ekonomiczne", keywords: ["globalny", "światowa ekonomia", "handel międzynarodowy", "zagraniczna ekonomia"] },
};

