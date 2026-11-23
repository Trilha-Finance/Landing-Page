import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/cookies/cookie-consent";
import { HashLink } from "@/components/ui/hash-link";

// LinkedIn is hidden until the company page exists. To show it, add:
// { label: "LinkedIn", icon: "fa-linkedin-in", href: "https://www.linkedin.com/company/..." },
const socials = [
  { label: "Instagram", icon: "fa-instagram", href: "https://www.instagram.com/trilhafinance/" },
  { label: "WhatsApp", icon: "fa-whatsapp", href: "https://wa.me/5541999377006" },
];

const quickLinks = [
  { label: "Home", href: "/#top" },
  { label: "Sobre nós", href: "/#about" },
  { label: "Serviços", href: "/#services" },
  { label: "Como atuamos", href: "/#como-atuamos" },
  { label: "Contato", href: "/#contact" },
  { label: "Perguntas frequentes", href: "/#faq" },

];

const solutions = [
  { label: "Planejamento", href: "/#servico-planejamento" },
  { label: "Investimentos", href: "/#servico-investimentos" },
  { label: "Seguros e Proteções", href: "/#servico-seguros" },
  { label: "Crédito e Financiamento", href: "/#servico-credito" },
];

const legalLinks = [
  { label: "Políticas de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "LGPD", href: "/lgpd" },
  { label: "Política de Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer id="footer" className="p-3 md:p-5">
      <div className="relative isolate overflow-hidden rounded-[30px] bg-[radial-gradient(ellipse_at_70%_50%,#1a3a2c_0%,#0b2723_45%,#08201d_100%)] px-6 md:rounded-[50px] md:px-10">
        <div className="mx-auto max-w-[1110px]">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8 pt-12 md:pt-[70px]">
            <HashLink
              href="/#top"
              aria-label="Trilha Finance, voltar ao topo"
              className="rounded-[10px] bg-white/40 px-6 py-3 backdrop-blur-[6px] transition-colors hover:bg-white/50"
            >
              <Image
                src="/images/logo.png"
                alt="Trilha Finance"
                width={1303}
                height={355}
                className="h-12 w-auto"
              />
            </HashLink>
            <ul className="flex gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (abre em nova aba)`}
                    className="grid size-[42px] place-items-center rounded-full bg-white/10 text-sm text-white transition-colors hover:bg-lime hover:text-brand"
                  >
                    <i className={`fa-brands ${s.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_auto_auto] md:gap-x-[110px]">
            <div>
              <h3 className="font-heading text-xl font-medium text-white">Escritório</h3>
              <p className="mt-6 max-w-[260px] text-sm leading-[25px] text-white">
                Rua Bom Jesus, 212, Sala 1904, 19º andar, Condomínio AR 3000 - Cabral Corporate & Offices, Juvevê, Curitiba/PR, CEP 80035-010
              </p>
              <div className="mt-6 flex flex-col items-start gap-4">
                <a
                  href="tel:+5541999377006"
                  className="bg-white/10 px-5 py-3 text-base text-white transition-colors hover:bg-white/20"
                >
                  +55 (41) 99937-7006
                </a>
                <a
                  href="mailto:contato@trilhafinance.com.br"
                  className="bg-white/10 px-5 py-3 text-base text-white transition-colors hover:bg-white/20"
                >
                  contato@trilhafinance.com.br
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-medium text-white">Navegação</h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 md:grid-cols-2 gap-y-[13px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <HashLink href={link.href} className="text-sm text-white transition-colors hover:text-lime">
                      {link.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-medium text-white">Serviços</h3>
              <ul className="mt-6 flex flex-col gap-[9px]">
                {solutions.map((item) => (
                  <li key={item.label}>
                    <HashLink href={item.href} className="text-sm text-white transition-colors hover:text-lime">
                      {item.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 py-10 md:flex-row md:justify-between">
            <ul className="flex flex-col items-center gap-y-2 md:flex-row md:flex-wrap md:justify-center md:gap-x-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton className="text-sm text-white/70 transition-colors hover:text-lime">
                  Preferências de cookies
                </CookiePreferencesButton>
              </li>
            </ul>
            <p className="text-center text-sm text-white">
              © 2026 Trilha Finance. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
