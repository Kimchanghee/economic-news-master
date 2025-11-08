export interface EconomicIndicator {
  id: string;
  country: string;
  countryCode: string;
  name: string;
  nameEn: string;
  nameKo: string;
  nameJa: string;
  value: number;
  change: number;
  changePercent: number;
  unit: string;
  timestamp: string;
  trend: "up" | "down" | "neutral";
}

export interface AsiaMarketIndex {
  id: string;
  name: string;
  nameEn: string;
  nameKo: string;
  nameJa: string;
  country: string;
  value: number;
  change: number;
  changePercent: number;
  timestamp: string;
}

export interface CurrencyRate {
  id: string;
  pair: string;
  rate: number;
  change: number;
  changePercent: number;
  timestamp: string;
}
