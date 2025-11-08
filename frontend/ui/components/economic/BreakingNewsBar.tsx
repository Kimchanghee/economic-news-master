"use client";

import { useEffect, useState } from "react";
import { AsiaMarketIndex, CurrencyRate } from "@/ui/types/economic-indicators";
import {
  ASIA_MARKET_INDICES,
  ASIA_CURRENCY_RATES,
  simulateMarketUpdate,
  simulateCurrencyUpdate,
} from "@/ui/data/asiaEconomicData";

interface BreakingNewsBarProps {
  language?: "en" | "ko" | "ja";
}

export function BreakingNewsBar({ language = "ko" }: BreakingNewsBarProps) {
  const [marketData, setMarketData] = useState<AsiaMarketIndex[]>(ASIA_MARKET_INDICES);
  const [currencyData, setCurrencyData] = useState<CurrencyRate[]>(ASIA_CURRENCY_RATES);

  useEffect(() => {
    // 실시간 업데이트 시뮬레이션 (30초마다)
    const interval = setInterval(() => {
      setMarketData((prev) => prev.map(simulateMarketUpdate));
      setCurrencyData((prev) => prev.map(simulateCurrencyUpdate));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getMarketName = (market: AsiaMarketIndex) => {
    if (language === "en") return market.nameEn;
    if (language === "ja") return market.nameJa;
    return market.nameKo;
  };

  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-slate-950 py-2 dark:border-slate-800">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="flex animate-scroll gap-8 whitespace-nowrap px-4">
        {/* 시장 지수 */}
        {marketData.map((market) => (
          <div key={market.id} className="inline-flex items-center gap-2 text-sm">
            <span className="font-semibold text-blue-400">{getMarketName(market)}</span>
            <span className="text-white">{market.value.toLocaleString()}</span>
            <span
              className={`flex items-center gap-1 ${
                market.changePercent > 0
                  ? "text-green-400"
                  : market.changePercent < 0
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              {market.changePercent > 0 ? "▲" : market.changePercent < 0 ? "▼" : "●"}
              {Math.abs(market.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}

        {/* 환율 */}
        {currencyData.map((currency) => (
          <div key={currency.id} className="inline-flex items-center gap-2 text-sm">
            <span className="font-semibold text-amber-400">{currency.pair}</span>
            <span className="text-white">{currency.rate.toFixed(2)}</span>
            <span
              className={`flex items-center gap-1 ${
                currency.changePercent > 0
                  ? "text-green-400"
                  : currency.changePercent < 0
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              {currency.changePercent > 0 ? "▲" : currency.changePercent < 0 ? "▼" : "●"}
              {Math.abs(currency.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}

        {/* 두 번째 세트 (무한 스크롤 효과) */}
        {marketData.map((market) => (
          <div key={`${market.id}-2`} className="inline-flex items-center gap-2 text-sm">
            <span className="font-semibold text-blue-400">{getMarketName(market)}</span>
            <span className="text-white">{market.value.toLocaleString()}</span>
            <span
              className={`flex items-center gap-1 ${
                market.changePercent > 0
                  ? "text-green-400"
                  : market.changePercent < 0
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              {market.changePercent > 0 ? "▲" : market.changePercent < 0 ? "▼" : "●"}
              {Math.abs(market.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}

        {currencyData.map((currency) => (
          <div key={`${currency.id}-2`} className="inline-flex items-center gap-2 text-sm">
            <span className="font-semibold text-amber-400">{currency.pair}</span>
            <span className="text-white">{currency.rate.toFixed(2)}</span>
            <span
              className={`flex items-center gap-1 ${
                currency.changePercent > 0
                  ? "text-green-400"
                  : currency.changePercent < 0
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              {currency.changePercent > 0 ? "▲" : currency.changePercent < 0 ? "▼" : "●"}
              {Math.abs(currency.changePercent).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
