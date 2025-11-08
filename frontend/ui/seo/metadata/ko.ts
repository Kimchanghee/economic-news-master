import { LocaleSEO, CategorySEO } from "./types";

export const koSEO: LocaleSEO = {
  // Basic Meta Tags
  title: "경제 뉴스 - 실시간 글로벌 경제 소식",
  description: "AI 기반 실시간 경제 뉴스 큐레이션. 비즈니스, 금융, 기술, 암호화폐 등 다양한 분야의 최신 경제 뉴스를 20개 언어로 제공합니다.",
  keywords: [
    "경제뉴스",
    "실시간뉴스",
    "글로벌경제",
    "금융뉴스",
    "비즈니스뉴스",
    "주식시장",
    "암호화폐",
    "기술뉴스",
    "AI뉴스큐레이션",
    "다국어뉴스"
  ],

  // Open Graph
  ogTitle: "경제 뉴스 - 실시간 글로벌 경제 소식",
  ogDescription: "AI 기반 실시간 경제 뉴스 큐레이션. 비즈니스, 금융, 기술, 암호화폐 등 다양한 분야의 최신 경제 뉴스를 20개 언어로 제공합니다.",
  ogType: "website",
  ogImage: "/og-image-ko.jpg",
  ogUrl: "https://economic-news.com/ko",
  ogSiteName: "경제 뉴스",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "경제 뉴스 - 실시간 글로벌 경제 소식",
  twitterDescription: "AI 기반 실시간 경제 뉴스 큐레이션. 20개 언어로 제공되는 글로벌 경제 뉴스",
  twitterImage: "/twitter-card-ko.jpg",
  twitterSite: "@economicnews",

  // Additional SEO
  canonical: "https://economic-news.com/ko",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",

  // Language & Region
  language: "ko",
  locale: "ko_KR",
  alternateLocales: ["en_US", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "th_TH", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const koCategorySEO: CategorySEO = {
  all: {
    title: "전체 경제 뉴스 - 최신 글로벌 경제 소식",
    description: "모든 카테고리의 최신 경제 뉴스를 한눈에 확인하세요. 비즈니스, 금융, 기술, 암호화폐 등 다양한 분야의 실시간 뉴스.",
    keywords: ["전체뉴스", "경제종합", "실시간경제뉴스"],
  },
  business: {
    title: "비즈니스 뉴스 - 기업 경영 및 산업 동향",
    description: "글로벌 기업 동향, 경영 전략, 산업 분석 등 비즈니스 관련 최신 뉴스를 제공합니다.",
    keywords: ["비즈니스", "기업뉴스", "경영전략", "산업동향", "스타트업"],
  },
  finance: {
    title: "금융 뉴스 - 주식, 채권, 투자 정보",
    description: "주식 시장, 채권, 투자, 은행, 보험 등 금융 시장의 최신 동향과 분석을 제공합니다.",
    keywords: ["금융", "주식", "투자", "채권", "은행", "증권"],
  },
  technology: {
    title: "기술 뉴스 - IT, AI, 혁신 기술",
    description: "인공지능, 빅데이터, 클라우드, 사이버보안 등 최신 기술 트렌드와 혁신 소식을 전합니다.",
    keywords: ["기술", "IT", "인공지능", "AI", "빅데이터", "클라우드"],
  },
  crypto: {
    title: "암호화폐 뉴스 - 비트코인, 블록체인 소식",
    description: "비트코인, 이더리움, 블록체인, NFT, DeFi 등 암호화폐 시장의 최신 동향을 제공합니다.",
    keywords: ["암호화폐", "비트코인", "이더리움", "블록체인", "NFT", "DeFi"],
  },
  markets: {
    title: "시장 뉴스 - 글로벌 금융 시장 동향",
    description: "주요 증시, 환율, 원자재, 선물 등 글로벌 금융 시장의 실시간 동향을 전합니다.",
    keywords: ["시장", "증시", "환율", "원자재", "선물옵션"],
  },
  economy: {
    title: "경제 뉴스 - 거시경제 및 정책 분석",
    description: "거시경제 지표, 경제 정책, 무역, 산업 정책 등 경제 전반의 소식을 제공합니다.",
    keywords: ["경제", "거시경제", "경제정책", "무역", "GDP"],
  },
  global: {
    title: "글로벌 뉴스 - 세계 경제 동향",
    description: "주요 국가별 경제 동향, 국제 무역, 글로벌 경제 이슈를 심층 분석합니다.",
    keywords: ["글로벌", "세계경제", "국제무역", "해외경제"],
  },
};

