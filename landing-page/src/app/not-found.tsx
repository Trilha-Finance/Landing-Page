import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PillLink } from "@/components/ui/pill-link";
import { SectionBadge } from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "Página não encontrada | Trilha Finance",
};

const shortcuts = [
  { href: "/#services", label: "Serviços", icon: "fa-compass" },
  { href: "/#como-atuamos", label: "Como atuamos", icon: "fa-route" },
  { href: "/#faq", label: "Dúvidas frequentes", icon: "fa-circle-question" },
  { href: "/#contact", label: "Fale com a gente", icon: "fa-comments" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col p-3 md:p-5">
      <div className="relative isolate flex flex-1 flex-col overflow-hidden rounded-[30px] bg-brand">
        <Image src="/images/hero/bg.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand via-brand/80 to-brand/40" />

        {/* A dashed trail that wanders off and ends at a pin, the "lost" visual. */}
        <svg
          aria-hidden
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 h-[260px] w-full text-lime/30 md:h-[340px]"
        >
          <path
            d="M-20 330 C 180 330, 220 120, 420 160 S 700 360, 860 250 S 1060 40, 1220 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="2 14"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <header className="flex items-center justify-between px-6 pt-6 md:px-[70px] md:pt-8">
          <Link href="/" aria-label="Trilha Finance, voltar ao início" className="shrink-0">
            <Image src="/images/logo.png" alt="Trilha Finance" width={1303} height={355} className="h-10 w-auto md:h-11" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 font-body text-[15px] text-white transition-colors hover:text-lime"
          >
            <i className="fa-solid fa-arrow-left" />
            <span className="hidden sm:inline">Voltar ao site</span>
          </Link>
        </header>

        <div className="flex flex-1 flex-col justify-end px-6 pb-10 pt-16 md:px-[90px] md:pb-[90px]">
          <SectionBadge variant="dark">Erro 404</SectionBadge>

          <p
            aria-hidden
            className="mt-6 flex items-center font-heading text-[120px] font-semibold leading-none text-white/10 md:text-[220px]"
          >
            4
            <span className="mx-2 grid size-[96px] place-items-center rounded-full bg-lime text-[44px] text-brand md:mx-4 md:size-[172px] md:text-[80px]">
              <i className="fa-solid fa-location-dot" />
            </span>
            4
          </p>

          <h1 className="mt-8 max-w-[900px] font-heading text-4xl font-semibold leading-[1.05] text-white md:text-7xl">
            Parece que você saiu da trilha.
          </h1>
          <p className="mt-6 max-w-[620px] text-base leading-[30.4px] text-white/80">
            A página que você procura não existe, mudou de endereço ou nunca fez parte do mapa. Sem
            problema: a gente te ajuda a reencontrar o caminho.
          </p>

          <div className="mt-10">
            <PillLink href="/">Voltar ao início</PillLink>
          </div>

          <hr className="mt-10 max-w-[938px] border-white/20" />

          <nav aria-label="Atalhos" className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[1.5px] text-lime">Ou siga por aqui</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {shortcuts.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-lime hover:text-lime"
                  >
                    <i className={`fa-solid ${s.icon}`} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
