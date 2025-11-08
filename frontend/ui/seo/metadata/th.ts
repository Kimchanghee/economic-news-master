import { LocaleSEO, CategorySEO } from "./types";

export const thSEO: LocaleSEO = {
  title: "ข่าวเศรษฐกิจ - อัปเดตเศรษฐกิจโลกแบบเรียลไทม์",
  description: "การคัดสรรข่าวเศรษฐกิจแบบเรียลไทม์ที่ขับเคลื่อนด้วย AI รับข่าวสารล่าสุดเกี่ยวกับธุรกิจ การเงิน เทคโนโลยี สกุลเงินดิจิทัล และอื่นๆ ใน 20 ภาษา",
  keywords: ["ข่าวเศรษฐกิจ", "ข่าวเรียลไทม์", "เศรษฐกิจโลก", "ข่าวการเงิน", "ข่าวธุรกิจ", "ตลาดหุ้น", "สกุลเงินดิจิทัล", "ข่าวเทคโนโลยี", "การคัดสรรข่าวด้วย AI", "ข่าวหลายภาษา"],
  ogTitle: "ข่าวเศรษฐกิจ - อัปเดตโลกแบบเรียลไทม์",
  ogDescription: "การคัดสรรข่าวเศรษฐกิจแบบเรียลไทม์ที่ขับเคลื่อนด้วย AI ใน 20 ภาษา",
  ogType: "website",
  ogImage: "/og-image-th.jpg",
  ogUrl: "https://economic-news.com/th",
  ogSiteName: "ข่าวเศรษฐกิจ",
  twitterCard: "summary_large_image",
  twitterTitle: "ข่าวเศรษฐกิจ - อัปเดตโลก",
  twitterDescription: "ข่าวเศรษฐกิจแบบเรียลไทม์ใน 20 ภาษา",
  twitterImage: "/twitter-card-th.jpg",
  twitterSite: "@economicnews",
  canonical: "https://economic-news.com/th",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Economic News Team",
  publisher: "Economic News",
  language: "th",
  locale: "th_TH",
  alternateLocales: ["en_US", "ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "de_DE", "it_IT", "pt_BR", "ru_RU", "ar_SA", "hi_IN", "id_ID", "vi_VN", "nl_NL", "sv_SE", "pl_PL", "tr_TR", "el_GR"],
};

export const thCategorySEO: CategorySEO = {
  all: { title: "ข่าวเศรษฐกิจทั้งหมด", description: "เรียกดูข่าวเศรษฐกิจล่าสุดทุกหมวดหมู่", keywords: ["ข่าวทั้งหมด", "ภาพรวมเศรษฐกิจ", "ข่าวเศรษฐกิจเรียลไทม์"] },
  business: { title: "ข่าวธุรกิจ", description: "แนวโน้มองค์กรโลก กลยุทธ์การจัดการ และการวิเคราะห์อุตสาหกรรม", keywords: ["ธุรกิจ", "ข่าวองค์กร", "การจัดการ", "แนวโน้มอุตสาหกรรม", "สตาร์ทอัพ"] },
  finance: { title: "ข่าวการเงิน", description: "อัปเดตเกี่ยวกับตลาดหุ้น พันธบัตร การลงทุน ธนาคาร และประกันภัย", keywords: ["การเงิน", "หุ้น", "การลงทุน", "พันธบัตร", "ธนาคาร", "หลักทรัพย์"] },
  technology: { title: "ข่าวเทคโนโลยี", description: "ปัญญาประดิษฐ์ บิ๊กดาต้า คลาวด์คอมพิวติ้ง ความปลอดภัยทางไซเบอร์ และนวัตกรรมทางเทคโนโลยี", keywords: ["เทคโนโลยี", "ไอที", "ปัญญาประดิษฐ์", "AI", "บิ๊กดาต้า", "คลาวด์"] },
  crypto: { title: "ข่าวสกุลเงินดิจิทัล", description: "Bitcoin, Ethereum, blockchain, NFT และตลาด DeFi", keywords: ["สกุลเงินดิจิทัล", "บิตคอยน์", "อีเธอเรียม", "บล็อกเชน", "NFT", "DeFi"] },
  markets: { title: "ข่าวตลาด", description: "อัปเดตแบบเรียลไทม์เกี่ยวกับตลาดหลักทรัพย์ อัตราแลกเปลี่ยน สินค้าโภคภัณฑ์ และฟิวเจอร์ส", keywords: ["ตลาด", "ตลาดหลักทรัพย์", "สกุลเงิน", "สินค้าโภคภัณฑ์", "ฟิวเจอร์ส"] },
  economy: { title: "ข่าวเศรษฐกิจ", description: "ตัวชี้วัดเศรษฐกิจมหภาค นโยบายเศรษฐกิจ การค้า และนโยบายอุตสาหกรรม", keywords: ["เศรษฐกิจ", "เศรษฐศาสตร์มหภาค", "นโยบายเศรษฐกิจ", "การค้า", "GDP"] },
  global: { title: "ข่าวโลก", description: "การวิเคราะห์แนวโน้มเศรษฐกิจแยกตามประเทศ การค้าระหว่างประเทศ และประเด็นเศรษฐกิจโลก", keywords: ["โลก", "เศรษฐกิจโลก", "การค้าระหว่างประเทศ", "เศรษฐกิจต่างประเทศ"] },
};

