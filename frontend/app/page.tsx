"use client";

import { useState } from "react";
import { CategoryFilter } from "@/ui/components/news/CategoryFilter";
import { EmptyNewsMessage } from "@/ui/components/news/EmptyNewsMessage";
import { AdSlot } from "@/ui/components/ads/AdSlot";
import { useNewsData } from "@/ui/hooks/useNewsData";
import { useNewsActions } from "@/ui/hooks/useNewsActions";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { NewsGrid } from "@/components/ui/NewsGrid";
import { PageSection } from "@/components/ui/PageSection";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [language, setLanguage] = useState<string>("ko");

  const { data, isLoading, mutate } = useNewsData(activeCategory, language);
  const { handleLike, handleView } = useNewsActions(mutate);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10">
      <Header language={language} setLanguage={setLanguage} />

      <PageSection language={language}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.3fr)_minmax(260px,1fr)]">
          <div className="space-y-6">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            <AdSlot slotId="leaderboard-1" format="horizontal" label="헤드라인 스폰서" />

            {isLoading && <LoadingSpinner />}

            {!isLoading && data?.items && data.items.length > 0 && (
              <NewsGrid items={data.items} onLike={handleLike} onView={handleView} />
            )}

            {!isLoading && data?.items?.length === 0 && <EmptyNewsMessage />}
          </div>
          <div className="space-y-6">
            <AdSlot slotId="rail-market-watch" format="rail" label="Market Watch" />
            <AdSlot slotId="rail-investor-note" format="rail" label="Investor Note" />
          </div>
        </div>
      </PageSection>

      <AdSlot slotId="bottom-anchor" format="horizontal" label="Global Partner" className="self-center w-full max-w-4xl" />

      <Footer />
    </main>
  );
}
