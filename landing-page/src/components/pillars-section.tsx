import { ChainIcon, CodeIcon, WealthIcon } from "./icons";

const PILLARS = [
  {
    icon: WealthIcon,
    title: "Planejamento Financeiro & Wealth",
    description:
      "Organize hoje, construa patrimônio pro futuro — com certificação ANBIMA/CPA-10 por trás.",
  },
  {
    icon: CodeIcon,
    title: "Desenvolvimento de Software",
    description:
      "Produtos digitais sob medida, do primeiro protótipo à operação em produção.",
  },
  {
    icon: ChainIcon,
    title: "Blockchain & Web3",
    description:
      "Tecnologia descentralizada explicada e aplicada, sem jargão desnecessário.",
  },
];

export function PillarsSection() {
  return (
    <section className="border-y border-white/10">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:px-8 md:grid-cols-3 lg:px-10">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="flex flex-col items-start gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-brand-gold">
              <pillar.icon className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="text-sm leading-6 text-white/60">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
