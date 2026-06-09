# 09 — Structure Framer & CMS

## Configuration globale

| Paramètre | Valeur |
|-----------|--------|
| Framework | Framer Sites |
| CMS | Framer CMS (Collections) |
| Breakpoints | Desktop 1280 · Tablet 768 · Mobile 390 |
| Fonts | Cormorant Garamond (Google) · Inter (Google) |
| Animations | Scroll reveal (opacity + Y), page transition fade |
| Formulaire | Framer Form → email notification + webhook optionnel |

---

## Collections CMS

### Collection 1 : `realisations`

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `slug` | String (auto) | ✅ | URL : `/realisations/[slug]` |
| `titre` | String | ✅ | Titre du projet |
| `categorie` | Enum | ✅ | Voir valeurs ci-dessous |
| `annee` | Number | ✅ | Ex : 2024 |
| `lieu` | String | ✅ | Ex : Narbonne, Gruissan |
| `type_client` | Enum | ✅ | Résidentiel · Professionnel |
| `surface` | String | ❌ | Ex : 18 m² |
| `description` | Rich Text | ✅ | Texte éditorial |
| `description_courte` | String (160 car.) | ✅ | Pour cards + meta |
| `image_hero` | Image | ✅ | 1920×1080 min, WebP |
| `galerie` | Multi-Image | ✅ | 4–8 images |
| `materiaux` | Multi-String | ❌ | Tags matériaux |
| `featured` | Boolean | ❌ | Afficher en homepage |
| `ordre` | Number | ❌ | Tri manuel |
| `meta_title` | String | ❌ | Override SEO |
| `meta_description` | String | ❌ | Override SEO |
| `projet_precedent` | Reference → realisations | ❌ | Navigation |
| `projet_suivant` | Reference → realisations | ❌ | Navigation |

**Enum `categorie` :**
- cuisines
- dressings
- mobilier
- escaliers
- bureaux
- commerces
- projets_speciaux

---

### Collection 2 : `temoignages`

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `slug` | String (auto) | ✅ | |
| `citation` | Text | ✅ | Verbatim client |
| `auteur` | String | ✅ | Prénom + type (ex : Client particulier) |
| `date` | Date | ❌ | Date de l'avis |
| `note` | Number (1-5) | ❌ | |
| `categorie_liee` | Enum | ❌ | Lien vers type de projet |
| `projet_lie` | Reference → realisations | ❌ | |
| `publie` | Boolean | ✅ | Visible sur le site |
| `source` | Enum | ❌ | PagesJaunes · Google · Direct |

---

### Collection 3 : `articles` (phase 2)

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `slug` | String (auto) | ✅ | `/journal/[slug]` |
| `titre` | String | ✅ | |
| `extrait` | String (200 car.) | ✅ | |
| `contenu` | Rich Text | ✅ | |
| `image_cover` | Image | ✅ | |
| `date_publication` | Date | ✅ | |
| `auteur` | String | ❌ | |
| `tags` | Multi-String | ❌ | SEO tags |
| `meta_title` | String | ❌ | |
| `meta_description` | String | ❌ | |

---

## Pages Framer — mapping

| Page Framer | Type | Source données |
|-------------|------|----------------|
| Home | Static + CMS lists | `realisations` (featured=true, limit 3) + `temoignages` (limit 2) |
| Savoir-faire | Static | — |
| Réalisations | CMS List | `realisations` (all, paginated) |
| Réalisation [slug] | CMS Detail | `realisations` |
| Atelier | Static | — |
| Processus | Static | — |
| Contact | Static + Form | — |
| Mentions légales | Static | — |

---

## Composants Framer

### `NavBar`
```
Props: transparent (boolean)
States: default, scrolled (bg blur)
Mobile: hamburger → overlay
```

### `ProjectCard`
```
Props:
  - image: Image
  - titre: String
  - categorie: String
  - annee: Number
  - lieu: String
  - slug: Link
Variants: default, featured (larger)
```

### `CategoryFilter`
```
Props:
  - categories: Array
  - active: String
  - onChange: Action
Style: text tabs, underline accent on active
```

### `TestimonialCard`
```
Props:
  - citation: Text
  - auteur: String
  - note: Number
```

### `ProcessTimeline`
```
Props: steps (Array of {number, title, description})
Variants: horizontal (desktop), vertical (mobile)
```

