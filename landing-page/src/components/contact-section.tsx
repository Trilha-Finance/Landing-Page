export function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,226,85,0.06),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FFB703]">
            • Contato
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Entre em Contato
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-[1.05rem]">
            Tire suas dúvidas, conheça nossas soluções e converse com nossos especialistas.
          </p>
        </div>

        <form className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="space-y-2 lg:col-span-6">
            <label htmlFor="full-name" className="text-sm font-medium text-white/70 transition duration-[250ms] ease-in-out focus-within:text-[#B7E255]">
              Nome Completo
            </label>
            <input
              id="full-name"
              name="fullName"
              autoComplete="name"
              aria-label="Full Name"
              type="text"
              placeholder="Digite o seu nome completo"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-base text-white placeholder:text-white/45 outline-none transition duration-[250ms] ease-in-out hover:border-[#B7E255]/35 focus:border-[#B7E255]/60 focus:ring-4 focus:ring-[#B7E255]/10"
            />
          </div>

          <div className="space-y-2 lg:col-span-6">
            <label htmlFor="email" className="text-sm font-medium text-white/70 transition duration-[250ms] ease-in-out focus-within:text-[#B7E255]">
              Email
            </label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              aria-label="Email"
              type="email"
              placeholder="exemplo@gmail.com"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-base text-white placeholder:text-white/45 outline-none transition duration-[250ms] ease-in-out hover:border-[#B7E255]/35 focus:border-[#B7E255]/60 focus:ring-4 focus:ring-[#B7E255]/10"
            />
          </div>

          <div className="space-y-2 lg:col-span-6">
            <label htmlFor="phone" className="text-sm font-medium text-white/70 transition duration-[250ms] ease-in-out focus-within:text-[#B7E255]">
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              aria-label="Phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-base text-white placeholder:text-white/45 outline-none transition duration-[250ms] ease-in-out hover:border-[#B7E255]/35 focus:border-[#B7E255]/60 focus:ring-4 focus:ring-[#B7E255]/10"
            />
          </div>

          <div className="space-y-2 lg:col-span-12">
            <label htmlFor="subject" className="text-sm font-medium text-white/70 transition duration-[250ms] ease-in-out focus-within:text-[#B7E255]">
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              autoComplete="off"
              aria-label="Subject"
              type="text"
              placeholder="Como podemos ajudar?"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-base text-white placeholder:text-white/45 outline-none transition duration-[250ms] ease-in-out hover:border-[#B7E255]/35 focus:border-[#B7E255]/60 focus:ring-4 focus:ring-[#B7E255]/10"
            />
          </div>

          <div className="space-y-2 lg:col-span-12">
            <label htmlFor="message" className="text-sm font-medium text-white/70 transition duration-[250ms] ease-in-out focus-within:text-[#B7E255]">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              aria-label="Message"
              placeholder="Descreva brevemente como podemos ajudar."
              className="h-[168px] w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-base text-white placeholder:text-white/45 outline-none transition duration-[250ms] ease-in-out hover:border-[#B7E255]/35 focus:border-[#B7E255]/60 focus:ring-4 focus:ring-[#B7E255]/10"
            />
          </div>
          <div className="flex justify-center pt-2 lg:col-span-12">
            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#FFB703] px-7 text-base font-medium text-[#083C33] transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(183,226,85,0.12)] sm:w-[224px]"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}