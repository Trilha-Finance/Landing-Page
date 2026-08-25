"use client";

import { useState, type FormEvent } from "react";
import { PrivacyConsentCheckbox, SectionLabel } from "./chrome";

export function NewsletterSection() {
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    // TODO: integrar com backend/serviço externo de envio — ver CLAUDE.md (nada é
    // persistido neste repo).
  }

  return (
    <section id="newsletter" className="w-full border-y border-border-line bg-bg-pure">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <SectionLabel index="07" label="Newsletter" className="mb-8 text-center" />

        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Junte-se à nossa newsletter
          </h2>

          <p className="max-w-lg text-base leading-8 text-text-secondary sm:text-lg">
            Fique por dentro de todas as novidades do mundo das finanças e da
            tecnologia.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full flex-col items-center gap-4"
          >
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="Digite o seu email"
                className="h-[58px] w-full border border-border-line bg-black px-5 text-[1rem] text-white outline-none placeholder:text-white/40 focus:border-neon"
              />

              <button
                type="submit"
                className="inline-flex h-[58px] items-center justify-center whitespace-nowrap border border-neon bg-neon px-7 font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-white transition-colors hover:bg-black hover:text-neon sm:border-l-0"
              >
                Inscreva-se
              </button>
            </div>

            <PrivacyConsentCheckbox
              id="newsletter-privacy-consent"
              checked={consent}
              onChange={(v) => {
                setConsent(v);
                if (v) setConsentError(false);
              }}
              error={consentError}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
