import Image from "next/image";
import { ArrowIcon } from "./icons";
import { SectionLabel } from "./chrome";
import desenvolvimentoSoftware from "../assets/services/desenvolvimento-software.png";
import automacao from "../assets/services/automacao.png";
import inteligenciaArtificial from "../assets/services/inteligencia-artificial.png";
import integracoes from "../assets/services/integracoes.jpg";
import tecnologia from "../assets/services/tecnologia.jpg";

const SERVICES = [
  {
    image: desenvolvimentoSoftware,
    title: "Desenvolvimento de Software",
    description:
      "Produtos digitais sob medida pro seu negócio, do primeiro protótipo à operação estável em produção.",
  },
  {
    image: automacao,
    title: "Automação",
    description:
      "Tarefas repetitivas viram fluxos automáticos — menos retrabalho, menos erro manual, mais tempo livre.",
  },
  {
    image: inteligenciaArtificial,
    title: "Inteligência Artificial",
    description:
      "IA aplicada de verdade: lê dados, acelera decisões e abre caminho pra soluções que antes eram inviáveis.",
  },
  {
    image: integracoes,
    title: "Integrações",
    description:
      "Sistemas, APIs e ferramentas conectados entre si — chega de planilha solta e retrabalho manual.",
  },
  {
    image: tecnologia,
    title: "Tecnologia",
    description:
      "Consultoria técnica de ponta a ponta pra escolher, construir e manter a stack certa pro seu momento.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="border-y border-border-line bg-bg-pure">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel index="03" label="Serviços" className="text-center" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Uma suíte de soluções pro seu negócio.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-border-line sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <div key={service.title} className="group relative flex flex-col items-center bg-bg-pure p-7 text-center">
              <span className="absolute right-6 top-6 z-10 text-text-secondary transition-colors group-hover:text-neon">
                <ArrowIcon className="h-4 w-4" />
              </span>
              <div className="relative mx-auto h-60 w-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`Ilustração wireframe — ${service.title}`}
                  fill
                  className="object-cover"
                />
                <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-neon" />
                <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-neon" />
                <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-neon" />
                <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-neon" />
              </div>
              <h3 className="mt-5 text-center font-[family-name:var(--font-display)] font-medium text-base uppercase leading-tight text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-center text-sm leading-6 text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
