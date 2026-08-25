import { BriefcaseIcon, CapIcon, CodeIcon } from "./icons";
import { SectionLabel } from "./chrome";

const PILLARS = [
  {
    icon: CodeIcon,
    title: "Software House",
    description:
      "Do primeiro protótipo à operação em produção — software sob medida pro seu negócio.",
  },
  {
    icon: BriefcaseIcon,
    title: "Consultoria em Tecnologia",
    description:
      "IA, automação, integrações e blockchain aplicados com direção técnica clara, não só ferramentas soltas.",
  },
  {
    icon: CapIcon,
    title: "Educação em Tecnologia",
    description:
      "Cursos, workshops e capacitação sob medida pro seu time aprender a andar sozinho.",
  },
];

export function PillarsSection() {
  return (
    <section className="border-b border-border-line">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel index="01" label="Pilares" className="text-center" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Construímos, orientamos e ensinamos tecnologia.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="flex flex-col items-start gap-4 border-l border-border-line pl-6">
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-neon">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center border border-border-line text-neon">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-medium text-base uppercase leading-tight text-text-primary">
                {pillar.title}
              </h3>
              <p className="text-sm leading-6 text-text-secondary">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
