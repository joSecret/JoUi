# Range — API Reference

Custom-styled range slider with consistent appearance across Chrome, Firefox, and Safari. Styles the track and thumb using vendor-prefixed pseudo-elements. No JavaScript required.

## Astro Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | auto-generated | Input `id` |
| `name` | `string` | — | Input `name` |
| `label` | `string` | — | Label text (rendered as `<label>`) |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `value` | `number` | `50` | Default value |
| `disabled` | `boolean` | `false` | Disabled state |
| `classes` | `string[]` | `[]` | Extra CSS classes on input |
| `attrs` | `Record<string, unknown>` | `{}` | Extra HTML attributes on input |

## Drupal / Twig Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `range_id` | `string\|null` | `null` | ID |
| `range_name` | `string\|null` | `null` | Name |
| `range_label` | `string\|null` | `null` | Label text |
| `range_min` | `number` | `0` | Min |
| `range_max` | `number` | `100` | Max |
| `range_step` | `number` | `1` | Step |
| `range_value` | `number` | `50` | Value |
| `range_disabled` | `boolean` | `false` | Disabled |
| `range_uc` | `string[]` | `[]` | Extra utility classes |
| `range_att` | `Attribute` | — | Drupal Attribute on input |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--rnge_thumb-bg` | `var(--c_primary_500)` | Thumb background color |
| `--rnge_thumb-s` | `1.125rem` | Thumb size |
| `--rnge_thumb-b-r` | `50%` | Thumb border radius |
| `--rnge_track-h` | `0.375rem` | Track height |
| `--rnge_track-bg` | body_c at 20% opacity | Track background |
| `--rnge_track-b-r` | `9999px` | Track border radius |
| `--rnge_t` | `0.15s ease-in-out` | Transition |

## Accessibility

- Always provide a `label` or external `aria-label`.
- Focus state shows a ring around the thumb.
- Native keyboard support: Arrow keys change value, Home/End jump to min/max.
