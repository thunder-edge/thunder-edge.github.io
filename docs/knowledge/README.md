---
id: KNOWLEDGE-WEBSITE-ARCH-001
type: knowledge
domain: Marketing
hardness: H1
owner: Thunder Web
team: Edge Platform
status: ACTIVE
confidence: MEDIUM
created_at: 2026-06-26
updated_at: 2026-06-26
---

# Knowledge Base — Thunder Website (marketing)

> Estado atual (as-is) do `website/`. Não é fonte de verdade — Specs e ADRs prevalecem.

## Arquitetura
- **Remix 2.16 em modo SPA** (`ssr: false`) + **Vite 6** + **Tailwind 4**, TypeScript strict (alias `~/*`).
- Página única: [website/app/routes/_index.tsx](../../app/routes/_index.tsx) — landing de marketing.
- Tema escuro (`#0a0a0f`), branding Thunder (gradiente amber→orange).
- Conteúdo: feature cards, security highlights, tech stack.

## Deploy
- **GitHub Pages** (SPA): build gera `build/`, copia `index.html` → `404.html`, adiciona `.nojekyll`.
- Comandos: `npm run dev`, `npm run build`, `npm start`, `npm run typecheck`.

## Diferença vs `docs/`
| | website/ | docs/ |
|-|----------|-------|
| Propósito | Marketing/produto | Documentação de referência |
| Framework | Remix SPA (React) | Astro/Starlight (MD) |
| Público | Prospects | Devs/operadores |

## ADRs
- [../adr/0001-remix-spa-github-pages.md](../adr/0001-remix-spa-github-pages.md)
