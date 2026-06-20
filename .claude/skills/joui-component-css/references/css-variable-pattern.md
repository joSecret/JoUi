# JoUI CSS Variable Architecture

Every JoUI component CSS follows a strict 3-layer variable architecture. This ensures components are composable, overridable at the consumer level, and free of hardcoded values.

---

## The 3 Layers

### Layer 1: Public API vars (consumer override hooks)
```css
--<name>_<prop>: <semantic-token-fallback>;
```
These are the public surface. Consumers (blocks, pages, other components) may set these to customize a component per-instance:
```css
.my-block .c--button {
  --btn_bg: var(--c_accent_500);
}
```

### Layer 2: Private computed vars (internal resolution)
```css
--_<name>_<prop>: var(--<name>-type_<prop>, var(--<name>_<prop>));
```
Private vars resolve the cascade: type/variant modifier → public consumer override → semantic token fallback.
The `--_` prefix signals "never set this from outside."

### Layer 3: Rendered CSS properties
```css
color: var(--<name>-state_<prop>, var(--_<name>_<prop>));
background: var(--<name>-state_<bg>, var(--_<name>_<bg>));
```
Rendered properties always read from the state override first, then fall back to the private computed var.
The `--<name>-state_*` vars are only set inside interaction selectors (`&:hover`, `&:focus-visible`, `&:active`).

---

## Variable naming convention

| Layer | Pattern | Example |
|-------|---------|---------|
| Public API | `--<name>_<prop>` | `--btn_bg`, `--btn_c`, `--chip_b-r` |
| Private computed | `--_<name>_<prop>` | `--_btn_bg`, `--_chip_c` |
| State override | `--<name>-state_<prop>` | `--btn-state_bg`, `--chip-state_c` |
| Type/variant modifier | `--<name>-type_<prop>` | `--btn-type_bg`, `--btn-type_p-b` |
| Color variant modifier | `--<name>-<color>_<prop>` | `--btn-primary_bg`, `--chip-danger_c` |

**Common property abbreviations:**
- `_c` → color
- `_bg` → background
- `_b-c` → border-color
- `_b-r` → border-radius
- `_b-w` → border-width
- `_b-s` → border-style
- `_f-s` → font-size
- `_l-h` → line-height
- `_p-b` → padding-block
- `_p-i` → padding-inline
- `_t` → transition
- `_d` → display
- `_g` → gap
- `_o-o` → outline-offset
- `_o-w` → outline-width
- `_o-c` → outline-color

---

## State interaction pattern

State vars are set inside interaction pseudoclass selectors using `&` nesting:

```css
.c--button {
  /* Layer 3: rendered props read state vars */
  color: var(--btn-state_c, var(--_btn_c));
  background: var(--btn-state_bg, var(--_btn_bg));

  &:hover {
    --btn-state_bg: color-mix(in oklch, var(--_btn_bg), light-dark(var(--c_gray_950), var(--c_gray_50)) 20%);
  }

  &:focus-visible {
    --btn-state_bg: color-mix(in oklch, var(--_btn_bg), light-dark(var(--c_gray_950), var(--c_gray_50)) 30%);
    --_btn_o-w: 2px;
    --_btn_o-c: var(--btn-state_bg);
  }

  &:active {
    --btn-state_bg: color-mix(in oklch, var(--_btn_bg), light-dark(var(--c_gray_950), var(--c_gray_50)) 35%);
  }
}
```

---

## Color variants pattern

Color variants set the public vars — the cascade handles the rest:

```css
/* Top-level (or nested with &) color variant selectors */
.c--button.has-color_primary {
  --btn_c: var(--btn-primary_c, var(--c_gray_50));
  --btn_bg: var(--btn-primary_bg, var(--c_primary_500));
}

.c--button.has-color_danger {
  --btn_c: var(--btn-danger_c, var(--c_gray_50));
  --btn_bg: var(--btn-danger_bg, var(--c_danger_500));
}
```

Available semantic color tokens: `--c_primary_500`, `--c_secondary_500`, `--c_accent_500`, `--c_success_500`, `--c_warning_500`, `--c_danger_500`, `--c_info_500`, `--c_gray_50`, `--c_gray_950`.

---

## Type/style variants pattern

Type variants use the `--<name>-type_*` layer to override the private computed vars:

```css
.c--button {
  &.has-type_outline {
    --btn-type_bg: transparent;
    --btn-type_c: var(--btn_bg);
    --btn-type_b-c: var(--btn-type_c);
  }

  &.has-type_ghost {
    --btn-type_bg: transparent;
    --btn-type_c: var(--btn_bg);
  }
}
```

---

## Semantic token reference

Use these semantic tokens as fallbacks in public vars (never hardcode values):

| Token | Purpose |
|-------|---------|
| `--body_c` | Default text color |
| `--body_bg` | Default background |
| `--br` | Default border radius (maps to `--b-r` primitive) |
| `--f-s_0` through `--f-s_8` | Type scale (0 = .75rem, 2 = 1rem, 4 = 1.25rem, 8 = 2rem) |
| `--size_100` through `--size_900` | Spacing scale (100 = 4px, 200 = 8px, 300 = 12px, 400 = 16px, etc.) |
| `--b-w` | Default border width (1px) |
| `--b-w_lg` | Large border width (2px) |
| `--f-w_normal` / `--f-w_medium` / `--f-w_bold` | Font weights |

