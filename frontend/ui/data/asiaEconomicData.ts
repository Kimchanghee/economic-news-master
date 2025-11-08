import { AsiaMarketIndex, EconomicIndicator, CurrencyRate } from "@/ui/types/economic-indicators";

export const ASIA_MARKET_INDICES: AsiaMarketIndex[] = [
  {
    id: "nikkei225",
    name: "Nikkei 225",
    nameEn: "Nikkei 225",
    nameKo: "니케이 225",
    nameJa: "日経225",
    country: "Japan",
    value: 33540.31,
    change: 156.45,
    changePercent: 0.47,
    timestamp: new Date().toISOString(),
  },
  {
    id: "kospi",
    name: "KOSPI",
    nameEn: "KOSPI",
    nameKo: "코스피",
    nameJa: "韓国総合株価指数",
    country: "South Korea",
    value: 2634.28,
    change: -12.34,
    changePercent: -0.47,
    timestamp: new Date().toISOString(),
  },
  {
    id: "hangseng",
    name: "Hang Seng",
    nameEn: "Hang Seng",
    nameKo: "항셍",
    nameJa: "ハンセン指数",
    country: "Hong Kong",
    value: 16725.86,
    change: 234.12,
    changePercent: 1.42,
    timestamp: new Date().toISOString(),
  },
  {
    id: "shanghai",
    name: "Shanghai Composite",
    nameEn: "Shanghai Composite",
    nameKo: "상하이 종합",
    nameJa: "上海総合指数",
    country: "China",
    value: 3034.58,
    change: -8.76,
    changePercent: -0.29,
    timestamp: new Date().toISOString(),
  },
  {
    id: "sensex",
    name: "BSE Sensex",
    nameEn: "BSE Sensex",
    nameKo: "센섹스",
    nameJa: "SENSEX",
    country: "India",
    value: 65632.41,
    change: 421.35,
    changePercent: 0.65,
    timestamp: new Date().toISOString(),
  },
  {
    id: "set",
    name: "SET Index",
    nameEn: "SET Index",
    nameKo: "SET 지수",
    nameJa: "タイSET指数",
    country: "Thailand",
    value: 1438.67,
    change: 5.23,
    changePercent: 0.36,
    timestamp: new Date().toISOString(),
  },
];

export const ASIA_ECONOMIC_INDICATORS: EconomicIndicator[] = [
  {
    id: "jpn-gdp",
    country: "Japan",
    countryCode: "JP",
    name: "GDP Growth",
    nameEn: "GDP Growth",
    nameKo: "GDP 성장률",
    nameJa: "GDP成長率",
    value: 1.2,
    change: 0.1,
    changePercent: 9.09,
    unit: "%",
    timestamp: new Date().toISOString(),
    trend: "up",
  },
  {
    id: "kor-unemployment",
    country: "South Korea",
    countryCode: "KR",
    name: "Unemployment Rate",
    nameEn: "Unemployment Rate",
    nameKo: "실업률",
    nameJa: "失業率",
    value: 2.8,
    change: -0.1,
    changePercent: -3.45,
    unit: "%",
    timestamp: new Date().toISOString(),
    trend: "down",
  },
  {
    id: "chn-inflation",
    country: "China",
    countryCode: "CN",
    name: "Inflation Rate",
    nameEn: "Inflation Rate",
    nameKo: "인플레이션율",
    nameJa: "インフレ率",
    value: 0.2,
    change: -0.3,
    changePercent: -60.0,
    unit: "%",
    timestamp: new Date().toISOString(),
    trend: "down",
  },
  {
    id: "ind-manufacturing",
    country: "India",
    countryCode: "IN",
    name: "Manufacturing PMI",
    nameEn: "Manufacturing PMI",
    nameKo: "제조업 PMI",
    nameJa: "製造業PMI",
    value: 57.5,
    change: 1.2,
    changePercent: 2.13,
    unit: "",
    timestamp: new Date().toISOString(),
    trend: "up",
  },
];

export const ASIA_CURRENCY_RATES: CurrencyRate[] = [
  {
    id: "usdjpy",
    pair: "USD/JPY",
    rate: 149.85,
    change: 0.45,
    changePercent: 0.30,
    timestamp: new Date().toISOString(),
  },
  {
    id: "usdkrw",
    pair: "USD/KRW",
    rate: 1318.50,
    change: -3.20,
    changePercent: -0.24,
    timestamp: new Date().toISOString(),
  },
  {
    id: "usdcny",
    pair: "USD/CNY",
    rate: 7.28,
    change: 0.01,
    changePercent: 0.14,
    timestamp: new Date().toISOString(),
  },
  {
    id: "usdinr",
    pair: "USD/INR",
    rate: 83.12,
    change: 0.08,
    changePercent: 0.10,
    timestamp: new Date().toISOString(),
  },
];

// 실시간 데이터 시뮬레이션 함수
export function simulateMarketUpdate(index: AsiaMarketIndex): AsiaMarketIndex {
  const randomChange = (Math.random() - 0.5) * 100;
  const newValue = index.value + randomChange;
  const change = randomChange;
  const changePercent = (change / index.value) * 100;

  return {
    ...index,
    value: parseFloat(newValue.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2)),
    timestamp: new Date().toISOString(),
  };
}

export function simulateCurrencyUpdate(currency: CurrencyRate): CurrencyRate {
  const randomChange = (Math.random() - 0.5) * 0.5;
  const newRate = currency.rate + randomChange;
  const change = randomChange;
  const changePercent = (change / currency.rate) * 100;

  return {
    ...currency,
    rate: parseFloat(newRate.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2)),
    timestamp: new Date().toISOString(),
  };
}
