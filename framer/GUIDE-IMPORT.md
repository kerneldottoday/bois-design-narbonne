# Guide d'intégration Framer — BOIS DESIGN

## Étape 1 — Créer le projet Framer

1. Nouveau projet **Framer Sites**
2. Importer les polices : **Cormorant Garamond** (400, 500) + **Inter** (400, 500)
3. Créer les **Color Styles** :
   - `Primary` → `#1A1A1A`
   - `Secondary` → `#F7F5F2`
   - `Accent` → `#A67C52`
   - `Neutral` → `#E5E2DD`

## Étape 2 — Collections CMS

### Collection `realisations`

Créer les champs selon `docs/09-FRAMER-CMS.md`, puis importer :

**Option A — Copier-coller manuel**
- Ouvrir `cms/realisations.json`
- Créer 6 entrées CMS en copiant chaque objet

**Option B — Import CSV**
- Framer CMS → Import → `framer/import/realisations.csv`
- Mapper les colonnes aux champs CMS
- Séparateur matériaux : `;` → convertir en Multi-String

### Collection `temoignages`

- Importer `framer/import/temoignages.csv` ou copier depuis `cms/temoignages.json`

## Étape 3 — Pages à créer

| Page | Type | CMS bind |
|------|------|----------|
| Home | Static | List `realisations` (featured=true, limit 3) |
| Savoir-faire | Static | — |
| Réalisations | CMS List | `realisations` |
| Réalisation | CMS Detail | `realisations` (slug) |
| Atelier | Static | — |
| Processus | Static | — |
| Contact | Static + Form | — |

## Étape 4 — Composants

Créer en priorité (voir `docs/09-FRAMER-CMS.md`) :
1. `NavBar`
2. `ProjectCard`
3. `SectionHeader`
4. `CTABanner`
5. `Footer`
6. `ContactForm`

## Étape 5 — Textes

Tous les textes statiques sont dans `docs/07-COPYWRITING.md`.

## Étape 6 — SEO

Balises par page dans `docs/08-SEO.md` + Schema.org LocalBusiness sur Home.

## Étape 7 — Images

Remplacer les placeholders par les photos réelles :
- Hero : 1920×1080 min
- Projets : ratio 4:5 ou 16:10
- Format WebP, max 200 Ko (hero), 120 Ko (cards)

## Prototype de référence

Le prototype HTML interactif dans `prototype/` sert de référence visuelle et comportementale pendant l'intégration Framer.

```bash
cd prototype
npx --yes serve -l 3456
```

Ouvrir : http://localhost:3456

## Checklist publication

- [ ] 6 réalisations CMS remplies + images
- [ ] 2 témoignages publiés
- [ ] Formulaire contact → email
- [ ] Responsive testé (1280 / 768 / 390)
- [ ] Meta tags toutes pages
- [ ] Domaine connecté
- [ ] Google Search Console
