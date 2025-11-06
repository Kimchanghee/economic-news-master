import { LocaleContent } from "./types";

const it: LocaleContent = {
  metaTitle: "EconNews Aggregatore di Notizie Economiche | Intelligence Multilingue",
  metaDescription:
    "Monitora in tempo reale mercati azionari, criptovalute, economia, tecnologia, business e forex. Contenuti ottimizzati per AEO e SEO con riassunti in quindici lingue.",
  keywords: [
    "notizie economiche",
    "mercati finanziari",
    "notizie crypto",
    "forex",
    "dashboard economica",
    "answer engine optimization",
  ],
  locale: "it_IT",
  heroTitle: "Il tuo hub per le notizie economiche in tempo reale",
  heroSubtitle:
    "Riassunti AI, dati strutturati e copertura multilingue aiutano team globali a prendere decisioni rapide e fondate.",
  ctaLabel: "Vai al dashboard live",
  valuePropsTitle: "Perché EconNews è diverso",
  sections: [
    {
      title: "Ottimizzato per AEO",
      body:
        "FAQ, dati strutturati e parole chiave assicurano la visibilità di EconNews in assistenti vocali e snippet avanzati.",
      bullets: [
        "Sintesi istantanee di ogni articolo",
        "Tag di categoria e lingua coerenti",
        "Markup JSON-LD per risultati arricchiti",
      ],
    },
    {
      title: "Copertura in 15 lingue",
      body:
        "Dall’italiano all’hindi, ogni mercato riceve messaggi localizzati mantenendo una tassonomia coerente.",
      bullets: [
        "Esperienza localizzata per EMEA, Americhe e APAC",
        "CTA e supporto personalizzati per ogni area",
        "Confronto tra mercati con la stessa struttura dati",
      ],
    },
    {
      title: "Pronto per i tuoi processi",
      body:
        "API sicura, console admin e job automatizzati semplificano monitoraggio, log e distribuzione delle notizie.",
      bullets: [
        "Ingestione manuale o schedulata con auditing",
        "Metriche di engagement per priorità operative",
        "Esportazioni JSON per analisi e reporting",
      ],
    },
  ],
  faqs: [
    {
      question: "Con quale frequenza vengono aggiornate le notizie?",
      answer:
        "Le fonti RSS vengono consultate costantemente; puoi definire dimensione e frequenza dei batch secondo le esigenze.",
    },
    {
      question: "Quali categorie sono incluse?",
      answer:
        "Azioni, crypto, macroeconomia, tecnologia, corporate e forex con filtri dedicati per ogni settore.",
    },
    {
      question: "È possibile integrare EconNews con i nostri strumenti?",
      answer:
        "Sì. Gli endpoint FastAPI autenticati permettono di ottenere notizie, segnali di engagement e avviare raccolte.",
    },
  ],
};

export default it;
