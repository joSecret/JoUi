# Floating Label — Astro

## Installation

```bash
npx joui add floating-label --platform astro
```

## Import

```astro
import FloatingLabel from '@ui/floating-label/FloatingLabel.astro'
```

## Usage

### Input

```astro
<FloatingLabel id="name" label="Full name" />
```

### Email

```astro
<FloatingLabel id="email" type="email" label="Email address" name="email" />
```

### Password

```astro
<FloatingLabel id="password" type="password" label="Password" />
```

### Textarea

```astro
<FloatingLabel id="message" tag="textarea" label="Message" />
```

### Select

```astro
<FloatingLabel id="country" tag="select" label="Country">
  <option value="">Choose a country...</option>
  <option value="us">United States</option>
  <option value="gb">United Kingdom</option>
</FloatingLabel>
```

### Pre-filled value

```astro
<FloatingLabel id="username" label="Username" value="john_doe" />
```

### Required and disabled

```astro
<FloatingLabel id="req" label="Required field" required />
<FloatingLabel id="dis" label="Disabled field" disabled value="locked" />
```

## Important

The `placeholder` prop defaults to `' '` (a space). Never set it to an empty string — the CSS float depends on `:not(:placeholder-shown)`.
