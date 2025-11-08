import { LocaleSEO, CategorySEO } from "./types";

export const esSEO: LocaleSEO = {
  title: "Noticias Económicas - Actualizaciones Económicas Globales en Tiempo Real",
  description: "Curaduría de noticias económicas en tiempo real impulsada por IA. Obtenga las últimas noticias sobre negocios, finanzas, tecnología, criptomonedas y más en 20 idiomas.",
  keywords: ["noticias económicas", "noticias en tiempo real", "economía global", "noticias financieras", "noticias de negocios", "mercado de valores", "criptomoneda", "noticias de tecnología", "curaduría de noticias con IA", "noticias multilingües"],
  ogTitle: "Noticias Económicas - Actualizaciones Económicas Globales en Tiempo Real",
  ogDescription: "Curaduría de noticias económicas en tiempo real impulsada por IA en 20 idiomas.",
  ogType: "website",
  ogImage: "/og-image-es.jpg",
  ogUrl: "https://economic-news.com/es",
  ogSiteName: "Noticias Económicas",
  twitterCard: "summary_large_image",
  twitterTitle: "Noticias Económicas - Actualizaciones Globales",
  twitterDescription: "Noticias económicas en tiempo real en 20 idiomas",
  twitterImage: "/twitter-card-es.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/es",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "es",
  locale: "es_ES",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const esCategorySEO: CategorySEO = {
  all: { title: "Todas las Noticias Económicas", description: "Explore todas las categorías de noticias económicas más recientes", keywords: ["todas las noticias", "resumen económico", "noticias económicas en tiempo real"] },
  business: { title: "Noticias de Negocios", description: "Tendencias corporativas globales, estrategias de gestión y análisis industrial", keywords: ["negocios", "noticias corporativas", "gestión", "tendencias industriales", "startups"] },
  finance: { title: "Noticias Financieras", description: "Actualizaciones sobre mercados de valores, bonos, inversiones, banca y seguros", keywords: ["finanzas", "acciones", "inversión", "bonos", "banca", "valores"] },
  technology: { title: "Noticias de Tecnología", description: "Inteligencia artificial, big data, computación en la nube, ciberseguridad e innovaciones tecnológicas", keywords: ["tecnología", "TI", "inteligencia artificial", "IA", "big data", "nube"] },
  crypto: { title: "Noticias de Criptomonedas", description: "Bitcoin, Ethereum, blockchain, NFT y mercados DeFi", keywords: ["criptomoneda", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Noticias de Mercados", description: "Actualizaciones en tiempo real sobre bolsas, tipos de cambio, materias primas y futuros", keywords: ["mercados", "bolsa", "divisas", "materias primas", "futuros"] },
  economy: { title: "Noticias Económicas", description: "Indicadores macroeconómicos, políticas económicas, comercio y políticas industriales", keywords: ["economía", "macroeconomía", "política económica", "comercio", "PIB"] },
  global: { title: "Noticias Globales", description: "Análisis de tendencias económicas por país, comercio internacional y problemas económicos globales", keywords: ["global", "economía mundial", "comercio internacional", "economía extranjera"] },
};

