"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type CookieConsent = {
  analytics: boolean;
  functional: boolean;
};

const COOKIE_NAME = "cookie_consent";
const OPEN_EVENT = "cookie-preferences:open";
const ONE_YEAR = 60 * 60 * 24 * 365;

const categories = [
  {
    key: "essential",
    title: "Essenciais",
    text: "Necessários para o site funcionar e ficar seguro. Não podem ser desativados.",
  },
  {
    key: "analytics",
    title: "Desempenho e análise",
    text: "Nos ajudam a entender, de forma agregada, como o site é usado para melhorá-lo.",
  },
  {
    key: "functional",
    title: "Funcionais",
    text: "Guardam escolhas que você faz para oferecer uma experiência mais personalizada.",
  },
] as const;

/** Reads the visitor's saved choice, or null if they haven't chosen yet. */
export function readCookieConsent(): CookieConsent | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;
  try {
    const value = JSON.parse(decodeURIComponent(match[1]));
    return { analytics: Boolean(value.analytics), functional: Boolean(value.functional) };
  } catch {
    return null;
  }
}

function saveCookieConsent(consent: CookieConsent) {
  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax`;
}

/** Opens the cookie popup from anywhere on the page (footer, policy page). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/**
 * Cookie popup shown on the first visit. Visitors can accept all, reject the
 * optional cookies, or pick categories one by one. The choice is kept in a
 * first-party cookie for a year and can be changed later from the footer.
 */
export function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [choice, setChoice] = useState<CookieConsent>({ analytics: false, functional: false });

  useEffect(() => {
    function show() {
      setChoice(readCookieConsent() ?? { analytics: false, functional: false });
      setCustomizing(true);
      setOpen(true);
    }
    // First visit: ask once the page has loaded.
    const timer = window.setTimeout(() => {
      if (!readCookieConsent()) setOpen(true);
    }, 0);
    window.addEventListener(OPEN_EVENT, show);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_EVENT, show);
    };
  }, []);

  function decide(consent: CookieConsent) {
    saveCookieConsent(consent);
    setOpen(false);
    setCustomizing(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-50 max-h-[calc(100dvh-24px)] overflow-y-auto rounded-[20px] bg-brand p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:left-5 sm:right-auto sm:bottom-5 sm:w-[440px] md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="cookie-title" className="flex items-center gap-3 font-heading text-xl font-semibold">
          <i className="fa-solid fa-cookie-bite text-lime" />
          {customizing ? "Preferências de cookies" : "Nós usamos cookies"}
        </h2>
        {customizing ? (
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => (readCookieConsent() ? setOpen(false) : setCustomizing(false))}
            className="grid size-8 shrink-0 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        ) : null}
      </div>

      {customizing ? (
        <>
          <ul className="mt-5 flex flex-col gap-3">
            {categories.map((c) => {
              const locked = c.key === "essential";
              const checked = locked || choice[c.key];
              return (
                <li key={c.key} className="rounded-[14px] bg-white/5 p-4">
                  <label className={`flex items-center justify-between gap-4 ${locked ? "" : "cursor-pointer"}`}>
                    <span className="font-heading text-base font-medium">{c.title}</span>
                    <input
                      type="checkbox"
                      role="switch"
                      checked={checked}
                      disabled={locked}
                      onChange={(e) => !locked && setChoice({ ...choice, [c.key]: e.target.checked })}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden
                      className="relative h-6 w-11 shrink-0 rounded-full bg-white/20 transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-lime peer-checked:after:translate-x-5 peer-checked:after:bg-brand peer-focus-visible:ring-2 peer-focus-visible:ring-lime peer-disabled:opacity-60"
                    />
                  </label>
                  <p className="mt-2 text-sm leading-[22px] text-white/70">{c.text}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => decide(choice)}
              className="h-12 flex-1 rounded-full border border-white/30 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Salvar preferências
            </button>
            <button
              type="button"
              onClick={() => decide({ analytics: true, functional: true })}
              className="h-12 flex-1 rounded-full bg-lime text-sm font-medium text-brand transition-colors hover:bg-[#b5f08f]"
            >
              Aceitar todos
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 text-sm leading-[24px] text-white/80">
            Usamos cookies para garantir o funcionamento do site, entender como ele é usado e
            melhorar a sua experiência. Você pode aceitar todos, recusar os opcionais ou escolher
            quais permitir. Saiba mais na nossa{" "}
            <Link href="/cookies" className="text-lime underline">
              Política de Cookies
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => decide({ analytics: true, functional: true })}
              className="h-12 rounded-full bg-lime text-sm font-medium text-brand transition-colors hover:bg-[#b5f08f]"
            >
              Aceitar todos
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => decide({ analytics: false, functional: false })}
                className="h-12 flex-1 rounded-full border border-white/30 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Recusar opcionais
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="h-12 flex-1 rounded-full border border-white/30 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Personalizar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Button that reopens the cookie popup so the visitor can change their choice. */
export function CookiePreferencesButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {children}
    </button>
  );
}
