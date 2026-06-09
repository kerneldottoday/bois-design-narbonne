# 08 — SEO complet

## Stratégie

**Cible géographique :** Narbonne (11100) + rayon 50 km (Aude, Hérault limitrophe, Corbières, littoral)  
**Approche :** Long tail premium + SEO local + contenu projet

### Mots-clés prioritaires

| Priorité | Mot-clé | Volume estimé | Difficulté |
|----------|---------|---------------|------------|
| P1 | ébéniste Narbonne | Faible | Faible |
| P1 | mobilier sur mesure Narbonne | Faible | Moyenne |
| P1 | cuisine sur mesure Narbonne | Moyen | Moyenne |
| P2 | dressing sur mesure Narbonne | Faible | Faible |
| P2 | agencement intérieur Narbonne | Faible | Moyenne |
| P2 | menuiserie Narbonne | Élevé | Élevée |
| P3 | artisan bois Narbonne | Faible | Faible |
| P3 | ébénisterie Aude | Faible | Faible |
| P3 | meuble TV sur mesure Narbonne | Très faible | Très faible |

> **Note :** Éviter de cibler « menuiserie Narbonne » en page principale — trop concurrentiel (PVC/alu). L'utiliser en page secondaire ou blog.

---

## Balises par page

### Accueil `/`

| Élément | Contenu |
|---------|---------|
| **Title** | BOIS DESIGN — Ébénisterie & Mobilier Sur Mesure à Narbonne |
| **Meta Description** | Atelier d'ébénisterie à Narbonne. Cuisines, dressings et mobilier sur mesure — conception, fabrication et installation. Depuis 2015. Demandez un devis. |
| **H1** | Le bois sur mesure pensé pour durer. |
| **H2** | Des intérieurs qui racontent une histoire |
| **H2** | Un savoir-faire complet, un seul interlocuteur |
| **H2** | Quatre étapes, une seule exigence |
| **H2** | Là où le bois prend forme |
| **H2** | La confiance de nos clients |
| **H2** | Vous avez un projet ? |

**Schema.org :** `LocalBusiness` + `FurnitureStore` + `HomeAndConstructionBusiness`

```json
{
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "BOIS DESIGN",
  "description": "Ébénisterie et mobilier sur mesure à Narbonne",
  "url": "https://www.boisdesign.fr",
  "telephone": "+33468454340",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ZI La Coupe, Route de Perpignan",
    "addressLocality": "Narbonne",
    "postalCode": "11100",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.1843,
    "longitude": 3.0038
  },
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "19:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "17:00"}
  ],
  "foundingDate": "2015",
  "priceRange": "€€€"
}
```

---

### Savoir-faire `/savoir-faire`

| Élément | Contenu |
|---------|---------|
| **Title** | Savoir-faire Ébénisterie — BOIS DESIGN Narbonne |
| **Meta Description** | Conception, fabrication, finition et installation de mobilier sur mesure. Un atelier d'ébénisterie complet à Narbonne, de la première esquisse à la pose. |
| **H1** | Savoir-faire |
| **H2** | Conception |
| **H2** | Fabrication |
| **H2** | Finition |
| **H2** | Installation |

---

### Réalisations `/realisations`

| Élément | Contenu |
|---------|---------|
| **Title** | Réalisations — Cuisines & Mobilier Sur Mesure \| BOIS DESIGN Narbonne |
| **Meta Description** | Découvrez nos réalisations : cuisines, dressings, mobilier et agencements sur mesure à Narbonne et dans l'Aude. Chaque projet est unique. |
| **H1** | Réalisations |
| **H2** | Votre projet mérite la même attention |

---

### Fiche projet `/realisations/[slug]` (template)

| Élément | Contenu |
|---------|---------|
| **Title** | [Titre projet] — [Catégorie] Sur Mesure Narbonne \| BOIS DESIGN |
| **Meta Description** | [Titre projet] : [description courte 150 car.] réalisé par BOIS DESIGN, ébéniste à Narbonne. [Matériaux principaux]. |
| **H1** | [Titre du projet] |
| **H2** | Matériaux |

---

### Atelier `/atelier`

