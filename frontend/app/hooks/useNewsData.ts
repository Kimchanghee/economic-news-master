import { useMemo } from "react";
import useSWR from "swr";
import { API_BASE, fetcher } from "@/app/utils/api";
import type { NewsResponse } from "@/app/types/news";

export function useNewsData(activeCategory: string, language: string) {
  const query = useMemo(() => {
    const params = new URLSearchParams({ language });
    if (activeCategory && activeCategory !== "all") {
      params.set("category", activeCategory);
    }
    return `${API_BASE}/news?${params.toString()}`;
  }, [activeCategory, language]);

  return useSWR<NewsResponse>(query, fetcher, {
    keepPreviousData: true,
    refreshInterval: 1000 * 60 * 5,
  });
}

