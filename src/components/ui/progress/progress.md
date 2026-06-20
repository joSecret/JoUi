# Progress — API Reference

Horizontal progress bar with optional striped and animated stripe variants. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress value (0–100) |
| `color` | `string` | — | Color variant: `primary` `secondary` `success` `warning` `danger` `info` `light` `dark` |
| `striped` | `boolean` | `false` | Show striped pattern on the bar |
| `animated` | `boolean` | `false` | Animate the stripes (implies striped) |
| `label` | `string \| boolean` | `false` | Text inside the bar. `true` = auto percentage |
| `height` | `string` | — | CSS height value (e.g. `2rem`). Overrides `--prog_h` |
| `classes` | `string[]` | `[]` | Extra CSS classes on the wrapper |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on the wrapper |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress_value` | `number` | `0` | Progress value (0–100) |
| `progress_color` | `string\|null` | `null` | Color variant |
| `progress_striped` | `boolean` | `false` | Striped pattern |
| `progress_animated` | `boolean` | `false` | Animated stripes |
| `progress_label` | `string\|boolean` | `false` | Label inside bar |
| `progress_height` | `string\|null` | `null` | CSS height override |
| `progress_uc` | `string[]` | `[]` | Extra utility classes |
| `progress_att` | `Attribute` | — | Drupal Attribute object |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--prog_bg` | `--c_neutral_200` | Track background color |
| `--prog_b-r` | `var(--b-r_md)` | Border radius |
| `--prog_h` | `var(--size_300)` | Bar height |
| `--prog_bar_bg` | `var(--c_primary_500)` | Bar fill color |
| `--prog_bar_c` | `var(--c_white)` | Label text color |
| `--prog_bar_f-s` | `0.75em` | Label font size |
| `--prog_bar_f-w` | `var(--f-w_bold)` | Label font weight |
| `--prog_stripe_size` | `1rem` | Stripe pattern size |
| `--prog_anim_d` | `1s` | Stripe animation duration |

## Accessibility

- The wrapper has `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- `aria-label` is set automatically to the percentage, or to the `label` prop if provided.
- Values outside 0–100 are clamped automatically.
