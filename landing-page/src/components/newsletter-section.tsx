export function NewsletterSection() {
  return (
    <section className="w-full border-y border-[#606C38]/20 bg-white">
        <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#FFB703]">
          • Newsletter
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="space-y-4">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#283618] sm:text-5xl lg:text-6xl">
              Junte-se a nossa newsletter
            </h2>

            <p className="max-w-lg text-base font-normal leading-8 text-[#606C38] sm:text-lg">
              Fique por dentro de todas as novidades do mundo das finanças.
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
              className="h-[58px] w-full rounded-[18px] border border-[#606C38]/20 bg-white px-5 text-[1rem] text-[#283618] placeholder:text-[#606C38]/55 outline-none transition focus:border-[#606C38]/50 focus:ring-4 focus:ring-[#606C38]/15 sm:max-w-[380px]"
            />

            <button
              type="submit"
              className="inline-flex h-[58px] items-center whitespace-nowrap justify-center rounded-[18px] bg-[#606C38] px-7 font-bold text-white transition hover:scale-[1.02] hover:bg-[#283618]"
            >
              Inscreva-se
            </button>
          </form>
        </div>
      </div>
    </section>
    </section>
    
    
  );
}