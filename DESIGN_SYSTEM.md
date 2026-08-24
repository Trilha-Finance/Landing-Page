# Design System — "CYBR_" (Cyber Brutalism)

> Documento de origem, escrito pelo autor do design system. Extraído por auditoria
> visual de um screenshot (sem acesso ao HTML/CSS original). Cores foram amostradas
> pixel a pixel na imagem; os demais valores (espaçamento, raio, tipografia) são
> estimativas proporcionais baseadas no layout — tratar como ponto de partida, não
> como specs exatas de produção.
>
> Este é o design system **oficial** da Landing Page da Trilha Finance a partir do
> redesign aplicado em 2026-08-24 (substitui a identidade anterior verde/dourado). A
> seção "Mapeamento para este repo", no final, documenta como cada token foi
> implementado em código.

## 1. Paleta de cores

| Token | Hex | Uso |
| --- | --- | --- |
| `--bg-base` | `#080808` | Fundo principal (quase preto, não é `#000` puro) |
| `--bg-pure` | `#000000` | Fundo de blocos "mais profundos" (cards de imagem, footer) |
| `--accent-neon` | `#D0F730` (~`#D4FF33`) | Cor de assinatura da marca — lime/verde-limão neon |
| `--text-primary` | `#F0F0F0` | Títulos e texto de alto contraste (quase branco, não puro) |
| `--text-secondary` | `#8A8A8A` aprox. | Parágrafos de apoio, legendas, texto secundário em cinza |
| `--border-line` | `#2A2A2A` aprox. | Linhas finas de grid, divisórias, bordas de card |
| `--overlay-glitch` | `--accent-neon` a 10–20% opacidade | Ruído/scanlines/glitch sobre imagens |

**Regra de uso:** preto domina ~85% da superfície; o neon é usado com extrema
economia — só em CTAs, labels de sistema (`/01`, `SYS_TIME`), sublinhados de
destaque e pontos de status. Nunca como cor de fundo grande.

## 2. Tipografia

Duas famílias, contraste clássico "display bold + mono técnico":

- **Display / Headline**: sans-serif grotesca, peso Black/900, caixa alta, tracking
  levemente negativo. Ex.: Suisse Int'l, Neue Machina, Archivo Black, ou Inter Black
  como substituto.
  - H1 hero: ~64–72px / lh 0.95 / uppercase
  - H2 seção: ~28–32px / uppercase
- **Mono / Sistema**: monoespaçada, usada para tudo que parece "dado de máquina" —
  labels `/01`, `/02`, timestamps (`SYS_TIME 23:47:12`), coordenadas
  (`X_36.1749`), status (`ALL SYSTEMS OPERATIONAL`), badges de categoria.
  Ex.: JetBrains Mono, IBM Plex Mono, Space Mono.
  Tamanho pequeno: ~11–13px, letter-spacing positivo (+0.05–0.1em), sempre uppercase.
- **Corpo (parágrafos)**: sans-serif regular, peso 400–500, cor secundária cinza,
  ~14–15px, lh 1.5.

## 3. Grid & layout

- Grid de 12 colunas visível como wireframe decorativo (cruzes + nós nos cantos das
  seções — assinatura do estilo brutalist/blueprint).
- Seções numeradas (`/01`, `/02`...) funcionam como um índice/breadcrumb visual
  fixo no canto.
- Cards com bordas retas, sem `border-radius` (ou raio quase zero) — brutalismo =
  ângulos duros.
- Espaçamento generoso entre seções (~80–120px), mas conteúdo interno
  denso/compacto — contraste típico do estilo.
- Linhas técnicas (`----`, `///`, hachuras diagonais) usadas como separadores
  decorativos, não apenas `<hr>`.

## 4. Componentes

**Botão primário (CTA)**
- Fundo `--accent-neon` sólido, texto preto, peso bold, uppercase, ícone de seta
  (↗) à direita.
- Sem sombra, sem gradiente — flat total.
- Hover: leve escurecimento ou inversão (fundo preto + borda neon).

**Botão secundário**
- Fundo transparente, texto branco/cinza, sem borda visível — mais leve que o
  primário, usado para links "view manifesto" etc.

**Cards de trabalho/portfólio**
- Imagem full-bleed no topo, moldura preta fina.
- Overlay com efeito glitch/scanline em uma das capas (contraste proposital entre
  os cards).
- Legenda abaixo: título uppercase mono + categoria em cinza menor.
- Ícone de seta no canto superior direito do card (indica link externo).

