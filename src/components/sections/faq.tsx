"use client";

import { useState, type ReactNode } from "react";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "O que é a Trilha Finance e como ela pode ajudar?",
    a: "A Trilha Finance é uma empresa de planejamento financeiro e patrimonial. O trabalho consiste em entender os objetivos de cada cliente, mapear o patrimônio e construir, em conjunto, um plano para chegar aonde se deseja. O atendimento abrange pessoas físicas, famílias e empresas, com remuneração prioritariamente fixa, para que as recomendações sejam guiadas pelos interesses do cliente.",
  },
  {
    q: "A Trilha Finance está vinculada a bancos, corretoras ou gestoras de investimentos?",
    a: "Não. A Trilha Finance é independente e atua sem vínculo com instituições financeiras, sem metas de venda de produtos e sem conflito de interesses.",
  },
  {
    q: "A consulta de diagnóstico é gratuita?",
    a: "Sim. A primeira reunião de diagnóstico é gratuita e sem compromisso. Nela, são levantados os objetivos do cliente, mapeado o patrimônio e definido o perfil de risco. Assim, é possível você conhecer a forma de trabalho da Trilha Finance e obter mais clareza sobre a situação atual antes de decidir seguir com o planejamento.",
  },
  {
    q: "Qual é o investimento para contratar a consultoria e o planejamento financeiro?",
    a: "O valor depende dos serviços contratados e da complexidade de cada caso. A Trilha Finance trabalha no modelo fee based: a remuneração é prioritariamente fixa, podendo ser mista, e definida de acordo com o escopo do trabalho. Dessa forma, o investimento é conhecido de antemão, e as recomendações seguem os objetivos do cliente, e não a venda de produtos. Na reunião de diagnóstico, que é gratuita, a necessidade é avaliada e é apresentada a proposta mais adequada ao perfil.",
  },
  {
    q: "Para quem já tem familiaridade com o mercado e com os produtos financeiros, o que a Trilha Finance pode agregar?",
    a: "Conhecer o mercado é um ótimo ponto de partida, mas o planejamento vai além da escolha de produtos: ele organiza o patrimônio em torno dos objetivos e do perfil de risco, com uma visão independente. A reunião de diagnóstico, gratuita, permite avaliar isso sem compromisso.",
  },
  {
    q: "O planejamento financeiro também é indicado para quem tem pouco patrimônio e pouco dinheiro para investir?",
    a: "Pode ser, e o ponto de partida é a reunião de diagnóstico, que é gratuita. Planejar não depende do tamanho do patrimônio: depende de ter objetivos e querer organizar a vida financeira para alcançá-los. Quem está começando costuma ter ainda mais a ganhar, pois define o caminho desde o início. Como o valor do trabalho varia conforme os serviços contratados, a avaliação sobre se faz sentido naquele momento é feita em conjunto, de forma honesta.",
  },
  {
    q: "O planejamento financeiro é indicado para quem sente desconforto em falar sobre dinheiro, dívidas e patrimônio?",
    a: "Sim, e esse sentimento é mais comum do que parece. Falar sobre dinheiro envolve valores, histórias e expectativas pessoais, e não é fácil para muita gente. Na Trilha Finance, a conversa acontece sem julgamentos, no ritmo de cada pessoa e com sigilo, e só é compartilhado o que o cliente se sentir confortável em contar. A reunião de diagnóstico, que é gratuita, permite conhecer a forma de trabalho e decidir, sem compromisso, se faz sentido seguir.",
  },
  {
    q: "Como funciona o pagamento dos serviços da Trilha Finance?",
    a: "O pagamento pode ser feito por PIX, transferência bancária, boleto bancário, cartão de crédito ou cartão de débito. O valor e a forma de cobrança seguem o modelo fee based, prioritariamente fixo, podendo ser misto, e são definidos de acordo com os serviços contratados. Todas as condições são apresentadas antes da contratação, para que não haja surpresas.",
  },
  {
    q: "É possível cancelar o serviço em caso de insatisfação?",
    a: "Sim. A permanência deve acontecer porque o trabalho faz sentido para o cliente, e não por obrigação. Por isso, não existe prazo mínimo de permanência. Para encerrar o vínculo, basta avisar com 30 dias de antecedência, prazo que permite concluir as atividades em andamento e fazer a transição com tranquilidade.",
  },
  {
    q: "Como esclarecer uma dúvida que não está no FAQ antes de agendar a reunião de diagnóstico?",
    a: (
      <>
        Basta enviar a dúvida para{" "}
        <a href="mailto:contato@trilhafinance.com.br" className="font-medium text-brand-deep underline">
          contato@trilhafinance.com.br
        </a>
        , com o assunto &ldquo;dúvida prévia&rdquo;. As respostas são enviadas em até dois dias úteis, sem
        compromisso, para que a decisão sobre agendar a reunião de diagnóstico seja tomada com tranquilidade.
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="px-3 pb-12 pt-[60px] md:px-5 md:pb-10">
      <div className="rounded-[30px] bg-white px-4 pb-20 pt-16 sm:px-8 md:pb-[140px] md:pt-[120px]">
        <div className="mx-auto flex max-w-[880px] flex-col items-center gap-10 md:gap-14">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Dúvidas</SectionBadge>
            <RevealHeading
              text="Perguntas frequentes"
              className="mt-[3px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
            />
          </div>

          <ul className="w-full">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-[#e5e5e5]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-lg font-semibold text-brand-deep md:py-[22px] md:text-xl"
                  >
                    {item.q}
                    <i className={`fa-solid fa-plus shrink-0 text-sm transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden text-base leading-[25.6px] text-muted">
                      <span className="block pb-6">{item.a}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
