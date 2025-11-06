import { LocaleContent } from "./types";

const pt: LocaleContent = {
  metaTitle: "EconNews Agregador de Notícias Econômicas | Inteligência Multilíngue",
  metaDescription:
    "Acompanhe bolsa, cripto, economia, tecnologia, negócios e câmbio em tempo real. Conteúdo otimizado para AEO e SEO com resumos em quinze idiomas.",
  keywords: [
    "notícias econômicas",
    "mercado financeiro",
    "notícias de cripto",
    "câmbio",
    "painel econômico",
    "answer engine optimization",
  ],
  locale: "pt_BR",
  heroTitle: "Central completa para notícias econômicas em tempo real",
  heroSubtitle:
    "Resumos com IA, dados estruturados e suporte multilíngue garantem respostas confiáveis para equipes globais.",
  ctaLabel: "Abrir dashboard ao vivo",
  valuePropsTitle: "Por que o EconNews se destaca",
  sections: [
    {
      title: "Pensado para Answer Engines",
      body:
        "Incluímos FAQ, dados estruturados e palavras-chave para que assistentes de voz e resultados ricos exibam o EconNews primeiro.",
      bullets: [
        "Sínteses instantâneas de cada matéria",
        "Tags consistentes de categoria e idioma",
        "Markup JSON-LD pronto para rich snippets",
      ],
    },
    {
      title: "Cobertura em 15 idiomas",
      body:
        "Português, inglês, espanhol, francês, árabe, hindi e muito mais, mantendo contexto e consistência.",
      bullets: [
        "Taxonomia unificada para comparar mercados",
        "CTAs e suporte adaptados a cada região",
        "Relatórios prontos para executivos globais",
      ],
    },
    {
      title: "Integração sem atritos",
      body:
        "API autenticada, painel administrativo e registros automatizados aceleram monitoramento e distribuição.",
      bullets: [
        "Coleta manual ou agendada com logs",
        "Métricas de visualização e curtidas para priorização",
        "Exportação JSON para BI e pipelines de dados",
      ],
    },
  ],
  faqs: [
    {
      question: "Com que frequência as notícias são atualizadas?",
      answer:
        "As fontes RSS são consultadas continuamente; é possível ajustar tamanho e intervalo dos lotes conforme a operação.",
    },
    {
      question: "Quais categorias estão disponíveis?",
      answer:
        "Bolsa, cripto, economia, tecnologia, negócios e câmbio, com filtros para cada segmento.",
    },
    {
      question: "Posso integrar o EconNews às nossas ferramentas internas?",
      answer:
        "Sim. Endpoints FastAPI autenticados permitem obter notícias, métricas de engajamento e acionar coletas.",
    },
  ],
};

export default pt;
