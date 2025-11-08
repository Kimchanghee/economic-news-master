import { LocaleSEO, CategorySEO } from "./types";

export const zhSEO: LocaleSEO = {
  title: "经济新闻 - 实时全球经济资讯",
  description: "AI驱动的实时经济新闻策展。提供商业、金融、科技、加密货币等领域的最新经济新闻，支持20种语言。",
  keywords: ["经济新闻", "实时新闻", "全球经济", "金融新闻", "商业新闻", "股市", "加密货币", "科技新闻", "AI新闻策展", "多语言新闻"],
  ogTitle: "经济新闻 - 实时全球经济资讯",
  ogDescription: "AI驱动的实时经济新闻策展。提供商业、金融、科技、加密货币等领域的最新经济新闻，支持20种语言。",
  ogType: "website",
  ogImage: "/og-image-zh.jpg",
  ogUrl: "https://economic-news.com/zh",
  ogSiteName: "经济新闻",
  twitterCard: "summary_large_image",
  twitterTitle: "经济新闻 - 实时全球经济资讯",
  twitterDescription: "AI驱动的实时经济新闻策展，支持20种语言",
  twitterImage: "/twitter-card-zh.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/zh",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "zh",
  locale: "zh_CN",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const zhCategorySEO: CategorySEO = {
  all: { title: "全部经济新闻", description: "浏览所有类别的最新经济新闻", keywords: ["全部新闻", "经济综合", "实时经济新闻"] },
  business: { title: "商业新闻", description: "全球企业动态、管理策略和行业分析", keywords: ["商业", "企业新闻", "管理策略", "行业动态", "创业"] },
  finance: { title: "金融新闻", description: "股市、债券、投资、银行、保险等金融市场最新动态", keywords: ["金融", "股票", "投资", "债券", "银行", "证券"] },
  technology: { title: "科技新闻", description: "人工智能、大数据、云计算、网络安全等最新科技趋势", keywords: ["科技", "IT", "人工智能", "AI", "大数据", "云计算"] },
  crypto: { title: "加密货币新闻", description: "比特币、以太坊、区块链、NFT、DeFi等加密货币市场动态", keywords: ["加密货币", "比特币", "以太坊", "区块链", "NFT", "DeFi"] },
  markets: { title: "市场新闻", description: "主要交易所、汇率、大宗商品、期货等全球金融市场实时动态", keywords: ["市场", "交易所", "汇率", "大宗商品", "期货"] },
  economy: { title: "经济新闻", description: "宏观经济指标、经济政策、贸易、产业政策等综合经济信息", keywords: ["经济", "宏观经济", "经济政策", "贸易", "GDP"] },
  global: { title: "全球新闻", description: "主要国家经济动态、国际贸易、全球经济问题深度分析", keywords: ["全球", "世界经济", "国际贸易", "海外经济"] },
};

