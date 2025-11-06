import { LocaleContent } from "./types";

const fr: LocaleContent = {
  metaTitle: "EconNews Agrégateur d’Actualités Économiques | Veille Multilingue",
  metaDescription:
    "Suivez en temps réel les marchés, la crypto, l’économie, la technologie, les entreprises et le Forex. Contenu structuré et optimisé AEO/SEO disponible en quinze langues.",
  keywords: [
    "actualités économiques",
    "veille financière",
    "actualités crypto",
    "taux de change",
    "tableau de bord financier",
    "optimisation AEO",
  ],
  locale: "fr_FR",
  heroTitle: "La plateforme de veille économique multilingue",
  heroSubtitle:
    "Des résumés pilotés par l’IA, des données structurées et une publication multilingue pour répondre aux moteurs de recherche et assistants vocaux.",
  ctaLabel: "Accéder au tableau de bord en direct",
  valuePropsTitle: "Ce qui distingue EconNews",
  sections: [
    {
      title: "Pensé pour l’Answer Engine Optimization",
      body:
        "Des FAQ et un balisage JSON-LD renforcent votre présence dans les réponses directes et les extraits enrichis.",
      bullets: [
        "Synthèses instantanées des articles clés",
        "Étiquettes de catégorie et de langue uniformes",
        "Contenu prêt pour les résultats riches",
      ],
    },
    {
      title: "Une expérience cohérente dans 15 langues",
      body:
        "Partagez vos insights en français, anglais, coréen, japonais, chinois, hindi, arabe et plus encore sans perdre de contexte.",
      bullets: [
        "Structure commune pour comparer les marchés",
        "CTA localisés et support dédié",
        "Rapports exécutifs prêts à l’emploi",
      ],
    },
    {
      title: "Intégration facilitée",
      body:
        "API sécurisée, console d’administration et journaux d’ingestion automatisés s’intègrent parfaitement à vos process.",
      bullets: [
        "Collecte planifiée ou à la demande",
        "Indicateurs d’engagement pour hiérarchiser l’information",
        "Export JSON pour vos pipelines data",
      ],
    },
  ],
  faqs: [
    {
      question: "À quelle fréquence les données sont-elles rafraîchies ?",
      answer:
        "Les flux RSS sont interrogés en continu et vous pouvez ajuster la taille ainsi que l’intervalle des lots selon vos besoins.",
    },
    {
      question: "Quelles thématiques sont couvertes ?",
      answer:
        "Marchés actions, crypto, macroéconomie, technologie, entreprises et Forex avec des filtres sectoriels.",
    },
    {
      question: "Peut-on intégrer EconNews à nos outils internes ?",
      answer:
        "Oui, les endpoints FastAPI sécurisés offrent l’accès aux actualités, aux métriques d’engagement et au déclenchement des collectes.",
    },
  ],
};

export default fr;
