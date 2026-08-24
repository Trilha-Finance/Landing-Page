import { BannerGraphic } from "./graphics";
import { PrimaryButton } from "./chrome";

export function HighlightBannerSection() {
  return (
    <section className="border-b border-border-line bg-bg-pure">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
        <div className="text-center md:text-left">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Direção clara pro seu dinheiro{" "}
            <span className="text-neon">e pra sua tecnologia.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-text-secondary md:mx-0">
            Sem letra miúda e sem jargão que só especialista entende — a gente traduz
            finanças e tecnologia pra linguagem de verdade, do primeiro diagnóstico em
            diante.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <PrimaryButton href="#contato">Agendar uma conversa</PrimaryButton>
          </div>
        </div>

        <BannerGraphic />
      </div>
    </section>
  );
}
