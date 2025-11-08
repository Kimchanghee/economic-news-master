"use client";

import { useState } from "react";

interface EndpointExample {
  method: string;
  endpoint: string;
  description: string;
  parameters?: { name: string; type: string; required: boolean; description: string }[];
  response: string;
}

const API_ENDPOINTS: EndpointExample[] = [
  {
    method: "GET",
    endpoint: "/news",
    description: "Get list of news items with optional filtering",
    parameters: [
      { name: "category", type: "string", required: false, description: "Filter by category (asia-markets, currencies, china-economy, etc.)" },
      { name: "language", type: "string", required: false, description: "Language code (en, ko, ja)" },
    ],
    response: `{
  "items": [
    {
      "id": "news-123",
      "title": "Asian markets rally on positive economic data",
      "description": "Major Asian stock indices gained...",
      "category": "asia-markets",
      "language": "en",
      "publishedAt": "2025-11-08T10:00:00Z",
      "likes": 42,
      "views": 1523
    }
  ],
  "total": 150
}`,
  },
  {
    method: "GET",
    endpoint: "/news/{news_id}",
    description: "Get a single news item by ID",
    response: `{
  "id": "news-123",
  "title": "Asian markets rally on positive economic data",
  "description": "Major Asian stock indices gained...",
  "category": "asia-markets",
  "language": "en",
  "publishedAt": "2025-11-08T10:00:00Z",
  "likes": 42,
  "views": 1523
}`,
  },
  {
    method: "POST",
    endpoint: "/news/{news_id}/like",
    description: "Increment like counter for a news item",
    response: `{
  "success": true,
  "likes": 43
}`,
  },
  {
    method: "POST",
    endpoint: "/news/{news_id}/view",
    description: "Increment view counter for a news item",
    response: `{
  "success": true,
  "views": 1524
}`,
  },
  {
    method: "GET",
    endpoint: "/news/categories",
    description: "Get list of available categories",
    response: `[
  {
    "id": "asia-markets",
    "label": "Asian Markets",
    "icon": "📈"
  },
  {
    "id": "currencies",
    "label": "Asian Currencies",
    "icon": "💱"
  }
]`,
  },
  {
    method: "GET",
    endpoint: "/news/languages",
    description: "Get list of supported languages",
    response: `[
  {
    "id": "en",
    "label": "English"
  },
  {
    "id": "ko",
    "label": "한국어"
  },
  {
    "id": "ja",
    "label": "日本語"
  }
]`,
  },
];

export default function APIDocsPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointExample>(API_ENDPOINTS[0]);
  const [language, setLanguage] = useState<"en" | "ko" | "ja">("en");

  const content = {
    en: {
      title: "Asia Economic News API Documentation",
      subtitle: "RESTful API for accessing Asian economic news and market data",
      baseUrl: "Base URL",
      authentication: "Authentication",
      authDescription: "Currently, the API is open and does not require authentication. Rate limits may apply.",
      endpoints: "API Endpoints",
      parameters: "Parameters",
      response: "Response Example",
      required: "Required",
      optional: "Optional",
      tryItOut: "Try it out",
    },
    ko: {
      title: "아시아 경제 뉴스 API 문서",
      subtitle: "아시아 경제 뉴스 및 시장 데이터에 접근하기 위한 RESTful API",
      baseUrl: "기본 URL",
      authentication: "인증",
      authDescription: "현재 API는 공개되어 있으며 인증이 필요하지 않습니다. 속도 제한이 적용될 수 있습니다.",
      endpoints: "API 엔드포인트",
      parameters: "매개변수",
      response: "응답 예시",
      required: "필수",
      optional: "선택",
      tryItOut: "사용해보기",
    },
    ja: {
      title: "アジア経済ニュースAPI ドキュメント",
      subtitle: "アジア経済ニュースと市場データにアクセスするためのRESTful API",
      baseUrl: "ベースURL",
      authentication: "認証",
      authDescription: "現在、APIは公開されており、認証は必要ありません。レート制限が適用される場合があります。",
      endpoints: "APIエンドポイント",
      parameters: "パラメータ",
      response: "レスポンス例",
      required: "必須",
      optional: "任意",
      tryItOut: "試してみる",
    },
  };

  const t = content[language];
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.econnews.dev";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="mb-3 text-4xl font-bold">{t.title}</h1>
            <p className="text-lg text-slate-400">{t.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {(["en", "ko", "ja"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  language === lang
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Base URL */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="mb-3 text-xl font-semibold">{t.baseUrl}</h2>
          <code className="block rounded-lg bg-slate-950 p-4 font-mono text-blue-400">{baseUrl}</code>
        </div>

        {/* Authentication */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="mb-3 text-xl font-semibold">{t.authentication}</h2>
          <p className="text-slate-400">{t.authDescription}</p>
        </div>

        {/* Endpoints */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="mb-6 text-2xl font-semibold">{t.endpoints}</h2>

          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            {/* Endpoint List */}
            <div className="space-y-2">
              {API_ENDPOINTS.map((endpoint, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedEndpoint(endpoint)}
                  className={`w-full rounded-lg border p-4 text-left transition ${
                    selectedEndpoint === endpoint
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-slate-800 bg-slate-950/50 hover:border-slate-700"
                  }`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                  </div>
                  <code className="text-sm text-slate-300">{endpoint.endpoint}</code>
                </button>
              ))}
            </div>

            {/* Endpoint Details */}
            <div className="space-y-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`rounded px-3 py-1 text-sm font-bold ${
                      selectedEndpoint.method === "GET"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {selectedEndpoint.method}
                  </span>
                  <code className="text-lg font-semibold text-blue-400">{selectedEndpoint.endpoint}</code>
                </div>
                <p className="text-slate-400">{selectedEndpoint.description}</p>
              </div>

              {selectedEndpoint.parameters && (
                <div>
                  <h3 className="mb-3 text-lg font-semibold">{t.parameters}</h3>
                  <div className="space-y-3 rounded-lg bg-slate-950/50 p-4">
                    {selectedEndpoint.parameters.map((param, idx) => (
                      <div key={idx} className="border-b border-slate-800 pb-3 last:border-0">
                        <div className="mb-1 flex items-center gap-2">
                          <code className="text-sm font-semibold text-blue-400">{param.name}</code>
                          <span className="text-xs text-slate-500">{param.type}</span>
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-semibold ${
                              param.required
                                ? "bg-red-500/20 text-red-400"
                                : "bg-slate-700 text-slate-400"
                            }`}
                          >
                            {param.required ? t.required : t.optional}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-3 text-lg font-semibold">{t.response}</h3>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-sm text-green-400">
                  {selectedEndpoint.response}
                </pre>
              </div>

              <a
                href={`${baseUrl}${selectedEndpoint.endpoint.replace(/{.*?}/g, "1")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                {t.tryItOut}
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
