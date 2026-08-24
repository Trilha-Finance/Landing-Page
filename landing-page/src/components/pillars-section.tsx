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
    <section className="border-b border-border-line">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:px-8 md:grid-cols-3 lg:px-10">
        {PILLARS.map((pillar, i) => (
          <div key={pillar.title} className="flex flex-col items-start gap-4 border-l border-border-line pl-6">
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-neon">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-11 w-11 items-center justify-center border border-border-line text-neon">
              <pillar.icon className="h-5 w-5" />
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-base uppercase leading-tight text-text-primary">
              {pillar.title}
            </h3>
            <p className="text-sm leading-6 text-text-secondary">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
