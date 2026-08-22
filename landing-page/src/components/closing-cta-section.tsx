export function ClosingCtaSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 sm:px-8 lg:px-10">
      <div className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-brand-gold px-8 py-16 text-center sm:px-16">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
          Sua trilha financeira começa com uma conversa.
        </h2>
        <a
          href="#contato"
          className="inline-flex h-14 items-center justify-center rounded-full bg-brand-deep px-8 font-[family-name:var(--font-manrope)] text-base font-medium text-white transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(8,60,47,0.35)]"
        >
          Fale com a gente
        </a>
      </div>
    </section>
  );
}
