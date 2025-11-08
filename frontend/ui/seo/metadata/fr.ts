import { LocaleSEO, CategorySEO } from "./types";

export const frSEO: LocaleSEO = {
  title: "Actualités Économiques - Mises à jour Économiques Mondiales en Temps Réel",
  description: "Curation d'actualités économiques en temps réel alimentée par l'IA. Obtenez les dernières nouvelles sur les affaires, la finance, la technologie, la cryptomonnaie et plus encore en 20 langues.",
  keywords: ["actualités économiques", "actualités en temps réel", "économie mondiale", "actualités financières", "actualités commerciales", "marché boursier", "cryptomonnaie", "actualités technologiques", "curation d'actualités IA", "actualités multilingues"],
  ogTitle: "Actualités Économiques - Mises à jour Mondiales en Temps Réel",
  ogDescription: "Curation d'actualités économiques en temps réel alimentée par l'IA en 20 langues.",
  ogType: "website",
  ogImage: "/og-image-fr.jpg",
  ogUrl: "https://economic-news.com/fr",
  ogSiteName: "Actualités Économiques",
  twitterCard: "summary_large_image",
  twitterTitle: "Actualités Économiques - Mises à jour Mondiales",
  twitterDescription: "Actualités économiques en temps réel en 20 langues",
  twitterImage: "/twitter-card-fr.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/fr",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "fr",
  locale: "fr_FR",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const frCategorySEO: CategorySEO = {
  all: { title: "Toutes les Actualités Économiques", description: "Parcourez toutes les catégories des dernières actualités économiques", keywords: ["toutes les nouvelles", "aperçu économique", "actualités économiques en temps réel"] },
  business: { title: "Actualités Commerciales", description: "Tendances d'entreprise mondiales, stratégies de gestion et analyse industrielle", keywords: ["affaires", "nouvelles d'entreprise", "gestion", "tendances industrielles", "startups"] },
  finance: { title: "Actualités Financières", description: "Mises à jour sur les marchés boursiers, obligations, investissements, banque et assurance", keywords: ["finance", "actions", "investissement", "obligations", "banque", "valeurs mobilières"] },
  technology: { title: "Actualités Technologiques", description: "Intelligence artificielle, big data, cloud computing, cybersécurité et innovations technologiques", keywords: ["technologie", "informatique", "intelligence artificielle", "IA", "big data", "cloud"] },
  crypto: { title: "Actualités sur les Cryptomonnaies", description: "Bitcoin, Ethereum, blockchain, NFT et marchés DeFi", keywords: ["cryptomonnaie", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Actualités des Marchés", description: "Mises à jour en temps réel sur les bourses, taux de change, matières premières et contrats à terme", keywords: ["marchés", "bourse", "devises", "matières premières", "contrats à terme"] },
  economy: { title: "Actualités Économiques", description: "Indicateurs macroéconomiques, politiques économiques, commerce et politiques industrielles", keywords: ["économie", "macroéconomie", "politique économique", "commerce", "PIB"] },
  global: { title: "Actualités Mondiales", description: "Analyse des tendances économiques par pays, commerce international et problèmes économiques mondiaux", keywords: ["mondial", "économie mondiale", "commerce international", "économie étrangère"] },
};

