import { SecondaryButton } from "./chrome";

export function StatementSection() {
  return (
    <section className="mx-auto w-full max-w-[820px] px-6 py-20 text-center sm:px-8">
      <p className="font-[family-name:var(--font-display)] font-bold text-2xl uppercase leading-relaxed text-text-primary sm:text-3xl">
        Software, consultoria e educação andam na{" "}
        <span className="text-neon">mesma trilha.</span>
      </p>
      <div className="mt-8 flex justify-center">
        <SecondaryButton href="#servicos">
          Ver todos os serviços <span aria-hidden>↗</span>
        </SecondaryButton>
      </div>
    </section>
  );
}
