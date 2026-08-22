import { BannerGraphic } from "./graphics";

export function HighlightBannerSection() {
  return (
    <section className="bg-[#062a24]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Direção clara pro seu dinheiro{" "}
            <span className="text-brand-gold">e pra sua tecnologia.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/65 md:mx-0">
            Sem letra miúda e sem jargão que só especialista entende — a gente traduz
            finanças e tecnologia pra linguagem de verdade, do primeiro diagnóstico em
            diante.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-brand-gold px-8 font-[family-name:var(--font-manrope)] text-base font-medium text-brand-deep transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(252,176,1,0.2)]"
          >
            Agendar uma conversa
          </a>
        </div>

        <BannerGraphic />
      </div>
    </section>
  );
}
