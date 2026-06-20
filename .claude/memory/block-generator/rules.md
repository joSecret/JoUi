# Block Generator — Reguli învățate

Pattern-uri repetitive promovate la reguli din `decisions.md`. Aplică-le automat fără a întreba userul de fiecare dată.

## Format

```
### <Titlu regulă>
- **Aplicabilă când:** <context>
- **Decizie automată:** <ce face agentul>
- **Sursă:** <referință la decisions.md sau conversație>
```

## Reguli active

### Container query strict pentru layout
- **Aplicabilă când:** generezi orice block care are mai mult de un element major (>1 zonă vizuală)
- **Decizie automată:** root-ul block-ului declară `container-type: inline-size` + `container-name: {block-name}`. Layout-ul e aplicat pe `.{block-name}-inner` (nivel 2). Niciodată `@media` pentru layout — doar `@container`.
- **Sursă:** decizia userului din 2026-05-02 (sesiunea de creare block-generator)

### Nesting CSS strict cu `&`
- **Aplicabilă când:** scrii orice block CSS
- **Decizie automată:** toți selectorii sunt nested sub clasa root cu `&`. Folosește `& > .child` pentru direct children. Variantele `&.is-*` / `&.has-*` nested sub root. Niciodată selectori top-level chained.
- **Sursă:** preferință confirmată în 2026-05-02

### Atomic customization doar prin variabile publice
- **Aplicabilă când:** un block trebuie să modifice aspectul unui atomic
- **Decizie automată:** override doar prin `--{atomic}_*` (fără underscore prefix). Niciodată restilare clasă (`.button { ... }`). Dacă variabila publică lipsește → stop și deleagă la `/component-generator` să o adauge pe atomic.
- **Sursă:** preferință confirmată în 2026-05-02
