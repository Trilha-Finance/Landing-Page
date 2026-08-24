import { SectionLabel } from "./chrome";

export function NewsletterSection() {
  return (
    <section className="w-full border-y border-border-line bg-bg-pure">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <SectionLabel index="07" label="Newsletter" className="mb-8 text-center" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="space-y-4">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Junte-se à nossa newsletter
            </h2>

            <p className="max-w-lg text-base leading-8 text-text-secondary sm:text-lg">
              Fique por dentro de todas as novidades do mundo das finanças e da
              tecnologia.
            </p>
          </div>

          <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite o seu email"
              className="h-[58px] w-full border border-border-line bg-black px-5 text-[1rem] text-text-primary outline-none placeholder:text-text-secondary focus:border-neon sm:max-w-[380px]"
            />

            <button
              type="submit"
              className="inline-flex h-[58px] items-center justify-center whitespace-nowrap border border-neon bg-neon px-7 font-[family-name:var(--font-display)] text-sm uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-neon sm:border-l-0"
            >
              Inscreva-se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