---

## button.css — first 80 lines (canonical reference)

```css
/* Button component — production CSS.
   Root class: .c--button (SPEC §4.1 naming convention).
   Variant classes use enum modifier pattern: .has-color_<value>, .has-size_<value>, .has-type_<value>.
   All visual values reference CSS tokens — no hardcoded colors, hex, or raw OKLCH values.
   Covers: COMP-04, TOKEN-05 link */

.c--button {
  /* === Public API — consumers override these to customize per-instance === */
  --btn_c: var(--body_c);
  --btn_bg: var(--body_bg);
  --btn_b-c: var(--btn_bg);

  /* === Private computed values — resolved via type/color overrides === */
  --_btn_c: var(--btn-type_c, var(--btn_c));
  --_btn_bg: var(--btn-type_bg, var(--btn_bg));
  --_btn_b-c: var(--btn-type_b-c, var(--btn_b-c));

  --_btn_d: var(--btn_d, inline-block);
  --_btn_f-s: var(--btn_f-s, var(--f-s_2));
  --_btn_l-h: var(--btn_l-h, 1.2);
  --_btn_p-b: var(--btn_p-b, var(--size_200));
  --_btn_p-i: var(--btn_p-i, var(--size_400));
  --_btn_b-w: var(--btn_b-w, var(--b-w, 1px));
  --_btn_b-s: var(--btn_b-s, solid);
  --_btn_b-r: var(--btn_b-r, var(--br));
  --_btn_t:
    color var(--t, 0.2s ease-in-out), background var(--t, 0.2s ease-in-out),
    border-color var(--t, 0.2s ease-in-out), outline 0.1s ease-in-out;
  --_btn_cursor: var(--btn_cursor, pointer);
  --_btn_t-a: var(--btn_t-a, center);
  --_btn_t-d: var(--btn_t-d, none);
  --_btn_o-o: var(--btn_o-o, 2px);
  --_btn_o-w: var(--btn_o-w, 0px);
  --_btn_o-s: var(--btn_o-s, solid);
  --_btn_o-c: var(--btn_o-c, transparent);

  /* Mix colors for hover/focus/active darken/lighten effects */
  --_btn-mix_c: var(--btn-mix_c, light-dark(var(--c_gray_950), var(--c_gray_50)));
  --_btn-mix_c-d: var(--btn-mix_c-d, light-dark(var(--c_gray_50), var(--c_gray_950)));

  /* === Rendered properties === */
  color: var(--btn-state_c, var(--_btn_c));
  background: var(--btn-state_bg, var(--_btn_bg));
  border: var(--_btn_b-w) var(--_btn_b-s) var(--btn-state_b-c, var(--_btn_b-c));
  display: var(--_btn_d);
  padding-block: var(--btn-type_p-b, var(--_btn_p-b));
  padding-inline: var(--btn-type_p-i, var(--_btn_p-i));
  border-radius: var(--_btn_b-r);
  font-size: var(--_btn_f-s);
  line-height: var(--_btn_l-h);
  cursor: var(--_btn_cursor);
  transition: var(--btn_transition, var(--_btn_t));
  text-align: var(--_btn_t-a);
  text-decoration: var(--_btn_t-d);
  outline-offset: var(--_btn_o-o);
  outline: var(--_btn_o-w) var(--_btn_o-s) var(--_btn_o-c);

  /* === Hover state === */
  &:hover {
    --btn-state_c: var(--btn_c_h, var(--_btn_c));
    --btn-state_bg: var(--btn_bg_h, color-mix(in oklch, var(--_btn_bg), var(--_btn-mix_c) 20%));
    --btn-state_b-c: var(--btn_b-c_h, var(--btn-state_bg));
  }

  /* === Focus state === */
  &:focus,
  &:focus-visible {
    --btn-state_c: var(--btn_c_f, var(--_btn_c));
    --btn-state_bg: var(--btn_bg_f, color-mix(in oklch, var(--_btn_bg), var(--_btn-mix_c) 30%));
    --btn-state_b-c: var(--btn_b-c_f, var(--btn-state_bg));
    --_btn_o-w: 2px;
    --_btn_o-c: var(--btn_bg_f, var(--btn-state_bg));
  }

  /* === Active state === */
  &:active {
    --btn-state_c: var(--btn_c_a, var(--_btn_c));
    --btn-state_bg: var(--btn_bg_a, color-mix(in oklch, var(--_btn_bg), var(--_btn-mix_c) 35%));
    --btn-state_b-c: var(--btn_b-c_a, var(--btn-state_bg));
  }
}

/* === Color variants === */
.c--button.has-color_primary {
  --btn_c: var(--btn-primary_c, var(--c_gray_50));
  --btn_bg: var(--btn-primary_bg, var(--c_primary_500));
}
```
