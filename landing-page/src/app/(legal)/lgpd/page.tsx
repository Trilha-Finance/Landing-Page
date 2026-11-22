import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  CardGrid,
  CheckList,
  DpoCard,
  PolicyHero,
  PolicySection,
  PolicySummary,
  PolicyToc,
  PrivacyMailButton,
  privacyEmail,
  privacyMailto,
  TermTable,
} from "@/components/legal/policy-layout";

export const metadata: Metadata = {
  title: "LGPD | Trilha Finance",
  description: "Seus direitos como titular de dados pessoais segundo a LGPD e como exercê-los.",
};

const emailLink = <a href={privacyMailto}>{privacyEmail}</a>;

const sections = [
  { id: "compromisso", title: "Nosso compromisso" },
  { id: "bases-legais", title: "Bases legais" },
  { id: "direitos", title: "Seus direitos como titular" },
  { id: "exercer-direitos", title: "Como exercer os seus direitos" },
  { id: "encarregado", title: "Encarregado de dados (DPO)" },
];

const section = (id: string) => {
  const index = sections.findIndex((s) => s.id === id);
  return { id, number: index + 1, title: sections[index].title };
};

export default function Lgpd() {
  return (
    <main className="flex flex-col gap-3 px-3 md:gap-5 md:px-5">
      <PolicyHero
        title="LGPD"
        intro={
          <p>
            Como a Trilha Finance cumpre a Lei Geral de Proteção de Dados Pessoais e o que você pode
            pedir a nós, como titular, sobre os seus dados.
          </p>
        }
        facts={[
          { icon: "fa-regular fa-calendar", label: "Última atualização", value: "28 de outubro de 2026" },
          { icon: "fa-solid fa-scale-balanced", label: "Legislação", value: "Lei nº 13.709/2018" },
          { icon: "fa-regular fa-envelope", label: "Encarregado (DPO)", value: <a href={privacyMailto}>{privacyEmail}</a> },
        ]}
      />

      <PolicySummary
        items={[
          {
            icon: "fa-solid fa-scale-balanced",
            title: "Tratamento com base legal",
            text: "Só tratamos dados com consentimento, para executar contratos ou para cumprir a lei.",
          },
          {
            icon: "fa-regular fa-user",
            title: "Seus direitos",
            text: "Acesso, correção, exclusão, portabilidade, oposição e revogação do consentimento, entre outros.",
          },
          {
            icon: "fa-regular fa-envelope",
            title: "Um canal só",
            text: "Todos os pedidos vão para o nosso encarregado pelo e-mail de privacidade.",
          },
          {
            icon: "fa-regular fa-clock",
            title: "Resposta em 15 dias",
            text: "Respondemos ao seu pedido em até 15 dias a partir do recebimento.",
          },
        ]}
      />

      <div className="grid gap-3 md:gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <PolicyToc items={sections} />

        <div className="flex flex-col gap-3 md:gap-5">
          <PolicySection {...section("compromisso")}>
            <p>
              A Trilha Finance trata dados pessoais de acordo com a Lei Geral de Proteção de Dados
              Pessoais (Lei nº 13.709/2018). Os detalhes sobre quais dados coletamos e por quê estão
              na nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
            </p>
          </PolicySection>

          <PolicySection {...section("bases-legais")}>
            <p>Tratamos dados pessoais com base, conforme a finalidade, em:</p>
            <TermTable
              head={["Base legal", "Quando se aplica"]}
              rows={[
                ["Consentimento do titular", "Envio de conteúdos e comunicações."],
                [
                  "Execução de contrato ou de procedimentos preliminares a ele",
                  "Dados necessários aos contratos firmados a pedido do titular.",
                ],
                [
                  "Cumprimento de obrigação legal ou regulatória",
                  "Por exemplo, a guarda dos registros de acesso ao site.",
                ],
              ]}
            />
          </PolicySection>

          <PolicySection {...section("direitos")}>
            <CardGrid
              items={[
                { title: "Confirmação e acesso", text: "Confirmar se tratamos os seus dados e acessá-los." },
                { title: "Correção", text: "Corrigir dados incompletos, inexatos ou desatualizados." },
                {
                  title: "Anonimização, bloqueio ou eliminação",
                  text: "Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.",
                },
                {
                  title: "Limitação e oposição",
                  text: "Limitar o tratamento ou opor-se a ele, inclusive para fins de marketing.",
                },
                { title: "Portabilidade", text: "Solicitar a portabilidade dos dados a outro fornecedor." },
                { title: "Compartilhamento", text: "Saber com quem compartilhamos os seus dados." },
                {
                  title: "Consentimento",
                  text: "Ser informado sobre a possibilidade de não consentir e revogar o consentimento a qualquer momento.",
                },
                {
                  title: "Decisões automatizadas",
                  text: "Não ficar sujeito a decisões tomadas exclusivamente por tratamento automatizado.",
                },
              ]}
            />
            <Callout icon="fa-solid fa-landmark">
              Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
              (ANPD).
            </Callout>
          </PolicySection>

          <PolicySection {...section("exercer-direitos")}>
            <p>
              Envie a sua solicitação por escrito para {emailLink}, com o assunto{" "}
              <strong>“LGPD – Website”</strong>, informando:
            </p>
            <CheckList
              items={["o seu nome completo ou razão social;", "o seu CPF ou CNPJ;", "o direito que deseja exercer."]}
            />
            <p>
              Podemos pedir informações adicionais para confirmar a sua identidade, e responderemos
              em até <strong>15 (quinze) dias</strong> a partir do recebimento.
            </p>
            <PrivacyMailButton />
          </PolicySection>

          <PolicySection {...section("encarregado")}>
            <p>
              O encarregado pelo tratamento de dados pessoais da Trilha Finance recebe os pedidos dos
              titulares e as comunicações da ANPD.
            </p>
            <DpoCard />
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
