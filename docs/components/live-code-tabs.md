# LiveCodeTabs

Component: LiveCodeTabs

Usage:

<LiveCodeTabs codeFiles={files} defaultTab="astro">
  <div slot="example">Preview here</div>
</LiveCodeTabs>

Props:
- codeFiles: Array of { lang, label?, filename?, code }
- defaultTab: string (language to open by default)

Global config:
- joui.config.json: { "liveCode": { "defaultTab": "astro" } }
