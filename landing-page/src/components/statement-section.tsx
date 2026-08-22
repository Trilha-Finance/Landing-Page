export function StatementSection() {
  return (
    <section className="mx-auto w-full max-w-[820px] px-6 py-20 text-center sm:px-8">
      <p className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">
        Finanças e tecnologia não precisam viver em{" "}
        <span className="text-brand-gold">pastas separadas.</span>
      </p>
      <a
        href="#servicos"
        className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-medium text-white/70 transition hover:text-white"
      >
        Ver todos os serviços
        <span aria-hidden>→</span>
      </a>
    </section>
  );
}
