import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  Clause,
  PolicyHero,
  PolicySection,
  PolicySummary,
  PolicyToc,
  privacyEmail,
  privacyMailto,
  TermTable,
} from "@/components/legal/policy-layout";

export const metadata: Metadata = {
  title: "Termos de Uso | Trilha Finance",
  description: "Condições de acesso e uso do site da Trilha Finance.",
};

const contactEmail = "contato@trilhafinance.com.br";
const contactLink = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
const privacyLink = <Link href="/politica-de-privacidade">Política de Privacidade</Link>;

const sections = [
  { id: "quem-somos", title: "Quem somos e a quem estes Termos se aplicam" },
  { id: "definicoes", title: "Definições" },
  { id: "o-que-oferece", title: "O que o Website oferece" },
  { id: "natureza-do-conteudo", title: "Natureza do Conteúdo: informação, não recomendação" },
  { id: "independencia", title: "Independência e remuneração" },
  { id: "contratacao", title: "Contratação dos serviços" },
  { id: "formularios", title: "Cadastro, formulários e informações fornecidas" },
  { id: "condutas-proibidas", title: "Condutas proibidas" },
  { id: "propriedade-intelectual", title: "Propriedade intelectual" },
  { id: "terceiros", title: "Terceiros, parceiros e links externos" },
  { id: "privacidade", title: "Privacidade e proteção de dados" },
  { id: "disponibilidade", title: "Disponibilidade e segurança do Website" },
  { id: "responsabilidade", title: "Limitação de responsabilidade" },
  { id: "comunicacoes", title: "Comunicações" },
  { id: "alteracoes", title: "Alterações destes Termos" },
  { id: "disposicoes-gerais", title: "Disposições gerais" },
  { id: "lei-e-foro", title: "Lei aplicável e foro" },
  { id: "contato", title: "Contato" },
];

const section = (id: string) => {
  const index = sections.findIndex((s) => s.id === id);
  return { id, number: index + 1, title: sections[index].title };
};

