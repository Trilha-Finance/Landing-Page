export function NewsletterSection() {
  return (
    <section className="w-full border-y border-brand/10 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
          Newsletter
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="space-y-4">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-brand sm:text-5xl lg:text-6xl">
              Junte-se à nossa newsletter
            </h2>

            <p className="max-w-lg text-base font-normal leading-8 text-brand/70 sm:text-lg">
              Fique por dentro de todas as novidades do mundo das finanças e da
              tecnologia.
            </p>
          </div>

          <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite o seu email"
              className="h-[58px] w-full rounded-[18px] border border-brand/15 bg-white px-5 text-[1rem] text-brand placeholder:text-brand/40 outline-none transition focus:border-brand/40 focus:ring-4 focus:ring-brand/10 sm:max-w-[380px]"
            />

            <button
              type="submit"
              className="inline-flex h-[58px] items-center whitespace-nowrap justify-center rounded-[18px] bg-brand-deep px-7 font-bold text-white transition hover:scale-[1.02] hover:bg-brand"
            >
              Inscreva-se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
