import { SectionLabel } from "./chrome";

const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "Espaço reservado pro relato de um cliente real de Consultoria Financeira assim que tivermos um case aprovado pra publicar.",
    role: "Cliente PF · Planejamento Financeiro",
  },
  {
    quote:
      "Espaço reservado pro relato de uma empresa atendida em Desenvolvimento de Software.",
    role: "Cliente PJ · Desenvolvimento de Software",
  },
  {
    quote:
      "Espaço reservado pro relato de quem passou por um Treinamento com a Trilha.",
    role: "Cliente · Treinamentos",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel index="04" label="Depoimentos" className="text-center" />
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
          Histórias reais, em breve.
        </h2>
        <p className="mt-4 text-sm text-text-secondary">
          Os cards abaixo são ilustrativos — vão dar lugar a depoimentos reais assim que
          os primeiros cases forem publicados.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PLACEHOLDER_TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.role}
            className="flex flex-col justify-between border border-dashed border-border-line p-7"
          >
            <div>
              <span className="inline-flex border border-border-line px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-text-secondary">
                Depoimento ilustrativo
              </span>
              <p className="mt-4 text-sm leading-6 italic text-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-line font-[family-name:var(--font-mono)] text-xs text-text-secondary">
                ?
              </span>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-text-secondary">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
