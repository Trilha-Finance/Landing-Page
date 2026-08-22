import { SparkIcon } from "./icons";

export function SupportSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
        <div className="relative flex aspect-square w-full max-w-sm items-center justify-center justify-self-center rounded-[2.5rem] bg-gradient-to-br from-brand-gold/15 via-white/5 to-transparent md:justify-self-start">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold text-brand-deep">
            <SparkIcon className="h-9 w-9" />
          </span>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
            Suporte
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Acompanhamento que acompanha, não só responde.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/65">
            Cada trilha é diferente — por isso o acompanhamento é próximo, direto com
            quem entende do assunto, sem fila de atendimento genérico.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition hover:text-brand-gold"
          >
            Fale com a gente
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
