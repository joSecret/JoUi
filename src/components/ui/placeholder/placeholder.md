# Placeholder — API Reference

Skeleton loading placeholders that indicate content is being loaded. Two animation styles: glow (opacity pulse) and wave (shimmer). No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `'glow' \| 'wave' \| 'none'` | `'glow'` | Animation style |
| `lines` | `PlaceholderLine[]` | `null` | Array of placeholder lines to render |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

### PlaceholderLine

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cols` | `number` | — | Width as Bootstrap column count (1–12) |
| `size` | `'xs' \| 'sm' \| 'lg'` | — | Height variant |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder_animation` | `'glow' \| 'wave' \| 'none'` | `'glow'` | Animation style |
| `placeholder_lines` | `array` | `[]` | Array of `{ cols, size }` objects |
| `placeholder_uc` | `string[]` | `[]` | Extra utility classes |
| `placeholder_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--plhld_bg` | `light-dark(#dee2e6, #495057)` | Placeholder background color |
| `--plhld_b-r` | `var(--b-r_md)` | Border radius |
| `--plhld_h` | `var(--size_300)` | Default placeholder height |
| `--plhld_o` | `0.5` | Base opacity |
| `--plhld_glow_d` | `2s` | Glow animation duration |
| `--plhld_wave_d` | `2s` | Wave animation duration |
| `--plhld_xs_h` | `0.5rem` | XS height override |
| `--plhld_sm_h` | `0.625rem` | SM height override |
| `--plhld_lg_h` | `1.25rem` | LG height override |

## Column Classes

`.col-1` through `.col-12` set width from 8.33% to 100% (Bootstrap column widths).

## Size Classes

| Class | Height |
|-------|--------|
| `placeholder-xs` | 0.5rem |
| `placeholder-sm` | 0.625rem |
| *(default)* | 0.75rem |
| `placeholder-lg` | 1.25rem |

## Animation Classes

| Class | Effect |
|-------|--------|
| `placeholder-glow` | Opacity pulse on `.placeholder` children |
| `placeholder-wave` | Shimmer wave using CSS mask |
| *(none)* | Static, no animation |

## Accessibility

- Use `aria-busy="true"` on the container while content is loading.
- Replace placeholder markup with real content once loaded.
- Placeholders are decorative — no ARIA roles needed on the spans themselves.
