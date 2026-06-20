# Accordion — Astro

## Installation

```bash
npx joui add accordion --platform astro
```

## Import

```astro
import Accordion from '@ui/accordion/Accordion.astro'
```

## Usage

### Data-driven (items array)

```astro
<Accordion items={[
  { title: 'What is joui?', content: '<p>A multi-platform CSS component library.</p>' },
  { title: 'Is JS required?', content: '<p>No — built on native &lt;details&gt;.</p>', open: true },
]} />
```

### Flush variant

```astro
<Accordion flush items={items} />
```

### Stay open (multiple panels at once)

```astro
<Accordion stayOpen items={items} />
```

### Icon position

```astro
<Accordion iconPosition="left" items={items} />
<Accordion iconPosition="none" items={items} />
```

### Slot-based (custom content)

```astro
<Accordion>
  <details class="accordion-item">
    <summary>
      <span>Custom slot item</span>
      <div class="accordion-icon">
        <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z" fill="currentColor"/>
        </svg>
      </div>
    </summary>
    <div class="accordion-body">
      <p>Any Astro component or HTML here.</p>
    </div>
  </details>
</Accordion>
```
