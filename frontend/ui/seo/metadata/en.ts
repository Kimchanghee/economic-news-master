import { LocaleSEO, CategorySEO } from "./types";

export const enSEO: LocaleSEO = {
  // Basic Meta Tags
  title: "Economic News - Real-time Global Economic Updates",
  description: "AI-powered real-time economic news curation. Get the latest news in business, finance, technology, cryptocurrency, and more in 20 languages.",
  keywords: [
    "economic news",
    "real-time news",
    "global economy",
    "financial news",
    "business news",
    "stock market",
    "cryptocurrency",
    "technology news",
    "AI news curation",
    "multilingual news"
  ],

  // Open Graph
  ogTitle: "Economic News - Real-time Global Economic Updates",
  ogDescription: "AI-powered real-time economic news curation. Get the latest news in business, finance, technology, cryptocurrency, and more in 20 languages.",
  ogType: "website",
  ogImage: "/og-image-en.jpg",
  ogUrl: "https://economic-news.com/en",
  ogSiteName: "Economic News",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Economic News - Real-time Global Economic Updates",
  twitterDescription: "AI-powered real-time economic news curation in 20 languages",
  twitterImage: "/twitter-card-en.jpg",
  twitterSite: "@economicnews",

  // Additional SEO
  canonical: "https://economic-news.com/en",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",

  // Language & Region
  language: "en",
  locale: "en_US",
  alternateLocales: ["ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const enCategorySEO: CategorySEO = {
  all: {
    title: "All Economic News - Latest Global Economic Updates",
    description: "Browse all categories of latest economic news. Real-time updates on business, finance, technology, cryptocurrency, and more.",
    keywords: ["all news", "economic overview", "real-time economic news"],
  },
  business: {
    title: "Business News - Corporate and Industry Trends",
    description: "Stay updated with global corporate trends, management strategies, and industry analysis.",
    keywords: ["business", "corporate news", "management", "industry trends", "startups"],
  },
  finance: {
    title: "Finance News - Stocks, Bonds, and Investment",
    description: "Get the latest updates on stock markets, bonds, investments, banking, and insurance.",
    keywords: ["finance", "stocks", "investment", "bonds", "banking", "securities"],
  },
  technology: {
    title: "Technology News - IT, AI, and Innovation",
    description: "Discover the latest in artificial intelligence, big data, cloud computing, cybersecurity, and tech innovations.",
    keywords: ["technology", "IT", "artificial intelligence", "AI", "big data", "cloud computing"],
  },
  crypto: {
    title: "Cryptocurrency News - Bitcoin and Blockchain Updates",
    description: "Track the latest in Bitcoin, Ethereum, blockchain, NFTs, and DeFi markets.",
    keywords: ["cryptocurrency", "bitcoin", "ethereum", "blockchain", "NFT", "DeFi"],
  },
  markets: {
    title: "Markets News - Global Financial Market Trends",
    description: "Real-time updates on major stock exchanges, currency rates, commodities, and futures.",
    keywords: ["markets", "stock exchange", "currency", "commodities", "futures"],
  },
  economy: {
    title: "Economy News - Macroeconomic Analysis and Policy",
    description: "In-depth coverage of macroeconomic indicators, economic policies, trade, and industrial policies.",
    keywords: ["economy", "macroeconomics", "economic policy", "trade", "GDP"],
  },
  global: {
    title: "Global News - World Economic Trends",
    description: "Comprehensive analysis of economic trends by country, international trade, and global economic issues.",
    keywords: ["global", "world economy", "international trade", "overseas economy"],
  },
};

