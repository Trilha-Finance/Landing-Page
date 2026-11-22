import Image from "next/image";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";
import { ServiceGroups, type ServiceGroup } from "./service-groups";

const services: { id: string; title: string; icon: string; description: string; groups: ServiceGroup[] }[] = [
  {
    id: "servico-planejamento",
    title: "Planejamento",
    icon: "fa-route",
    description:
      "Organizamos a sua vida financeira e patrimonial com uma visão integrada, do orçamento do dia a dia à sucessão, buscando eficiência tributária em cada decisão.",
    groups: [{ items: ["Financeiro", "Patrimonial", "Tributário", "Sucessório"] }],
  },
  {
    id: "servico-investimentos",
    title: "Investimentos",
    icon: "fa-chart-line",
    description:
      "Montamos uma carteira alinhada aos seus objetivos e ao seu perfil de risco, diversificada entre diferentes classes de ativos.",
    groups: [{ items: ["Ativos Financeiros", "Ativos Reais", "Ativos Digitais"] }],
  },
  {
    id: "servico-seguros",
    title: "Seguros e Proteções",
    icon: "fa-shield-heart",
    description:
      "Protegemos você, a sua família e a sua empresa contra imprevistos, com coberturas sob medida para cada fase da vida e do negócio.",
    groups: [
      {
        label: "Pessoa Física",
        items: [
          "Seguro de Vida",
          "Previdência Complementar",
          "Plano de Saúde",
          "Seguro Residencial",
          "Seguro Viagem",
          "Responsabilidade Civil Profissional",
          "Seguro Garantia",
        ],
      },
      {
        label: "Pessoa Jurídica",
        items: [
          "Plano de Saúde",
          "Plano Odontológico",
          "Responsabilidade Civil Profissional",
          "Seguro Empresarial",
          "Seguro de Vida em Grupo",
          "Seguro Garantia",
        ],
      },
    ],
  },
  {
    id: "servico-credito",
    title: "Crédito e Financiamento",
    icon: "fa-hand-holding-dollar",
    description:
      "Encontramos as linhas de crédito e financiamento mais adequadas para viabilizar os seus projetos pessoais e empresariais, com custo e prazo sob controle.",
    groups: [
      {
        label: "Pessoa Física e Jurídica",
        items: ["Consultoria em Linhas de Crédito", "Consultoria em Linhas de Financiamento"],
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="px-3 pt-[60px] md:px-5">
      <div className="relative isolate overflow-hidden rounded-[30px] bg-brand-teal">
        <Image
          src="/images/services/bg.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-teal from-40% to-[rgba(20,68,67,0.85)] to-64%" />
        <Image
          src="/images/services/glow.png"
          alt=""
          width={500}
          height={500}
          className="pointer-events-none absolute -left-5 -top-[60px] -z-10 size-[500px] object-cover"
        />

        <div className="px-5 pt-16 text-center md:px-10 md:pt-[100px]">
          <SectionBadge variant="dark">Nossos Serviços</SectionBadge>
          <RevealHeading
            text="Acompanhamento especializado para famílias e empresários em todas as etapas do planejamento financeiro"
            className="mx-auto mt-[3px] max-w-[1180px] font-heading text-4xl font-semibold leading-tight text-white md:text-[56px] md:leading-[67px]"
          />
        </div>

        <ul className="mt-[60px] grid gap-5 px-5 pb-[100px] md:grid-cols-2 md:px-10 xl:gap-[25px]">
          {services.map((s, i) => (
            <li
              key={s.title}
              id={s.id}
              className="scroll-mt-6 relative isolate flex flex-col overflow-hidden rounded-[30px] border border-white/20 p-8 transition-colors hover:bg-white/5 sm:p-10"
            >
              {/* Oversized faded icon as the card's visual. */}
              <i
                aria-hidden
                className={`fa-solid ${s.icon} pointer-events-none absolute -bottom-6 -right-6 -z-10 text-[180px] text-white/[0.04]`}
              />
              <div className="flex items-start justify-between">
                <span className="grid size-[68px] place-items-center rounded-full bg-lime text-[28px] text-brand">
                  <i className={`fa-solid ${s.icon}`} />
                </span>
                <span className="font-heading text-lg font-medium text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-2xl font-semibold leading-[33.6px] text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-[28px] text-[#c4c4c4]">{s.description}</p>

              <div className="mt-7 border-t border-white/15 pt-6">
                <ServiceGroups groups={s.groups} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
