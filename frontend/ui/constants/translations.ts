export type Language =
  | "en"  // English
  | "ko"  // Korean
  | "ja"  // Japanese
  | "zh"  // Chinese Simplified
  | "zh-TW"  // Chinese Traditional
  | "hi"  // Hindi
  | "id"  // Indonesian
  | "vi"  // Vietnamese
  | "th"  // Thai
  | "ms"  // Malay
  | "tl"  // Filipino
  | "ar"  // Arabic
  | "tr"  // Turkish
  | "bn"  // Bengali
  | "ur";  // Urdu

export interface UITranslations {
  // Header
  switchTheme: string;
  selectLanguage: string;

  // Footer
  companyDescription: string;
  categoriesTitle: string;
  infoTitle: string;
  apiDocs: string;
  termsOfService: string;
  privacyPolicy: string;
  customerSupport: string;
  allRightsReserved: string;

  // News
  views: string;
  likes: string;
  readMore: string;
  noNewsAvailable: string;
  loading: string;

  // Ad labels
  headlineSponsor: string;
  marketWatch: string;
  investorNote: string;
  globalPartner: string;
}

export const UI_TEXT: Record<Language, UITranslations> = {
  en: {
    // Header
    switchTheme: "Switch theme",
    selectLanguage: "Select language",

    // Footer
    companyDescription:
      "Real-time digital newsroom for Asian economic news. Check market, currency, policy, and technology news from major Asian countries all in one place.",
    categoriesTitle: "Categories",
    infoTitle: "Information",
    apiDocs: "API Documentation",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    customerSupport: "Customer Support · support@econnews.dev",
    allRightsReserved: "All rights reserved.",

    // News
    views: "views",
    likes: "likes",
    readMore: "Read more",
    noNewsAvailable: "No news available in this category.",
    loading: "Loading...",

    // Ad labels
    headlineSponsor: "Headline Sponsor",
    marketWatch: "Market Watch",
    investorNote: "Investor Note",
    globalPartner: "Global Partner",
  },
  ko: {
    // Header
    switchTheme: "테마 전환",
    selectLanguage: "언어 선택",

    // Footer
    companyDescription:
      "아시아 경제 뉴스를 실시간으로 제공하는 디지털 뉴스룸입니다. 아시아 주요 국가의 시장, 통화, 정책, 기술 뉴스를 한 번에 확인하세요.",
    categoriesTitle: "카테고리",
    infoTitle: "정보",
    apiDocs: "API 문서",
    termsOfService: "이용 약관",
    privacyPolicy: "개인정보 처리방침",
    customerSupport: "고객센터 · support@econnews.dev",
    allRightsReserved: "모든 권리 보유.",

    // News
    views: "조회",
    likes: "좋아요",
    readMore: "더 읽기",
    noNewsAvailable: "이 카테고리에 뉴스가 없습니다.",
    loading: "로딩 중...",

    // Ad labels
    headlineSponsor: "헤드라인 스폰서",
    marketWatch: "시장 동향",
    investorNote: "투자자 노트",
    globalPartner: "글로벌 파트너",
  },
  ja: {
    // Header
    switchTheme: "テーマ切り替え",
    selectLanguage: "言語選択",

    // Footer
    companyDescription:
      "アジア経済ニュースをリアルタイムで提供するデジタルニュースルームです。アジア主要国の市場、通貨、政策、技術ニュースを一度に確認できます。",
    categoriesTitle: "カテゴリー",
    infoTitle: "情報",
    apiDocs: "APIドキュメント",
    termsOfService: "利用規約",
    privacyPolicy: "プライバシーポリシー",
    customerSupport: "カスタマーサポート · support@econnews.dev",
    allRightsReserved: "全著作権所有。",

    // News
    views: "閲覧",
    likes: "いいね",
    readMore: "続きを読む",
    noNewsAvailable: "このカテゴリにニュースがありません。",
    loading: "読み込み中...",

    // Ad labels
    headlineSponsor: "ヘッドラインスポンサー",
    marketWatch: "マーケットウォッチ",
    investorNote: "投資家ノート",
    globalPartner: "グローバルパートナー",
  },
  zh: {
    switchTheme: "切换主题",
    selectLanguage: "选择语言",
    companyDescription: "提供亚洲经济新闻的实时数字新闻编辑室。一站式查看亚洲主要国家的市场、货币、政策和技术新闻。",
    categoriesTitle: "类别",
    infoTitle: "信息",
    apiDocs: "API文档",
    termsOfService: "服务条款",
    privacyPolicy: "隐私政策",
    customerSupport: "客户支持 · support@econnews.dev",
    allRightsReserved: "保留所有权利。",
    views: "浏览",
    likes: "点赞",
    readMore: "阅读更多",
    noNewsAvailable: "此类别中没有新闻。",
    loading: "加载中...",
    headlineSponsor: "头条赞助商",
    marketWatch: "市场观察",
    investorNote: "投资者笔记",
    globalPartner: "全球合作伙伴",
  },
  "zh-TW": {
    switchTheme: "切換主題",
    selectLanguage: "選擇語言",
    companyDescription: "提供亞洲經濟新聞的即時數位新聞編輯室。一站式查看亞洲主要國家的市場、貨幣、政策和技術新聞。",
    categoriesTitle: "類別",
    infoTitle: "資訊",
    apiDocs: "API文檔",
    termsOfService: "服務條款",
    privacyPolicy: "隱私政策",
    customerSupport: "客戶支援 · support@econnews.dev",
    allRightsReserved: "保留所有權利。",
    views: "瀏覽",
    likes: "按讚",
    readMore: "閱讀更多",
    noNewsAvailable: "此類別中沒有新聞。",
    loading: "載入中...",
    headlineSponsor: "頭條贊助商",
    marketWatch: "市場觀察",
    investorNote: "投資者筆記",
    globalPartner: "全球合作夥伴",
  },
  hi: {
    switchTheme: "थीम बदलें",
    selectLanguage: "भाषा चुनें",
    companyDescription: "एशियाई आर्थिक समाचारों के लिए वास्तविक समय डिजिटल न्यूज़रूम। एक ही स्थान पर प्रमुख एशियाई देशों के बाजार, मुद्रा, नीति और प्रौद्योगिकी समाचार देखें।",
    categoriesTitle: "श्रेणियाँ",
    infoTitle: "जानकारी",
    apiDocs: "API प्रलेखन",
    termsOfService: "सेवा की शर्तें",
    privacyPolicy: "गोपनीयता नीति",
    customerSupport: "ग्राहक सहायता · support@econnews.dev",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    views: "दृश्य",
    likes: "पसंद",
    readMore: "और पढ़ें",
    noNewsAvailable: "इस श्रेणी में कोई समाचार उपलब्ध नहीं है।",
    loading: "लोड हो रहा है...",
    headlineSponsor: "मुख्य प्रायोजक",
    marketWatch: "बाजार निगरानी",
    investorNote: "निवेशक नोट",
    globalPartner: "वैश्विक साझेदार",
  },
  id: {
    switchTheme: "Ganti tema",
    selectLanguage: "Pilih bahasa",
    companyDescription: "Ruang berita digital real-time untuk berita ekonomi Asia. Periksa pasar, mata uang, kebijakan, dan berita teknologi dari negara-negara Asia utama dalam satu tempat.",
    categoriesTitle: "Kategori",
    infoTitle: "Informasi",
    apiDocs: "Dokumentasi API",
    termsOfService: "Syarat Layanan",
    privacyPolicy: "Kebijakan Privasi",
    customerSupport: "Dukungan Pelanggan · support@econnews.dev",
    allRightsReserved: "Hak cipta dilindungi.",
    views: "tampilan",
    likes: "suka",
    readMore: "Baca selengkapnya",
    noNewsAvailable: "Tidak ada berita tersedia di kategori ini.",
    loading: "Memuat...",
    headlineSponsor: "Sponsor Utama",
    marketWatch: "Pengamatan Pasar",
    investorNote: "Catatan Investor",
    globalPartner: "Mitra Global",
  },
  vi: {
    switchTheme: "Chuyển chủ đề",
    selectLanguage: "Chọn ngôn ngữ",
    companyDescription: "Phòng tin kỹ thuật số thời gian thực cho tin tức kinh tế châu Á. Kiểm tra thị trường, tiền tệ, chính sách và tin tức công nghệ từ các quốc gia châu Á chính trong một nơi.",
    categoriesTitle: "Danh mục",
    infoTitle: "Thông tin",
    apiDocs: "Tài liệu API",
    termsOfService: "Điều khoản dịch vụ",
    privacyPolicy: "Chính sách bảo mật",
    customerSupport: "Hỗ trợ khách hàng · support@econnews.dev",
    allRightsReserved: "Đã đăng ký bản quyền.",
    views: "lượt xem",
    likes: "thích",
    readMore: "Đọc thêm",
    noNewsAvailable: "Không có tin tức trong danh mục này.",
    loading: "Đang tải...",
    headlineSponsor: "Nhà tài trợ chính",
    marketWatch: "Theo dõi thị trường",
    investorNote: "Ghi chú nhà đầu tư",
    globalPartner: "Đối tác toàn cầu",
  },
  th: {
    switchTheme: "เปลี่ยนธีม",
    selectLanguage: "เลือกภาษา",
    companyDescription: "ห้องข่าวดิจิทัลแบบเรียลไทม์สำหรับข่าวเศรษฐกิจเอเชีย ตรวจสอบตลาด สกุลเงิน นโยบาย และข่าวเทคโนโลยีจากประเทศเอเชียสำคัญในที่เดียว",
    categoriesTitle: "หมวดหมู่",
    infoTitle: "ข้อมูล",
    apiDocs: "เอกสาร API",
    termsOfService: "เงื่อนไขการให้บริการ",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    customerSupport: "ฝ่ายสนับสนุนลูกค้า · support@econnews.dev",
    allRightsReserved: "สงวนลิขสิทธิ์",
    views: "ดู",
    likes: "ถูกใจ",
    readMore: "อ่านเพิ่มเติม",
    noNewsAvailable: "ไม่มีข่าวในหมวดหมู่นี้",
    loading: "กำลังโหลด...",
    headlineSponsor: "ผู้สนับสนุนหลัก",
    marketWatch: "เฝ้าติดตามตลาด",
    investorNote: "บันทึกนักลงทุน",
    globalPartner: "พันธมิตรทั่วโลก",
  },
  ms: {
    switchTheme: "Tukar tema",
    selectLanguage: "Pilih bahasa",
    companyDescription: "Bilik berita digital masa nyata untuk berita ekonomi Asia. Semak pasaran, mata wang, dasar, dan berita teknologi dari negara-negara Asia utama di satu tempat.",
    categoriesTitle: "Kategori",
    infoTitle: "Maklumat",
    apiDocs: "Dokumentasi API",
    termsOfService: "Terma Perkhidmatan",
    privacyPolicy: "Dasar Privasi",
    customerSupport: "Sokongan Pelanggan · support@econnews.dev",
    allRightsReserved: "Hak cipta terpelihara.",
    views: "tontonan",
    likes: "suka",
    readMore: "Baca lagi",
    noNewsAvailable: "Tiada berita tersedia dalam kategori ini.",
    loading: "Memuatkan...",
    headlineSponsor: "Penaja Utama",
    marketWatch: "Pemantauan Pasaran",
    investorNote: "Nota Pelabur",
    globalPartner: "Rakan Kongsi Global",
  },
  tl: {
    switchTheme: "Palitan ang tema",
    selectLanguage: "Pumili ng wika",
    companyDescription: "Real-time na digital newsroom para sa Asian economic news. Tingnan ang market, currency, policy, at technology news mula sa pangunahing bansang Asyano sa isang lugar.",
    categoriesTitle: "Mga kategorya",
    infoTitle: "Impormasyon",
    apiDocs: "API Dokumentasyon",
    termsOfService: "Mga Tuntunin ng Serbisyo",
    privacyPolicy: "Patakaran sa Privacy",
    customerSupport: "Suporta sa Customer · support@econnews.dev",
    allRightsReserved: "Nakalaan ang lahat ng karapatan.",
    views: "views",
    likes: "likes",
    readMore: "Magbasa pa",
    noNewsAvailable: "Walang available na balita sa kategoryang ito.",
    loading: "Naglo-load...",
    headlineSponsor: "Pangunahing Sponsor",
    marketWatch: "Pagsubaybay sa Market",
    investorNote: "Tala ng Investor",
    globalPartner: "Global na Kasosyo",
  },
  ar: {
    switchTheme: "تبديل السمة",
    selectLanguage: "اختر اللغة",
    companyDescription: "غرفة أخبار رقمية في الوقت الفعلي لأخبار الاقتصاد الآسيوي. تحقق من أخبار السوق والعملة والسياسة والتكنولوجيا من الدول الآسيوية الرئيسية في مكان واحد.",
    categoriesTitle: "الفئات",
    infoTitle: "معلومات",
    apiDocs: "وثائق API",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    customerSupport: "دعم العملاء · support@econnews.dev",
    allRightsReserved: "جميع الحقوق محفوظة.",
    views: "المشاهدات",
    likes: "الإعجابات",
    readMore: "اقرأ المزيد",
    noNewsAvailable: "لا توجد أخبار متاحة في هذه الفئة.",
    loading: "جار التحميل...",
    headlineSponsor: "الراعي الرئيسي",
    marketWatch: "مراقبة السوق",
    investorNote: "ملاحظة المستثمر",
    globalPartner: "شريك عالمي",
  },
  tr: {
    switchTheme: "Temayı değiştir",
    selectLanguage: "Dil seç",
    companyDescription: "Asya ekonomi haberleri için gerçek zamanlı dijital haber odası. Başlıca Asya ülkelerinden piyasa, para birimi, politika ve teknoloji haberlerini tek bir yerde kontrol edin.",
    categoriesTitle: "Kategoriler",
    infoTitle: "Bilgi",
    apiDocs: "API Dokümantasyonu",
    termsOfService: "Hizmet Şartları",
    privacyPolicy: "Gizlilik Politikası",
    customerSupport: "Müşteri Desteği · support@econnews.dev",
    allRightsReserved: "Tüm hakları saklıdır.",
    views: "görüntüleme",
    likes: "beğeni",
    readMore: "Devamını oku",
    noNewsAvailable: "Bu kategoride haber bulunmuyor.",
    loading: "Yükleniyor...",
    headlineSponsor: "Ana Sponsor",
    marketWatch: "Piyasa İzleme",
    investorNote: "Yatırımcı Notu",
    globalPartner: "Küresel Ortak",
  },
  bn: {
    switchTheme: "থিম পরিবর্তন করুন",
    selectLanguage: "ভাষা নির্বাচন করুন",
    companyDescription: "এশিয়ান অর্থনৈতিক সংবাদের জন্য রিয়েল-টাইম ডিজিটাল নিউজরুম। প্রধান এশিয়ান দেশগুলির বাজার, মুদ্রা, নীতি এবং প্রযুক্তি সংবাদ এক জায়গায় দেখুন।",
    categoriesTitle: "বিভাগ",
    infoTitle: "তথ্য",
    apiDocs: "API ডকুমেন্টেশন",
    termsOfService: "সেবার শর্তাবলী",
    privacyPolicy: "গোপনীয়তা নীতি",
    customerSupport: "গ্রাহক সহায়তা · support@econnews.dev",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
    views: "দর্শন",
    likes: "পছন্দ",
    readMore: "আরও পড়ুন",
    noNewsAvailable: "এই বিভাগে কোন সংবাদ উপলব্ধ নেই।",
    loading: "লোড হচ্ছে...",
    headlineSponsor: "প্রধান স্পন্সর",
    marketWatch: "বাজার পর্যবেক্ষণ",
    investorNote: "বিনিয়োগকারী নোট",
    globalPartner: "বৈশ্বিক অংশীদার",
  },
  ur: {
    switchTheme: "تھیم تبدیل کریں",
    selectLanguage: "زبان منتخب کریں",
    companyDescription: "ایشیائی اقتصادی خبروں کے لیے ریئل ٹائم ڈیجیٹل نیوز روم۔ ایک ہی جگہ پر بڑے ایشیائی ممالک سے مارکیٹ، کرنسی، پالیسی اور ٹیکنالوجی کی خبریں چیک کریں۔",
    categoriesTitle: "زمرے",
    infoTitle: "معلومات",
    apiDocs: "API دستاویزات",
    termsOfService: "سروس کی شرائط",
    privacyPolicy: "رازداری کی پالیسی",
    customerSupport: "کسٹمر سپورٹ · support@econnews.dev",
    allRightsReserved: "تمام حقوق محفوظ ہیں۔",
    views: "ملاحظات",
    likes: "پسند",
    readMore: "مزید پڑھیں",
    noNewsAvailable: "اس زمرے میں کوئی خبر دستیاب نہیں۔",
    loading: "لوڈ ہو رہا ہے...",
    headlineSponsor: "مرکزی اسپانسر",
    marketWatch: "مارکیٹ واچ",
    investorNote: "سرمایہ کار نوٹ",
    globalPartner: "عالمی شراکت دار",
  },
};

export function getUIText(language: Language): UITranslations {
  return UI_TEXT[language] || UI_TEXT.en;
}
