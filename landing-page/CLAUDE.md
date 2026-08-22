# Landing Page — Trilha Finance

@AGENTS.md

## Sobre o projeto

Site institucional da Trilha Finance (Next.js). Página única (`src/app/page.tsx`)
montada por seções, construída incrementalmente via PRs pequenos — um componente de
seção por PR. Redesenhada a partir de uma referência de layout (estrutura de seções),
com conteúdo e identidade 100% Trilha Finance.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript.
- Tailwind CSS v4 (classes utilitárias inline, sem CSS Modules).
- Fontes via `next/font/google`: Inter (`--font-inter`), Manrope (`--font-manrope`, usada
  nos textos de destaque/CTA), Geist Mono (`--font-geist-mono`).
- ESLint (`eslint-config-next`).
- Deploy: Vercel, via skill `deploy-to-vercel` (ver `.claude/skills/deploy-to-vercel/` no
  vault TrilhaOS).

## Identidade visual (oficial — ver brief de marca no vault TrilhaOS em
`3_Recursos/30-39 Redes Sociais/31 Estrategia e Posicionamento/brief-de-marca-e-posicionamento.md`)

- Verde institucional primário: `#083C33` (utilitário Tailwind `brand`).
- Verde institucional secundário, usado em CTA/texto sobre branco: `#083C2F`
  (utilitário `brand-deep`).
- Dourado de destaque: `#FCB001` (utilitário `brand-gold`).
- Tokens definidos em `src/app/globals.css` via `@theme inline` — usar sempre
  `bg-brand`/`text-brand-deep`/`bg-brand-gold` etc. em vez de hex cru, pra não repetir a
  divergência de cor que existia antes deste redesign.
- Base branca para cards/navbar sobre o verde.
- Texto em Manrope `font-light`/`font-medium` nos elementos de navegação e CTA; Inter
  como corpo padrão.

## Como rodar localmente

```bash
npm install
npm run dev     # localhost:3000, hot reload
npm run build
npm run lint
```

## Convenções

- Cada seção da home é um componente próprio em `src/components/<nome>-section.tsx`
  (`export function XSection()`), importado direto em `src/app/page.tsx` — sem
  index/barrel file.
- `navbar.tsx` foge do padrão `*-section` de propósito (não é uma seção da página, é
  chrome fixo).
- Ícones inline simples ficam em `src/components/icons.tsx`, exportados como
  componentes SVG (`export function XIcon({ className })`) — sem lib de ícones externa.
- Imagens estáticas (logo) ficam em `src/assets/` e são importadas como módulo
  (`import logo from "../assets/logos/Logo-trilha.png"`) para o Next otimizar via
  `next/image`, não em `public/` a menos que precisem de URL direta.
- A seção de depoimentos (`testimonials-section.tsx`) usa conteúdo **placeholder
  explicitamente marcado** ("Depoimento ilustrativo") — substituir por relatos reais
  assim que houver cases aprovados para publicar, não remover a marcação antes disso.
- O FAQ (`faq-section.tsx`) é copy rascunho institucional — revisar com o sócio antes de
  tratar como texto validado/jurídico.
- Não existe `TASKS.md` nem changelog interno no repo — o histórico de progresso vive nos
  commits/PRs e é resumido periodicamente na nota
  `1_Projetos/Tecnologia/landing-page.md` do vault TrilhaOS (skill
  `tech-sincronizar-projetos`).

## Segurança e dados

Repositório é público — nunca commitar chaves de API, tokens ou dados reais de cliente
aqui. Formulários (contato/newsletter) que futuramente persistirem dados devem apontar
para um backend/serviço externo, não armazenar nada neste repo.
