"use client";

import { useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Blog", href: "#" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black bg-neon">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-3 sm:px-8 lg:px-10">
        <a href="#top" className="inline-flex items-center border border-black/10 bg-white px-3 py-1.5">

        </a>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-white transition-colors duration-[200ms] ease-in-out hover:text-black"
            >
              /{String(i + 1).padStart(2, "0")} {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group hidden h-11 shrink-0 items-center gap-3 border border-black bg-bg-base pl-5 pr-1.5 font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wide text-black transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-bg-base md:inline-flex"
        >
          Contato
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-neon text-bg-base transition-transform duration-[200ms] ease-in-out group-hover:translate-x-0.5 group-hover:bg-bg-base group-hover:text-black">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-white text-white md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-black bg-bg-pure px-6 py-6 sm:px-8 md:hidden">
          <nav aria-label="Main mobile" className="flex flex-col">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-line py-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.1em] text-text-secondary transition-colors duration-[200ms] ease-in-out hover:text-neon"
              >
                /{String(i + 1).padStart(2, "0")} {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center border border-neon bg-neon font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-white transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon"
            >
              Contato
            </a>
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center border border-border-line font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
            >
              Newsletter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
