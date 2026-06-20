# Alert — Astro

## Installation

```bash
npx joui add alert --platform astro
```

## Import

```astro
import Alert from '@ui/alert/Alert.astro'
```

## Usage

### Basic

```astro
<Alert color="primary">This is a primary alert.</Alert>
<Alert color="success">Operation completed successfully.</Alert>
<Alert color="danger">Something went wrong.</Alert>
```

### Dismissible

```astro
<Alert color="warning" dismissible>
  This alert can be dismissed.
</Alert>
```

### No color (unstyled base)

```astro
<Alert>Plain alert with default colors.</Alert>
```

### Extra classes and attributes

```astro
<Alert color="info" classes={['my-custom-class']} attrs={{ id: 'info-msg' }}>
  Info message.
</Alert>
```
