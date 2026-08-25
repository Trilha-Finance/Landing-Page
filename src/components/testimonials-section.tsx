import Image from "next/image";

import { SectionLabel } from "./chrome";

type Testimonial = {
  name: string;
  handle: string;
  quote: string;
  avatarId: number;
};

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    name: "Marina Alves",
    handle: "@marina.alves",
    quote:
      "Entregaram o sistema no prazo e ainda documentaram tudo pra gente dar manutenção sozinho.",
    avatarId: 1,
  },
  {
    name: "Rafael Souza",
    handle: "@rafaelsouza",
    quote:
      "Automatizaram um processo que consumia dois dias do financeiro todo mês. Ganhamos tempo.",
    avatarId: 2,
  },
  {
    name: "Juliana Costa",
    handle: "@ju.costa",
    quote:
      "O modelo de IA passou a sinalizar risco de inadimplência antes da gente perceber no olho.",
    avatarId: 3,
  },
  {
    name: "Pedro Henrique Lima",
    handle: "@pedrohlima",
    quote:
      "Integração com nosso ERP foi tranquila, time técnico resolveu tudo sem enrolar a gente.",
    avatarId: 4,
  },
  {
    name: "Camila Ferreira",
    handle: "@camila.ferreira",
    quote:
      "Consultoria técnica clara sobre blockchain, sem promessa vazia de token milagroso.",
    avatarId: 5,
  },
  {
    name: "Bruno Martins",
    handle: "@brunomartins",
    quote:
      "O dashboard que construíram virou ferramenta essencial pro nosso financeiro no dia a dia.",
    avatarId: 6,
  },
  {
    name: "Larissa Rocha",
    handle: "@larocha",
    quote:
      "Arquitetura pensada pra escalar mesmo, não é só um MVP jogado em produção às pressas.",
    avatarId: 7,
  },
  {
    name: "Thiago Almeida",
    handle: "@thiago.almeida",
    quote:
      "Tarefa que era manual toda semana agora roda sozinha, sem ninguém precisar lembrar.",
    avatarId: 8,
  },
  {
    name: "Fernanda Ribeiro",
    handle: "@feribeiro",
    quote:
      "IA aplicada de verdade: nossos relatórios saíram de reativos pra preditivos em semanas.",
    avatarId: 9,
  },
  {
    name: "Diego Carvalho",
    handle: "@diegocarvalho",
    quote:
      "Sistemas que não se falavam agora trocam dado sozinhos, sem planilha solta no meio.",
    avatarId: 10,
  },
  {
    name: "Beatriz Nunes",
    handle: "@bia.nunes",
    quote:
      "Escolheram a stack Web3 certa pro nosso caso, nada de tecnologia por modismo.",
    avatarId: 11,
  },
  {
    name: "Gustavo Pereira",
    handle: "@gpereira",
    quote:
      "Hoje eu reviso meu indicador todo mês sozinho, o painel deixou tudo visual e claro.",
    avatarId: 12,
  },
  {
    name: "Aline Barbosa",
    handle: "@alinebarbosa",
    quote:
      "Código bem estruturado, testes cobrindo o essencial, dá pra confiar no que foi entregue.",
    avatarId: 13,
  },
  {
    name: "Rodrigo Teixeira",
    handle: "@rodrigo.tx",
    quote:
      "Reduzimos custo operacional depois que automatizaram os relatórios financeiros.",
    avatarId: 14,
  },
  {
    name: "Patrícia Gomes",
    handle: "@paty.gomes",
    quote:
      "Reduzimos horas de análise manual depois que a IA passou a triar os dados pra gente.",
    avatarId: 15,
  },
  {
    name: "Lucas Cardoso",
    handle: "@lucascardoso",
    quote:
      "Conectaram nosso CRM ao financeiro e acabou o retrabalho de lançar tudo duas vezes.",
    avatarId: 16,
  },
  {
    name: "Vanessa Duarte",
    handle: "@vanessa.duarte",
    quote:
      "Explicaram contrato inteligente de um jeito que até quem não é dev entendeu o risco.",
    avatarId: 17,
  },
  {
    name: "Felipe Araújo",
    handle: "@felipearaujo",
    quote:
      "Transformaram dado bruto disperso em relatório único que a diretoria realmente usa.",
    avatarId: 18,
  },
  {
    name: "Renata Moura",
    handle: "@re.moura",
    quote:
      "Migraram nosso legado sem downtime nenhum. Time muito sólido tecnicamente, sem drama.",
    avatarId: 19,
  },
  {
    name: "Eduardo Castro",
    handle: "@educastro",
    quote:
      "Fluxo que exigia três pessoas hoje roda automático, sem erro de digitação.",
    avatarId: 20,
  },
  {
    name: "Simone Batista",
    handle: "@simonebatista",
    quote:
      "Consegui automatizar a leitura de contrato com IA, coisa que levava horas.",
    avatarId: 21,
  },
  {
    name: "Marcelo Nogueira",
    handle: "@marcelo.nog",
    quote:
      "APIs entregues bem documentadas, qualquer time novo consegue integrar sem dor de cabeça.",
    avatarId: 22,
  },
  {
    name: "Priscila Freitas",
    handle: "@prifreitas",
    quote:
      "Arquitetura descentralizada bem pensada, sem sacrificar a experiência do usuário final.",
    avatarId: 23,
  },
  {
    name: "André Mendes",
    handle: "@andremendes",
    quote:
      "Consegui enxergar padrão de gasto que a planilha nunca deixou claro antes.",
    avatarId: 24,
  },
  {
    name: "Débora Vieira",
    handle: "@debora.vieira",
    quote:
      "O time de desenvolvimento entendeu o negócio antes de escrever a primeira linha de código.",
    avatarId: 25,
  },
];

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    name: "Vinícius Correia",
    handle: "@vini.correia",
    quote:
      "Deixamos de perder tempo copiando dado de planilha, o fluxo automatizado resolve tudo.",
    avatarId: 26,
  },
  {
    name: "Tatiane Farias",
    handle: "@tatifarias",
    quote:
      "A IA identificou padrão de gasto que nenhum relatório manual tinha mostrado antes.",
    avatarId: 27,
  },
  {
    name: "Leonardo Pinto",
    handle: "@leopinto",
    quote:
      "Unificaram quatro ferramentas diferentes numa única fonte de verdade pra gente.",
    avatarId: 28,
  },
  {
    name: "Isabela Ramos",
    handle: "@isa.ramos",
    quote:
      "Auditoria do smart contract pegou uma falha que a gente nem imaginava que existia.",
    avatarId: 29,
  },
  {
    name: "Caio Monteiro",
    handle: "@caiomonteiro",
    quote:
      "Painel de indicadores em tempo real mudou como a gente toma decisão toda semana.",
    avatarId: 30,
  },
  {
    name: "Natália Dias",
    handle: "@nat.dias",
    quote:
      "Modernizaram nosso sistema legado sem parar a operação nenhum dia sequer.",
    avatarId: 31,
  },
  {
    name: "Rafael Tavares",
    handle: "@rafatavares",
    quote:
      "Time entregou exatamente o que foi combinado no escopo, sem susto de última hora.",
    avatarId: 32,
  },
  {
    name: "Amanda Cunha",
    handle: "@amandacunha",
    quote:
      "Depois da consultoria, comecei a usar IA no dia a dia sem medo de errar a mão.",
    avatarId: 33,
  },
  {
    name: "Gabriel Xavier",
    handle: "@gabrielxavier",
    quote:
      "Chega de exportar e importar planilha entre sistema, agora tudo conversa direto.",
    avatarId: 34,
  },
  {
    name: "Letícia Borges",
    handle: "@le.borges",
    quote:
      "Consultoria de ponta a ponta pra escolher a stack certa pro nosso momento na Web3.",
    avatarId: 35,
  },
  {
    name: "Henrique Campos",
    handle: "@henriquecampos",
    quote:
      "Cruzar os dados de vendas com o financeiro virou questão de um clique, não de um dia.",
    avatarId: 36,
  },
  {
    name: "Carolina Azevedo",
    handle: "@carol.azevedo",
    quote:
      "Site novo ficou rápido e fácil de manter, e o time ainda ensinou a gente a mexer nele.",
    avatarId: 37,
  },
  {
    name: "Márcio Reis",
    handle: "@marcioreis",
    quote:
      "Prazo cumprido à risca e o time ainda sugeriu melhorias que a gente nem tinha pensado.",
    avatarId: 38,
  },
  {
    name: "Fabiana Lopes",
    handle: "@fabi.lopes",
    quote:
      "O assistente que eles construíram responde dúvida de cliente antes de precisar de humano.",
    avatarId: 39,
  },
  {
    name: "Otávio Bezerra",
    handle: "@otaviobezerra",
    quote:
      "Suporte ágil depois do go-live, resolveram cada ajuste fino sem burocracia nenhuma.",
    avatarId: 40,
  },
  {
    name: "Sabrina Fonseca",
    handle: "@sabrina.fonseca",
    quote:
      "Time técnico dominou tanto a parte on-chain quanto a integração com o sistema legado.",
    avatarId: 41,
  },
  {
    name: "Rogério Macedo",
    handle: "@rogeriomacedo",
    quote:
      "Métricas que antes levavam dias pra compilar agora aparecem atualizadas na hora.",
    avatarId: 42,
  },
  {
    name: "Yasmin Peixoto",
    handle: "@yas.peixoto",
    quote:
      "Plataforma entregue robusta, já aguentou pico de acesso sem cair uma vez sequer.",
    avatarId: 43,
  },
  {
    name: "Alexandre Sales",
    handle: "@alexsales",
    quote:
      "Suporte técnico rápido sempre que precisamos ajustar alguma coisa depois do lançamento.",
    avatarId: 44,
  },
  {
    name: "Cíntia Andrade",
    handle: "@cintia.andrade",
    quote:
      "Time explicou cada decisão do modelo, nada de caixa-preta sem explicação.",
    avatarId: 45,
  },
  {
    name: "Danilo Guimarães",
    handle: "@daniloguima",
    quote:
      "Comunicação durante o projeto foi impecável, sempre sabíamos em que pé estava.",
    avatarId: 46,
  },
  {
    name: "Elaine Siqueira",
    handle: "@elaine.siq",
    quote:
      "Reorganizei minha estratégia de ativos digitais com muito mais segurança depois da consultoria.",
    avatarId: 47,
  },
  {
    name: "Fábio Cavalcanti",
    handle: "@fabiocavalcanti",
    quote:
      "Time estruturou nossa base de dados antes de montar qualquer gráfico bonito.",
    avatarId: 48,
  },
  {
    name: "Giovanna Portela",
    handle: "@gi.portela",
    quote:
      "Profissionalismo raro: código limpo, prazos cumpridos e suporte pós-entrega de verdade.",
    avatarId: 49,
  },
  {
    name: "Hugo Marinho",
    handle: "@hugomarinho",
    quote:
      "Relatório que era montado manual toda sexta agora é gerado automático e mais confiável.",
    avatarId: 50,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col gap-4 border border-border-line bg-bg-pure p-6 sm:w-[400px]">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-border-line">
          <Image
            src={`https://api.dicebear.com/9.x/bottts-neutral/png?seed=${testimonial.avatarId}&size=96&backgroundColor=f4f4f2`}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-[family-name:var(--font-display)] font-medium text-sm text-text-primary">
            {testimonial.name}
          </p>
          <p className="truncate font-[family-name:var(--font-mono)] text-xs text-text-secondary">
            {testimonial.handle}
          </p>
        </div>
      </div>
      <p className="text-sm leading-6 text-text-secondary">{testimonial.quote}</p>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  reverse = false,
}: {
  testimonials: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max animate-cybr-marquee items-stretch gap-6 hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: "90s" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.handle}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full border-y border-border-line bg-bg-base py-20">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-8 lg:px-10">
        <SectionLabel index="04" label="Depoimentos" className="text-center" />
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-bold text-3xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-4xl">
          Quem já andou a trilha com a gente.
        </h2>
        <p className="mt-4 text-sm text-text-secondary">
          Depoimentos simulados — ilustram o formato da seção e serão substituídos por relatos
          reais assim que os primeiros cases forem publicados.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <MarqueeRow testimonials={TESTIMONIALS_ROW_1} />
        <MarqueeRow testimonials={TESTIMONIALS_ROW_2} reverse />
      </div>
    </section>
  );
}
