import { ChevronIcon } from "./icons";
import { SectionLabel } from "./chrome";

const FAQS = [
  {
    question: "O que a Trilha Finance faz?",
    answer:
      "Somos uma software house com consultoria e educação em tecnologia: desenvolvimento de software, automação, IA, integrações, dados & analytics e blockchain/Web3 — além de treinamentos pra capacitar o time interno do cliente.",
  },
  {
    question: "Que tipo de empresa vocês atendem?",
    answer:
      "Atendemos empresas de diferentes portes e segmentos, de startups e pequenos negócios a empresas de médio e grande porte. Adaptamos a solução ao objetivo e ao nível de maturidade tecnológica de cada cliente.",
  },
  {
    question: "Como funciona o processo, do primeiro contato até a entrega?",
    answer:
      "Começa com uma conversa pra entender o problema e os objetivos do projeto. Depois fazemos o diagnóstico e definimos escopo, prioridades, tecnologias, cronograma e investimento. Com a proposta aprovada, entramos em desenvolvimento — mantendo você atualizado a cada etapa — até os testes, validação e entrega final.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Cada projeto é avaliado individualmente. Depois de entender as necessidades e o escopo, montamos uma proposta personalizada considerando complexidade, funcionalidades, tecnologias, prazo e recursos necessários.",
  },
  {
    question: "Quais as condições de pagamento?",
    answer:
      "Definimos de acordo com o escopo e o modelo do projeto — pode ser por etapas, projeto fechado ou recorrente, conforme o que fizer mais sentido pro seu caso.",
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende da complexidade e da quantidade de funcionalidades. Projetos menores saem em algumas semanas; soluções mais robustas podem levar alguns meses. Depois do diagnóstico, você recebe um cronograma estimado.",
  },
  {
    question: "Tem suporte depois que o projeto é entregue?",
    answer:
      "Sim. Depois da entrega, oferecemos suporte técnico, manutenção, correções, atualizações e evolução contínua — o modelo é combinado de acordo com a necessidade de cada cliente.",
  },
  {
    question: "Posso acompanhar o projeto e pedir ajustes durante o desenvolvimento?",
    answer:
      "Sim. Mantemos etapas de validação ao longo do desenvolvimento pra você acompanhar e dar feedback. Ajustes dentro do escopo combinado entram no projeto normalmente; mudanças que ampliem bastante o escopo são avaliadas à parte.",
  },
  {
    question: "Como funcionam os treinamentos e capacitações?",
    answer:
      "Além dos projetos, também ensinamos: cursos, workshops e capacitação sob medida pra quando o time interno do cliente precisa aprender a andar sozinho.",
  },
  {
    question: "Como faço pra começar?",
    answer:
      "É só chamar a gente pelo formulário de contato e contar sua ideia, problema ou necessidade. A gente analisa, entende os objetivos e indica os próximos passos — que costuma incluir uma reunião de descoberta e uma proposta personalizada.",
  },
];

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-center lg:sticky lg:top-24 lg:self-start lg:text-left">
          <SectionLabel index="06" label="FAQ" className="text-center lg:text-left" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
            Tem dúvidas? Relaxa, a gente responde.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-text-secondary lg:mx-0">
            Selecionamos algumas dúvidas frequentes pra você entender rapidinho como a
            Trilha pode ajudar.
          </p>
        </div>

        <div className="space-y-px bg-border-line">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group bg-bg-base px-6 py-5 open:bg-bg-pure">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-text-primary marker:content-none">
                {faq.question}
                <ChevronIcon className="h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180 group-open:text-neon" />
              </summary>
              <p className="mt-4 text-sm leading-6 text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
