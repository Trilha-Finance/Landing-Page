import {
  ClipboardIcon,
  CodeIcon,
  HeadsetIcon,
  PackageIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "./icons";
import { SectionLabel } from "./chrome";

const APPROACH = [
  {
    icon: SearchIcon,
    title: "Descoberta",
    description:
      "Mergulhamos no seu negócio antes de propor qualquer solução — contexto, dores reais e prioridades, sem achismo.",
  },
  {
    icon: ClipboardIcon,
    title: "Planejamento",
    description:
      "Escopo, arquitetura e prioridades no papel antes da primeira linha de código — cada etapa sabe pra onde vai.",
  },
  {
    icon: CodeIcon,
    title: "Desenvolvimento",
    description:
      "Construção com boas práticas e comunicação constante — sem caixa-preta entre você e o time técnico.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Validação",
    description:
      "Teste, revisão e ajuste fino em cada entrega — bug em produção não entra no plano.",
  },
  {
    icon: PackageIcon,
    title: "Entrega",
    description:
      "Deploy estável, documentado e pronto pra operação — sem susto no dia de virar a chave.",
  },
  {
    icon: HeadsetIcon,
    title: "Suporte",
    description:
      "Acompanhamento depois do lançamento — manutenção, evolução e alguém pra chamar quando precisar.",
  },
];

export function ApproachSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel index="02" label="Como atuamos" className="text-center" />
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
          Do papel à operação, passo a passo.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px bg-border-line sm:grid-cols-2 lg:grid-cols-3">
        {APPROACH.map((step, i) => (
          <div key={step.title} className="bg-bg-base p-8">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center border border-border-line text-neon">
                <step.icon className="h-5 w-5" />
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-secondary">
                /{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-display)] font-medium text-xl uppercase text-text-primary">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
