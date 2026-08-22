import { HeroGraphic } from "./graphics";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,176,1,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-32">
        <div className="text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
            Trilha Finance
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Finanças de verdade encontram tecnologia de verdade.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg lg:mx-0">
            Planejamento financeiro, wealth planning, desenvolvimento de software e
            blockchain — numa trilha só, pensada pra pessoas e empresas que querem
            entender pra onde o dinheiro (e a tecnologia) estão indo.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contato"
              className="inline-flex h-14 items-center justify-center rounded-full bg-brand-gold px-8 font-[family-name:var(--font-manrope)] text-base font-medium text-brand-deep transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(252,176,1,0.25)]"
            >
              Falar com a gente
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 font-[family-name:var(--font-manrope)] text-base font-medium text-white transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:border-white/40"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
