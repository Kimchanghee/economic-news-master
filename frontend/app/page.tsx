"use client";

import { useState } from "react";
import { Header } from "@/ui/components/common/Header";
import { Footer } from "@/ui/components/common/Footer";
import { CategoryFilter } from "@/ui/components/news/CategoryFilter";
import { LoadingSpinner } from "@/ui/components/common/LoadingSpinner";
import { EmptyNewsMessage } from "@/ui/components/news/EmptyNewsMessage";
import { NewsGrid } from "@/ui/components/news/NewsGrid";
import { PageSection } from "@/ui/components/common/PageSection";
import { useNewsData } from "@/ui/hooks/useNewsData";
import { useNewsActions } from "@/ui/hooks/useNewsActions";

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
