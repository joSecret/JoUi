# Check / Radio — Astro

## Installation

```bash
npx joui add check-radio --platform astro
```

## Import

```astro
import CheckRadio from '@ui/check-radio/CheckRadio.astro'
```

## Usage

### Checkbox

```astro
<CheckRadio id="agree" name="agree" label="I agree to the terms" />
```

### Radio group

```astro
<CheckRadio type="radio" id="option1" name="choice" value="1" label="Option 1" checked />
<CheckRadio type="radio" id="option2" name="choice" value="2" label="Option 2" />
<CheckRadio type="radio" id="option3" name="choice" value="3" label="Option 3" disabled />
```

### Switch

```astro
<CheckRadio type="switch" id="notifications" label="Enable notifications" />
<CheckRadio type="switch" id="dark-mode" label="Dark mode" checked />
```

### Inline

```astro
<CheckRadio inline id="c1" name="colors" value="red" label="Red" />
<CheckRadio inline id="c2" name="colors" value="blue" label="Blue" />
<CheckRadio inline id="c3" name="colors" value="green" label="Green" />
```

### Pre-checked and disabled

```astro
<CheckRadio id="pre-checked" label="Pre-checked" checked />
<CheckRadio id="disabled-check" label="Disabled" disabled />
```
