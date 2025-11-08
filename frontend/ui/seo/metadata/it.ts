import { LocaleSEO, CategorySEO } from "./types";

export const itSEO: LocaleSEO = {
  title: "Notizie Economiche - Aggiornamenti Economici Globali in Tempo Reale",
  description: "Curazione di notizie economiche in tempo reale basata sull'IA. Ottieni le ultime notizie su affari, finanza, tecnologia, criptovalute e altro in 20 lingue.",
  keywords: ["notizie economiche", "notizie in tempo reale", "economia globale", "notizie finanziarie", "notizie aziendali", "mercato azionario", "criptovaluta", "notizie tecnologiche", "curazione notizie IA", "notizie multilingue"],
  ogTitle: "Notizie Economiche - Aggiornamenti Globali in Tempo Reale",
  ogDescription: "Curazione di notizie economiche in tempo reale basata sull'IA in 20 lingue.",
  ogType: "website",
  ogImage: "/og-image-it.jpg",
  ogUrl: "https://economic-news.com/it",
  ogSiteName: "Notizie Economiche",
  twitterCard: "summary_large_image",
  twitterTitle: "Notizie Economiche - Aggiornamenti Globali",
  twitterDescription: "Notizie economiche in tempo reale in 20 lingue",
  twitterImage: "/twitter-card-it.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/it",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "it",
  locale: "it_IT",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const itCategorySEO: CategorySEO = {
  all: { title: "Tutte le Notizie Economiche", description: "Sfoglia tutte le categorie delle ultime notizie economiche", keywords: ["tutte le notizie", "panoramica economica", "notizie economiche in tempo reale"] },
  business: { title: "Notizie Aziendali", description: "Tendenze aziendali globali, strategie di gestione e analisi del settore", keywords: ["affari", "notizie aziendali", "gestione", "tendenze del settore", "startup"] },
  finance: { title: "Notizie Finanziarie", description: "Aggiornamenti su mercati azionari, obbligazioni, investimenti, banche e assicurazioni", keywords: ["finanza", "azioni", "investimento", "obbligazioni", "banca", "titoli"] },
  technology: { title: "Notizie Tecnologiche", description: "Intelligenza artificiale, big data, cloud computing, sicurezza informatica e innovazioni tecnologiche", keywords: ["tecnologia", "IT", "intelligenza artificiale", "IA", "big data", "cloud"] },
  crypto: { title: "Notizie Criptovalute", description: "Bitcoin, Ethereum, blockchain, NFT e mercati DeFi", keywords: ["criptovaluta", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Notizie Mercati", description: "Aggiornamenti in tempo reale su borse, tassi di cambio, materie prime e futures", keywords: ["mercati", "borsa", "valute", "materie prime", "futures"] },
  economy: { title: "Notizie Economiche", description: "Indicatori macroeconomici, politiche economiche, commercio e politiche industriali", keywords: ["economia", "macroeconomia", "politica economica", "commercio", "PIL"] },
  global: { title: "Notizie Globali", description: "Analisi delle tendenze economiche per paese, commercio internazionale e problemi economici globali", keywords: ["globale", "economia mondiale", "commercio internazionale", "economia estera"] },
};

