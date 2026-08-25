# Checklist LGPD — Landing Page Trilha Finance

Gerado em 2026-08-25. Cobre a adequação da landing page (Next.js) à LGPD (Lei
13.709/2018): política de privacidade, banner de cookies, checkbox de consentimento
nos formulários e vínculos no rodapé.

## 1. O que foi implementado

- **Página de Política de Privacidade** — `src/app/politica-de-privacidade/page.tsx`,
  em `/politica-de-privacidade`. Contém: dados coletados e meio de coleta, finalidade
  de cada dado, base legal (art. 7º da LGPD), prazo de retenção, com quem os dados são
  compartilhados, os 9 direitos do titular (art. 18) e como exercê-los. Segue o design
  system do site (mesma navbar/rodapé, tipografia e tokens de cor).
- **Banner de consentimento de cookies** — `src/components/cookie-consent.tsx`
  (`CookieConsentProvider`, montado em `src/app/layout.tsx`). Sem dependência
  externa; React puro.
  - Aparece na primeira visita, some em visitas seguintes (persistido em
    `localStorage`, chave `trilha-cookie-consent`, versionado).
  - 3 opções: **Aceitar todos**, **Recusar não essenciais**, **Personalizar** (abre
    painel com toggle por categoria — Essenciais sempre ativos/desabilitado,
    Analytics e Marketing off por padrão).
  - Estado lido via `useSyncExternalStore` (evita flash incorreto de estado e
    problema de hidratação SSR/CSR do Next.js).
  - Painel é um `role="dialog"` com `aria-modal`, fecha com `Esc` ou clique fora,
    foco inicial no diálogo, toggles navegáveis por teclado com `:focus-visible`
    visível — atende ao pedido de acessibilidade/teclado.
- **Bloqueio de scripts de analytics/marketing até consentimento** —
  `src/components/analytics-scripts.tsx`, montado no `layout.tsx`. Só injeta o script
  do Google Analytics (GA4) se `preferences.analytics === true` **e**
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` estiver definido; mesma lógica para um pixel Meta
  via `NEXT_PUBLIC_META_PIXEL_ID` + `preferences.marketing`. Hoje nenhuma das duas
  env vars está definida, então **nenhum script de terceiro carrega** — o gate já
  está pronto para quando as ferramentas reais forem plugadas.
- **Link "Gerenciar cookies" persistente no rodapé** —
  `ManageCookiesButton` em `footer-section.tsx`, reabre o painel de preferências a
  qualquer momento.
- **Link "Política de Privacidade" no rodapé** — aponta para a rota real (antes era
  `href="#"` placeholder).
- **Checkbox de consentimento nos formulários** — componente compartilhado
  `PrivacyConsentCheckbox` em `src/components/chrome.tsx`, usado em:
  - `contact-section.tsx` (formulário "Fale com a gente" / contato).
  - `newsletter-section.tsx` (formulário de newsletter).
  - Texto "Li e concordo com a Política de Privacidade" com link pra
    `/politica-de-privacidade`; checkbox **desmarcado por padrão**; `onSubmit`
    bloqueia o envio (`preventDefault`) e mostra erro em texto (`role="alert"`) se o
    checkbox não estiver marcado.

## 2. Sinalização — minimização de dados

O formulário de contato coleta **nome, e-mail, telefone, assunto e mensagem**. O
campo **telefone** é o único que vale reavaliar: é plausível para viabilizar contato
comercial direto, mas se a Trilha Finance normalmente responde só por e-mail, ele
pode ser dispensável ou tornado opcional — **decisão de negócio, não alterei sem
confirmação**. Os demais campos (nome, e-mail, assunto, mensagem) e o campo único da
newsletter (e-mail) já são o mínimo necessário para a finalidade.

## 3. O que ainda depende de decisão sua

Estes campos estão marcados como `[PREENCHER: ...]` diretamente no texto da política
(`src/app/politica-de-privacidade/page.tsx`) — procure por `[PREENCHER` no arquivo:

- **Nome do Encarregado de Proteção de Dados (DPO)** e **e-mail dedicado** de
  contato (seção 6 da política).
- **Razão social completa** da empresa (seção 1) — hoje só uso o nome fantasia
  "Trilha Finance" + CNPJ já público no rodapé (67.235.921/0001-04).
- **Ferramentas de terceiros efetivamente usadas**: CRM, plataforma de e-mail
  marketing/newsletter, ferramenta(s) de analytics (se for de fato Google Analytics
  ou outra), rede(s)/pixel(s) de ads (seções 2 e 4).
- **Prazos de retenção específicos** para cada tipo de dado (tabela da seção 2) — os
  textos atuais trazem sugestões de mercado/regulatórias (ex: 6 meses mínimo para
  logs por força do Marco Civil, 14 meses padrão do GA4) como ponto de partida, não
  como prazo definitivo da empresa.
- **Medidas técnicas de segurança** a detalhar na seção 7 (ex: criptografia em
  trânsito, controle de acesso, quem tem acesso aos dados).
- **Data de publicação/versão** no topo da política.
- Depois de preencher os dados acima, defina `NEXT_PUBLIC_GA_MEASUREMENT_ID` e/ou
  `NEXT_PUBLIC_META_PIXEL_ID` (variáveis de ambiente na Vercel) quando as ferramentas
  de analytics/marketing forem efetivamente contratadas — sem isso, os scripts
  continuam bloqueados mesmo com consentimento marcado como "sim".
- Os links "Termos de Uso" e "LGPD" no rodapé continuam como placeholder (`href="#"`)
  — fora do escopo pedido, mas ficaram sinalizados no código caso queira endereçar
  depois.

## 4. Lembrete

**O texto da Política de Privacidade é um rascunho técnico, não uma peça jurídica.**
Antes de publicar, ele precisa passar por revisão de um advogado especializado em
proteção de dados — em especial as bases legais atribuídas a cada tratamento (usei
"consentimento" como base padrão para os formulários, que é defensável mas pode não
ser a mais adequada para todos os casos) e os prazos de retenção.

## 5. Contexto técnico (referência)

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, sem dependências
externas de UI. Novos arquivos:

- `src/app/politica-de-privacidade/page.tsx` — página da política.
- `src/components/cookie-consent.tsx` — provider, banner e painel de preferências de
  cookies.
- `src/components/analytics-scripts.tsx` — injeção condicional de GA4/Meta Pixel.

Arquivos alterados: `src/app/layout.tsx` (monta o provider), `src/components/chrome.tsx`
(adiciona `PrivacyConsentCheckbox`), `src/components/icons.tsx` (adiciona `CheckIcon`),
`src/components/contact-section.tsx`, `src/components/newsletter-section.tsx`,
`src/components/footer-section.tsx`.

`npm run lint` e `npm run build` rodaram limpos após as mudanças.
