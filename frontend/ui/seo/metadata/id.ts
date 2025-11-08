import { LocaleSEO, CategorySEO } from "./types";

export const idSEO: LocaleSEO = {
  title: "Berita Ekonomi - Pembaruan Ekonomi Global Real-time",
  description: "Kurasi berita ekonomi real-time berbasis AI. Dapatkan berita terbaru tentang bisnis, keuangan, teknologi, cryptocurrency, dan lainnya dalam 20 bahasa.",
  keywords: ["berita ekonomi", "berita real-time", "ekonomi global", "berita keuangan", "berita bisnis", "pasar saham", "cryptocurrency", "berita teknologi", "kurasi berita AI", "berita multibahasa"],
  ogTitle: "Berita Ekonomi - Pembaruan Global Real-time",
  ogDescription: "Kurasi berita ekonomi real-time berbasis AI dalam 20 bahasa.",
  ogType: "website",
  ogImage: "/og-image-id.jpg",
  ogUrl: "https://economic-news.com/id",
  ogSiteName: "Berita Ekonomi",
  twitterCard: "summary_large_image",
  twitterTitle: "Berita Ekonomi - Pembaruan Global",
  twitterDescription: "Berita ekonomi real-time dalam 20 bahasa",
  twitterImage: "/twitter-card-id.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/id",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "id",
  locale: "id_ID",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const idCategorySEO: CategorySEO = {
  all: { title: "Semua Berita Ekonomi", description: "Jelajahi semua kategori berita ekonomi terbaru", keywords: ["semua berita", "gambaran ekonomi", "berita ekonomi real-time"] },
  business: { title: "Berita Bisnis", description: "Tren korporat global, strategi manajemen, dan analisis industri", keywords: ["bisnis", "berita korporat", "manajemen", "tren industri", "startup"] },
  finance: { title: "Berita Keuangan", description: "Pembaruan tentang pasar saham, obligasi, investasi, perbankan, dan asuransi", keywords: ["keuangan", "saham", "investasi", "obligasi", "perbankan", "sekuritas"] },
  technology: { title: "Berita Teknologi", description: "Kecerdasan buatan, big data, komputasi awan, keamanan siber, dan inovasi teknologi", keywords: ["teknologi", "TI", "kecerdasan buatan", "AI", "big data", "cloud"] },
  crypto: { title: "Berita Cryptocurrency", description: "Bitcoin, Ethereum, blockchain, NFT, dan pasar DeFi", keywords: ["cryptocurrency", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"] },
  markets: { title: "Berita Pasar", description: "Pembaruan real-time tentang bursa, nilai tukar, komoditas, dan futures", keywords: ["pasar", "bursa saham", "mata uang", "komoditas", "futures"] },
  economy: { title: "Berita Ekonomi", description: "Indikator makroekonomi, kebijakan ekonomi, perdagangan, dan kebijakan industri", keywords: ["ekonomi", "makroekonomi", "kebijakan ekonomi", "perdagangan", "PDB"] },
  global: { title: "Berita Global", description: "Analisis tren ekonomi per negara, perdagangan internasional, dan isu ekonomi global", keywords: ["global", "ekonomi dunia", "perdagangan internasional", "ekonomi luar negeri"] },
};

