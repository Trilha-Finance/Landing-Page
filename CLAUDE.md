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
- Fontes via `next/font/google`: Inter (`--font-inter`, corpo), Chakra Petch
  (`--font-display`, títulos/CTAs — subsets `latin` + `latin-ext` pra cobrir
  acentuação em português; peso 700/`font-bold` em títulos e CTAs, peso
  500/`font-medium` em subtítulos de card), JetBrains Mono (`--font-mono`, labels de
  sistema/dados).
- ESLint (`eslint-config-next`).
- Deploy: Vercel, via skill `deploy-to-vercel` (ver `.claude/skills/deploy-to-vercel/` no
  vault TrilhaOS).

## Identidade visual (oficial — design system "CYBR_", aplicado em 2026-08-24; ver
`DESIGN_SYSTEM.md` na raiz do repo para a spec completa)

Substituiu a identidade anterior (verde institucional `#083C33` + dourado `#FCB001`).
Estética "cyber brutalism": fundo quase-preto dominante (~85% da superfície), acentos em
verde-limão neon usados com extrema economia (CTAs, labels de sistema, pontos de
status), tipografia display bold uppercase + mono técnico para dados/labels, bordas
retas sem `border-radius`.

- `--bg-base` `#080808` / `--bg-pure` `#000000` — fundos (utilitários `bg-bg-base` /
  `bg-bg-pure`).
- `--accent-neon` `#D4FF33` — cor de assinatura, só em CTAs/labels/status
  (`bg-neon` / `text-neon` / `border-neon`).
- `--text-primary` `#F0F0F0` (`text-text-primary`, herdado por padrão) e
  `--text-secondary` `#8A8A8A` (`text-text-secondary`) para corpo/legendas.
- `--border-line` `#2A2A2A` (`border-border-line`) para divisórias e cards.
- Tokens definidos em `src/app/globals.css` via `@theme inline` — usar sempre os
  utilitários acima em vez de hex cru.
- Componentes de chrome decorativo (label `/0N`, corner marks, status dot, cursor
  piscante, botões primário/secundário) ficam em `src/components/chrome.tsx` — reusar
  em vez de recriar o padrão visual em cada seção nova.
- A logomarca (`Logo-trilha.png`) usa verde escuro sobre fundo transparente e fica
  ilegível direto no preto — sempre envolver num chip `bg-white border border-border-line`
  (ver `navbar.tsx` / `footer-section.tsx`) em vez de aplicá-la solta sobre fundo escuro.

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
- Elementos decorativos recorrentes do design system CYBR_ (label de seção `/0N`,
  corner marks, status dot, cursor piscante, botões primário/secundário) ficam em
  `src/components/chrome.tsx`, no mesmo padrão não-`*-section` de `icons.tsx` /
  `graphics.tsx`.
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
