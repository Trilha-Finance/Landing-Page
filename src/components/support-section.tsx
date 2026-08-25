import { SectionLabel, SecondaryButton } from "./chrome";

export function SupportSection() {
  return (
    <section className="border-y border-border-line bg-bg-pure">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-6 py-20 text-center sm:px-8 lg:px-10">
        <SectionLabel index="05" label="Suporte" />
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
          Acompanhamento que acompanha, não só responde.
        </h2>
        <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">
          Sem fila de atendimento genérico: cada trilha tem um responsável direto,
          que conhece o seu contexto e acompanha de perto — antes, durante e depois
          da entrega.
        </p>
        <div className="mt-8">
          <SecondaryButton href="#contato">Fale com a gente</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
