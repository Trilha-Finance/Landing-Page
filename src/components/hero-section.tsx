import { HeroPortrait } from "./graphics";
import { PrimaryButton, SecondaryButton, BlinkingCursor } from "./chrome";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border-line">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,87,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 divide-y divide-border-line lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="flex flex-col justify-center px-6 py-24 text-center sm:px-8 lg:px-10 lg:py-32 lg:text-left">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-neon">
            TRILHA_FINANCE<BlinkingCursor />
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] font-bold text-4xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
            Finanças de verdade encontram tecnologia de verdade.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-lg lg:mx-0">
            Planejamento financeiro, wealth planning, desenvolvimento de software e
            blockchain — numa trilha só, pensada pra pessoas e empresas que querem
            entender pra onde o dinheiro (e a tecnologia) estão indo.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <PrimaryButton href="#contato">Falar com a gente</PrimaryButton>
            <SecondaryButton href="#servicos">Ver serviços</SecondaryButton>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
