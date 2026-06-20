# CLAUDE.md — joui

See AGENTS.md for build commands, code style, and file structure conventions.

## Project Vision

**joui** is a multi-platform CSS component library. The Astro.js site is the documentation and showcase site — it presents components and usage instructions for developers who will use the library.

### Supported Platforms

- **Astro** — primary; reference implementation
- **Drupal** — primary; equally important alongside Astro
- React, Vue, Svelte, and others — secondary; components should be easy to port

### Core Design Principle

All component logic lives in **HTML + CSS**. JavaScript is only added when strictly necessary (e.g., toggle states that CSS cannot handle). This constraint keeps components framework-agnostic and makes porting to any platform straightforward.

When building components:
1. Start with pure HTML structure + CSS
2. Add JS only if the interaction is impossible without it
3. Keep JS minimal and dependency-free where possible

### What the Astro Site Is

The Astro site is the **docs/presentation layer**, not the product itself. It showcases components, documents usage, and serves as the living style guide for end-users of the joui library.
