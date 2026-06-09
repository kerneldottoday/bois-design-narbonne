# 04 — Direction artistique & moodboard

## Design Read

Portfolio studio d'architecture pour particuliers exigeants et professionnels de Narbonne — langage minimal architectural premium, densité visuelle faible (galerie), mouvement discret.

**Dials :** Variance 7 · Motion 4 · Density 3

---

## Moodboard conceptuel

### Mots-clés visuels
Lumière matinale · Grain du bois · Béton ciré · Lin · Ombre portée douce · Ligne épurée · Espace négatif · Texture chaude · Silence visuel

### Références d'ambiance

| Référence | Élément à retenir |
|-----------|-------------------|
| CarmoWood | Projets full-bleed, navigation invisible |
| Studios d'architecture scandinaves | Blanc cassé, bois clair, typographie serif |
| Revues Côté Maison / AD | Mise en page éditoriale, légendes discrètes |
| Ateliers d'ébénisterie japonais | Respect du matériau, détails macro |
| Développeurs immobiliers luxe | Confiance, espacement généreux |

### Ce que le moodboard doit évoquer
- Un **appartement parisien rénové**, pas un hangar artisanal
- Un **vestiaire sur mesure**, pas un catalogue IKEA
- Un **atelier silencieux**, pas un chantier bruyant

---

## Palette de couleurs

```
┌─────────────────────────────────────────────────────────┐
│  PRIMARY    #1A1A1A   ████████  Texte, header, CTA dark │
│  SECONDARY  #F7F5F2   ████████  Fond principal          │
│  ACCENT     #A67C52   ████████  Liens, labels, hover    │
│  NEUTRAL    #E5E2DD   ████████  Bordures, séparateurs   │
│  SURFACE    #FFFFFF   ████████  Cards sur fond crème    │
│  OVERLAY    #1A1A1A80 ████████  Overlay hero (50%)      │
└─────────────────────────────────────────────────────────┘
```

### Usage
- **Fond global :** `#F7F5F2` (jamais blanc pur #FFF en fond de page)
- **Texte principal :** `#1A1A1A`
- **Texte secondaire :** `#1A1A1A` à 60 % opacité
- **Accent :** `#A67C52` — sparingly (liens, filets, boutons secondaires)
- **CTA primaire :** fond `#1A1A1A`, texte `#F7F5F2`

### Interdictions
- Pas de rouge, bleu vif, vert sapin
- Pas de dégradés
- Pas d'ombres portées lourdes
- Pas de textures bois en fond CSS (le bois = photos uniquement)

---

## Typographie

### Titres — Cormorant Garamond
- **H1 :** 56–72px desktop / 36–42px mobile, weight 400, letter-spacing -0.02em
- **H2 :** 40–48px desktop / 28–32px mobile
- **H3 :** 28–32px desktop / 22–24px mobile
- **Style :** Editorial serif, élégant, intemporel

### Corps — Inter
- **Body :** 16–18px, weight 400, line-height 1.6
- **Small / labels :** 12–14px, weight 500, uppercase, letter-spacing 0.08em
- **Navigation :** 14px, weight 400

### Hiérarchie
```
OVERLINE (Inter 12px caps)     →  CUISINES · 2024
H1 (Cormorant 64px)            →  Une cuisine pensée
                                   pour ce lieu
Body (Inter 18px)              →  Chêne clair, laque mate,
                                   plan de travail intégré.
```

---

## Grille & espacement

| Token | Valeur |
|-------|--------|
| Container max | 1280px |
| Marge page desktop | 80px |
| Marge page tablette | 48px |
| Marge page mobile | 24px |
| Section spacing | 120px desktop / 80px mobile |
| Grid columns | 12 |
| Gutter | 24px |

---

## Composants UI

### Navigation
- Fixe, fond `#F7F5F2` à 90 % + blur 12px au scroll
- Logo texte « BOIS DESIGN » en Cormorant, pas de pictogramme arbre
- Liens : Accueil · Réalisations · Savoir-faire · Atelier · Processus · Contact
- CTA header : « Parler de votre projet » — outline `#1A1A1A`

### Boutons

| Type | Style |
|------|-------|
| Primaire | Fond `#1A1A1A`, texte crème, padding 16px 32px, radius 0 |
| Secondaire | Outline `#1A1A1A`, fond transparent |
| Texte | Inter 14px + flèche →, couleur accent |

### Cards projet
- Ratio image 4:5 ou 16:10
- Pas de border-radius (angles droits = architectural)
- Titre projet en overlay ou sous l'image
- Catégorie en overline accent
- Hover : scale image 1.03, transition 600ms ease

### Séparateurs
- Filet 1px `#E5E2DD`
- Ou espace blanc généreux (préféré)

---

## Photographie — direction

### Style
- Lumière naturelle latérale
- Tons chauds, pas de saturation excessive
- Cadrage architectural (lignes droites, perspectives)
- Détails matière en macro (veines du bois, assemblages)

### Par type de visuel

| Type | Direction |
|------|-----------|
| Hero | Intérieur complet, personne absente ou silhouette |
| Projet | 3 vues minimum : ensemble, détail, contexte |
| Atelier | Mains + outil, pas de désordre visible |
| Portrait équipe | Fond neutre ou atelier flou |
| Matériaux | Échantillons sur fond `#F7F5F2` |

---

## Motion & animations (Framer)

| Élément | Animation |
|---------|-----------|
| Page load | Fade in 400ms, stagger sections 100ms |
| Scroll reveal | Opacity 0→1 + translateY 20px, 600ms ease-out |
| Images | Parallax subtil 5 % (hero uniquement) |
| Hover cards | Scale 1.03, 500ms |
| Page transition | Crossfade 300ms |
| Menu mobile | Slide from right, 350ms |

**Règle :** Si l'animation se remarque, elle est trop forte.

---

## Iconographie

- Pas d'icônes décoratives
- Flèches minimalistes (→) pour les liens
- Pictogrammes ligne fine uniquement pour contact (téléphone, email, pin)

---

## Anti-patterns (interdits)

- ❌ Bannière « Artisan depuis 2015 » avec clipart marteau
- ❌ Slider automatique hero
- ❌ Témoignages en carrousel infini
- ❌ Pop-up newsletter immédiat
- ❌ Badge « Devis gratuit » flashy
- ❌ Fond bois texture
- ❌ Plus de 2 polices
- ❌ Cards avec ombre portée épaisse
