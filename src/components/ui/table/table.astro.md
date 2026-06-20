# Table — Astro

## Install

```bash
npx joui add table --platform astro
```

## Import

```astro
import Table from '@ui/table/Table.astro'
```

## Examples

### Basic

```astro
<Table>
  <thead>
    <tr><th>Name</th><th>Email</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>alice@example.com</td><td>Admin</td></tr>
    <tr><td>Bob</td><td>bob@example.com</td><td>Editor</td></tr>
  </tbody>
</Table>
```

### Striped + hover

```astro
<Table striped hover>
  <thead>...</thead>
  <tbody>...</tbody>
</Table>
```

### Bordered

```astro
<Table bordered>
  <thead>...</thead>
  <tbody>...</tbody>
</Table>
```

### Responsive

```astro
<Table responsive caption="Monthly report">
  <thead>...</thead>
  <tbody>...</tbody>
</Table>
```

### With footer

```astro
<Table striped>
  <thead><tr><th>Item</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>Product A</td><td>$100</td></tr>
    <tr><td>Product B</td><td>$200</td></tr>
  </tbody>
  <tfoot><tr><th>Total</th><td>$300</td></tr></tfoot>
</Table>
```

## Notes

- CSS is auto-imported from the component.
- Pass `thead`, `tbody`, and `tfoot` directly as children via the default slot.
- `responsive` wraps the table in a `div.table--responsive` with `overflow-x: auto`.
