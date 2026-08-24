import { ChainIcon, WealthIcon } from "./icons";
import { SectionLabel, SecondaryButton } from "./chrome";

const APPROACH = [
  {
    icon: WealthIcon,
    title: "Finanças tradicionais",
    items: [
      "Planejamento financeiro pessoal e empresarial",
      "Wealth planning e evolução pro planejamento patrimonial",
      "Educação financeira com linguagem acessível",
    ],
  },
  {
    icon: ChainIcon,
    title: "Tecnologia & Web3",
    items: [
      "Desenvolvimento de software sob demanda",
      "Consultoria em blockchain e finanças descentralizadas",
      "Conteúdo técnico aplicado ao dia a dia",
    ],
  },
];

export function ApproachSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <SectionLabel index="02" label="Como atuamos" />
          <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Duas frentes, uma trilha só.
          </h2>
        </div>
        <SecondaryButton href="#servicos">Ver serviços</SecondaryButton>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px bg-border-line md:grid-cols-2">
        {APPROACH.map((column) => (
          <div key={column.title} className="bg-bg-base p-8">
            <span className="flex h-11 w-11 items-center justify-center border border-border-line text-neon">
              <column.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] font-medium text-xl uppercase text-text-primary">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-neon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
