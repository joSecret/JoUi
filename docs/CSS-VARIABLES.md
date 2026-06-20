# Design System - CSS Variables

## Cuprins
1. [Convenții de denumire](#convenții-de-denumire)
2. [Design Tokens (Global)](#design-tokens-global)
3. [Component Variables](#component-variables)
4. [TypeScript Generator](#typescript-generator)

---

## Convenții de denumire

Toate variabilele CSS urmează formatul: `--{name}_{detail}`

| Prefix | Categorie | Exemplu |
|--------|-----------|---------|
| `f-s` | Font Size | `--f-s_0: .875rem` |
| `f-w` | Font Weight | `--f-w_bold: 700` |
| `l-h` | Line Height | `--l-h_1: 1.1` |
| `l-s` | Letter Spacing | `--l-s_1: .025em` |
| `c_` | Color palette | `--c_primary_500: var(--c_primary)` |
| `size_` | Size scale (px) | `--size_100: 4px` |
| `b-s_` | Border size | `--b-s_1: 1px` |
| `b-w_` | Border width | `--b-w: 1px` |
| `b-r_` | Border radius | `--b-r_md: 4px` |
| `z-i_` | Z-index (index) | `--z-i_1: 10` |
| `z_` | Z-index (semantic) | `--z_modal: 180` |
| `a-d_` | Animation duration | `--a-d_quick-1: 80ms` |
| `a_` | Animation shorthand | `--a_fade-in: fade-in...` |
| `ease-` | Easing functions | `--ease-1: cubic-bezier(...)` |
| `shadow_` | Box shadows | `--shadow_1: 0 1px 2px...` |
| `inner-shadow-` | Inner shadows | `--inner-shadow-1: inset...` |
| `gradient_` | Gradients | `--gradient_1: linear-gradient(...)` |
| `noise_` | Noise textures | `--noise_1: url(...)` |
| `ratio-` | Aspect ratios | `--ratio-square: 1` |

## Font

### Font Size
```css
--f-s_0: .875rem;   /* 14px */
--f-s_1: .75rem;    /* 12px */
--f-s_2: 1rem;       /* 16px - base */
--f-s_3: 1.1rem;
--f-s_4: 1.25rem;
--f-s_5: 1.5rem;
--f-s_6: 2rem;
--f-s_7: 3rem;
--f-s_8: 3.5rem;
```

### Font Size Fluid
```css
--f-s-fluid-0: clamp(.75rem, 2vw, 1rem);
--f-s-fluid-1: clamp(1rem, 4vw, 1.5rem);
--f-s-fluid-2: clamp(1.5rem, 6vw, 2.5rem);
--f-s-fluid-3: clamp(2rem, 9vw, 3.5rem);
```

### Font Weight
```css
--f-w_thin: 100;
--f-w_extra-light: 200;
--f-w_light: 300;
--f-w_normal: 400;
--f-w_medium: 500;
--f-w_semi-bold: 600;
--f-w_bold: 700;
--f-w_extra-bold: 800;
--f-w_black: 900;
```

### Line Height
```css
--l-h_0: .95;
--l-h_1: 1.1;
--l-h_2: 1.25;
--l-h_3: 1.375;
--l-h_4: 1.5;   /* default */
--l-h_5: 1.75;
--l-h_6: 2;
```

### Letter Spacing
```css
--l-s: -.05em;
--l-s_1: .025em;
--l-s_2: .050em;
--l-s_3: .075em;
--l-s_4: .100em;
--l-s_5: .300em;
--l-s_6: .750em;
--l-s_7: 1em;
```

## Culori

Culorile sunt generate automat din variabilele base folosind `color-mix()` cu modelul OKLCH.

### Variabile base (trebuie definite manual)
```css
--c_primary: ...;
--c_accent: ...;
--c_secondary: ...;
--c_tertiary: ...;
--c_neutral: ...;
--c_gray: ...;
--c_info: ...;
--c_success: ...;
--c_warning: ...;
--c_danger: ...;
```

### Scale de culori (auto-generate)
Pentru fiecare culoare sunt generate: `_950`, `_900`, `_800`, `_700`, `_600`, `_500`, `_400`, `_300`, `_200`, `_100`

```css
/* Exemplu pentru primary */
--c_primary_950: color-mix(in oklch, var(--c_primary), var(--palett-dark) 90%);
--c_primary_500: var(--c_primary);
--c_primary_100: color-mix(in oklch, var(--c_primary), var(--palett-light) 80%);
```

### Utilizare
```css
.element {
  color: var(--c_primary_500);
  background: var(--c_gray_100);
  border-color: var(--c_danger_700);
}
```

## Size

Scară bazată pe 4px.

```css
--size_0: 0;
--size_25: 1px;
--size_50: 2px;
--size_100: 4px;
--size_200: 8px;
--size_300: 12px;
--size_400: 16px;
--size_500: 20px;
--size_600: 28px;
--size_700: 34px;
--size_800: 42px;
--size_900: 50px;
--size_1000: 58px;
/* ... până la --size_2000: 218px */
```

## Borders

### Border Style
```css
--b-c: var(--c_gray-300);  /* border color */
--b-s: solid;               /* border style */
```

### Border Size
```css
--b-s_1: 1px;
--b-s_2: 2px;
--b-s_3: 5px;
--b-s_4: 10px;
--b-s_5: 25px;
```

### Border Width
```css
--b-w_0: 0px;
--b-w: 1px;
--b-w_lg: 2px;
```

### Border Radius
```css
/* Standard */
--b-r_0: 0px;
--b-r_sm: 2px;
--b-r_md: 4px;
--b-r: 6px;
--b-r_lg: 16px;
--b-r_xl: 32px;
--b-r_pill: 1e5px;

/* Drawn (organic shapes) */
--b-r_drawn_1: 255px 15px 225px 15px / 15px 225px 15px 255px;
/* ... */

/* Blob shapes */
--b-r_blob_1: 30% 70% 70% 30% / 53% 30% 70% 47%;
/* ... */

/* Conditional (based on overflow) */
--b-r_conditional_1: clamp(0px, calc(100vw - 100%) * 1e5, var(--b-r_1));
/* ... */
```

## Z-Index

### Index numeric
```css
--z-i_1: 10;
--z-i_2: 20;
--z-i_3: 30;
--z-i_4: 40;
--z-i_5: 50;
--z-i_i: 2147483647;  /* max z-index */
```

### Index semantic
```css
--z_dropdown: 80;
--z_sticky: 100;
--z_fixed: 120;
--z_offcanvas-backdrop: 140;
--z_offcanvas: 150;
--z_modal-backdrop: 160;
--z_modal: 180;
--z_popover: 200;
--z_tooltip: 220;
--z_toast: 240;
```

## Animation

### Duration
```css
--a-d_instant: 0ms;
--a-d_quick-1: 80ms;
--a-d_quick-2: 120ms;
--a-d_moderate-1: 180ms;
--a-d_moderate-2: 260ms;
--a-d_gentle-1: 320ms;
--a-d_gentle-2: 420ms;
```

### Animation Shorthand
```css
--a_fade-in: fade-in var(--a-d_gentle-1) var(--ease-3);
--a_fade-out: fade-out var(--a-d_gentle-1) var(--ease-3);
--a_scale-up: scale-up var(--a-d_gentle-1) var(--ease-3);
--a_slide-in-up: slide-in-up var(--a-d_gentle-1) var(--ease-3);
/* ... și altele: shake, spin, ping, bounce, pulse, float */
```

## Easing

### Standard
```css
--ease-1: cubic-bezier(.25, 0, .5, 1);
--ease-2: cubic-bezier(.25, 0, .4, 1);
--ease-3: cubic-bezier(.25, 0, .3, 1);
--ease-4: cubic-bezier(.25, 0, .2, 1);
--ease-5: cubic-bezier(.25, 0, .1, 1);
```

### Ease In/Out
```css
--ease-in-1 ... --ease-in-5
--ease-out-1 ... --ease-out-5
--ease-in-out-1 ... --ease-in-out-5
```

### Elastic / Spring / Bounce
```css
--ease-elastic-out-1 ... --ease-elastic-out-5
--ease-spring-1 ... --ease-spring-5
--ease-bounce-1 ... --ease-bounce-5
--ease-squish-1 ... --ease-squish-5
```

### Named Easing
```css
--ease-circ-in, --ease-circ-out, --ease-circ-in-out
--ease-cubic-in, --ease-cubic-out, --ease-cubic-in-out
--ease-expo-in, --ease-expo-out, --ease-expo-in-out
--ease-quad-in, --ease-quad-out, --ease-quad-in-out
--ease-quart-in, --ease-quart-out, --ease-quart-in-out
--ease-quint-in, --ease-quint-out, --ease-quint-in-out
--ease-sine-in, --ease-sine-out, --ease-sine-in-out
```

## Shadows

```css
--shadow_1: 0 1px 2px -1px ...;
--shadow_2: 0 3px 5px -2px ..., 0 7px 14px -5px ...;
--shadow_3 ... --shadow_6

--inner-shadow-0: inset 0 0 0 1px ...;
--inner-shadow-1: inset 0 1px 2px 0 ...;
--inner-shadow-2 ... --inner-shadow-4
```

## Aspect Ratios

```css
--ratio-square: 1;
--ratio-landscape: 4/3;
--ratio-portrait: 3/4;
--ratio-widescreen: 16/9;
--ratio-ultrawide: 18/5;
--ratio-golden: 1.6180/1;
```

## Gradients & Noise

```css
--gradient_1 ... --gradient_30
--noise_1 ... --noise_5
--noise_filter-1 ... --noise_filter-5
```

## Media Query Flags

```css
--is-below_xxs: false;  /* 240px */
--is-below_xs: false;    /* 360px */
--is-below_sm: false;    /* 480px */
--is-below_md: false;    /* 768px */
--is-below_lg: false;    /* 1024px */
--is-below_xl: false;    /* 1440px */
--is-below_xxl: false;   /* 1920px */
```

Utilizare:
```css
@container style(--is-below_md: true) {
  .element { display: none; }
}
```

## Best Practices

1. **Folosește variabilele semantică** când este posibil (e.g., `--z_modal` în loc de `--z-i_5`)

2. **Prefer `--{category}_{variant}`** pentru valori standardizate

3. **Pentru culori, folosește scara numerică** pentru variații fine:
   - `_100-300`: versiuni mai deschise
   - `_500`: valoarea base
   - `_600-950`: versiuni mai închise

4. **Pentru animații, folosește shorthand-urile** când ai nevoie de animație completă:
   ```css
   animation: var(--a_fade-in);
   ```

5. **Pentru customizare fină, folosește variabilele individuale**:
   ```css
   animation: fade-in 200ms var(--ease-out-3);
   ```

---

## Component Variables

Sistemul de componente folosește un pattern consistent pentru variabilele CSS, bazat pe cascade și override.

### Pattern de denumire

```
--{component}_{property}          // Variabilă de configurare
--_{component}_{property}         // Variabilă privată (cu fallback)
--{component}-type_{property}     // Override pentru variante
--{component}_{property}_{state}  // State: h (hover), a (active), f (focus), d (disabled)
--{component}_{property}_{size}   // Size variants: sm, lg, etc.
```

### Exemplu: Button

```css
/* === Base Configuration === */
.button {
  --btn_c: var(--body_c);           /* text color */
  --btn_bg: var(--body_bg);         /* background */
  --btn_b-c: var(--btn_bg);         /* border color */

  /* === Private (Internal) === */
  --_btn_c: var(--btn-type_c, var(--btn_c));
  --_btn_bg: var(--btn-type_bg, var(--btn_bg));
  --_btn_b-w: var(--btn_b-w, 1px);
  --_btn_b-s: var(--btn_b-s, solid);
  --_btn_b-r: var(--btn_b-r, var(--b-r));

  /* === Styles === */
  color: var(--btn-state_c, var(--_btn_c));
  background: var(--btn-state_bg, var(--_btn_bg));
  border: var(--_btn_b);
}

/* === Variants (Types) === */
.button-primary {
  --btn_c: var(--btn-primary_c, var(--c-white));
  --btn_bg: var(--btn-primary_bg, var(--c-primary-500));
}

/* === States === */
&:hover {
  --btn-state_c: var(--btn_c_h, var(--_btn_c));
  --btn-state_bg: var(--btn_bg_h, color-mix(in oklab, var(--_btn_bg), var(--_btn-mix_c) 20%));
}

&:focus {
  --btn-state_bg: var(--btn_bg_f, color-mix(in oklab, var(--_btn_bg), var(--_btn-mix_c) 30%));
}

/* === Size Variants === */
.button-sm {
  --_btn_f-s: var(--btn_sm_f-s, 0.875em);
  --_btn_p-b: var(--btn_sm_p-b, 0.25em);
}
```

### Exemplu: Accordion

```css
.accordion {
  /* === Private === */
  --_accordion_bg: var(--accordion_bg, transparent);
  --_accordion_br: var(--accordion_br, var(--br, 8px));
  --_accordion_tt: var(--accordion_tt, 0.3s);
  --_accordion_summary_c: var(--accordion_summary_c, var(--link_c-default));
  --_accordion-summary_pb: var(--accordion-summary_pb, 12px);
  --_accordion-summary_pi: var(--accordion-summary_pi, 20px);

  /* === Nested Elements === */
  .accordion-icon {
    --_accordion_icon_s: var(--accordion_icon_s, 16px);
  }

  .accordion-body {
    --_accordion-body_pb: var(--accordion-body_pb, 12px);
  }
}
```

### Structura CSS pentru componente

```css
.component {
  /* 1. BASE - Variabile de configurare */
  --component_prop: default-value;

  /* 2. PRIVATE - Variabile interne cu fallback */
  --_component_prop: var(--component-type_prop, var(--component_prop));

  /* 3. ELEMENT VARIANTS - Nested selectors */
  .component-element {
    --_component-element_prop: var(--component-element_prop, default);
  }

  /* 4. APPLIED - Valori finale */
  property: var(--component-state_prop, var(--_component_prop));
}
```

### Ghid de implementare

1. **Defineste variabilele base** în `:root` sau scope global
2. **Folosește `_` prefix** pentru variabilele care sunt override-uite
3. **State variables** folosesc sufix: `_h` (hover), `_a` (active), `_f` (focus), `_d` (disabled)
4. **Type overrides** folosesc `-type_` infix
5. **CSS custom properties** în `:root` pentru theming

```css
/* În global CSS (design tokens) */
:root {
  --btn-primary_bg: var(--c-primary-500);
  --btn_sm_f-s: 0.875em;
}

/* În component */
.button {
  --btn_bg: var(--body_bg);           /* Preia din theme */
  --_btn_bg: var(--btn-type_bg, var(--btn_bg));
  background: var(--btn-state_bg, var(--_btn_bg));

  &.button-primary {
    --btn-type_bg: var(--btn-primary_bg);  /* Override type */
  }

  &:hover {
    --btn-state_bg: color-mix(...);        /* State override */
  }
}
```

### Best Practices

- Variabilele private (`--_`) folosesc fallback la cele publice
- State variables schimbă `--component-state_*` nu variabilele direct
- Folosește `var()` cu fallback inline pentru override predictibil
- Pentru nesting profund, folosește prefixul părintelui: `--_accordion-summary_*`

---

## TypeScript Generator

Vezi [`../ui/css-variables.ts`](../ui/css-variables.ts) pentru generarea programatică a variabilelor CSS.
