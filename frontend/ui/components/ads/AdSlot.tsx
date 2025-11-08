"use client";

import clsx from "clsx";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

type AdSlotProps = {
  slotId: string;
  format?: "inline" | "horizontal" | "rail";
  label?: string;
  className?: string;
};

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

const FORMAT_CLASS: Record<NonNullable<AdSlotProps["format"]>, string> = {
  inline: "min-h-[280px]",
  horizontal: "min-h-[120px]",
  rail: "min-h-[320px]",
};

export function AdSlot({ slotId, format = "inline", label = "Sponsored", className }: AdSlotProps) {
  useEffect(() => {
    if (!ADSENSE_CLIENT || typeof window === "undefined") {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.warn("Adsense push failed", error);
    }
  }, [slotId]);

  const containerClasses = clsx(
    "rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/70",
    FORMAT_CLASS[format],
    className
  );

  if (!ADSENSE_CLIENT) {
    return (
      <div className={clsx(containerClasses, "flex flex-col items-center justify-center gap-2 text-center text-slate-400")}>
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
          {label}
        </span>
        <p className="text-sm text-slate-500 dark:text-slate-300">이 영역에는 구글 애드센스 광고가 노출됩니다.</p>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format={format === "horizontal" ? "horizontal" : "rectangle"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
