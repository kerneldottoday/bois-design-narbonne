# 10 — Recommandations conversion

## Objectifs

| Objectif | Priorité | KPI |
|----------|----------|-----|
| Génération de devis | ★★★★★ | Formulaires soumis / mois |
| Prise de rendez-vous | ★★★★ | Clics « Prendre rendez-vous » |
| Appels téléphoniques | ★★★★ | Clics tel: mobile |
| Demandes de contact | ★★★★★ | Total leads / mois |

---

## CTAs — hiérarchie

### Primaires (fond #1A1A1A)
| Label | Emplacement | Destination |
|-------|-------------|-------------|
| **Demander un devis** | Hero, CTA final, Contact, fiche projet | /contact |
| **Parler de votre projet** | Header, sections intermédiaires | /contact |

### Secondaires (outline)
| Label | Emplacement | Destination |
|-------|-------------|-------------|
| **Découvrir nos réalisations** | Hero | /realisations |
| **Prendre rendez-vous** | Atelier, Contact | /contact |
| **04 68 45 43 40** | CTA final, header mobile, footer | tel: link |

### Tertiaires (texte + flèche)
| Label | Emplacement | Destination |
|-------|-------------|-------------|
| Découvrir l'atelier → | Homepage | /atelier |
| Voir toutes les réalisations → | Homepage | /realisations |
| Un projet similaire ? → | Fiche projet | /contact |

---

## Placement des CTAs par page

### Accueil
```
[Hero]           CTA primaire + secondaire
[Réalisations]   Lien tertiaire
[Processus]      Lien tertiaire → /processus
[Atelier]        Lien tertiaire → /atelier
[CTA final]      Devis + Téléphone
```

### Réalisations
```
[Hero]           —
[Grid]           Chaque card → fiche projet (micro-conversion)
[Bas de page]    CTA primaire « Demander un devis »
```

### Fiche projet
```
[Bas]            CTA « Un projet similaire ? »
[Nav]            Projet précédent/suivant (rétention)
```

### Savoir-faire / Atelier / Processus
```
[Bas de chaque section]  —
[CTA final]              CTA primaire
```

### Contact
```
[Formulaire]     CTA submit
[Coordonnées]    Téléphone cliquable
[Carte]          Itinéraire Google Maps
```

---

## Formulaire — optimisation

### Champs

| Champ | Type | Requis | Conversion impact |
|-------|------|--------|-------------------|
| Nom | Text | ✅ | — |
| Email | Email | ✅ | — |
| Téléphone | Tel | ❌ | Recommandé (relance) |
| Type de projet | Select | ✅ | Qualification lead |
| Budget | Select | ❌ | Qualification sans friction |
| Message | Textarea | ✅ | — |

### Règles UX
- **5 champs visibles max** au premier écran mobile
- Labels au-dessus des champs (pas de placeholder-only)
- Bouton submit large, contrasté, texte action : « Envoyer ma demande »
- Message de succès visible sans rechargement
- Pas de CAPTCHA visible (honeypot invisible)
- Checkbox RGPD obligatoire, texte court

### Qualification budget (non bloquant)
Le select budget filtre les leads sans les bloquer — option « Je ne sais pas encore » obligatoire.

---

## Réduction des frictions

| Friction | Solution |
|----------|----------|
| Pas de prix affichés | Normal pour du sur-mesure — compenser par réalisations + témoignages |
| Délais inconnus | FAQ « Combien de temps dure un projet ? » |
| Zone géographique floue | Mentionner « Narbonne et l'Aude » dans chaque CTA section |
| Méfiance artisan | Processus 4 étapes + atelier visible + avis |
| Pas de réponse rapide | Promesse « Réponse sous 48h » visible |

---

## Trust signals

| Signal | Emplacement |
|--------|-------------|
| « Depuis 2015 » | Hero, Atelier |
| Certification Répar'acteurs | Atelier, Footer |
| Témoignages clients | Homepage, fiches projet |
| Adresse atelier réelle | Contact, Footer, Schema.org |
| Téléphone fixe local | Header mobile, CTA, Contact |
| Photos atelier réelles | Atelier, Homepage |
| SIREN dans footer | Footer (crédibilité B2B) |

---

## Mobile — conversion spécifique

| Élément | Implémentation |
|---------|----------------|
| Sticky CTA bar | Bas d'écran : [Appeler] [Devis] après scroll 50 % |
| Click-to-call | `tel:+33468454340` sur tous les numéros |
| Formulaire | Champs full-width, bouton 56px height |
| Images | Optimisées, pas de scroll horizontal |

---

## Tracking recommandé

| Événement | Outil | Action |
|-----------|-------|--------|
| `form_submit` | GA4 | Formulaire envoyé |
| `click_phone` | GA4 | Clic numéro téléphone |
| `click_cta_hero` | GA4 | Clic CTA principal |
| `view_project` | GA4 | Vue fiche projet |
| `filter_category` | GA4 | Filtre réalisations |
| `scroll_75` | GA4 | Engagement page |

---

## A/B tests (phase 2)

| Test | Variante A | Variante B |
|------|-----------|-----------|
| Hero CTA | « Découvrir nos réalisations » | « Parler de votre projet » |
| CTA couleur | Fond sombre | Outline |
| Formulaire | 5 champs | 3 champs + email de suivi |
| Témoignages | Texte seul | Texte + note étoiles |

---

## Parcours post-conversion

```
Formulaire soumis
  → Email notification équipe BOIS DESIGN
  → Page merci avec message personnalisé
  → (Phase 2) Email auto client : « Merci, nous revenons vers vous sous 48h »
  → (Phase 2) Relance J+2 si pas de réponse interne
```

---

## Quick wins (implémenter en premier)

1. **Téléphone cliquable** partout — impact immédiat sur mobile
2. **CTA sticky mobile** — Appeler + Devis
3. **3 projets featured** homepage — preuve visuelle
4. **Promesse 48h** — réduit l'anxiété
5. **FAQ 3 questions** sur Contact — lève les objections
6. **Google Business Profile** optimisé — canal parallèle au site
7. **Campagne avis Google** — demander aux clients satisfaits (2017–2018 + récents)

---

## Ce qu'il ne faut PAS faire

- ❌ Pop-up exit-intent « -20 % »
- ❌ Chatbot agressif au chargement
- ❌ Formulaire en 2 étapes (friction inutile pour ce volume)
- ❌ Demander l'adresse complète dès le premier contact
- ❌ Calendrier de RDV en ligne (trop impersonnel pour du premium sur-mesure — phase 2 possible)
