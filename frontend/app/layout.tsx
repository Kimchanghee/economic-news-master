import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://econnews.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EconNews — Economic News Aggregator",
    template: "%s | EconNews",
  },
  description: "집중된 경제 뉴스를 한 곳에서 확인하세요. Get centralized economic news in one place.",
  keywords: [
    "economic news",
    "경제 뉴스",
    "finance",
    "business news",
    "market news",
    "stock market",
    "cryptocurrency",
    "global economy",
  ],
  authors: [{ name: "EconNews Team" }],
  creator: "EconNews",
  publisher: "EconNews",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "EconNews",
    title: "EconNews — Economic News Aggregator",
    description: "Get centralized economic news in one place. Multi-language support.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EconNews - Economic News Aggregator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EconNews — Economic News Aggregator",
    description: "Get centralized economic news in one place.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@econnews",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": `${SITE_URL}/en`,
      "ko-KR": `${SITE_URL}/ko`,
      "ja-JP": `${SITE_URL}/ja`,
      "zh-CN": `${SITE_URL}/zh`,
      "es-ES": `${SITE_URL}/es`,
      "fr-FR": `${SITE_URL}/fr`,
      "de-DE": `${SITE_URL}/de`,
      "it-IT": `${SITE_URL}/it`,
      "pt-BR": `${SITE_URL}/pt`,
      "ru-RU": `${SITE_URL}/ru`,
      "ar-SA": `${SITE_URL}/ar`,
      "hi-IN": `${SITE_URL}/hi`,
      "id-ID": `${SITE_URL}/id`,
      "vi-VN": `${SITE_URL}/vi`,
      "th-TH": `${SITE_URL}/th`,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Organization structured data for better AEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EconNews",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Economic news aggregator providing centralized news from multiple sources",
    sameAs: [
      // Add your social media URLs here
      // "https://twitter.com/econnews",
      // "https://facebook.com/econnews",
      // "https://linkedin.com/company/econnews",
    ],
  };

  // WebSite structured data for search box and site name
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EconNews",
    url: SITE_URL,
    description: "Economic news aggregator with multi-language support",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en", "ko", "ja", "zh", "es", "fr", "de", "it", "pt", "ru", "ar", "hi", "id", "vi", "th"],
  };

  return (
    <html lang="ko" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <div className="relative min-h-screen bg-hero-gradient">
          {children}
        </div>
      </body>
    </html>
  );
}
