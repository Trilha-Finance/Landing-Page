import { ChevronIcon } from "./icons";
import { SectionLabel } from "./chrome";

const FAQS = [
  {
    question: "O que a Trilha Finance faz?",
    answer:
      "Juntamos duas frentes: finanças tradicionais (planejamento financeiro e wealth planning) e tecnologia (desenvolvimento de software e blockchain).",
  },
  {
    question: "Vocês atendem pessoa física, empresas e o setor público?",
    answer:
      "Sim — trabalhamos com B2B, B2C e B2G, adaptando a linguagem e o escopo pra cada tipo de cliente.",
  },
  {
    question: "Vocês também desenvolvem software sob encomenda?",
    answer:
      "Sim, a frente de tecnologia cobre desenvolvimento de produtos digitais do primeiro protótipo à operação em produção.",
  },
  {
    question: "A Trilha atua com criptomoedas e blockchain?",
    answer:
      "Sim — é uma das nossas frentes principais, com conteúdo técnico e consultoria aplicada ao dia a dia, sem jargão desnecessário.",
  },
  {
    question: "Como faço pra começar?",
    answer:
      "É só chamar a gente pelo formulário de contato abaixo — a partir daí entendemos o seu caso e indicamos o próximo passo.",
  },
];

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-center lg:sticky lg:top-24 lg:self-start lg:text-left">
          <SectionLabel index="06" label="FAQ" className="text-center lg:text-left" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
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
