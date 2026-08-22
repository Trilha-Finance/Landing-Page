import { BriefcaseIcon, BuildingIcon, CapIcon, CodeIcon } from "./icons";

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
    <section id="servicos" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
            Serviços
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Uma suíte de soluções pro seu negócio.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-brand-gold">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
