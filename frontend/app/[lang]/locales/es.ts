import { LocaleContent } from "./types";

const es: LocaleContent = {
  metaTitle: "EconNews Agregador de Noticias Económicas | Inteligencia Multilingüe",
  metaDescription:
    "Monitorea titulares de bolsa, criptomonedas, economía, tecnología, negocios y divisas en tiempo real. Contenido optimizado para AEO y SEO con resúmenes en quince idiomas.",
  keywords: [
    "noticias económicas",
    "mercados globales",
    "noticias de criptomonedas",
    "tipo de cambio",
    "panel financiero",
    "optimización AEO",
  ],
  locale: "es_ES",
  heroTitle: "Tu centro de noticias económicas en tiempo real",
  heroSubtitle:
    "Convierte señales de mercado en decisiones claras con resúmenes AI, datos estructurados y soporte multilingüe.",
  ctaLabel: "Abrir el panel en vivo",
  valuePropsTitle: "Lo que hace único a EconNews",
  sections: [
    {
      title: "Optimizado para motores de respuesta (AEO)",
      body:
        "Preguntas frecuentes, datos estructurados y palabras clave priorizan tus contenidos en asistentes de voz y resultados enriquecidos.",
      bullets: [
        "Resúmenes inmediatos de cada historia",
        "Etiquetas de categoría e idioma consistentes",
        "Marcado JSON-LD listo para rich snippets",
      ],
    },
    {
      title: "Cobertura multilingüe coherente",
      body:
        "Comparte insights con equipos globales en quince idiomas, desde español e inglés hasta hindi y árabe.",
      bullets: [
        "Estructura uniforme para comparar mercados",
        "CTA y soporte adaptados a cada región",
        "Informes listos para ejecutivos internacionales",
      ],
    },
    {
      title: "Integración sin fricciones",
      body:
        "API segura, panel administrativo y registros de recolección automatizados aceleran tus operaciones de research.",
      bullets: [
        "Ingesta programada o manual según la necesidad",
        "Métricas de vistas y likes para priorizar contenidos",
        "Exportación JSON para BI y data warehouses",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Con qué frecuencia se actualiza EconNews?",
      answer:
        "Las fuentes RSS se consultan de forma continua y puedes ajustar tamaño e intervalo de lote para adaptarlo a tu operación.",
    },
    {
      question: "¿Qué categorías están disponibles?",
      answer:
        "Incluimos bolsa, cripto, economía, tecnología, empresas y divisas, con filtros específicos por sector.",
    },
    {
      question: "¿Podemos integrar EconNews con nuestras herramientas internas?",
      answer:
        "Sí. Ofrecemos endpoints FastAPI autenticados para obtener noticias, métricas de interacción y activar recolecciones.",
    },
  ],
};

export default es;