### `CTABanner`
```
Props:
  - titre: String
  - texte: String
  - cta_label: String
  - cta_link: Link
  - phone: String
Variants: dark, light
```

### `SectionHeader`
```
Props:
  - overline: String
  - titre: String
  - description: String
  - align: left | center
```

### `ContactForm`
```
Fields:
  - nom (text, required)
  - email (email, required)
  - telephone (tel)
  - type_projet (select, required)
  - budget (select)
  - message (textarea, required)
Submit: "Envoyer ma demande"
Success state: message confirmation
```

### `Footer`
```
Static content + dynamic year
```

### `ImageFullBleed`
```
Props:
  - image: Image
  - overlay: Boolean
  - height: 100vh | 70vh | auto
```

---

## Page dynamique — Réalisation [slug]

### Layout structure (Framer layers)

```
Page: Réalisation Detail
├── NavBar
├── ImageFullBleed (CMS: image_hero)
├── Container
│   ├── Overline (CMS: categorie)
│   ├── H1 (CMS: titre)
│   ├── MetaRow (CMS: annee, lieu, surface, type_client)
│   ├── Divider
│   ├── RichText (CMS: description)
│   ├── Gallery Grid (CMS: galerie)
│   ├── MateriauxTags (CMS: materiaux)
│   └── ProjectNav (CMS: precedent/suivant)
├── CTABanner
└── Footer
```

---

## Filtres Réalisations

### Implémentation Framer
1. CMS List `realisations` → source principale
2. CategoryFilter en haut → filtre client-side par `categorie`
3. URL params optionnels : `/realisations?cat=cuisines`
4. Load More : pagination Framer (12 items/page)

---

## Animations Framer (réglages)

| Composant | Effect | Paramètres |
|-----------|--------|------------|
| Sections | Scroll → Appear | Opacity 0→1, Y 20→0, Duration 0.6s, Ease ease-out |
| ProjectCard image | Hover | Scale 1→1.03, Duration 0.5s |
| Hero text | Load | Stagger 0.1s per line |
| Page transition | Navigate | Crossfade 0.3s |
| Mobile menu | Open | X translate 100%→0, 0.35s |
| CategoryFilter | Active tab | Underline width 0→100%, 0.3s |

---

## Formulaire — configuration

```
Action: Email to contact@boisdesign.fr (à confirmer)
         + Webhook Zapier/Make (optionnel CRM)
Anti-spam: Honeypot field (hidden)
RGPD: Checkbox consentement données (required)
Auto-reply: Email confirmation client (phase 2)
```

### Notification email (template)
```
Objet: Nouvelle demande — [type_projet] — [nom]

Nom: [nom]
Email: [email]
Téléphone: [telephone]
Type de projet: [type_projet]
Budget: [budget]
Message:
[message]
```

---

## Checklist intégration Framer

### Phase 1 — MVP
- [ ] Créer le projet Framer + connecter domaine
- [ ] Importer fonts Cormorant Garamond + Inter
- [ ] Définir color styles (4 couleurs)
- [ ] Créer composants réutilisables (8)
- [ ] Créer collection `realisations` + 6 projets exemple
- [ ] Créer collection `temoignages` + 2 entrées
- [ ] Builder 7 pages statiques
- [ ] Configurer page dynamique [slug]
- [ ] Configurer formulaire contact
- [ ] Tester responsive 3 breakpoints
- [ ] Ajouter meta tags + OG images
- [ ] Publier

### Phase 2 — Optimisation
- [ ] Collection `articles` + 3 premiers posts
- [ ] Filtres URL param
- [ ] Google Analytics 4
- [ ] Search Console
- [ ] A/B test CTA hero

---

## Projets exemple (à créer dans CMS)

| Slug | Titre | Catégorie | Featured |
|------|-------|-----------|----------|
| cuisine-maison-vignoble | Maison vignoble | cuisines | ✅ |
| dressing-appartement-mer | Appartement mer | dressings | ✅ |
| meuble-tv-salon-contemporain | Salon contemporain | mobilier | ✅ |
| bibliotheque-bureau-architecte | Bureau architecte | bureaux | ❌ |
| agencement-boutique-centre | Boutique centre-ville | commerces | ❌ |
| escalier-bois-massif | Escalier bois massif | escaliers | ❌ |
