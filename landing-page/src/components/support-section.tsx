import { SparkIcon } from "./icons";
import { SectionLabel } from "./chrome";

export function SupportSection() {
  return (
    <section className="border-y border-border-line bg-bg-pure">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
        <div className="relative flex aspect-square w-full max-w-sm items-center justify-center justify-self-center border border-border-line md:justify-self-start">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-line) 1px, transparent 1px), linear-gradient(90deg, var(--border-line) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <span className="relative flex h-20 w-20 items-center justify-center border border-neon text-neon">
            <SparkIcon className="h-9 w-9" />
          </span>
        </div>

        <div>
          <SectionLabel index="05" label="Suporte" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Acompanhamento que acompanha, não só responde.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">
            Cada trilha é diferente — por isso o acompanhamento é próximo, direto com
            quem entende do assunto, sem fila de atendimento genérico.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-neon"
          >
            Fale com a gente
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
