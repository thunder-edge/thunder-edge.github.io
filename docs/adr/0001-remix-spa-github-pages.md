---
id: ADR-WEBSITE-0001
type: adr
status: ACCEPTED
hardness: H1
owner: Thunder Web
team: Edge Platform
domain: Marketing
created_at: 2026-06-26
---

# ADR 0001: Remix SPA + Vite para o site de marketing em GitHub Pages

**Status:** `ACCEPTED (retroativo)`
**Data:** 2026-06-26
**Owner:** Edge Platform

## Contexto
O site de marketing é informativo (sem backend), precisa de hospedagem estática barata e boa DX.

## Decisão
Usar **Remix 2.16 em modo SPA** (`ssr: false`) + **Vite 6** + **Tailwind 4**, publicando em
**GitHub Pages** com o truque de copiar `index.html` → `404.html` e `.nojekyll` para roteamento SPA.

## Alternativas consideradas
- **Astro (como docs/):** ótimo para conteúdo, mas o time preferiu React/Remix aqui.
- **Next.js:** overhead de SSR desnecessário para site estático.

## Consequências
- **+** Hospedagem estática gratuita; DX React; separação clara de `docs/`.
- **−** SPA em Pages exige fallback `404.html`; sem SSR (SEO limitado a client render).

## Referências
- `website/vite.config.ts`, `website/app/root.tsx`, `website/app/routes/_index.tsx`
