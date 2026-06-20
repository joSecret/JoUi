# Block Generator — Decizii istorice

Decizii structurale luate în sesiuni anterioare. Folosește-le ca referință pentru cazuri similare.

## Format

```
## YYYY-MM-DD — <block-name>
- **Difference:** <ce era diferit>
- **Decision:** <prop / modifier / variable>
- **Rationale:** <de ce>
- **Implemented:** <ce clase / variabile au rezultat>
```

## 2026-05-02 — pricing-band
- **Difference:** Card atomic nu se potrivea structural (card-media mereu renderat + eyebrow deasupra heading-ului; pricing card are plan-name + badge pe același rând)
- **Decision:** HTML nativ pentru plan cards în block; Badge + Button + Toggle importate ca atomice
- **Rationale:** Card atomic ar adăuga spațiu gol din card-media și nu suportă layout-ul plan-name/badge side-by-side fără modificare atomică
- **Implemented:** `.pricing-band-plan-card` (nativ) cu border gradient via padding-box/border-box pe `.is-featured`; `--btn_bg: gradient` pentru CTA featured; `--btn_d: block` + `width: 100%` pentru full-width CTA

