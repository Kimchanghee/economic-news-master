import { LocaleSEO, CategorySEO } from "./types";

export const nlSEO: LocaleSEO = {
  title: "Economisch Nieuws - Realtime Wereldwijde Economische Updates",
  description: "AI-aangedreven realtime economische nieuwscuratie. Ontvang het laatste nieuws over bedrijven, financiën, technologie, cryptocurrency en meer in 20 talen.",
  keywords: ["economisch nieuws", "realtime nieuws", "mondiale economie", "financieel nieuws", "bedrijfsnieuws", "aandelenmarkt", "cryptocurrency", "technologienieuws", "AI-nieuwscuratie", "meertalig nieuws"],
  ogTitle: "Economisch Nieuws - Realtime Wereldwijde Updates",
  ogDescription: "AI-aangedreven realtime economische nieuwscuratie in 20 talen.",
  ogType: "website",
  ogImage: "/og-image-nl.jpg",
  ogUrl: "https://economic-news.com/nl",
  ogSiteName: "Economisch Nieuws",
  twitterCard: "summary_large_image",
  twitterTitle: "Economisch Nieuws - Wereldwijde Updates",
  twitterDescription: "Realtime economisch nieuws in 20 talen",
  twitterImage: "/twitter-card-nl.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/nl",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "nl",
  locale: "nl_NL",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const nlCategorySEO: CategorySEO = {
  all: { title: "Alle Economisch Nieuws", description: "Blader door alle categorieën van het laatste economische nieuws", keywords: ["al het nieuws", "economisch overzicht", "realtime economisch nieuws"] },
  business: { title: "Bedrijfsnieuws", description: "Wereldwijde bedrijfstrends, managementstrategieën en sectora nalyse", keywords: ["bedrijven", "bedrijfsnieuws", "management", "sectortrends", "startups"] },
  finance: { title: "Financieel Nieuws", description: "Updates over aandelenmarkten, obligaties, investeringen, bankieren en verzekeringen", keywords: ["financiën", "aandelen", "investeringen", "obligaties", "bankieren", "effecten"] },
  technology: { title: "Technologienieuws", description: "Kunstmatige intelligentie, big data, cloud computing, cyberbeveiliging en technologische innovaties", keywords: ["technologie", "IT", "kunstmatige intelligentie", "AI", "big data", "cloud"] },
  crypto: { title: "Cryptocurrency Nieuws", description: "Bitcoin, Ethereum, blockchain, NFT en DeFi-markten", keywords: ["cryptocurrency", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Marktnieuws", description: "Realtime updates over beurzen, wisselkoersen, grondstoffen en futures", keywords: ["markten", "beurs", "valuta", "grondstoffen", "futures"] },
  economy: { title: "Economisch Nieuws", description: "Macro-economische indicatoren, economisch beleid, handel en industrieel beleid", keywords: ["economie", "macro-economie", "economisch beleid", "handel", "BBP"] },
  global: { title: "Wereldwijd Nieuws", description: "Analyse van economische trends per land, internationale handel en mondiale economische kwesties", keywords: ["wereldwijd", "wereldeconomie", "internationale handel", "buitenlandse economie"] },
};

