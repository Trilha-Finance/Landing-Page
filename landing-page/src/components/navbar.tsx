import Image from "next/image";
import logoFull from "../assets/logos/Logo-trilha.png";

const NAV_LINKS = ["Home", "Serviços", "Sobre"];

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-3 sm:px-8 lg:px-10">
        <a href="#top" className="inline-flex items-center">
          <Image
            src={logoFull}
            alt="Trilha Finance"
            width={168}
            height={56}
            priority
            className="h-auto w-[180px] sm:w-[210px]"
          />
        </a>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-manrope)] text-lg font-light text-[#083C2F] transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#083C2F]/70"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group inline-flex h-[52px] shrink-0 items-center gap-4 rounded-full bg-[#083C2F] py-1.5 pl-6 pr-1.5 font-[family-name:var(--font-manrope)] text-base font-light text-white transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(8,60,47,0.25)]"
        >
          Contato
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEAB00] text-[#083C2F] ring-1 ring-white transition-transform duration-[250ms] ease-in-out group-hover:translate-x-0.5">
            &gt;
          </span>
        </a>
      </div>
    </header>
  );
}
