import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/cookies/cookie-consent";
import {
  CardGrid,
  Callout,
  PolicyHero,
  PolicySection,
  PolicyToc,
  privacyEmail,
  privacyMailto,
} from "@/components/legal/policy-layout";

export const metadata: Metadata = {
  title: "Política de Cookies | Trilha Finance",
  description: "Quais cookies o site da Trilha Finance usa e como você escolhe quais aceitar.",
};

const sections = [
  { id: "categorias", title: "Categorias" },
  { id: "lista", title: "Cookies que usamos" },
  { id: "controle", title: "Como mudar a sua escolha" },
  { id: "contato", title: "Dúvidas" },
];

const section = (id: string) => {
  const index = sections.findIndex((s) => s.id === id);
  return { id, number: index + 1, title: sections[index].title };
};

const cookieColumns = ["Nome", "Fornecedor", "Categoria", "Finalidade", "Duração"] as const;

// Keep in sync with what the site actually sets (see components/cookies/cookie-consent.tsx).
const cookies: Record<(typeof cookieColumns)[number], string>[] = [
  {
    Nome: "cookie_consent",
    Fornecedor: "Trilha Finance",
    Categoria: "Essencial",
    Finalidade: "Guarda a sua escolha sobre cookies",
    Duração: "12 meses",
  },
];

/** Table on desktop, one card per cookie on small screens. */
function CookieTable() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-black/[0.06]">
      <table className="hidden w-full text-left md:table">
        <thead className="bg-mist font-heading text-sm tracking-[1.2px] text-brand uppercase">
          <tr>
            {cookieColumns.map((col) => (
              <th key={col} scope="col" className="px-5 py-3 font-normal">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie) => (
            <tr key={cookie.Nome} className="border-t border-black/[0.06] align-top">
              {cookieColumns.map((col) => (
                <td key={col} className={`px-5 py-4 ${col === "Nome" ? "font-mono text-sm text-brand-deep" : ""}`}>
                  {cookie[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="md:hidden">
        {cookies.map((cookie) => (
          <li key={cookie.Nome} className="border-t border-black/[0.06] px-5 py-4 first:border-t-0">
            <p className="font-mono text-sm text-brand-deep">{cookie.Nome}</p>
            <dl className="mt-2 grid grid-cols-[96px_1fr] gap-x-3 gap-y-1 text-[15px] leading-[24px]">
              {cookieColumns.slice(1).map((col) => (
                <div key={col} className="contents">
                  <dt className="text-brand/60">{col}</dt>
                  <dd>{cookie[col]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Cookies() {
  return (
    <main className="flex flex-col gap-3 px-3 md:gap-5 md:px-5">
      <PolicyHero
        title="Política de Cookies"
        intro={
          <p>
            Cookies são pequenos arquivos que o site guarda no seu navegador. Aqui explicamos quais
            usamos e como você escolhe quais aceitar. Esta política complementa a nossa{" "}
            <Link href="/politica-de-privacidade" className="text-white underline underline-offset-4">
              Política de Privacidade
            </Link>
            .
          </p>
        }
        facts={[
          { icon: "fa-regular fa-calendar", label: "Atualizada em", value: "3 de novembro de 2026" },
          { icon: "fa-solid fa-toggle-on", label: "Cookies opcionais", value: "Só com a sua autorização" },
          { icon: "fa-regular fa-envelope", label: "Canal de privacidade", value: <a href={privacyMailto}>{privacyEmail}</a> },
        ]}
      />

      <div className="grid gap-3 md:gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <PolicyToc items={sections} />

        <div className="flex flex-col gap-3 md:gap-5">
          <PolicySection {...section("categorias")}>
            <CardGrid
              items={[
                {
                  title: "Essenciais",
                  text: "Fazem o site funcionar e guardam a sua escolha sobre cookies. Não podem ser desligados e não identificam você.",
                },
                {
                  title: "Desempenho e análise",
                  text: "Mostram, de forma agregada, quantas pessoas visitam o site, de onde vêm e quais páginas leem. Só funcionam se você autorizar.",
                },
                {
                  title: "Funcionais",
                  text: "Guardam escolhas que você faz para oferecer uma experiência mais personalizada. Só funcionam se você autorizar.",
                },
              ]}
            />
            <Callout icon="fa-solid fa-circle-info">
              Nenhum cookie de análise ou funcional é carregado antes da sua escolha.
            </Callout>
          </PolicySection>

          <PolicySection {...section("lista")}>
            <p>
              Hoje o site usa apenas o cookie essencial abaixo. Se passarmos a usar cookies de
              análise ou funcionais, eles serão listados aqui antes de serem ativados.
            </p>
            <CookieTable />
          </PolicySection>

          <PolicySection {...section("controle")}>
            <p>
              Você pode mudar ou revogar o consentimento quando quiser, pelo link{" "}
              <strong>Preferências de cookies</strong> no rodapé de qualquer página ou pelo botão
              abaixo. Pedimos a sua escolha de novo a cada 12 meses.
            </p>
            <CookiePreferencesButton className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-lime px-6 text-sm font-medium text-brand transition-colors hover:bg-[#b5f08f]">
              <i className="fa-solid fa-sliders" />
              Preferências de cookies
            </CookiePreferencesButton>
            <p>
              Também é possível apagar ou bloquear cookies nas configurações do seu navegador.
              Bloquear os cookies essenciais pode fazer o site voltar a perguntar a sua preferência
              a cada visita.
            </p>
          </PolicySection>

          <PolicySection {...section("contato")}>
            <p>
              Fale com o nosso canal de privacidade: <a href={privacyMailto}>{privacyEmail}</a>.
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
