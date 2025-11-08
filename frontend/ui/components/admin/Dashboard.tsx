"use client";

import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { TabButton } from "./TabButton";
import { DashboardTab } from "./DashboardTab";
import { NewsTab } from "./NewsTab";
import { useAdminData } from "@/ui/hooks/useAdminData";

type DashboardProps = {
  token: string;
  onLogout: () => void;
};

export function Dashboard({ token, onLogout }: DashboardProps) {
  const [tab, setTab] = useState<"dashboard" | "news">("dashboard");
  const { dashboard, news, handleCollect, handleDelete } = useAdminData(token);

  return (
    <div className="min-h-screen bg-[var(--news-background)] px-4 py-10 text-[var(--news-foreground)] dark:bg-[#050915] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardHeader onLogout={onLogout} />

        <div className="flex flex-wrap gap-3">
          <TabButton label="현황 대시보드" active={tab === "dashboard"} onClick={() => setTab("dashboard")} />
          <TabButton label="기사 관리" active={tab === "news"} onClick={() => setTab("news")} />
        </div>

        {tab === "dashboard" ? (
          <DashboardTab dashboard={dashboard} onCollect={handleCollect} />
        ) : (
          <NewsTab news={news} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}
