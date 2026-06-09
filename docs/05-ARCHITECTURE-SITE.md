# 05 — Architecture du site

## Arborescence

```
boisdesign.fr/
├── /                          Accueil
├── /realisations              Galerie projets (CMS)
│   └── /realisations/[slug]   Fiche projet
├── /savoir-faire              Expertise (conception → installation)
├── /atelier                   Histoire, équipe, matériaux
├── /processus                 Parcours client 4 étapes
├── /contact                   Formulaire + coordonnées
├── /mentions-legales
└── /politique-confidentialite
```

**Phase 2 (optionnel) :**
```
├── /journal                   Articles SEO (CMS)
│   └── /journal/[slug]
```

---

## Pages — structure détaillée

### Accueil `/`

| # | Section | Composant Framer | CMS |
|---|---------|------------------|-----|
| 1 | Hero | Full-viewport image + H1 + CTA | Non |
| 2 | Introduction | Texte éditorial centré | Non |
| 3 | Réalisations vedettes | Grid 3 projets | Oui — featured |
| 4 | Expertise | 4 colonnes icône-less | Non |
| 5 | Processus | Timeline horizontale | Non |
| 6 | Atelier | Image + texte split | Non |
| 7 | Témoignages | 2 citations | Oui |
| 8 | Contact CTA | Bandeau sombre + bouton | Non |

### Savoir-faire `/savoir-faire`

| Section | Contenu |
|---------|---------|
| Hero | Titre + intro |
| Conception | Texte + image |
| Fabrication | Texte + image atelier |
| Finition | Texte + macro matière |
| Installation | Texte + image chantier |
| CTA | Lien vers contact |

### Réalisations `/realisations`

| Élément | Détail |
|---------|--------|
| Filtres | Catégories CMS (tabs) |
| Grid | Masonry ou grid 2 col desktop |
| Card | Image, titre, catégorie, année |
| Pagination | Load more (12 par page) |

### Fiche projet `/realisations/[slug]`

| Section | Contenu |
|---------|---------|
| Hero image | Full-width |
| Meta | Catégorie · Année · Lieu · Surface |
| Description | Texte éditorial |
| Galerie | 4–8 images |
| Matériaux | Tags |
| Témoignage lié | Optionnel |
| Navigation | Projet précédent / suivant |
| CTA | « Un projet similaire ? » |

### Atelier `/atelier`

| Section | Contenu |
|---------|---------|
| Histoire | 2015, fondateurs, philosophie |
| Équipe | Portraits (optionnel phase 1) |
| Matériaux | Grid échantillons |
| Savoir-faire | Certifications (Répar'acteurs) |
| Visite | Photo atelier ZI La Coupe |

### Processus `/processus`

| Étape | Contenu |
|-------|---------|
| 1. Découverte | Écoute, visite, brief |
| 2. Conception | Plans, choix matériaux, validation |
| 3. Fabrication | Atelier, suivi avancement |
| 4. Installation | Pose, finitions, réception |

### Contact `/contact`

| Élément | Détail |
|---------|--------|
| Formulaire | 6 champs (voir conversion) |
| Coordonnées | Adresse, tel, horaires |
| Carte | Google Maps embed minimal |
| FAQ rapide | 3 questions |

---

## Navigation

### Header (desktop)
```
BOIS DESIGN          Réalisations  Savoir-faire  Atelier  Processus     [Parler de votre projet]
```

### Header (mobile)
```
BOIS DESIGN                                                    [☰]
```
Menu overlay : liens + CTA + téléphone cliquable

### Footer
```
BOIS DESIGN
Le bois sur mesure pensé pour durer.

Navigation          Contact                    Suivre
Réalisations        ZI La Coupe                (réseaux si confirmés)
Savoir-faire        Route de Perpignan
Atelier             11100 Narbonne
Processus           04 68 45 43 40
Contact             Lun–Jeu 8h–19h

© 2026 BOIS DESIGN · Mentions légales · Confidentialité
SIREN 817 434 822
```

---

## Parcours utilisateur

### Parcours 1 — Inspiration → Devis
```
Google « cuisine sur mesure Narbonne »
  → Accueil (hero + réalisations)
    → Fiche projet cuisine
      → CTA « Parler de votre projet »
        → Formulaire contact
```

### Parcours 2 — Confiance → Appel
```
Référence bouche-à-oreille
  → Accueil
    → Atelier (histoire + Répar'acteurs)
      → Processus
        → Clic téléphone mobile
```

### Parcours 3 — SEO long tail
```
Google « ébéniste Narbonne »
  → Savoir-faire
    → Réalisations filtrées
      → Contact
```

---

## Composants réutilisables Framer

| Composant | Variantes |
|-----------|-----------|
| `SectionHeader` | avec/sans overline, align left/center |
| `ProjectCard` | grid/list, featured |
| `TestimonialBlock` | single/carousel (max 3) |
| `CTABanner` | dark/light |
| `ProcessStep` | horizontal/vertical |
| `ContactForm` | embedded/standalone |
| `ImageFullBleed` | avec/sans overlay |
| `CategoryFilter` | tabs/pills |
| `MetaTags` | catégorie, année, lieu |

---

## Responsive breakpoints

| Breakpoint | Largeur | Colonnes grid |
|------------|---------|---------------|
| Desktop | ≥ 1280px | 12 |
| Laptop | 1024–1279px | 12 |
| Tablette | 768–1023px | 8 |
| Mobile | < 768px | 4 |

### Adaptations clés
- Hero : 100vh desktop → 70vh mobile
- Grid projets : 3 col → 2 col → 1 col
- Navigation : inline → hamburger
- Processus : horizontal → vertical stack
- Typo H1 : 64px → 36px
