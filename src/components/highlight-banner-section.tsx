import { PrimaryButton } from "./chrome";

export function HighlightBannerSection() {
  return (
    <section className="border-b border-border-line bg-bg-pure">
      <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-6 px-6 py-24 text-center sm:px-8 lg:px-10">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl md:text-5xl">
          Direção clara pra sua tecnologia,{" "}
          <span className="text-neon">sem letra miúda.</span>
        </h2>
        <p className="max-w-lg text-base leading-7 text-text-secondary">
          Nada de jargão técnico que só especialista entende, nem contrato cheio de
          letra miúda — a gente traduz tecnologia pra linguagem de verdade, do
          primeiro diagnóstico em diante.
        </p>
        <PrimaryButton href="#contato">Agendar uma conversa</PrimaryButton>
      </div>
    </section>
  );
}
