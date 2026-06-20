# Toast — Astro

## Installation

```bash
npx joui add toast --platform astro
```

## Import

```astro
import Toast from '@ui/toast/Toast.astro'
```

Attach JS:

```astro
<script src="/components/ui/toast/toast.js"></script>
```

## Usage

### Server-side (static)

```astro
<div class="toast-container toast-container-top-end">
  <Toast title="Success" message="Your file was saved." color="success" />
</div>
```

### Programmatic (JS)

```astro
<script>
import '/src/components/ui/toast/toast.js';
// After the script is loaded:
joui.toast.show({
  title: 'Hello',
  message: 'Toast from JavaScript!',
  color: 'primary',
  delay: 4000,
});
</script>
```

### No auto-dismiss

```astro
<Toast title="Notice" message="Persists until dismissed." delay={0} />
```

### Simple (body only)

```astro
<Toast message="Simple notification" />
```

### Colors

```astro
<Toast message="Success message" color="success" />
<Toast message="Warning message" color="warning" />
<Toast message="Error message" color="danger" />
```
