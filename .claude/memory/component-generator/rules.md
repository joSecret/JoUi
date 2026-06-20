# Component Generator — Reguli învățate

Pattern-uri repetitive promovate la reguli din `decisions.md`. Aplică-le automat fără a întreba userul de fiecare dată.

## Format

```
### <Titlu regulă>
- **Aplicabilă când:** <context>
- **Decizie automată:** <ce face agentul>
- **Sursă:** <referință la decisions.md sau conversație>
```

## Reguli active

### Naming clase emise (is- / has- prefix)
- **Aplicabilă când:** generezi orice componentă nouă sau adaugi variante la una existentă
- **Decizie automată:**
  - `is-{prop}-{value}` pentru props enum/variantă, drop suffix `Type` (ex: `borderType="gradient"` → `is-border-gradient`)
  - `is-{state}` pentru stări boolean (`is-active`, `is-disabled`, `is-loading`, `is-open`, `is-selected`)
  - `has-{feature}` pentru prezență opțională boolean (`has-icon`, `has-shadow`, `has-eyebrow`, `has-media`)
  - Valoarea default a unui prop NU emite clasă
  - Selectorii sunt **nested cu `&` în interiorul clasei de bază**, niciodată top-level chained:
    ```css
    .card { &.is-border-gradient { ... } &.has-shadow { ... } }
    ```
- **Sursă:** decizia userului din 2026-05-01 + Card borderType implementation