**Painel de status ("SYSTEM STATUS")**
- Estilo dashboard/terminal: barras de progresso finas com preenchimento neon,
  valores em mono, alinhados à direita.
- Bloco com moldura preta + selo "ALL SYSTEMS OPERATIONAL" com ponto neon
  pulsante (indicador de status ativo).

**Formulário (newsletter)**
- Input retangular, borda fina cinza, fundo preto, placeholder cinza.
- Botão anexado (não abaixo) — "SUBSCRIBE" em neon sólido colado ao input.

**Rodapé / navegação global**
- 4 colunas de links em mono uppercase, tamanho pequeno.
- Mini-mapa decorativo com pontos de "nós" — reforça a metáfora de rede/sistema.
- Faixa final com hachuras diagonais preto/neon (padrão de "zebra de alerta"),
  texto `> ACCESS GRANTED_` como easter egg de terminal.

## 5. Motion & efeitos (inferidos)

- Efeito glitch/RGB-split em imagens de destaque.
- Cursor de terminal piscando (`_`) ao final de textos-chave.
- Prováveis micro-interações: hover com deslocamento de scanline, contadores
  incrementando (`>RENDERING... 87%`), texto tipo "terminal typing".

## 6. Iconografia

- Ícones lineares finos (1px), geométricos, sem preenchimento — grade, módulo,
  cubo wireframe, sinal de rádio.
- Sempre acompanhados de legenda mono abaixo.
- Seta diagonal (↗) como ícone recorrente de link/ação em quase todo elemento
  clicável.

## 7. Como replicar isso a partir de um print (metodologia geral)

1. **Cor**: histograma de cores da imagem (Python + Pillow, ou "Coolors image
   picker") para achar os hex exatos, em vez de "chutar no olho".
2. **Tipografia**: ferramenta de identificação de fonte por imagem (WhatFontIs,
   Fontspring Matcherator); na ausência disso, classificar por categoria
   (grotesca/serifada/mono) e escolher a mais próxima no Google Fonts.
3. **Espaçamento/grid**: sobrepor uma grade de 8px/12-col na imagem (Figma,
   Photoshop guides) e medir proporções relativas entre blocos.
4. **Componentes**: catalogar cada elemento reutilizável (botão, card, input,
   badge) com seus estados visíveis na imagem.
5. **Consolidar em tokens**: definir variáveis (`--bg`, `--accent`, `--radius`,
   `--font-display`) para aplicar o sistema em qualquer novo componente com
   consistência.

## 8. Mapeamento para este repo

Tokens CSS em `src/app/globals.css` (`:root` + `@theme inline`), disponíveis como
utilitários Tailwind:

| Token do design system | Variável CSS | Utilitário Tailwind |
| --- | --- | --- |
| `--bg-base` | `--bg-base` | `bg-bg-base` |
| `--bg-pure` | `--bg-pure` | `bg-bg-pure` |
| `--accent-neon` | `--accent-neon` | `bg-neon` / `text-neon` / `border-neon` |
| `--text-primary` | `--text-primary` | `text-text-primary` (herdado por padrão no `body`) |
| `--text-secondary` | `--text-secondary` | `text-text-secondary` |
| `--border-line` | `--border-line` | `border-border-line` |

Fontes (`next/font/google`, `src/app/layout.tsx`):
- Display → `Chakra_Petch` (`--font-display`), subsets `latin` + `latin-ext` (cobre
  acentuação em português). Pesos carregados: 700 e 500.
  - Títulos (h1/h2 e o statement de destaque) e CTAs → peso 700 —
    `font-[family-name:var(--font-display)] font-bold`.
  - Subtítulos (h3 de card: pilares, abordagem, serviços) → peso 500, mais leve —
    `font-[family-name:var(--font-display)] font-medium`.
- Mono → `JetBrains_Mono` (`--font-mono`) — usar via
  `font-[family-name:var(--font-mono)]`.
- Corpo → `Inter` (`--font-inter`, mapeada em `--font-sans`) — padrão do `body`,
  não precisa de classe extra.

Componentes de "chrome" decorativo reutilizáveis em
`src/components/chrome.tsx`:
- `SectionLabel` — label `/0N NOME_DA_SEÇÃO` em mono + neon.
- `CornerMarks` — cruzes decorativas nos cantos de blocos (grid blueprint).
- `StatusDot` — ponto neon pulsante ("sistema ativo").
- `BlinkingCursor` — cursor de terminal piscando (`_`).
- `PrimaryButton` / `SecondaryButton` — botões no padrão CTA do design system.

Ícone de seta (`↗`) em `src/components/icons.tsx` como `ArrowIcon`.
