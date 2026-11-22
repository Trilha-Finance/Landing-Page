import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const testimonials = [1, 2, 3].map((n) => ({
  id: n,
  name: "Alison Hedge",
  role: "CEO e Fundadora",
  quote:
    "A assessoria da Trilha Finance foi decisiva para estruturarmos nossa captação. Recebemos orientação clara em cada etapa e fechamos a rodada com os investidores certos.",
}));

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-[1320px] px-4 pt-[120px] xl:px-0">
      <div className="text-center">
        <SectionBadge variant="white">Depoimentos</SectionBadge>
        <RevealHeading
          text="O que os fundadores do nosso portfólio dizem sobre nós"
          className="mx-auto mt-[3px] max-w-[780px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
        />
      </div>
      <ul className="mt-11 grid gap-[30px] lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.id} className="relative pt-[30px]">
            <div className="rounded-[20px] bg-white px-10 pb-9 pt-[88px]">
              <div className="text-[13px] tracking-[2px] text-[#ffb400]" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <blockquote className="mt-6 text-base leading-[28px] text-muted">{t.quote}</blockquote>
            </div>
            <div className="absolute inset-x-10 top-0 flex h-[90px] items-center gap-4 rounded-[15px] bg-brand px-4">
              <div className="flex shrink-0 items-center">
                <ImagePlaceholder label="" className="size-[50px] rounded-full" />
                <span className="-ml-2.5 grid size-[54px] place-items-center rounded-full bg-lime text-2xl text-brand">
                  <i className="fa-solid fa-quote-right" />
                </span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-white">{t.name}</p>
                <p className="mt-1 text-xs text-white/70">{t.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
