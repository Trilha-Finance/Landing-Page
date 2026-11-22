"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Início", href: "#top" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

type NavbarProps = {
  /** Prefix for the section anchors: "" on the home page, "/" on other pages. */
  base?: string;
  /** Floats over the hero image on the home page; sits in normal flow elsewhere. */
  floating?: boolean;
};

function Logo({ base }: { base: string }) {
  return (
    <a href={`${base}#top`} aria-label="Trilha Finance, voltar ao topo" className="shrink-0">
      <Image
        src="/images/logo.png"
        alt="Trilha Finance"
        width={1303}
        height={355}
        preload
        className="h-10 w-auto md:h-11"
      />
    </a>
  );
}

function ContactLink({ base, className, onClick }: { base: string; className?: string; onClick?: () => void }) {
  return (
    <a
      href={`${base}#contact`}
      onClick={onClick}
      className={`group flex items-center gap-2 font-body text-[15px] font-medium text-brand ${className ?? ""}`}
    >
      <span className="flex h-10 items-center rounded-full bg-lime px-5 transition-colors group-hover:bg-[#b5f08f]">
        Fale Conosco
      </span>
      <span className="grid size-10 place-items-center rounded-full bg-lime transition-transform group-hover:translate-x-1">
        <i className="fa-solid fa-arrow-right" />
      </span>
    </a>
  );
}

/** Glass pill navigation that sits over the top of the hero image. */
export function Navbar({ base = "", floating = true }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Principal"
      className={`z-20 rounded-[40px] bg-white/15 backdrop-blur-[6px] ${
        floating ? "absolute inset-x-3 top-3 md:inset-x-5 md:top-5" : "relative"
      }`}
    >
      <div className="hidden h-[78px] grid-cols-[1fr_auto_1fr] items-center px-[30px] md:grid lg:px-[70px]">
        <Logo base={base} />
        <ul className="flex items-center gap-[31px]">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`${base}${link.href}`}
                className="font-body text-[15px] uppercase tracking-[0.3px] text-white transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ContactLink base={base} className="justify-self-end" />
      </div>

      <div className="flex h-16 items-center justify-between pl-5 pr-3 md:hidden">
        <Logo base={base} />
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-full text-xl text-white"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>
      {open ? (
        <ul id="mobile-menu" className="flex flex-col gap-1 px-6 pb-5 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`${base}${link.href}`}
                onClick={() => setOpen(false)}
                className="block py-2 font-body text-[15px] uppercase text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ContactLink base={base} onClick={() => setOpen(false)} />
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
