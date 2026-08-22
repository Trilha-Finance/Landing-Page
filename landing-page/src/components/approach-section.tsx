import { ChainIcon, WealthIcon } from "./icons";

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
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand-gold">
          Como atuamos
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Duas frentes, uma trilha só.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {APPROACH.map((column) => (
          <div
            key={column.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-brand-gold">
              <column.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
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
