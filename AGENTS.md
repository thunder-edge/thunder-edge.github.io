# AGENTS.md — website

Thunder marketing site. **Public repository** — everything committed here is world-readable.

Workspace context and routing: `../AGENTS.md`.
**Full operating knowledge: `../skills/website/SKILL.md` — read it before editing.**

## Stack

Remix 2.16 in **SPA mode** + Vite 6 · React 18 · Tailwind 4 · TypeScript 5.7 · Node >= 20 ·
deployed to GitHub Pages.

## Structure

```
app/root.tsx          root layout, meta, links
app/entry.client.tsx  client hydration (no server entry — SPA)
app/app.css           Tailwind entrypoint
app/routes/           file-based routes (_index.tsx)
public/               static assets
vite.config.ts        remix + tailwind + tsconfig paths plugins
docs/                 adr/ knowledge/
```

## Local rules

- SPA mode: no production server. Server `loader`/`action` do not run — use `clientLoader`/
  `clientAction` or static data. **Never ship secrets**; the whole bundle is public.
- Keep the `build` script intact: it copies `index.html` to `404.html` and creates `.nojekyll`
  for GitHub Pages routing.
- Public-content only: no internal business logic, hostnames, customer names or infrastructure
  details.
- Accessibility: semantic HTML, image `alt`, keyboard navigation, 4.5:1 minimum contrast.

## Gates

```bash
npm --prefix website run typecheck
npm --prefix website run build
```

No linter, formatter or test runner configured — state this limitation when finishing and track
it in `ROADMAP.md`.
