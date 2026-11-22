import type { Metadata } from "next";
import {
  Callout,
  CardGrid,
  CheckList,
  Clause,
  DpoCard,
  PolicyHero,
  PolicySection,
  PolicySummary,
  PolicyToc,
  privacyEmail,
  privacyMailto,
  TermTable,
} from "@/components/legal/policy-layout";
import { PrivacyMailActions } from "@/components/legal/privacy-mail-actions";

export const metadata: Metadata = {
  title: "Política de Privacidade | Trilha Finance",
  description: "Como a Trilha Finance coleta, usa e protege os seus dados pessoais.",
};

const emailLink = <a href={privacyMailto}>{privacyEmail}</a>;

const sections = [
  { id: "consideracoes", title: "Considerações iniciais" },
  { id: "principios", title: "Princípios do tratamento" },
  { id: "dados-coletados", title: "Informações coletadas" },
  { id: "finalidades", title: "Finalidades do tratamento" },
  { id: "bases-legais", title: "Bases legais do tratamento" },
  { id: "compartilhamento", title: "Compartilhamento de dados" },
  { id: "transferencia", title: "Transferência internacional" },
  { id: "cookies", title: "Cookies e tecnologias semelhantes" },
  { id: "armazenamento", title: "Armazenamento, prazos e segurança" },
  { id: "menores", title: "Crianças e adolescentes" },
  { id: "direitos", title: "Seus direitos como titular" },
  { id: "exercer-direitos", title: "Como exercer seus direitos" },
  { id: "prazo", title: "Prazo de resposta" },
  { id: "alteracoes", title: "Alterações desta política" },
];

