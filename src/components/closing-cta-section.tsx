import { TrailIcon } from "./graphics";

export function ClosingCtaSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 sm:px-8 lg:px-10">
      <div className="relative flex flex-col items-center gap-6 border border-neon bg-neon px-8 py-16 text-center sm:px-16">
        <span className="flex h-16 w-16 items-center justify-center border border-black/20 text-black">
          <TrailIcon className="h-8 w-8" />
        </span>
        <h2 className="max-w-xl font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-black sm:text-4xl">
          Sua trilha financeira começa com uma conversa.
        </h2>
        <a
          href="#contato"
          className="group inline-flex h-14 items-center justify-center gap-3 border border-black bg-black px-8 font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-neon transition-colors duration-[200ms] ease-in-out hover:bg-transparent hover:text-black"
        >
          Fale com a gente
          <span aria-hidden className="transition-transform duration-[200ms] ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
