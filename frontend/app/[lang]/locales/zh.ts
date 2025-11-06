import { LocaleContent } from "./types";

const zh: LocaleContent = {
  metaTitle: "EconNews 经济新闻聚合器 | 多语言实时市场洞察",
  metaDescription:
    "实时跟踪股票、加密货币、宏观经济、科技、企业和外汇动态。通过AEO与SEO优化的结构化内容，为决策团队提供可靠资讯。",
  keywords: ["经济新闻", "市场情报", "加密货币资讯", "外汇行情", "AEO 优化", "SEO 金融"],
  locale: "zh_CN",
  heroTitle: "快速掌握全球市场的经济新闻聚合平台",
  heroSubtitle: "AI 摘要、多语言支持与结构化数据帮助您在搜索与语音答案中占据优势。",
  ctaLabel: "立即查看实时仪表板",
  valuePropsTitle: "为何 EconNews 脱颖而出",
  sections: [
    {
      title: "针对答案引擎优化（AEO）设计",
      body: "通过FAQ结构化数据、关键词与浓缩摘要，让搜索引擎和语音助手优先呈现您的资讯。",
      bullets: [
        "自动生成的关键信息摘要",
        "精确的分类与语言标签",
        "支持富媒体结果的JSON-LD 标记",
      ],
    },
    {
      title: "十五国语言的一体化体验",
      body: "一键切换中文、英文、韩文、日文、法文、西班牙文等十五种语言，为全球团队提供统一视角。",
      bullets: [
        "一致的数据结构便于比较分析",
        "针对当地市场的行动号召与支持",
        "团队协同共享更加高效",
      ],
    },
    {
      title: "轻松融入企业流程",
      body: "管理后台与API让采集、监控、导出完全自动化，所有操作均留存日志。",
      bullets: [
        "支持计划任务与即时采集",
        "浏览量与点赞帮助识别重点新闻",
        "JSON 导出方便接入 BI 工具",
      ],
    },
  ],
  faqs: [
    {
      question: "新闻更新频率如何？",
      answer: "系统持续抓取主流RSS源，可根据需求调整批量大小与间隔，实现近乎实时的更新。",
    },
    {
      question: "覆盖哪些新闻类别？",
      answer: "目前涵盖股票、加密货币、宏观经济、科技、企业、外汇，并提供细分筛选。",
    },
    {
      question: "是否支持与内部系统集成？",
      answer: "支持。通过FastAPI认证接口，您可以获取新闻、更新互动数据并触发采集任务。",
    },
  ],
};

export default zh;
