import { SectionLabel } from "./chrome";

const FIELD_CLASS =
  "h-12 w-full border border-border-line bg-black px-5 text-base text-text-primary outline-none placeholder:text-text-secondary transition-colors duration-[200ms] ease-in-out hover:border-neon/40 focus:border-neon";

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,255,51,0.05),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel index="08" label="Contato" className="text-center" />
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem]">
            Entre em Contato
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-[1.05rem]">
            Tire suas dúvidas, conheça nossas soluções e converse com nossos especialistas.
          </p>
        </div>

        <form className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="space-y-2 lg:col-span-6">
            <label
              htmlFor="full-name"
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out focus-within:text-neon"
            >
              Nome Completo
            </label>
            <input
              id="full-name"
              name="fullName"
              autoComplete="name"
              aria-label="Full Name"
              type="text"
              placeholder="Digite o seu nome completo"
              className={FIELD_CLASS}
            />
          </div>

          <div className="space-y-2 lg:col-span-6">
            <label
              htmlFor="email"
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out focus-within:text-neon"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              aria-label="Email"
              type="email"
              placeholder="exemplo@gmail.com"
              className={FIELD_CLASS}
            />
          </div>

          <div className="space-y-2 lg:col-span-6">
            <label
              htmlFor="phone"
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out focus-within:text-neon"
            >
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              aria-label="Phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className={FIELD_CLASS}
            />
          </div>

          <div className="space-y-2 lg:col-span-12">
            <label
              htmlFor="subject"
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out focus-within:text-neon"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              autoComplete="off"
              aria-label="Subject"
              type="text"
              placeholder="Como podemos ajudar?"
              className={FIELD_CLASS}
            />
          </div>

          <div className="space-y-2 lg:col-span-12">
            <label
              htmlFor="message"
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary transition-colors duration-[200ms] ease-in-out focus-within:text-neon"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              aria-label="Message"
              placeholder="Descreva brevemente como podemos ajudar."
              className={`h-[168px] resize-none py-4 ${FIELD_CLASS}`}
            />
          </div>
          <div className="flex justify-center pt-2 lg:col-span-12">
            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center border border-neon bg-neon px-7 font-[family-name:var(--font-display)] text-sm uppercase tracking-wide text-black transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon sm:w-[224px]"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
