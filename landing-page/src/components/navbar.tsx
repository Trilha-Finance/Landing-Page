import Image from "next/image";
import logoFull from "../assets/logos/Logo-trilha.png";
import { ArrowIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Blog", href: "#" },
];

export function Navbar() {
  return (
    <header className="w-full border-b border-border-line bg-black">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-3 sm:px-8 lg:px-10">
        <a href="#top" className="inline-flex items-center border border-border-line bg-white px-3 py-1.5">
          <Image
            src={logoFull}
            alt="Trilha Finance"
            width={168}
            height={56}
            priority
            className="h-auto w-[140px] sm:w-[160px]"
          />
        </a>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-secondary transition-colors duration-[200ms] ease-in-out hover:text-neon"
            >
              /{String(i + 1).padStart(2, "0")} {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group inline-flex h-11 shrink-0 items-center gap-3 border border-neon bg-neon pl-5 pr-1.5 font-[family-name:var(--font-display)] text-xs uppercase tracking-wide text-black transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon"
        >
          Contato
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-black text-neon transition-transform duration-[200ms] ease-in-out group-hover:translate-x-0.5 group-hover:bg-neon group-hover:text-black">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </a>
      </div>
    </header>
  );
}
