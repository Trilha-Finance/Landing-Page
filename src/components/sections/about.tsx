import Image from "next/image";
import { PillLink } from "@/components/ui/pill-link";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const highlights = [
  "Colocamos a educação financeira como eixo central, para que você entenda cada decisão do seu plano.",
  "Conduzimos o planejamento com visão integrada, do orçamento à sucessão.",
  "Atuamos sem conflitos de interesse: nossa recomendação é sempre a melhor para você.",
];

const counters = [
  { value: "81,7%", label: "Das famílias brasileiras estão com dívidas a vencer" },
  {
    value: "29,6%",
    label: "Das famílias brasileiras estão com alguma parcela em atraso",
  },
  { value: "31%", label: "Dos brasileiros não possuem reserva financeira" },
  {
    value: "60%",
    label: "60% dos brasileiros chegam à terceira idade sem reserva de emergência",
  },
];

export function About() {
  return (
    <section id="about" className="px-3 pt-[60px] md:px-5">
      <div className="rounded-[30px] bg-white px-6 py-16 md:px-12 lg:py-[100px]">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[596px_1fr] xl:gap-[74px]">
          {/* Desktop only: the photos stretch to the text column, ending level with the button. */}
          <div className="hidden grid-cols-2 gap-5 lg:grid">
            <div className="flex flex-col gap-5">
              <div className="relative flex-1 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/about/about-documents.jpg"
                  alt="Vista de cima de uma consultora revisando documentos com um cliente"
                  fill
                  sizes="283px"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/about/about-couple.jpg"
                  alt="Casal em reunião de planejamento com um consultor"
                  fill
                  sizes="283px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[20px]">
              <Image
                src="/images/about/about-meeting.jpg"
                alt="Consultor apresentando análises de investimento a uma cliente"
                fill
                sizes="293px"
                className="object-cover object-[60%_center]"
              />
            </div>
          </div>

          <div>
            <div className="text-center lg:text-left">
              <SectionBadge>Sobre a Trilha Finance</SectionBadge>
              <RevealHeading
                text="A trajetória por trás da nossa experiência em planejamento"
                className="mt-[3px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[73px]"
              />
            </div>
            <p className="mx-auto mt-7 lg:mx-0 max-w-[635px] text-justify hyphens-auto text-base leading-[30.4px] text-muted">
              A Trilha Finance é dedicada ao planejamento financeiro e
              patrimonial de indivíduos, famílias e empresas. Trabalhamos
              para que cada cliente construa patrimônio de forma saudável e
              sustentável, com um acompanhamento ativo e responsivo, que
              acompanha as mudanças de cada etapa da vida pessoal e empresarial.
              Acreditamos que planejar é um processo contínuo, sustentado por
              método, disciplina e revisões periódicas.
            </p>
            <ul className="mx-auto mt-[46px] lg:mx-0 flex max-w-[635px] flex-col gap-3 rounded-[20px] bg-mist p-5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-[30.4px] text-black"
                >
                  <span className="flex h-[30.4px] shrink-0 items-center">
                    <i className="fa-solid fa-circle-check text-[18px] text-[#0c4137]" />
                  </span>
                  <span className="flex-1 text-justify hyphens-auto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-[49px] flex flex-wrap items-center justify-center gap-[63px] lg:justify-start">
              <PillLink href="#contact">Começar agora</PillLink>
            </div>
          </div>
        </div>
      </div>

      {/* Dark card: alternates with the white About card above and the white Values card below. */}
      <div className="mt-[60px] rounded-[30px] bg-brand px-6 py-16 md:px-12 lg:py-[100px]">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">             
      
            <h3 className="mx-auto mt-3 max-w-[760px] font-heading text-3xl font-semibold leading-tight text-white md:text-[44px] md:leading-[54px]">
              A importância do Planejamento Financeiro e Patrimonial
            </h3>
          </div>

          <ul className="mt-12 grid grid-cols-2 justify-items-center gap-4 md:gap-6 lg:grid-cols-4">
            {counters.map((c) => (
              <li
                key={c.value}
                className="flex aspect-square w-full max-w-[312px] flex-col items-center justify-center rounded-full border border-white text-center"
              >
                <span className="whitespace-nowrap font-heading text-3xl font-medium leading-none text-lime sm:text-5xl xl:text-[64px]">
                  {c.value}
                </span>
                <span className="mt-3 max-w-[70%] font-heading text-xs font-medium leading-snug text-white/80 sm:text-base md:text-lg">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-white/65">
            Dados de Julho/2026.
          </p>
        </div>
      </div>
    </section>
  );
}
