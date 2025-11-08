export interface Category {
  id: string;
  label: string;
  labelEn: string;
  labelKo: string;
  labelJa: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "all",
    label: "전체",
    labelEn: "All",
    labelKo: "전체",
    labelJa: "全て",
    icon: "🌐"
  },
  {
    id: "asia-markets",
    label: "아시아 증시",
    labelEn: "Asian Markets",
    labelKo: "아시아 증시",
    labelJa: "アジア株式市場",
    icon: "📈"
  },
  {
    id: "currencies",
    label: "아시아 환율",
    labelEn: "Asian Currencies",
    labelKo: "아시아 환율",
    labelJa: "アジア通貨",
    icon: "💱"
  },
  {
    id: "china-economy",
    label: "중국 경제",
    labelEn: "China Economy",
    labelKo: "중국 경제",
    labelJa: "中国経済",
    icon: "🇨🇳"
  },
  {
    id: "japan-economy",
    label: "일본 경제",
    labelEn: "Japan Economy",
    labelKo: "일본 경제",
    labelJa: "日本経済",
    icon: "🇯🇵"
  },
  {
    id: "korea-economy",
    label: "한국 경제",
    labelEn: "Korea Economy",
    labelKo: "한국 경제",
    labelJa: "韓国経済",
    icon: "🇰🇷"
  },
  {
    id: "india-economy",
    label: "인도 경제",
    labelEn: "India Economy",
    labelKo: "인도 경제",
    labelJa: "インド経済",
    icon: "🇮🇳"
  },
  {
    id: "asean",
    label: "동남아시아",
    labelEn: "ASEAN",
    labelKo: "동남아시아",
    labelJa: "東南アジア",
    icon: "🌏"
  },
  {
    id: "tech",
    label: "기술",
    labelEn: "Technology",
    labelKo: "기술",
    labelJa: "テクノロジー",
    icon: "💻"
  },
  {
    id: "trade",
    label: "무역",
    labelEn: "Trade",
    labelKo: "무역",
    labelJa: "貿易",
    icon: "🚢"
  },
];

