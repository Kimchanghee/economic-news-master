export type Language = "en" | "ko" | "ja";

export interface UITranslations {
  // Header
  switchTheme: string;
  selectLanguage: string;

  // Footer
  companyDescription: string;
  categoriesTitle: string;
  infoTitle: string;
  apiDocs: string;
  termsOfService: string;
  privacyPolicy: string;
  customerSupport: string;
  allRightsReserved: string;

  // News
  views: string;
  likes: string;
  readMore: string;
  noNewsAvailable: string;
  loading: string;

  // Ad labels
  headlineSponsor: string;
  marketWatch: string;
  investorNote: string;
  globalPartner: string;
}

export const UI_TEXT: Record<Language, UITranslations> = {
  en: {
    // Header
    switchTheme: "Switch theme",
    selectLanguage: "Select language",

    // Footer
    companyDescription:
      "Real-time digital newsroom for Asian economic news. Check market, currency, policy, and technology news from major Asian countries all in one place.",
    categoriesTitle: "Categories",
    infoTitle: "Information",
    apiDocs: "API Documentation",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    customerSupport: "Customer Support · support@econnews.dev",
    allRightsReserved: "All rights reserved.",

    // News
    views: "views",
    likes: "likes",
    readMore: "Read more",
    noNewsAvailable: "No news available in this category.",
    loading: "Loading...",

    // Ad labels
    headlineSponsor: "Headline Sponsor",
    marketWatch: "Market Watch",
    investorNote: "Investor Note",
    globalPartner: "Global Partner",
  },
  ko: {
    // Header
    switchTheme: "테마 전환",
    selectLanguage: "언어 선택",

    // Footer
    companyDescription:
      "아시아 경제 뉴스를 실시간으로 제공하는 디지털 뉴스룸입니다. 아시아 주요 국가의 시장, 통화, 정책, 기술 뉴스를 한 번에 확인하세요.",
    categoriesTitle: "카테고리",
    infoTitle: "정보",
    apiDocs: "API 문서",
    termsOfService: "이용 약관",
    privacyPolicy: "개인정보 처리방침",
    customerSupport: "고객센터 · support@econnews.dev",
    allRightsReserved: "모든 권리 보유.",

    // News
    views: "조회",
    likes: "좋아요",
    readMore: "더 읽기",
    noNewsAvailable: "이 카테고리에 뉴스가 없습니다.",
    loading: "로딩 중...",

    // Ad labels
    headlineSponsor: "헤드라인 스폰서",
    marketWatch: "시장 동향",
    investorNote: "투자자 노트",
    globalPartner: "글로벌 파트너",
  },
  ja: {
    // Header
    switchTheme: "テーマ切り替え",
    selectLanguage: "言語選択",

    // Footer
    companyDescription:
      "アジア経済ニュースをリアルタイムで提供するデジタルニュースルームです。アジア主要国の市場、通貨、政策、技術ニュースを一度に確認できます。",
    categoriesTitle: "カテゴリー",
    infoTitle: "情報",
    apiDocs: "APIドキュメント",
    termsOfService: "利用規約",
    privacyPolicy: "プライバシーポリシー",
    customerSupport: "カスタマーサポート · support@econnews.dev",
    allRightsReserved: "全著作権所有。",

    // News
    views: "閲覧",
    likes: "いいね",
    readMore: "続きを読む",
    noNewsAvailable: "このカテゴリにニュースがありません。",
    loading: "読み込み中...",

    // Ad labels
    headlineSponsor: "ヘッドラインスポンサー",
    marketWatch: "マーケットウォッチ",
    investorNote: "投資家ノート",
    globalPartner: "グローバルパートナー",
  },
};

export function getUIText(language: Language): UITranslations {
  return UI_TEXT[language] || UI_TEXT.en;
}
