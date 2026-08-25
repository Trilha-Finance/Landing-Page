import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "../../components/navbar";
import { FooterSection } from "../../components/footer-section";
import { SectionLabel } from "../../components/chrome";

export const metadata: Metadata = {
  title: "Política de Privacidade | Trilha Finance",
  description:
    "Como a Trilha Finance coleta, usa, armazena e protege dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
};

function PolicySection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-border-line py-10 first:pt-0 last:border-b-0">
      <SectionLabel index={index} label="Política" className="mb-3" />
      <h2 className="font-[family-name:var(--font-display)] font-bold text-xl uppercase tracking-tight text-text-primary sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function Fill({ children }: { children: ReactNode }) {
  return (
    <span className="border border-dashed border-neon/50 bg-neon/5 px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.85em] text-neon">
      [PREENCHER: {children}]
    </span>
  );
}

const DATA_TABLE = [
  {
    dado: "Nome completo",
    meio: "Formulário de contato",
    finalidade: "Identificar quem entrou em contato e endereçar a resposta corretamente.",
    base: "Consentimento (art. 7º, I) / execução de procedimentos preliminares a contrato (art. 7º, V)",
    retencao: <Fill>prazo de retenção — ex: até 24 meses após o último contato</Fill>,
  },
  {
    dado: "E-mail",
    meio: "Formulário de contato e formulário de newsletter",
    finalidade: "Responder solicitações, enviar propostas e, mediante opt-in separado, enviar a newsletter.",
    base: "Consentimento (art. 7º, I)",
    retencao: <Fill>prazo de retenção — ex: até revogação do consentimento</Fill>,
  },
  {
    dado: "Telefone",
    meio: "Formulário de contato",
    finalidade: "Contato direto para tratativas comerciais quando o e-mail não é suficiente.",
    base: "Consentimento (art. 7º, I)",
    retencao: <Fill>prazo de retenção — ex: até 24 meses após o último contato</Fill>,
  },
  {
    dado: "Assunto e mensagem",
    meio: "Formulário de contato",
    finalidade: "Entender a demanda e direcioná-la à equipe correta.",
    base: "Consentimento (art. 7º, I) / execução de procedimentos preliminares a contrato (art. 7º, V)",
    retencao: <Fill>prazo de retenção — ex: até 24 meses após o último contato</Fill>,
  },
  {
    dado: "Dados de navegação (endereço IP, dispositivo, páginas visitadas, tempo de sessão)",
    meio: "Cookies de analytics (ex: Google Analytics) — apenas se você consentir",
    finalidade: "Entender como o site é usado, de forma agregada, para melhorar conteúdo e experiência.",
    base: "Consentimento (art. 7º, I)",
    retencao: <Fill>prazo de retenção do provedor de analytics — ex: 14 meses (padrão GA4)</Fill>,
  },
  {
    dado: "Identificadores de publicidade / interações com anúncios",
    meio: "Cookies/pixels de marketing (ex: pixels de ads) — apenas se você consentir",
    finalidade: "Mensurar campanhas e personalizar anúncios em plataformas de terceiros.",
    base: "Consentimento (art. 7º, I)",
    retencao: <Fill>prazo de retenção do provedor de ads — ver política do próprio terceiro</Fill>,
  },
  {
    dado: "Logs técnicos de acesso (IP, data/hora, user agent)",
    meio: "Coleta automática pela infraestrutura de hospedagem do site",
    finalidade: "Segurança, prevenção a fraude e obrigação legal de guarda de registros (Marco Civil da Internet).",
    base: "Cumprimento de obrigação legal (art. 7º, II)",
    retencao: <Fill>prazo de retenção — mínimo 6 meses conforme Marco Civil (Lei 12.965/2014, art. 15)</Fill>,
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="w-full bg-bg-base text-text-primary">
      <Navbar />

      <section className="border-b border-border-line bg-bg-pure">
        <div className="mx-auto w-full max-w-[880px] px-6 py-16 sm:px-8 sm:py-20">
          <SectionLabel index="00" label="Legal" />
          <h1 className="mt-4 font-[family-name:var(--font-display)] font-bold text-4xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
            Esta política explica quais dados pessoais a Trilha Finance coleta, por
            quê, por quanto tempo e com quem compartilha, além de como você pode
            exercer seus direitos sob a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018 — LGPD).
          </p>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-secondary">
            Última atualização: <Fill>data de publicação — DD/MM/AAAA</Fill> · Versão 1.0
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[880px] px-6 py-4 sm:px-8">
        <PolicySection index="01" title="Quem somos (controlador dos dados)">
          <p>
            A Trilha Finance (<Fill>razão social completa</Fill>, CNPJ
            67.235.921/0001-04) é a controladora dos dados pessoais tratados por meio
            deste site, nos termos do art. 5º, VI, da LGPD.
          </p>
          <p>
            Somos uma software house com consultoria e educação em tecnologia:
            desenvolvimento de software, inteligência artificial, integrações, dados
            &amp; analytics, automação e blockchain/Web3 — oferecidos via consultoria,
            cursos, workshops, capacitação e suporte/manutenção contínua.
          </p>
        </PolicySection>

        <PolicySection index="02" title="Quais dados coletamos e por qual meio">
          <p>
            Coletamos dados por três meios: (i) o que você digita voluntariamente em
            nossos formulários (contato e newsletter); (ii) cookies e tecnologias
            semelhantes, quando você consente; e (iii) dados técnicos coletados
            automaticamente pela infraestrutura que hospeda o site. A tabela abaixo
            detalha cada dado, sua finalidade, base legal e prazo de retenção.
          </p>
        </PolicySection>

        <section className="border-b border-border-line py-10">
          <div className="overflow-x-auto border border-border-line">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border-line bg-bg-pure">
                  <th className="border-r border-border-line px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
                    Dado
                  </th>
                  <th className="border-r border-border-line px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
                    Meio de coleta
                  </th>
                  <th className="border-r border-border-line px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
                    Finalidade
                  </th>
                  <th className="border-r border-border-line px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
                    Base legal
                  </th>
                  <th className="px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
                    Retenção
                  </th>
                </tr>
              </thead>
              <tbody>
                {DATA_TABLE.map((row) => (
                  <tr key={row.dado} className="border-b border-border-line last:border-b-0 odd:bg-bg-pure even:bg-bg-base">
                    <td className="border-r border-border-line px-4 py-3 align-top text-text-primary">{row.dado}</td>
                    <td className="border-r border-border-line px-4 py-3 align-top text-text-secondary">{row.meio}</td>
                    <td className="border-r border-border-line px-4 py-3 align-top text-text-secondary">{row.finalidade}</td>
                    <td className="border-r border-border-line px-4 py-3 align-top text-text-secondary">{row.base}</td>
                    <td className="px-4 py-3 align-top text-text-secondary">{row.retencao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <PolicySection index="03" title="Cookies e tecnologias semelhantes">
          <p>Usamos três categorias de cookies:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-text-primary">Essenciais</strong> — necessários
              para o funcionamento do site (ex: lembrar sua escolha no banner de
              cookies). Não podem ser desativados.
            </li>
            <li>
              <strong className="text-text-primary">Analytics</strong> — nos ajudam a
              entender, de forma agregada, como o site é usado (ex:{" "}
              <Fill>ferramenta(s) de analytics — ex: Google Analytics</Fill>). Só são
              carregados se você consentir.
            </li>
            <li>
              <strong className="text-text-primary">Marketing</strong> — usados para
              medir campanhas e personalizar anúncios (ex:{" "}
              <Fill>pixel(s)/rede(s) de ads utilizados — ex: Meta Ads, Google Ads</Fill>
              ). Só são carregados se você consentir.
            </li>
          </ul>
          <p>
            Você pode alterar sua escolha a qualquer momento pelo link{" "}
            <span className="font-medium text-text-primary">
              &quot;Gerenciar cookies&quot;
            </span>{" "}
            no rodapé do site.
          </p>
        </PolicySection>

        <PolicySection index="04" title="Com quem compartilhamos os dados">
          <p>
            Não vendemos dados pessoais. Compartilhamos dados apenas com prestadores
            de serviço que nos ajudam a operar o site e o negócio, sempre limitado ao
            necessário para a finalidade contratada:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Hospedagem e infraestrutura do site: Vercel.</li>
            <li>
              Ferramenta de CRM/gestão de contatos comerciais: <Fill>nome da ferramenta de CRM</Fill>.
            </li>
            <li>
              Ferramenta de e-mail marketing/newsletter: <Fill>nome da ferramenta de e-mail marketing</Fill>.
            </li>
            <li>
              Analytics: <Fill>ferramenta(s) de analytics utilizada(s)</Fill> (apenas mediante consentimento).
            </li>
            <li>
              Marketing/publicidade: <Fill>rede(s) de ads/pixels utilizados</Fill> (apenas mediante consentimento).
            </li>
            <li>
              Autoridades públicas, quando exigido por lei, ordem judicial ou requisição
              regulatória.
            </li>
          </ul>
        </PolicySection>

        <PolicySection index="05" title="Seus direitos como titular de dados (art. 18 da LGPD)">
          <p>Você tem direito a:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos
              ou tratados em desconformidade com a LGPD;
            </li>
            <li>Portabilidade dos dados a outro fornecedor de serviço ou produto;</li>
            <li>Eliminação dos dados tratados com base no seu consentimento;</li>
            <li>
              Informação sobre entidades públicas e privadas com as quais compartilhamos
              dados;
            </li>
            <li>Informação sobre a possibilidade de não fornecer consentimento;</li>
            <li>Revogação do consentimento, a qualquer momento.</li>
          </ul>
        </PolicySection>

        <PolicySection index="06" title="Como exercer seus direitos">
          <p>
            Para exercer qualquer um dos direitos acima, ou tirar dúvidas sobre o
            tratamento dos seus dados, entre em contato com nosso Encarregado de
            Proteção de Dados (DPO):
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Nome do encarregado (DPO): <Fill>nome do DPO/encarregado</Fill>
            </li>
            <li>
              E-mail de contato: <Fill>e-mail dedicado do DPO — ex: privacidade@trilhafinance.com.br</Fill>
            </li>
          </ul>
          <p>
            Responderemos às solicitações dentro do prazo previsto pela LGPD. Podemos
            solicitar informações adicionais para confirmar sua identidade antes de
            processar o pedido.
          </p>
        </PolicySection>

        <PolicySection index="07" title="Segurança da informação">
          <p>
            Adotamos medidas técnicas e administrativas razoáveis para proteger dados
            pessoais contra acessos não autorizados e situações acidentais ou ilícitas
            de destruição, perda, alteração, comunicação ou difusão.{" "}
            <Fill>detalhar medidas específicas — ex: criptografia em trânsito, controle de acesso</Fill>.
          </p>
        </PolicySection>

        <PolicySection index="08" title="Alterações desta política">
          <p>
            Podemos atualizar esta política periodicamente para refletir mudanças em
            nossas práticas ou na legislação aplicável. A data da última atualização
            está indicada no topo desta página. Alterações relevantes serão
            comunicadas por meios razoáveis (ex: aviso no site).
          </p>
        </PolicySection>

        <PolicySection index="09" title="Contato">
          <p>
            Dúvidas gerais sobre esta política podem ser enviadas para{" "}
            <a
              href="mailto:contato@trilhafinance.com.br"
              className="text-text-primary underline underline-offset-2 hover:text-neon"
            >
              contato@trilhafinance.com.br
            </a>{" "}
            ou para o e-mail do encarregado indicado na seção 6.
          </p>
        </PolicySection>
      </div>

      <FooterSection />
    </main>
  );
}
