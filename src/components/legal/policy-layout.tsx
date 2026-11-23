import type { ReactNode } from "react";
import { SectionBadge } from "@/components/ui/section-badge";

export type PolicyTocItem = { id: string; title: string };

export const privacyEmail = "privacidade@trilhafinance.com.br";
export const privacyMailto = `mailto:${privacyEmail}?subject=${encodeURIComponent("LGPD – Website")}`;

type PolicyHeroProps = {
  title: string;
  intro: ReactNode;
  facts: { icon: string; label: string; value: ReactNode }[];
};

/** Dark intro card at the top of a long legal document. */
export function PolicyHero({ title, intro, facts }: PolicyHeroProps) {
  return (
    <header className="rounded-[30px] bg-brand px-6 py-12 text-white md:px-16 md:py-16">
      <SectionBadge variant="dark">Documentos legais</SectionBadge>
      <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-[56px] md:leading-[67px]">
        {title}
      </h1>
      <div className="mt-5 max-w-[680px] text-base leading-[28px] text-white/75 md:text-lg md:leading-[30px]">
        {intro}
      </div>
      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-[20px] bg-white/[0.07] p-5">
            <dt className="flex items-center gap-2 text-sm text-white/60">
              <i className={`${fact.icon} text-lime`} />
              {fact.label}
            </dt>
            <dd className="mt-1.5 font-heading text-base font-medium break-words [&_a]:underline-offset-4 [&_a:hover]:underline">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

type PolicySummaryProps = {
  items: { icon: string; title: string; text: ReactNode }[];
};

/** Short "em resumo" cards so the reader gets the gist before the full text. */
export function PolicySummary({ items }: PolicySummaryProps) {
  return (
    <section aria-labelledby="resumo" className="rounded-[30px] bg-mist px-6 py-10 md:px-16 md:py-12">
      <h2 id="resumo" className="font-heading text-2xl font-semibold text-brand-deep">
        Em resumo
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[20px] bg-white p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-lime text-brand">
              <i className={item.icon} />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-brand-deep">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-[24px] text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TocList({ items }: { items: PolicyTocItem[] }) {
  return (
    <ol className="flex flex-col gap-0.5">
      {items.map((item, index) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex gap-3 rounded-[12px] px-3 py-1.5 text-sm leading-snug text-muted transition-colors hover:bg-mist hover:text-brand-deep"
          >
            <span className="w-5 shrink-0 font-heading text-brand/50 tabular-nums">{index + 1}</span>
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Sticky table of contents on desktop, collapsible list on mobile. */
export function PolicyToc({ items }: { items: PolicyTocItem[] }) {
  return (
    <>
      <details className="group rounded-[24px] bg-white p-5 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-lg font-semibold text-brand-deep">
          Nesta página
          <i className="fa-solid fa-chevron-down text-sm text-brand transition-transform group-open:rotate-180" />
        </summary>
        <nav aria-label="Seções da página" className="mt-4">
          <TocList items={items} />
        </nav>
      </details>

      {/* Stretches to the full height of the content column so the sticky menu follows the reader. */}
      <aside className="hidden lg:block lg:self-stretch">
        <nav
          aria-label="Seções da página"
          className="sticky top-5 max-h-[calc(100vh-2.5rem)] overflow-y-auto rounded-[24px] bg-white p-5"
        >
          <p className="px-3 pb-3 font-heading text-sm tracking-[1.4px] text-brand uppercase">Nesta página</p>
          <TocList items={items} />
        </nav>
      </aside>
    </>
  );
}

type PolicySectionProps = {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
};

/** One chapter of the document, in its own card with a large number marker. */
export function PolicySection({ id, number, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-6 rounded-[30px] bg-white px-6 py-10 md:px-12 md:py-12">
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-lime font-heading text-lg font-semibold text-brand tabular-nums">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="pt-2 font-heading text-2xl font-semibold leading-[32px] text-brand-deep md:text-[28px]">
          {title}
        </h2>
      </div>
      <div className="mt-7 flex flex-col gap-3 text-base leading-[28px] text-muted [&>ol]:rounded-[20px] [&>ol]:bg-mist [&>ol]:p-5 [&>p]:rounded-[20px] [&>p]:bg-mist [&>p]:p-5 [&>ul]:rounded-[20px] [&>ul]:bg-mist [&>ul]:p-5 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-brand-deep">
        {children}
      </div>
    </section>
  );
}

/** A numbered clause (e.g. "7.2") in a gray card, with the number set apart in its own column. */
export function Clause({ n, title, children }: { n: string; title?: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 rounded-[20px] bg-mist p-5 md:grid-cols-[48px_1fr] md:gap-4">
      <span className="font-heading text-sm font-medium text-brand/60 tabular-nums md:pt-1">{n}</span>
      <div className="flex flex-col gap-3">
        {title && <h3 className="font-heading text-lg font-semibold text-brand-deep">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

/** Bulleted list with lime check markers. */
export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <i className="fa-solid fa-check mt-[7px] text-xs text-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two-column term/description rows, used for legal bases and retention periods. */
export function TermTable({ head, rows }: { head: [string, string]; rows: [ReactNode, ReactNode][] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-white">
      <div className="hidden grid-cols-[minmax(0,2fr)_minmax(0,3fr)] bg-mist px-6 py-3 font-heading text-sm tracking-[1.2px] text-brand uppercase md:grid md:gap-6">
        <span>{head[0]}</span>
        <span>{head[1]}</span>
      </div>
      {rows.map(([term, description], index) => (
        <div
          key={index}
          className="grid gap-1 border-t border-black/[0.06] px-6 py-4 nth-[2]:border-t-0 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6 md:nth-[2]:border-t"
        >
          <span className="font-medium text-brand-deep">{term}</span>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}

/** Grid of small cards, used for principles and data subject rights. */
export function CardGrid({ items }: { items: { title: string; text: ReactNode }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-[20px] bg-mist p-5">
          <h3 className="font-heading text-base font-semibold text-brand-deep">{item.title}</h3>
          <p className="mt-1.5 text-[15px] leading-[25px]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Highlighted note inside a section. */
export function Callout({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-[20px] bg-lime/40 p-5 text-brand-deep">
      <i className={`${icon} mt-1.5 text-brand`} />
      <div>{children}</div>
    </div>
  );
}

/** Card naming the data protection officer (DPO) and how to reach them. */
export function DpoCard() {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-brand p-6 text-white sm:flex-row sm:items-center">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-lime text-brand">
        <i className="fa-solid fa-user-shield" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-white/60">Encarregado pelo tratamento de dados (DPO)</p>
        <p className="font-heading text-lg font-semibold">Davi Marques Oliveira</p>
        <a href={privacyMailto} className="break-words text-lime! underline-offset-4">
          {privacyEmail}
        </a>
      </div>
    </div>
  );
}

/** Button that opens an e-mail to the DPO with the "LGPD – Website" subject. */
export function PrivacyMailButton() {
  return (
    <a
      href={privacyMailto}
      className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-lime px-6 text-sm font-medium text-brand no-underline! transition-colors hover:bg-[#b5f08f]"
    >
      <i className="fa-regular fa-envelope" />
      Enviar pedido por e-mail
    </a>
  );
}
