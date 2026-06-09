const CATEGORIES = {
  cuisines: "Cuisines",
  dressings: "Dressings",
  mobilier: "Mobilier",
  escaliers: "Escaliers",
  bureaux: "Bureaux",
  commerces: "Commerces",
  projets_speciaux: "Projets spéciaux",
};

const IMAGES = {
  fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  atelier: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  cuisine: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
  dressing: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
  mobilier: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  bureau: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  boutique: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
  escalier: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  wood: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
  detail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
};

const PROJECTS = [
  {
    slug: "cuisine-maison-vignoble",
    titre: "Maison vignoble",
    categorie: "cuisines",
    annee: 2024,
    lieu: "Narbonne",
    type_client: "Résidentiel",
    surface: "18 m²",
    featured: true,
    image: IMAGES.cuisine,
    description_courte:
      "Cuisine sur mesure en chêne clair pour une maison de vigneron du Narbonnais.",
    description: [
      "Cette cuisine a été conçue pour une maison de vigneron du Narbonnais. L'enjeu : créer un espace de vie central, ouvert sur le salon, sans sacrifier la fonctionnalité d'une cuisine de travail.",
      "Le chêne clair apporte chaleur et légèreté dans un volume ancien aux murs épais. Le plan de travail en pierre naturelle ancre l'ensemble. Les poignées dissimulées maintiennent la pureté des façades.",
      "Tout a été fabriqué dans notre atelier de la ZI La Coupe et posé par nos équipes.",
    ],
    materiaux: ["Chêne clair", "Pierre naturelle", "Laque mate", "Quincaillerie dissimulée"],
    galerie: [IMAGES.cuisine, IMAGES.wood, IMAGES.detail, IMAGES.hero],
  },
  {
    slug: "dressing-appartement-mer",
    titre: "Appartement mer",
    categorie: "dressings",
    annee: 2023,
    lieu: "Gruissan",
    type_client: "Résidentiel",
    surface: "12 m²",
    featured: true,
    image: IMAGES.dressing,
    description_courte:
      "Dressing sur mesure en frêne laqué pour un appartement face à la mer.",
    description: [
      "Un appartement secondaire face à la Méditerranée, un dressing à concevoir dans un espace contraint. L'objectif : maximiser le rangement sans alourdir la pièce.",
      "Le frêne laqué blanc crée une surface calme et lumineuse. Les tiroirs intérieurs en chêne massif apportent la chaleur du bois là où la main le touche.",
      "Chaque module a été dimensionné sur site avant fabrication.",
    ],
    materiaux: ["Frêne laqué", "Chêne massif", "Miroir sur mesure", "Ferrures soft-close"],
    galerie: [IMAGES.dressing, IMAGES.wood, IMAGES.detail],
  },
  {
    slug: "meuble-tv-salon-contemporain",
    titre: "Salon contemporain",
    categorie: "mobilier",
    annee: 2024,
    lieu: "Narbonne",
    type_client: "Résidentiel",
    surface: "4,5 m linéaire",
    featured: true,
    image: IMAGES.mobilier,
    description_courte: "Meuble TV et rangement en noyer et laque mate — pièce signature.",
    description: [
      "Pour ce salon contemporain à Narbonne, le client souhaitait un meuble qui intègre écran, rangements et passage de câbles — sans compromis esthétique.",
      "Le noyer sélectionné pour ses veines profondes contraste avec les façades laquées mate. Les assemblages sont réalisés en atelier, les finitions contrôlées une à une.",
      "Un meuble qui ne ressemble à aucun autre, parce qu'il est pensé pour un salon précis.",
    ],
    materiaux: ["Noyer massif", "Laque mate", "Panneau technique", "Finition huilée"],
    galerie: [IMAGES.mobilier, IMAGES.wood, IMAGES.detail, IMAGES.hero],
  },
  {
    slug: "bibliotheque-bureau-architecte",
    titre: "Bureau architecte",
    categorie: "bureaux",
    annee: 2022,
    lieu: "Narbonne",
    type_client: "Professionnel",
    surface: "22 m²",
    featured: false,
    image: IMAGES.bureau,
    description_courte: "Bibliothèque et bureau intégrés en chêne fumé.",
    description: [
      "Un cabinet d'architecture à Narbonne nous a confié l'agencement de son espace de travail.",
      "Le chêne fumé structure l'espace sans l'alourdir. Le bureau intégré prolonge la bibliothèque en une seule pièce continue.",
      "Projet professionnel, exigence identique : chaque détail est pensé pour l'usage quotidien.",
    ],
    materiaux: ["Chêne fumé", "Laque satinée", "Éclairage intégré", "Stratifié premium"],
    galerie: [IMAGES.bureau, IMAGES.wood, IMAGES.detail],
  },
  {
    slug: "agencement-boutique-centre",
    titre: "Boutique centre-ville",
    categorie: "commerces",
    annee: 2022,
    lieu: "Narbonne",
    type_client: "Professionnel",
    surface: "35 m²",
    featured: false,
    image: IMAGES.boutique,
    description_courte: "Agencement complet d'une boutique en centre-ville.",
    description: [
      "Une boutique indépendante en centre de Narbonne souhaitait un agencement qui reflète son identité artisanale.",
      "Comptoir, vitrines murales et rangements en bois clair, rehaussés de laiton brossé. Installation en une nuit.",
      "Un projet professionnel avec la même exigence que les projets résidentiels.",
    ],
    materiaux: ["Hêtre clair", "Laiton brossé", "Vernis mat", "Vitrage sur mesure"],
    galerie: [IMAGES.boutique, IMAGES.wood, IMAGES.detail],
  },
  {
    slug: "escalier-bois-massif",
    titre: "Escalier bois massif",
    categorie: "escaliers",
    annee: 2023,
    lieu: "Coursan",
    type_client: "Résidentiel",
    surface: "14 marches",
    featured: false,
    image: IMAGES.escalier,
    description_courte: "Escalier droit en chêne massif avec limon central.",
    description: [
      "Pour cette maison de village près de Narbonne, l'escalier existant devait être remplacé par une pièce en bois massif.",
      "Escalier droit à limon central en chêne, marches pleines et garde-corps minimaliste. Assemblé en atelier, ajusté sur site.",
      "Finition huilée naturelle : un escalier pensé pour durer des générations.",
    ],
    materiaux: ["Chêne massif", "Huile dure naturelle", "Acier thermolaqué", "Assemblages traditionnels"],
    galerie: [IMAGES.escalier, IMAGES.wood, IMAGES.detail],
  },
];

const TESTIMONIALS = [
  {
    citation:
      "Excellent travail. Quel plaisir de rencontrer enfin un ébéniste qui a l'amour du travail. Très à l'écoute. Travail sur mesure. Je recommande vivement.",
    auteur: "Client particulier",
    date: "2018",
  },
  {
    citation:
      "Voilà une entreprise qui propose du vrai sur mesure et des matériaux qui changent de l'ordinaire. J'ai un meuble qui ne ressemble à aucun autre.",
    auteur: "Client particulier",
    date: "2017",
  },
];

function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

function getProjectIndex(slug) {
  return PROJECTS.findIndex((p) => p.slug === slug);
}

function getAdjacentProjects(slug) {
  const i = getProjectIndex(slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
}
