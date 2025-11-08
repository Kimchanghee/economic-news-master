import { LocaleSEO, CategorySEO } from "./types";

export const jaSEO: LocaleSEO = {
  // Basic Meta Tags
  title: "経済ニュース - リアルタイムグローバル経済情報",
  description: "AI駆動のリアルタイム経済ニュースキュレーション。ビジネス、金融、テクノロジー、暗号通貨など、20言語で最新の経済ニュースを提供します。",
  keywords: [
    "経済ニュース",
    "リアルタイムニュース",
    "グローバル経済",
    "金融ニュース",
    "ビジネスニュース",
    "株式市場",
    "暗号通貨",
    "テクノロジーニュース",
    "AIニュースキュレーション",
    "多言語ニュース"
  ],

  // Open Graph
  ogTitle: "経済ニュース - リアルタイムグローバル経済情報",
  ogDescription: "AI駆動のリアルタイム経済ニュースキュレーション。ビジネス、金融、テクノロジー、暗号通貨など、20言語で最新の経済ニュースを提供します。",
  ogType: "website",
  ogImage: "/og-image-ja.jpg",
  ogUrl: "https://economic-news.com/ja",
  ogSiteName: "経済ニュース",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "経済ニュース - リアルタイムグローバル経済情報",
  twitterDescription: "AI駆動のリアルタイム経済ニュースキュレーション。20言語で提供",
  twitterImage: "/twitter-card-ja.jpg",
  twitterSite: "@economicnews",

  // Additional SEO
  canonical: "https://economic-news.com/ja",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",

  // Language & Region
  language: "ja",
  locale: "ja_JP",
  alternateLocales: ["en_US", "ko_KR", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const jaCategorySEO: CategorySEO = {
  all: {
    title: "全ての経済ニュース - 最新グローバル経済情報",
    description: "すべてのカテゴリーの最新経済ニュースを一目で確認。ビジネス、金融、テクノロジー、暗号通貨などのリアルタイム情報。",
    keywords: ["全ニュース", "経済総合", "リアルタイム経済ニュース"],
  },
  business: {
    title: "ビジネスニュース - 企業経営と産業動向",
    description: "グローバル企業動向、経営戦略、産業分析など、ビジネス関連の最新ニュースを提供します。",
    keywords: ["ビジネス", "企業ニュース", "経営戦略", "産業動向", "スタートアップ"],
  },
  finance: {
    title: "金融ニュース - 株式、債券、投資情報",
    description: "株式市場、債券、投資、銀行、保険など、金融市場の最新動向と分析を提供します。",
    keywords: ["金融", "株式", "投資", "債券", "銀行", "証券"],
  },
  technology: {
    title: "テクノロジーニュース - IT、AI、イノベーション",
    description: "人工知能、ビッグデータ、クラウド、サイバーセキュリティなど、最新技術トレンドとイノベーション情報。",
    keywords: ["テクノロジー", "IT", "人工知能", "AI", "ビッグデータ", "クラウド"],
  },
  crypto: {
    title: "暗号通貨ニュース - ビットコイン、ブロックチェーン情報",
    description: "ビットコイン、イーサリアム、ブロックチェーン、NFT、DeFiなど、暗号通貨市場の最新動向。",
    keywords: ["暗号通貨", "ビットコイン", "イーサリアム", "ブロックチェーン", "NFT", "DeFi"],
  },
  markets: {
    title: "マーケットニュース - グローバル金融市場動向",
    description: "主要証券取引所、為替、商品、先物など、グローバル金融市場のリアルタイム動向。",
    keywords: ["市場", "証券取引所", "為替", "商品", "先物"],
  },
  economy: {
    title: "経済ニュース - マクロ経済と政策分析",
    description: "マクロ経済指標、経済政策、貿易、産業政策など、経済全般の情報を提供します。",
    keywords: ["経済", "マクロ経済", "経済政策", "貿易", "GDP"],
  },
  global: {
    title: "グローバルニュース - 世界経済動向",
    description: "主要国別経済動向、国際貿易、グローバル経済イシューの詳細分析。",
    keywords: ["グローバル", "世界経済", "国際貿易", "海外経済"],
  },
};

