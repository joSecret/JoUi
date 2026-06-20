# Select — Astro

## Import

```astro
import Select from '@ui/select/Select.astro'
```

## Examples

```astro
<Select
  emptyOption="Choose..."
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: '3', label: 'Option 3', disabled: true },
  ]}
/>

<Select size="lg" options={options} />
<Select multiple options={options} />
<Select disabled options={options} />
```
