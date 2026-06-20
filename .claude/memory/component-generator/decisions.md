# Component Generator — Decizii istorice

Decizii luate în sesiuni anterioare. Folosește-le ca referință pentru cazuri similare.

## 2026-05-02 — Toggle (componentă nouă)
- **Diferență:** primitiv nou, niciun match în `badge|button|card|media-player|modal`; necesar pentru pricing-band billing toggle
- **Decizie:** componentă atomică `toggle` — `<label>` cu `<input type="checkbox">` ascuns (visually-hidden) + `.toggle-track` + `.toggle-thumb`; props: `checked`, `disabled`, `color`, `size`, `id`, `name`, `value`
- **Motivație:** toggle este refolosibil în alte contexte (settings, form, filters); `:has()` pentru state în loc de JS
- **Implementat:** `.toggle` cu `:has(> .toggle-input:checked)` pentru stare activă; traducere thumb cu `translateX(calc(var(--toggle_w) - var(--toggle_h)))`; variante culoare via `--toggle_bg-checked`

## 2026-05-02 — MediaPlayer (componentă nouă)
- **Diferență:** primitive nou, niciun match ≥70% în `badge|button|card|modal`; `card.card-media` e slot intern, nu standalone
- **Decizie:** componentă atomică nouă `media-player` cu prop `ratio: widescreen|landscape|square|portrait` (default `widescreen` → no class) și `hasPlay: boolean` (default `true` → emite `has-play`)
- **Motivație:** scope agent = atomic; header section din imagine (heading+CTA) = block, omis. Play overlay e parte integrantă a primitive-ului → nu separat în `Button`.
- **Implementat:** `.media-player` cu aspect-ratio, slot default pentru img/video; `.media-player-play` button absolut centrat, semi-transparent white + backdrop-filter blur

## 2026-05-01 — Card (variantă border gradient)
- **Diferență:** border 2px gradient roz-violet în loc de border 1px solid gray-200, fără shadow, fără eyebrow, media bg alb în loc de gray-100
- **Decizie:** prop nou `borderType: solid|gradient|none` (default: `solid`); restul prin variabile CSS sau modifier class
- **Motivație:** border weight diferă (1px → 2px) împreună cu tehnica (solid → gradient cu pseudo-element), deci nu e doar valoare schimbată; există minim 3 variante plauzibile → merită prop validat în schema
- **Implementat:** clasă `is-border-${borderType}` pe `.card`; gradient via multi-layer background (`padding-box` + `border-box`); variabilă customizabilă `--card_gradient-border`