| Élément | Contenu |
|---------|---------|
| **Title** | Notre Atelier d'Ébénisterie à Narbonne — BOIS DESIGN |
| **Meta Description** | Atelier de fabrication à Narbonne depuis 2015. Ébénistes, menuisiers, certification Répar'acteurs. Découvrez notre savoir-faire artisanal. |
| **H1** | L'atelier |
| **H2** | Notre histoire |
| **H2** | L'équipe |
| **H2** | Les matériaux |
| **H2** | Nos engagements |

---

### Processus `/processus`

| Élément | Contenu |
|---------|---------|
| **Title** | Notre Processus Sur Mesure — De la Conception à la Pose \| BOIS DESIGN |
| **Meta Description** | Découverte, conception, fabrication, installation : découvrez les 4 étapes de notre accompagnement pour votre projet bois sur mesure à Narbonne. |
| **H1** | Le processus |
| **H2** | 01 — Découverte |
| **H2** | 02 — Conception |
| **H2** | 03 — Fabrication |
| **H2** | 04 — Installation |

---

### Contact `/contact`

| Élément | Contenu |
|---------|---------|
| **Title** | Contact & Devis — BOIS DESIGN, Ébéniste à Narbonne |
| **Meta Description** | Contactez BOIS DESIGN pour votre projet de cuisine, dressing ou mobilier sur mesure à Narbonne. Réponse sous 48h. 04 68 45 43 40. |
| **H1** | Contact |
| **H2** | Partagez votre projet |

---

## Pages catégorie (filtres SEO — option phase 2)

| URL | Title |
|-----|-------|
| `/realisations/cuisines` | Cuisines Sur Mesure Narbonne — Réalisations BOIS DESIGN |
| `/realisations/dressings` | Dressings Sur Mesure Narbonne — Réalisations BOIS DESIGN |
| `/realisations/mobilier` | Mobilier Sur Mesure Narbonne — Réalisations BOIS DESIGN |
| `/realisations/escaliers` | Escaliers Sur Mesure Narbonne — Réalisations BOIS DESIGN |
| `/realisations/bureaux` | Agencement Bureau Narbonne — Réalisations BOIS DESIGN |
| `/realisations/commerces` | Agencement Commerce Narbonne — Réalisations BOIS DESIGN |

---

## Articles blog (phase 2 — suggestions)

| Titre | Mot-clé cible |
|-------|---------------|
| Comment choisir son ébéniste à Narbonne | ébéniste Narbonne |
| Cuisine sur mesure : 5 questions avant de se lancer | cuisine sur mesure Narbonne |
| Bois massif ou placage : que choisir pour son dressing ? | dressing sur mesure Narbonne |
| Répar'acteurs : pourquoi réparer plutôt que remplacer ? | artisan bois Narbonne |
| Les tendances mobilier bois 2026 | agencement intérieur Narbonne |

---

## SEO technique (Framer)

- [ ] URL canoniques sur chaque page
- [ ] Sitemap XML auto (Framer)
- [ ] robots.txt : Allow all
- [ ] Images : alt text descriptif avec mot-clé local
- [ ] Lazy loading images below fold
- [ ] Core Web Vitals : images WebP, max 200 Ko hero
- [ ] Redirection 301 si domaine existant
- [ ] Google Search Console + Google Business Profile
- [ ] Balises Open Graph + Twitter Card par page

### Alt text (exemples)
- `Cuisine sur mesure en chêne clair réalisée par BOIS DESIGN à Narbonne`
- `Atelier d'ébénisterie BOIS DESIGN — ZI La Coupe, Narbonne`
- `Dressing sur mesure avec finition laque mate — Narbonne`

---

## Google Business Profile

| Champ | Contenu |
|-------|---------|
| Nom | BOIS DESIGN |
| Catégorie principale | Ébéniste |
| Catégories secondaires | Menuisier, Fabricant de meubles, Agenceur intérieur |
| Description | Atelier d'ébénisterie et mobilier sur mesure à Narbonne. Cuisines, dressings, agencements. Conception, fabrication, installation. Depuis 2015. |
| Site web | https://www.boisdesign.fr |
| Téléphone | 04 68 45 43 40 |
| Photos | Minimum 10 (atelier + projets) |
