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
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
          Depoimentos
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Histórias reais, em breve.
        </h2>
        <p className="mt-4 text-sm text-white/50">
          Os cards abaixo são ilustrativos — vão dar lugar a depoimentos reais assim que
          os primeiros cases forem publicados.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PLACEHOLDER_TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.role}
            className="flex flex-col justify-between rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-7"
          >
            <div>
              <span className="inline-flex rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/50">
                Depoimento ilustrativo
              </span>
              <p className="mt-4 text-sm leading-6 text-white/60 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/50">
                ?
              </span>
              <p className="text-sm font-medium text-white/70">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
