import { LocaleSEO, CategorySEO } from "./types";

export const ptSEO: LocaleSEO = {
  title: "Notícias Econômicas - Atualizações Econômicas Globais em Tempo Real",
  description: "Curadoria de notícias econômicas em tempo real baseada em IA. Obtenha as últimas notícias sobre negócios, finanças, tecnologia, criptomoedas e mais em 20 idiomas.",
  keywords: ["notícias econômicas", "notícias em tempo real", "economia global", "notícias financeiras", "notícias de negócios", "mercado de ações", "criptomoeda", "notícias de tecnologia", "curadoria de notícias com IA", "notícias multilíngues"],
  ogTitle: "Notícias Econômicas - Atualizações Globais em Tempo Real",
  ogDescription: "Curadoria de notícias econômicas em tempo real baseada em IA em 20 idiomas.",
  ogType: "website",
  ogImage: "/og-image-pt.jpg",
  ogUrl: "https://economic-news.com/pt",
  ogSiteName: "Notícias Econômicas",
  twitterCard: "summary_large_image",
  twitterTitle: "Notícias Econômicas - Atualizações Globais",
  twitterDescription: "Notícias econômicas em tempo real em 20 idiomas",
  twitterImage: "/twitter-card-pt.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/pt",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "pt",
  locale: "pt_BR",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const ptCategorySEO: CategorySEO = {
  all: { title: "Todas as Notícias Econômicas", description: "Navegue por todas as categorias das últimas notícias econômicas", keywords: ["todas as notícias", "visão geral econômica", "notícias econômicas em tempo real"] },
  business: { title: "Notícias de Negócios", description: "Tendências corporativas globais, estratégias de gestão e análise industrial", keywords: ["negócios", "notícias corporativas", "gestão", "tendências industriais", "startups"] },
  finance: { title: "Notícias Financeiras", description: "Atualizações sobre mercados de ações, títulos, investimentos, bancos e seguros", keywords: ["finanças", "ações", "investimento", "títulos", "banco", "valores mobiliários"] },
  technology: { title: "Notícias de Tecnologia", description: "Inteligência artificial, big data, computação em nuvem, segurança cibernética e inovações tecnológicas", keywords: ["tecnologia", "TI", "inteligência artificial", "IA", "big data", "nuvem"] },
  crypto: { title: "Notícias de Criptomoedas", description: "Bitcoin, Ethereum, blockchain, NFT e mercados DeFi", keywords: ["criptomoeda", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Notícias de Mercados", description: "Atualizações em tempo real sobre bolsas, taxas de câmbio, commodities e futuros", keywords: ["mercados", "bolsa", "câmbio", "commodities", "futuros"] },
  economy: { title: "Notícias Econômicas", description: "Indicadores macroeconômicos, políticas econômicas, comércio e políticas industriais", keywords: ["economia", "macroeconomia", "política econômica", "comércio", "PIB"] },
  global: { title: "Notícias Globais", description: "Análise de tendências econômicas por país, comércio internacional e questões econômicas globais", keywords: ["global", "economia mundial", "comércio internacional", "economia estrangeira"] },
};

