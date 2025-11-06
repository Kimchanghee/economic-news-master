import { LocaleContent } from "./types";

const en: LocaleContent = {
  metaTitle: "Economic News Aggregator | Real-time Global Market Intelligence",
  metaDescription:
    "Track global market, crypto, economy, technology, business, and forex headlines in real time. EconNews delivers multilingual summaries, smart filters, and actionable dashboards.",
  keywords: [
    "economic news",
    "finance headlines",
    "global markets",
    "crypto news",
    "forex updates",
    "economic dashboard",
    "answer engine optimization",
    "SEO finance",
  ],
  locale: "en_US",
  heroTitle: "Economic News Aggregator for High-velocity Market Teams",
  heroSubtitle:
    "Stay ahead of the markets with curated feeds, AI summaries, and multilingual coverage you can trust.",
  ctaLabel: "Explore the live dashboard",
  valuePropsTitle: "Why EconNews delivers authoritative answers",
  sections: [
    {
      title: "Built for Answer Engine Optimization (AEO)",
      body:
        "We structure every update with concise summaries, metadata, and FAQ markup so answer engines and voice assistants surface EconNews first.",
      bullets: [
        "AI-assisted synopsis for instant comprehension",
        "Category, sentiment, and language tags baked into every story",
        "Structured data that highlights key facts for rich results",
      ],
    },
    {
      title: "Multilingual Intelligence in One Click",
      body: "Switch between fifteen supported languages to brief global stakeholders without losing context or tone.",
      bullets: [
        "Localized experiences spanning the Americas, EMEA, and APAC",
        "Consistent taxonomy for cross-market comparison",
        "Localized CTAs and support resources",
      ],
    },
    {
      title: "Ready for Your Workflow",
      body:
        "Firehose API, admin dashboard, and automated collection jobs streamline how research and comms teams monitor breaking events.",
      bullets: [
        "Manual or scheduled RSS ingestion with audit logs",
        "Engagement metrics (views & likes) to surface relevant stories",
        "Export-ready JSON for downstream analytics",
      ],
    },
  ],
  faqs: [
    {
      question: "How often does EconNews refresh financial headlines?",
      answer:
        "Feeds update continuously with batching controls so you can scale from hourly digests to minute-by-minute tracking based on your plan.",
    },
    {
      question: "Which categories are monitored?",
      answer:
        "We cover stocks, crypto, macroeconomics, technology, corporate updates, and foreign exchange, with custom filters for each sector.",
    },
    {
      question: "Can I integrate EconNews with our internal tools?",
      answer:
        "Yes. The FastAPI backend exposes authenticated endpoints for news retrieval, engagement signals, and collection triggers.",
    },
  ],
};

export default en;
