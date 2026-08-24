export function StatementSection() {
  return (
    <section className="mx-auto w-full max-w-[820px] px-6 py-20 text-center sm:px-8">
      <p className="font-[family-name:var(--font-display)] text-2xl uppercase leading-relaxed text-text-primary sm:text-3xl">
        Finanças e tecnologia não precisam viver em{" "}
        <span className="text-neon">pastas separadas.</span>
      </p>
      <a
        href="#servicos"
        className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-neon"
      >
        Ver todos os serviços
        <span aria-hidden>↗</span>
      </a>
    </section>
  );
}
