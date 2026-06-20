# Input Group — Astro

## Installation

```bash
npx joui add input-group --platform astro
```

## Import

```astro
import InputGroup from '@ui/input-group/InputGroup.astro'
```

## Usage

```astro
<InputGroup>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
</InputGroup>
```

## Button addon

```astro
<InputGroup>
  <input type="text" class="form-control" placeholder="Search..." aria-label="Search">
  <button class="button button-primary" type="button">Search</button>
</InputGroup>
```

## Both sides

```astro
<InputGroup>
  <span class="input-group-text">$</span>
  <input type="number" class="form-control" aria-label="Amount">
  <span class="input-group-text">.00</span>
</InputGroup>
```

## Sizes

```astro
<InputGroup size="sm">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control">
</InputGroup>

<InputGroup size="lg">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control">
</InputGroup>
```

## With select

```astro
<InputGroup>
  <label class="input-group-text" for="inputGroupSelect">Options</label>
  <select class="form-control" id="inputGroupSelect">
    <option>Choose...</option>
    <option value="1">One</option>
  </select>
</InputGroup>
```
