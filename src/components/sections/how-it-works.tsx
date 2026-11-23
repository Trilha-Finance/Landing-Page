import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Começamos com uma conversa para entender seus objetivos, mapear seu patrimônio e definir seu perfil de risco.",
    icon: "fa-magnifying-glass-chart",
    circle: "bg-brand text-lime",
  },
  {
    number: "02",
    title: "Formalização",
    text: "Apresentamos a proposta com o escopo e as condições do trabalho e, com tudo alinhado, formalizamos a nossa parceria em contrato.",
    icon: "fa-file-contract",
    circle: "bg-lime text-brand",
  },
  {
    number: "03",
    title: "Implementação",
    text: "Montamos o seu planejamento e o colocamos em prática. Do diagnóstico ao acompanhamento",
    icon: "fa-handshake",
    circle: "bg-brand text-lime",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Revisamos o plano periodicamente e ajustamos a rota sempre que a sua vida ou seus objetivos mudarem.",
    icon: "fa-arrows-rotate",
    circle: "bg-lime text-brand",
  },
];

export function HowItWorks() {
  return (
    <section id="como-atuamos" className="px-3 pt-[60px] md:px-5">
      <div className="rounded-[30px] bg-white px-6 py-[100px] lg:pb-[120px]">
        <div className="text-center">
          <SectionBadge>Como Funciona</SectionBadge>
          <RevealHeading
            text="Um caminho claro, do primeiro encontro a cada revisão do seu plano"
            className="mx-auto mt-[3px] max-w-[820px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
          />
        </div>

        <ol className="mx-auto mt-[60px] grid max-w-[1320px] gap-14 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.number} className="relative flex flex-col items-center text-center">
              {/* Runs from past this step's number badge to just before the next circle (24px column gap). */}
              {i < steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[calc(50%+130px)] top-[84px] hidden h-3 w-[calc(100%-206px)] max-w-[190px] items-center text-brand/60 xl:flex"
                >
                  <span className="flex-1 border-t-2 border-dashed border-current" />
                  <i className="fa-solid fa-chevron-right -ml-1.5 text-xs" />
                </span>
              ) : null}
              <div className={`relative grid size-[180px] place-items-center rounded-[90px] ${step.circle}`}>
                <i aria-hidden className={`fa-solid ${step.icon} text-[60px]`} />
                <span className="absolute -right-[30px] bottom-2.5 grid size-[70px] place-items-center rounded-[35px] bg-white font-body text-[22px] font-bold text-brand-deep drop-shadow-[5px_5px_6px_rgba(0,0,0,0.05)]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-[29px] font-heading text-2xl font-semibold leading-[33.6px] text-brand-deep">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[300px] text-base leading-[30.4px] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
