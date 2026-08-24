import { BriefcaseIcon, BuildingIcon, CapIcon, CodeIcon, ArrowIcon } from "./icons";
import { SectionLabel } from "./chrome";

const SERVICES = [
  {
    icon: BriefcaseIcon,
    title: "Consultoria Financeira",
    description:
      "Planejamento financeiro e patrimonial sob medida, pra pessoas físicas e empresas.",
  },
  {
    icon: CodeIcon,
    title: "Desenvolvimento de Software",
    description:
      "Produtos digitais construídos do zero, do primeiro protótipo à operação em produção.",
  },
  {
    icon: CapIcon,
    title: "Treinamentos",
    description:
      "Educação financeira e tecnológica com linguagem acessível, pra equipes e pro público em geral.",
  },
  {
    icon: BuildingIcon,
    title: "Abertura de Empresas",
    description: "Estruturação e abertura de empresas com orientação de ponta a ponta.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="border-y border-border-line bg-bg-pure">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel index="03" label="Serviços" className="text-center" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Uma suíte de soluções pro seu negócio.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-border-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="group relative bg-bg-pure p-7">
              <span className="absolute right-6 top-6 text-text-secondary transition-colors group-hover:text-neon">
                <ArrowIcon className="h-4 w-4" />
              </span>
              <span className="flex h-14 w-14 items-center justify-center border border-border-line text-neon">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base uppercase leading-tight text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
