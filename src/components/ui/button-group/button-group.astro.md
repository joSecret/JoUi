# Button Group — Astro

## Installation

```bash
npx joui add button-group --platform astro
```

## Import

```astro
import ButtonGroup from '@ui/button-group/ButtonGroup.astro'
import Button from '@ui/button/Button.astro'
```

## Usage

```astro
<ButtonGroup label="Text alignment">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

## With colors

```astro
<ButtonGroup label="Actions">
  <Button color="primary">Save</Button>
  <Button color="secondary">Cancel</Button>
  <Button color="danger">Delete</Button>
</ButtonGroup>
```

## Sizes

```astro
<ButtonGroup size="sm" label="Small group">
  <Button>A</Button>
  <Button>B</Button>
  <Button>C</Button>
</ButtonGroup>

<ButtonGroup size="lg" label="Large group">
  <Button>A</Button>
  <Button>B</Button>
</ButtonGroup>
```

## Vertical

```astro
<ButtonGroup vertical label="Vertical options">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>
```

## With outline buttons

```astro
<ButtonGroup label="Filter">
  <Button color="primary" variant="outline">All</Button>
  <Button color="primary" variant="outline">Active</Button>
  <Button color="primary" variant="outline">Inactive</Button>
</ButtonGroup>
```