const section = (id: string) => {
  const index = sections.findIndex((s) => s.id === id);
  return { id, number: index + 1, title: sections[index].title };
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="flex flex-col gap-3 px-3 md:gap-5 md:px-5">
      <PolicyHero
        title="Política de Privacidade"
        intro={
          <p>
            Como a Trilha Finance trata os dados pessoais de quem acessa o nosso site ou contrata
            os nossos serviços: o que coletamos, por que coletamos e como você pode exercer os seus
            direitos.
          </p>
        }
        facts={[
          { icon: "fa-regular fa-calendar", label: "Versão vigente", value: "28 de outubro de 2026" },
          { icon: "fa-solid fa-scale-balanced", label: "Legislação", value: "LGPD, Marco Civil e RGPD" },
          { icon: "fa-regular fa-envelope", label: "Encarregado (DPO)", value: <a href={privacyMailto}>{privacyEmail}</a> },
        ]}
      />

      <PolicySummary
        items={[
          {
            icon: "fa-regular fa-comment",
            title: "O que coletamos",
            text: "O que você nos envia pelo Fale conosco, os dados dos contratos firmados e os registros de acesso ao site.",
          },
          {
            icon: "fa-solid fa-ban",
            title: "Sem dados sensíveis",
            text: "Não coletamos dados de saúde, biométricos, genéticos ou outros dados sensíveis.",
          },
          {
            icon: "fa-regular fa-clock",
            title: "Pelo tempo necessário",
            text: "Guardamos os dados só pelos prazos da finalidade e da lei. Depois, eliminamos ou anonimizamos.",
          },
          {
            icon: "fa-regular fa-user",
            title: "Você no controle",
            text: (
              <>
                Acesse, corrija ou peça a exclusão dos seus dados. Respondemos em até 15 dias.{" "}
                <a href="#exercer-direitos" className="text-brand underline underline-offset-2">
                  Saiba como
                </a>
              </>
            ),
          },
        ]}
      />

      <div className="grid gap-3 md:gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <PolicyToc items={sections} />

        <div className="flex flex-col gap-3 md:gap-5">
          <PolicySection {...section("consideracoes")}>
            <Clause n="1.1">
              <p>
                Esta Política de Privacidade é da <strong>Trilha Finance Educação Financeira
                Consultoria e Soluções Tecnológicas Ltda</strong>, inscrita no CNPJ nº
                67.235.921/0001-04, com sede na Rua Bom Jesus, nº 212, Sala 1904, Andar 19, Condomínio AR 3000
                - Cabral Corporate &amp; Offices, Juvevê, Curitiba/PR, CEP 80035-010 (Trilha
                Finance).
              </p>
            </Clause>
            <Clause n="1.2">
              <p>
                Ela explica como tratamos os dados pessoais que obtemos de você ao acessar ou
                utilizar o nosso site (www.trilhafinance.com.br), quais dados coletamos, por que os
                coletamos e como você pode atualizá-los, gerenciá-los ou excluí-los. Nesse
                tratamento, a Trilha Finance atua como controladora, nos termos da LGPD.
              </p>
            </Clause>
            <Clause n="1.3">
              <p>
                Esta política foi elaborada em conformidade com a Lei Federal nº 12.965, de 23 de
                abril de 2014 (Marco Civil da Internet), com a Lei Federal nº 13.709, de 14 de
                agosto de 2018 (Lei Geral de Proteção de Dados Pessoais – LGPD) e com o Regulamento
                (UE) 2016/679, de 27 de abril de 2016 (Regulamento Geral sobre a Proteção de Dados –
                RGPD).
              </p>
            </Clause>
            <Clause n="1.4">
              <p>
                Podemos atualizá-la em razão de mudanças na legislação. Por isso, convidamos você a
                consultar esta página periodicamente.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("principios")}>
            <p>
              Em respeito ao RGPD e à LGPD, tratamos os seus dados pessoais conforme os seguintes
              princípios:
            </p>
            <CardGrid
              items={[
                {
                  title: "Licitude, lealdade e transparência",
                  text: "Processamos os seus dados de forma lícita, leal e transparente.",
                },
                {
                  title: "Limitação das finalidades",
                  text: "Coletamos os seus dados apenas para finalidades determinadas, explícitas e legítimas, sem tratá-los posteriormente de forma incompatível com essas finalidades.",
                },
                {
                  title: "Minimização dos dados",
                  text: "Coletamos dados de forma adequada, pertinente e limitada ao necessário para os objetivos do tratamento.",
                },
                {
                  title: "Exatidão",
                  text: "Mantemos os seus dados exatos e atualizados sempre que necessário, apagando ou retificando, quando possível, os dados inexatos.",
                },
                {
                  title: "Limitação da conservação",
                  text: "Conservamos os dados de forma a permitir a sua identificação apenas pelo período necessário às finalidades do tratamento.",
                },
                {
                  title: "Integridade e confidencialidade",
                  text: "Tratamos os seus dados com segurança. Protegemos as informações contra acesso ou tratamento não autorizado ou ilícito, bem como contra perda, destruição ou dano acidental, e para isso adotamos medidas técnicas e organizacionais adequadas.",
                },
              ]}
            />
          </PolicySection>

          <PolicySection {...section("dados-coletados")}>
            <p>
              A coleta de dados ocorre conforme esta política e depende do seu consentimento, que é
              dispensado apenas nas hipóteses previstas na legislação aplicável.
            </p>
            <Clause n="3.1" title="Dados informados no Fale conosco">
              <p>
                Quando você usa o formulário Fale conosco do site, coletamos e armazenamos os dados
                que você preencher:
              </p>
              <CheckList items={["nome;", "e-mail;", "telefone, se informado;", "o conteúdo da sua mensagem."]} />
            </Clause>
            <Clause n="3.2" title="Dados relacionados à execução de contratos">
              <p>
                Se você firmar conosco um contrato de educação financeira, de consultoria e
                planejamento financeiro ou de prestação de serviços de soluções tecnológicas,
                podemos coletar e armazenar os dados relacionados ou necessários à execução desse
                contrato, inclusive o conteúdo das comunicações que tivermos com você.
              </p>
            </Clause>
            <Clause n="3.3" title="Registros de acesso">
              <p>
                Em atendimento ao art. 15 da Lei Federal nº 12.965, de 24 de Abril de 2014 (Marco
                Civil da Internet), guardamos os registros de acesso ao nosso site. Esses registros são as informações de data e hora em que o site foi acessado a partir de determinado endereço IP. Mantemos esses registros por, no mínimo, seis meses. Durante esse período, eles ficam sob sigilo, em ambiente controlado e seguro.
              </p>
            </Clause>
            <Clause n="3.4" title="Dados sensíveis">
              <p>
                A Trilha Finance não coleta dados pessoais e sensíveis dos usuários. São considerados sensíveis os dados definidos nos art. 9º e 10 do Regulamento Geral sobre a Proteção de Dados (RGPD) e no art. 5º, II, e nos arts. 11 a 13 da Lei Geral de Proteção de Dados (LGPD). Entre outros, não coletamos: 
              </p>
              <Callout icon="fa-solid fa-ban">
                <ul className="flex flex-col gap-1.5">
                  <li>dados genéticos;</li>
                  <li>dados biométricos para identificar uma pessoa de forma inequívoca;</li>
                  <li>dados relativos à saúde;</li>
                  <li>dados relativos à vida sexual ou à orientação sexual;</li>
                  <li>dados relacionados a condenações penais, infrações ou medidas de segurança conexas;</li>
                  <li>Dados que revelem origem racial ou étnica;</li>
                  <li>Dados que revelem convicções religiosas ou filosóficas, opiniões políticas ou filiação partidária/sindical.</li>
                </ul>
              </Callout>
            </Clause>
          </PolicySection>

          <PolicySection {...section("finalidades")}>
            <p>Usamos os dados que coletamos para:</p>
            <CheckList
              items={[
                "responder às mensagens enviadas pelo Fale Conosco,  conforme o item 3.1;",
                "executar os contratos firmados com você, conforme o item 3.2;",
                "cumprir obrigações legais, como a guarda dos registros de acesso prevista no item 3.3;",
                "enviar conteúdos ou comunicações da Trilha Finance.",
              ]}
            />
          </PolicySection>

          <PolicySection {...section("bases-legais")}>
            <p>
              Tratamos os seus dados pessoais com fundamento nas hipóteses do art. 7º da LGPD,
              conforme a finalidade:
            </p>
            <TermTable
              head={["Base legal", "Quando se aplica"]}
              rows={[
                ["Consentimento", "Envio de conteúdos e comunicações."],
                [
                  "Execução de contrato ou de procedimentos preliminares, a seu pedido",
                  "Dados descritos no item 3.1 e 3.2.",
                ],
                [
                  "Cumprimento de obrigação legal ou regulatória",
                  "Por exemplo, os registros de acesso do item 3.3.",
                ],
              ]}
            />
          </PolicySection>

          <PolicySection {...section("compartilhamento")}>
            <p>
              A Trilha Finance compartilha os seus dados pessoais com terceiros apenas nas seguintes
              hipóteses:
            </p>
            <CardGrid
              items={[
                {
                  title: "Instituições financeiras e parceiros",
                  text: "Com instituições financeiras, operadores de sistemas de pagamento e demais empresas ligadas à oferta de produtos e serviços de parceiros da Trilha Finance.",
                },
                {
                  title: "Autoridades",
                  text: "Com autoridades governamentais, judiciais, regulatórias ou autorreguladoras que possam nos obrigar, por lei, norma ou ordem judicial, a divulgar a totalidade ou parte dos seus dados.",
                },
              ]}
            />
            <p>
              <strong>Bureaus e agências de crédito e de dados:</strong> para identificar você e
              verificar a autenticidade dos documentos e das informações fornecidos (know your
              customer) e, quando for o caso, analisar o seu perfil quanto ao risco de concessão de
              crédito. Isso traz mais segurança às operações e ajuda a evitar fraudes e crimes de
              lavagem de dinheiro e financiamento do terrorismo e da proliferação de armas de
              destruição em massa. Esses bureaus podem manter em seus registros os dados que lhes
              forem fornecidos pela Trilha Finance. Nesse caso, eles e a Trilha Finance respondem
              solidariamente pela guarda, pelo armazenamento e pelo uso desses dados, ressalvadas
              as hipóteses de exclusão de responsabilidade previstas na LGPD.
            </p>
            <p>
              <strong>Outros terceiros:</strong> com quaisquer outros terceiros, quando formos
              obrigados a compartilhar os dados por exigência legal, contratual ou regulatória, ou
              quando o compartilhamento for necessário ou recomendável para o funcionamento adequado
              e eficiente do site e de suas funcionalidades, para a prestação dos nossos serviços a
              você e para a contratação e manutenção, com terceiros, de serviços de armazenamento e
              gestão de bancos de dados.
            </p>
          </PolicySection>

          <PolicySection {...section("transferencia")}>
            <Clause n="7.1">
              <p>
                Os seus dados pessoais, coletados quando você acessa ou usa o site da Trilha Finance
                ou contrata os nossos serviços, poderão ser transferidos e armazenados fora do
                Brasil, na medida permitida por lei.
              </p>
            </Clause>
            <Clause n="7.2">
              <p>
                Antes de transferir os seus dados para outro país, asseguraremos que ele ofereça o
                grau de proteção exigido nesta política e na LGPD. Também podemos assegurar que a
                Trilha Finance e os terceiros envolvidos respeitem, independentemente da legislação
                estrangeira, os princípios, os direitos do titular e a proteção de dados previstos
                nesta política e na LGPD. Essa garantia observará as regras e os mecanismos de
                transferência internacional definidos pela Autoridade Nacional de Proteção de Dados
                (ANPD).
              </p>
            </Clause>
            <Clause n="7.3">
              <p>
                A Trilha Finance tem sede no Brasil, e o tratamento dos dados coletados é regido
                pela lei brasileira. Se for o caso, os seus dados poderão ser transferidos para o(s)
                seguinte(s) país(es): <strong>Estados Unidos da América</strong>, nas condições do
                item 7.2.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("cookies")}>
            <Clause n="8.1">
              <p>
                Cookie é um pequeno arquivo adicionado ao dispositivo ou computador do usuário para
                fornecer uma experiência personalizada de acesso ao site da Trilha Finance. Os
                cookies ajudam a analisar o tráfego de internet ou nos permitem saber quando o
                Usuário visitou um site específico.
              </p>
            </Clause>
            <Clause n="8.2">
              <p>
                Sempre que você interage com o site da Trilha Finance, com os nossos serviços ou com
                materiais e links de marketing e publicidade, recebemos e armazenamos
                automaticamente, em nossos registros de servidor, informações do seu navegador ou
                dispositivo. Isso inclui endereço IP, identificação do dispositivo, página ou
                recurso visitado, tempo gasto em cada página, datas e horários de acesso, tipo de
                navegador e de dispositivo, página ou recurso que levou você ao nosso site e
                informação pesquisada.
              </p>
            </Clause>
            <Clause n="8.3">
              <p>
                O Usuário autoriza, através desta Política, que a Trilha Finance efetue comunicação
                através de mensagens por pop-up enquanto você estiver navegando no site, para
                informar sobre os serviços oferecidos.
              </p>
            </Clause>
            <Clause n="8.4">
              <p>
                Os Anunciantes, parceiros da Trilha Finance, não transmitem cookies para o navegador
                ou dispositivo dos Usuários quando o site da Trilha Finance é utilizado. Contudo,
                quando o Usuário clica em anúncios ou links que levam a um site ou serviço de
                Terceiro, este Terceiro poderá transmitir cookies a tal Usuário. Lembramos que essa
                Política de Privacidade não abrange o uso de cookies por quaisquer Terceiros, e não
                nos responsabilizamos pelas práticas e políticas de privacidade deles.
              </p>
            </Clause>
            <Clause n="8.5">
              <p>
                O seu navegador pode permitir que você desabilite os cookies. Se você optar por
                fazê-lo, algumas funcionalidades do site podem não funcionar corretamente. Veja
                também a nossa <a href="/cookies">Política de Cookies</a>.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("armazenamento")}>
            <Clause n="9.1">
              <p>
                Armazenamos os seus dados pelo tempo necessário para cumprir as finalidades descritas
                nesta política, respeitados os prazos legais aplicáveis. Em regra:
              </p>
              <TermTable
                head={["Dado", "Prazo de guarda"]}
                rows={[
                  ["Registros de acesso", "Por seis meses, conforme o item 3.3."],
                  [
                    "Mensagens do Fale conosco",
                    "Por até 12 (doze) meses após o último contato, salvo se resultarem em contrato.",
                  ],
                  [
                    "Dados e comunicações relacionados a contratos",
                    "Durante a vigência do contrato e por 05 (cinco) anos após o seu término, para cumprir obrigações legais e permitir o exercício regular de direitos em processos judiciais, administrativos ou arbitrais.",
                  ],
                  ["Documentos fiscais e contábeis", "Por 05 (cinco) anos, ou pelo prazo que a legislação exigir."],
                ]}
              />
            </Clause>
            <Clause n="9.2">
              <p>
                Encerrados esses prazos, eliminamos ou anonimizamos os dados, salvo se a lei
                autorizar ou exigir a sua conservação.
              </p>
            </Clause>
            <Clause n="9.3">
              <p>
                Adotamos medidas de segurança para proteger os seus dados contra acessos não
                autorizados e situações acidentais ou ilícitas de destruição, perda, alteração ou
                divulgação.
              </p>
            </Clause>
            <Clause n="9.4">
              <p>
                Se ocorrer um incidente de segurança que possa acarretar risco ou dano relevante a
                você, comunicaremos a você e à Autoridade Nacional de Proteção de Dados (ANPD), nos
                termos da LGPD.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("menores")}>
            <Clause n="10.1">
              <p>
                O site não se destina a crianças e adolescentes, e não coletamos intencionalmente
                dados pessoais de menores de 18 anos diretamente deles.
              </p>
            </Clause>
            <Clause n="10.2">
              <p>
                Para a execução dos contratos de consultoria e planejamento financeiro, podemos
                receber de nossos clientes, na qualidade de pais ou responsáveis legais, dados de
                filhos ou dependentes, tais como: nome, data de nascimento, CPF e grau de
                parentesco. Tratamos esses dados somente para elaborar e executar o planejamento
                financeiro, patrimonial ou sucessório da família, sempre em observância ao melhor
                interesse da criança ou do adolescente, nos termos do art. 14 da LGPD.
              </p>
            </Clause>
            <Clause n="10.3">
              <p>
                Não utilizamos esses dados para outras finalidades, como marketing, e só os
                compartilhamos nas hipóteses do capítulo 6, quando necessário para a prestação do
                serviço. Os pais ou responsáveis podem exercer, em nome do menor, os direitos
                previstos no capítulo 11.
              </p>
            </Clause>
          </PolicySection>

          <PolicySection {...section("direitos")}>
            <p>
              Nos termos do art. 18 da Lei Geral de Proteção de Dados (LGPD) e dos arts. 15 a 22 do Regulamento Geral sobre a Proteção de Dados (RGPD), você tem direitos listados a seguir. Pode exercê-los a qualquer momento, mediante requisição à Trilha os seguintes direitos, que pode
              exercer a qualquer momento:
            </p>
            <CardGrid
              items={[
                { title: "Confirmação e acesso", text: "Confirmar se tratamos dados pessoais seus e acessá-los." },
                {
                  title: "Retificação",
                  text: "Obter, sem demora injustificada, a correção de dados incompletos, inexatos ou desatualizados.",
                },
                {
                  title: "Anonimização, bloqueio ou eliminação",
                  text: "Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei, e a eliminação dos dados tratados com o seu consentimento (direito ao esquecimento).",
                },
                {
                  title: "Limitação do tratamento",
                  text: "Limitar o tratamento dos seus dados quando você contestar a exatidão deles, quando o tratamento for ilícito, quando não precisarmos mais deles para as finalidades propostas, quando você tiver se oposto ao tratamento e em caso de tratamento de dados desnecessários.",
                },
                {
                  title: "Oposição",
                  text: "Opor-se, a qualquer momento, por motivos relacionados à sua situação particular, ao tratamento dos seus dados, inclusive ao uso para definição de perfil de marketing (profiling).",
                },
                {
                  title: "Portabilidade",
                  text: "Receber os dados que você nos forneceu em formato estruturado, de uso corrente e de leitura automática, e transmiti-los a outro fornecedor de serviço ou produto, mediante requisição expressa.",
                },
                {
                  title: "Informação sobre compartilhamento",
                  text: "Saber com quais entidades compartilhamos os seus dados.",
                },
                {
                  title: "Informação sobre o consentimento",
                  text: "Ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.",
                },
                { title: "Revogação do consentimento", text: "Revogar o consentimento dado." },
                {
                  title: "Decisões automatizadas",
                  text: "Não ficar sujeito a decisão tomada exclusivamente com base em tratamento automatizado, incluindo a definição de perfis (profiling), que produza efeitos na sua esfera jurídica ou o afete significativamente de forma similar.",
                },
              ]}
            />
          </PolicySection>

          <PolicySection {...section("exercer-direitos")}>
            <p>
              Para exercer seus direitos, envie uma comunicação escrita para o e-mail {emailLink},
              com o assunto <strong>“LGPD – Website”</strong>, informando:
            </p>
            <CheckList
              items={[
                "nome completo ou razão social e número do CPF ou CNPJ;",
                "endereço de e-mail seu e, se for o caso, do seu representante legal;",
                "direito que deseja exercer;",
                "data do pedido;",
                "assinatura;",
                "qualquer documento que possa demonstrar ou justificar o exercício do direito.",
              ]}
            />
            <PrivacyMailActions email={privacyEmail} mailto={privacyMailto} />
            <DpoCard />
          </PolicySection>

          <PolicySection {...section("prazo")}>
            <Callout icon="fa-regular fa-clock">
              Responderemos ao seu pedido em até <strong>15 (quinze) dias</strong>, contados do
              recebimento da sua comunicação.
            </Callout>
          </PolicySection>

          <PolicySection {...section("alteracoes")}>
            <p>
              Podemos atualizar esta política a qualquer momento. A versão vigente estará sempre
              disponível no site, com a indicação da data da última atualização: 28/10/2026.
            </p>
            <a href="#consideracoes" className="inline-flex w-fit items-center gap-2 text-sm">
              <i className="fa-solid fa-arrow-up" />
              Voltar ao início
            </a>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
