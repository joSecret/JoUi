# Close Button — Astro

## Installation

```bash
npx joui add close-button --platform astro
```

## Import

```astro
import CloseButton from '@ui/close-button/CloseButton.astro'
```

## Usage

### Basic

```astro
<CloseButton />
```

### With custom label

```astro
<CloseButton label="Dismiss notification" />
```

### White variant (for dark backgrounds)

```astro
<div style="background: #212529; padding: 1rem;">
  <CloseButton white />
</div>
```

### Disabled

```astro
<CloseButton disabled />
```

### Inside an alert

```astro
<div class="alert alert-warning alert-dismissible" role="alert">
  This is a warning alert.
  <CloseButton attrs={{ 'data-alert-dismiss': '' }} />
</div>
```

### Inside a modal header

```astro
<div class="modal-header">
  <h5 class="modal-title">Title</h5>
  <CloseButton attrs={{ 'data-modal-dismiss': '' }} />
</div>
```
