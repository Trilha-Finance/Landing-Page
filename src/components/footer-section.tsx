"use client";

import { ManageCookiesButton } from "./cookie-consent";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-border-line bg-bg-pure text-text-secondary">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <section className="grid gap-14 border-b border-border-line pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-x-20">
          <div className="space-y-6 lg:pr-16">
            <a href="#top" className="inline-flex items-center border border-border-line bg-white px-3 py-1.5">

            </a>
          </div>

          <nav aria-label="Navigation" className="space-y-6">
            <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary">
              /01 Navegação
            </h2>
            <ul className="space-y-4">
              {["Home", "Sobre", "Quem Somos", "Serviços", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out hover:text-neon"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="space-y-6">
            <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary">
              /02 Soluções
            </h2>
            <ul className="space-y-4">
              {[
                "Consultoria Financeira",
                "Desenvolvimento de Software",
                "Treinamentos",
                "Abertura de Empresas",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="inline-flex font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out hover:text-neon"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social" className="space-y-6">
            <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary">
              /03 Social
            </h2>
            <ul className="space-y-4">
              {[
                "Instagram",
                "Linkedin",
                "contato@trilhafinance.com.br",
                "+55 (41) 99937-7006",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out hover:text-neon"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="flex flex-col gap-4 py-10 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="/politica-de-privacidade"
              className="transition-colors duration-[200ms] ease-in-out hover:text-neon"
            >
              Política de Privacidade
            </a>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {["Termos de Uso", "LGPD"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors duration-[200ms] ease-in-out hover:text-neon"
                >
                  {item}
                </a>
              ))}
              <ManageCookiesButton className="transition-colors duration-[200ms] ease-in-out hover:text-neon" />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-left md:text-right">
            <p className="text-text-primary">© 2026 Trilha Finance</p>
            <p>CNPJ 67.235.921/0001-04</p>
          </div>
        </section>
      </div>

      <div className="w-full border-t border-border-line bg-black py-3">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center px-6 sm:px-8 lg:px-10">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-neon">
            &gt; ACCESS GRANTED_
          </span>
        </div>
      </div>
    </footer>
  );
}
