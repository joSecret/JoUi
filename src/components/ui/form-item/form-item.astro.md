# Form Item — Astro

## Install

```bash
npx joui add form-item --platform astro
```

## Import

```astro
import FormItem from '@ui/form-item/FormItem.astro'
```

## Examples

### Basic

```astro
<FormItem label="Email" name="email" type="email">
  <input type="email" name="email" />
</FormItem>
```

### Required + error

```astro
<FormItem label="Username" required error="This field is required.">
  <input type="text" name="username" />
</FormItem>
```

### With description

```astro
<FormItem label="Password" description="Minimum 8 characters.">
  <input type="password" name="password" />
</FormItem>
```

### Description before input

```astro
<FormItem label="Bio" description="Tell us about yourself." descriptionDisplay="before">
  <textarea name="bio"></textarea>
</FormItem>
```

### Checkbox (label after)

```astro
<FormItem label="Accept terms" labelDisplay="after" type="checkbox">
  <input type="checkbox" name="terms" />
</FormItem>
```

### Disabled

```astro
<FormItem label="Read only field" disabled>
  <input type="text" value="Cannot edit" />
</FormItem>
```

## Notes

- CSS is auto-imported from the component.
- The `default` slot renders between label and description/error — place your input there.
- `type` and `name` props only affect BEM class generation on the wrapper, not the input itself.
