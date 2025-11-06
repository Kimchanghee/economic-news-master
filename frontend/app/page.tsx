"use client";

import { useState } from "react";
import { CategoryFilter } from "@/ui/components/news/CategoryFilter";
import { EmptyNewsMessage } from "@/ui/components/news/EmptyNewsMessage";
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
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10">
      <Header language={language} setLanguage={setLanguage} />

      <PageSection language={language}>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {isLoading && <LoadingSpinner />}

        {!isLoading && data?.items && data.items.length > 0 && (
          <NewsGrid items={data.items} onLike={handleLike} onView={handleView} />
        )}

        {!isLoading && data?.items.length === 0 && <EmptyNewsMessage />}
      </PageSection>

      <Footer />
    </main>
  );
}
