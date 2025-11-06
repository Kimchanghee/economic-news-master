"use client";

import { useState } from "react";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { CategoryFilter } from "./components/ui/CategoryFilter";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { EmptyNewsMessage } from "./components/ui/EmptyNewsMessage";
import { NewsGrid } from "./components/ui/NewsGrid";
import { PageSection } from "./components/ui/PageSection";
import { useNewsData } from "./hooks/useNewsData";
import { useNewsActions } from "./hooks/useNewsActions";

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
