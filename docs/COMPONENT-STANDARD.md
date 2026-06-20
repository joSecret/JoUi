# Component Standard

This document is the contract for every component in `src/components/ui/`. Use it when creating or reviewing a component. For the rationale, see the design spec in `docs/superpowers/specs/`.

## File layout

```
src/components/ui/<component-name>/
├── <ComponentName>.astro          Astro implementation
├── <component-name>.css           Shared CSS
├── <component-name>.js            Drupal JS — OPTIONAL
├── <component-name>.twig          Drupal template
├── <component-name>.component.yml Drupal SDC schema
├── <component-name>.md            Technical reference (platform-agnostic)
├── <component-name>.astro.md      Astro platform notes
├── <component-name>.drupal.md     Drupal platform notes
├── <component-name>.demo.mdx      Docs site showcase (internal)
└── thumbnail.svg                  Preview image (internal)
```

## Naming

| Kind | Convention | Example |
|---|---|---|
| Folder | `kebab-case` | `bottom-navigation/` |
| Astro component file | `PascalCase.astro` | `BottomNavigation.astro` |
| Other files | `kebab-case.*` | `bottom-navigation.css` |
| CSS base class | `kebab-case` | `.bottom-navigation` |
| Astro prop | `camelCase` | `iconPosition` |
| Drupal prop | `snake_case` with `<component>_` prefix | `bottom_navigation_icon_position` |
| Drupal SDC id | `{theme}:<component-name>` | `joui:bottom-navigation` |

## Scaffolding a new component

```bash
npm run joui new <name> [--with-js]
```

- `<name>` accepts kebab-case or PascalCase; the generator normalizes it.
- `--with-js` includes `<component-name>.js` (Drupal behaviors).
- Fails if the target folder already exists.

The generator copies `docs/_template/` and substitutes `{{ComponentName}}`, `{{component-name}}`, `{{component_name}}`, `{{COMPONENT_NAME}}` in both filenames and content.

## CSS variable conventions

Follow `docs/CSS-VARIABLES.md`. Summary:

- `--<prefix>_<property>` — public, customizable base variables.
- `--_<prefix>_<property>` — private, consumed inside the component only.
- `--<prefix>_<property>_<state>` — state variants (`_h`, `_f`, `_a`, `_d`).
- `--<prefix>-type_<property>` — override surface for type/variant classes.
- `--<prefix>-state_<property>` — dynamic state driven by interaction selectors.

## Documentation rules

### `<component-name>.md` — platform-agnostic reference

Required sections, in order:

1. Heading + one-sentence description
2. **Features** — bullet list
3. **Props** — table (`Name | Type | Default | Description`) with neutral prop names
4. **Slots** — table
5. **Generated CSS classes** — list of classes the component emits
6. **CSS variables** — three tables (Base, State, Private)
7. **Accessibility** — bullets: keyboard, focus, ARIA, contrast
8. **Dependencies** — list of other joui components; `None.` if standalone

No platform-specific code examples in this file.

### `<component-name>.astro.md` — Astro platform notes

Required sections: Install, Import, Examples (Astro code blocks), Notes.

### `<component-name>.drupal.md` — Drupal platform notes

Required sections: Install, Include (with SDC auto-load note — no `libraries.yml`), Props mapping, Examples (Twig code blocks), SDC notes.

### `<component-name>.demo.mdx` — docs site showcase

Frontmatter (`title`, `description`, `category`, `preview`) + Installation tabs + live Usage block + grouped Examples (Variants, Sizes, States, etc.) using the repo's existing `LiveCodeTabs` / `<Preview>` primitives where applicable + a final API Reference link back to `<component-name>.md`.

## Accessibility baseline

Every component must meet:

- Keyboard focusable, tab order correct.
- `:focus-visible` indicator with sufficient contrast.
- WCAG 2.1 AA contrast on text and interactive states.
- ARIA attributes applied only when they change behavior (no decorative `aria-*`).
- Icon-only interactive controls expose a text label via `aria-label` or visually-hidden text.

## Dependencies

Components may depend only on other components in `src/components/ui/`. They must not import npm packages or runtime libraries beyond what the framework provides. Composition into larger units belongs in `src/blocks/`.

## Reference implementation

`src/components/ui/button/` is the reference. When in doubt, mirror its structure.