/** List of items marked a), b), c)… as in the original document. */
function LetterList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="flex flex-col gap-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="w-5 shrink-0 font-heading font-medium text-brand">
            {String.fromCharCode(97 + index)})
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TermosDeUso() {
  return (
    <main className="flex flex-col gap-3 px-3 md:gap-5 md:px-5">
      <PolicyHero
        title="Termos de Uso"
        intro={
          <p>
            As regras para acessar e usar o site da Trilha Finance: o que oferecemos, o que o
            conteúdo publicado aqui é (e o que não é) e as responsabilidades de cada parte.
          </p>
        }
        facts={[
          { icon: "fa-regular fa-calendar", label: "Versão vigente", value: "3 de novembro de 2026" },
          { icon: "fa-solid fa-scale-balanced", label: "Legislação", value: "Leis brasileiras e CDC" },
          { icon: "fa-regular fa-envelope", label: "Dúvidas", value: contactLink },
        ]}
      />

      <PolicySummary
        items={[
          {
            icon: "fa-solid fa-book-open",
            title: "Conteúdo informativo",
            text: "Artigos, simuladores e materiais são genéricos. Não são recomendação de investimento.",
          },
          {
            icon: "fa-solid fa-handshake-simple",
            title: "Planejamento independente",
            text: "Somos remunerados por honorários em contrato, sem comissão de instituições financeiras.",
          },
          {
            icon: "fa-solid fa-file-signature",
            title: "Só com contrato",
            text: "Enviar um formulário não cria relação de consultoria. Os serviços começam com contrato assinado.",
          },
          {
            icon: "fa-solid fa-shield-halved",
            title: "Seus dados protegidos",
            text: (
              <>
                Tratamos os seus dados conforme a LGPD.{" "}
                <Link href="/politica-de-privacidade" className="text-brand underline underline-offset-2">
                  Ver política
                </Link>
              </>
            ),
          },
        ]}
      />

      <div className="grid gap-3 md:gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <PolicyToc items={sections} />

        <div className="flex flex-col gap-3 md:gap-5">
          <PolicySection {...section("quem-somos")}>
            <Clause n="1.1">
              <p>
                Estes Termos de Uso, em conjunto com a {privacyLink}, regem o acesso e o uso do
                website www.trilhafinance.com.br (<strong>Website</strong>), de titularidade da{" "}
                <strong>
                  Trilha Finance Educação Financeira Consultoria e Soluções Tecnológicas Ltda.
                </strong>{" "}
                (<strong>Trilha Finance</strong>), CNPJ nº 67.235.921/0001-04, com sede na Rua Bom
                Jesus, nº 212, Sala 1904, 19º andar, Condomínio AR 3000 - Cabral Corporate &amp;
                Offices, bairro Juvevê, Curitiba/PR, CEP 80035-010.
              </p>
            </Clause>
            <Clause n="1.2">
              <p>
                Aplicam-se a toda pessoa que acessa ou utiliza o Website (<strong>Usuário</strong>),
                seja pessoa física ou jurídica.
              </p>
            </Clause>
            <Clause n="1.3">
              <p>
                Ao navegar, preencher formulários ou usar qualquer funcionalidade do Website, o
                Usuário declara que leu e concorda com estes Termos. Quem não concordar deve deixar
                de usar o Website.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("definicoes")}>
            <TermTable
              head={["Termo", "Significado"]}
              rows={[
                ["Website", "O endereço eletrônico indicado acima e suas páginas, formulários e funcionalidades."],
                ["Usuário", "Quem acessa ou utiliza o Website."],
                ["Cliente", "Usuário que contrata serviços da Trilha Finance por contrato específico."],
                [
                  "Conteúdo",
                  "Textos, artigos, vídeos, planilhas, simuladores, calculadoras, imagens, marcas e demais materiais disponibilizados no Website.",
                ],
                [
                  "Terceiros",
                  "Parceiros, prestadores de serviço e outras empresas que, de forma identificada, participam de alguma funcionalidade do Website.",
                ],
              ]}
            />
          </PolicySection>

          <PolicySection {...section("o-que-oferece")}>
            <Clause n="3.1">
              <p>
                O Website tem finalidade institucional e educacional. Nele, o Usuário pode conhecer
                a Trilha Finance, acessar Conteúdo sobre educação financeira, planejamento
                financeiro e patrimonial e entrar em contato para solicitar informações ou
                propostas de serviços.
              </p>
            </Clause>
            <Clause n="3.2">
              <p>A Trilha Finance atende pessoas físicas, famílias e pessoas jurídicas.</p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("natureza-do-conteudo")}>
            <Clause n="4.1">
              <p>
                <strong>O Conteúdo é genérico e informativo.</strong> Não considera a situação
                financeira, os objetivos, o perfil de risco nem a situação tributária ou jurídica
                de cada Usuário.
              </p>
            </Clause>
            <Clause n="4.2">
              <p>
                <strong>O Conteúdo não constitui recomendação</strong>, oferta, solicitação ou
                promessa de investimento, de compra ou venda de qualquer ativo, de contratação de
                produto financeiro ou de seguro, nem aconselhamento jurídico, contábil ou
                tributário.
              </p>
            </Clause>
            <Clause n="4.3">
              <p>
                <strong>Simulações e calculadoras são estimativas</strong> baseadas nas informações
                inseridas pelo Usuário e em premissas simplificadas. Seus resultados não garantem
                rentabilidade, economia ou qualquer resultado futuro.
              </p>
            </Clause>
            <Clause n="4.4">
              <Callout icon="fa-solid fa-triangle-exclamation">
                Todo investimento envolve riscos, inclusive de perda do capital investido.
                Rentabilidade passada não garante rentabilidade futura.
              </Callout>
            </Clause>
            <Clause n="4.5">
              <p>
                Decisões financeiras e patrimoniais devem ser tomadas após análise individualizada.
                A análise personalizada somente ocorre mediante contratação formal dos serviços da
                Trilha Finance.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("independencia")}>
            <Clause n="5.1">
              <p>
                A Trilha Finance atua como planejadora financeira e patrimonial independente, no
                modelo <em>fee based</em>: sua remuneração decorre de honorários pactuados em
                contrato, de forma prioritariamente fixa, podendo ser mista.
              </p>
            </Clause>
            <Clause n="5.2">
              <p>
                A Trilha Finance não recebe comissão, rebate ou qualquer remuneração de instituições
                financeiras, seguradoras ou gestoras pela indicação ou contratação de produtos.
              </p>
            </Clause>
            <Clause n="5.3">
              <p>
                Eventuais situações de conflito de interesses serão informadas ao Cliente por
                escrito, antes de qualquer recomendação.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("contratacao")}>
            <Clause n="6.1">
              <p>
                <strong>
                  A navegação no Website e o envio de formulário de contato não criam relação de
                  consultoria nem obrigação de contratar.
                </strong>
              </p>
            </Clause>
            <Clause n="6.2">
              <p>
                Os serviços são prestados somente após proposta aceita e contrato assinado, que
                definirão escopo, honorários, prazos e responsabilidades.
              </p>
            </Clause>
            <Clause n="6.3">
              <p>
                Havendo conflito entre estes Termos e o contrato de prestação de serviços, prevalece
                o contrato.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("formularios")}>
            <Clause n="7.1">
              <p>
                Para entrar em contato ou acessar determinadas funcionalidades, o Usuário poderá
                informar dados pessoais. O tratamento desses dados segue a {privacyLink}.
              </p>
            </Clause>
            <Clause n="7.2">
              <p>
                O Usuário responde pela veracidade, exatidão e atualização das informações que
                fornecer. A Trilha Finance não se responsabiliza por resultados decorrentes de
                informações incorretas ou incompletas.
              </p>
            </Clause>
            <Clause n="7.3">
              <p>
                Se houver área restrita com login e senha, o Usuário deve mantê-los em sigilo, não
                os compartilhar e comunicar imediatamente à Trilha Finance qualquer uso não
                autorizado.
              </p>
            </Clause>
            <Clause n="7.4">
              <p>
                O Website não deve ser usado para enviar documentos ou dados sensíveis, como senhas
                bancárias, números completos de cartão ou tokens de acesso.{" "}
                <strong>
                  A Trilha Finance nunca solicitará esses dados por formulário, e-mail ou mensagem.
                </strong>
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("condutas-proibidas")}>
            <p>É proibido ao Usuário:</p>
            <LetterList
              items={[
                "usar o Website para fins ilícitos, fraudulentos ou contrários a estes Termos;",
                "tentar acessar áreas restritas, sistemas ou dados sem autorização, ou comprometer a segurança e o funcionamento do Website;",
                "inserir vírus, códigos maliciosos ou executar rotinas automatizadas de coleta de dados (scraping, bots) sem autorização por escrito;",
                "copiar, reproduzir, distribuir, modificar ou explorar comercialmente o Conteúdo sem autorização;",
                "fornecer dados falsos ou de terceiros sem legitimidade para isso;",
                "praticar atos que violem direitos de terceiros, incluindo direitos de personalidade, privacidade e propriedade intelectual.",
              ]}
            />
          </PolicySection>

          <PolicySection {...section("propriedade-intelectual")}>
            <Clause n="9.1">
              <p>
                Marcas, nome empresarial, logotipos, layout, textos, metodologias, planilhas,
                materiais e demais Conteúdos do Website pertencem à Trilha Finance ou são usados com
                autorização de seus titulares, protegidos pela legislação de propriedade
                intelectual.
              </p>
            </Clause>
            <Clause n="9.2">
              <p>
                O Usuário pode acessar e utilizar o Conteúdo para uso pessoal e não comercial,
                vedadas a reprodução, a redistribuição e a criação de obras derivadas sem
                autorização prévia e por escrito.
              </p>
            </Clause>
            <Clause n="9.3">
              <p>Citações são permitidas nos limites da lei, com indicação da fonte.</p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("terceiros")}>
            <Clause n="10.1">
              <p>
                Quando uma funcionalidade for oferecida em parceria com Terceiros, o Website
                identificará o parceiro e, se for o caso, os termos aplicáveis.
              </p>
            </Clause>
            <Clause n="10.2">
              <p>
                O Website pode conter links para sites de Terceiros, disponibilizados apenas por
                conveniência. A Trilha Finance não controla esses sites e não responde por seu
                conteúdo, políticas ou práticas. O acesso é de responsabilidade do Usuário.
              </p>
            </Clause>
            <Clause n="10.3">
              <p>
                A existência de link ou menção a Terceiro não representa recomendação, aval ou
                parceria, salvo se expressamente indicado.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("privacidade")}>
            <Clause n="11.1">
              <p>
                A Trilha Finance trata dados pessoais conforme a sua {privacyLink}, que informa as
                finalidades, as bases legais, o compartilhamento, o prazo de retenção e os direitos
                dos titulares.
              </p>
            </Clause>
            <Clause n="11.2">
              <p>
                O Website pode utilizar cookies e tecnologias semelhantes, nos termos da{" "}
                <Link href="/cookies">Política de Cookies</Link> e da {privacyLink}.
              </p>
            </Clause>
            <Clause n="11.3">
              <p>
                Solicitações relativas a dados pessoais devem ser enviadas ao canal indicado na
                Política de Privacidade: <a href={privacyMailto}>{privacyEmail}</a>.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("disponibilidade")}>
            <Clause n="12.1">
              <p>
                A Trilha Finance busca manter o Website disponível e seguro, mas não garante
                funcionamento ininterrupto ou livre de erros. Pode haver indisponibilidade por
                manutenção, falhas técnicas, ataques ou eventos fora de seu controle.
              </p>
            </Clause>
            <Clause n="12.2">
              <p>
                A Trilha Finance pode alterar, suspender ou descontinuar funcionalidades a qualquer
                momento, sem aviso prévio, observados os direitos de Clientes previstos em contrato.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("responsabilidade")}>
            <Clause n="13.1">
              <p>Na extensão permitida pela lei, a Trilha Finance não responde por:</p>
              <LetterList
                items={[
                  "decisões financeiras, patrimoniais ou de investimento tomadas pelo Usuário com base apenas no Conteúdo do Website;",
                  "perdas decorrentes de informações incorretas fornecidas pelo Usuário;",
                  "danos causados por falhas de internet, de equipamentos ou de sistemas do Usuário, ou por atos de Terceiros fora do controle da Trilha Finance;",
                  "conteúdo e práticas de sites e serviços de Terceiros.",
                ]}
              />
            </Clause>
            <Clause n="13.2">
              <p>
                Nada nestes Termos exclui ou limita responsabilidades que não possam ser excluídas
                ou limitadas por lei, inclusive as decorrentes do Código de Defesa do Consumidor
                (Lei nº 8.078/1990), quando aplicável.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("comunicacoes")}>
            <Clause n="14.1">
              <p>
                A Trilha Finance poderá se comunicar com o Usuário pelos contatos informados, para
                responder solicitações e tratar de assuntos do Website.
              </p>
            </Clause>
            <Clause n="14.2">
              <p>
                O envio de comunicações de divulgação ou marketing depende da base legal aplicável e
                permite que o Usuário se oponha ou cancele o recebimento a qualquer momento.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("alteracoes")}>
            <Clause n="15.1">
              <p>
                A Trilha Finance pode atualizar estes Termos a qualquer momento. A versão vigente
                estará sempre publicada no Website, com a data da última atualização.
              </p>
            </Clause>
            <Clause n="15.2">
              <p>
                O uso do Website após a publicação da nova versão indica concordância com as
                alterações. Mudanças relevantes serão destacadas no Website.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("disposicoes-gerais")}>
            <Clause n="16.1">
              <p>
                Se qualquer cláusula for considerada inválida ou inaplicável, as demais permanecem
                em vigor.
              </p>
            </Clause>
            <Clause n="16.2">
              <p>
                A tolerância da Trilha Finance quanto ao descumprimento de qualquer cláusula não
                significa renúncia a seus direitos.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("lei-e-foro")}>
            <Clause n="17.1">
              <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
            </Clause>
            <Clause n="17.2">
              <p>
                Fica eleito o foro da Comarca de Curitiba/PR para dirimir controvérsias, ressalvado
                o direito do Usuário que seja consumidor de ajuizar a ação no foro de seu
                domicílio, nos termos da lei.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("contato")}>
            <p>Dúvidas sobre estes Termos: {contactLink}.</p>
            <p className="text-sm">Última atualização: 03/11/2026.</p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
