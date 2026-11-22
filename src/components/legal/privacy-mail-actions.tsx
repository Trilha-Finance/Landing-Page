"use client";

import { useState } from "react";

type PrivacyMailActionsProps = { email: string; mailto: string };

/**
 * "Send e-mail" plus "Copy address": a mailto link does nothing when the reader has no
 * e-mail app set up (common on Windows and when using webmail), so copying is the fallback.
 */
export function PrivacyMailActions({ email, mailto }: PrivacyMailActionsProps) {
  const [copied, setCopied] = useState(false);

  function copy() {
    // Synchronous copy first: it runs inside the click and never waits on a permission
    // prompt, which can leave navigator.clipboard.writeText pending indefinitely.
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {}
    field.remove();
    if (!ok) navigator.clipboard?.writeText(email).catch(() => {});

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={mailto}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-sm font-medium text-brand no-underline! transition-colors hover:bg-[#b5f08f]"
      >
        <i className="fa-regular fa-envelope" />
        Enviar pedido por e-mail
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="inline-flex h-12 items-center gap-2 rounded-full border border-brand/20 px-6 text-sm font-medium text-brand transition-colors hover:bg-mist"
      >
        <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"} />
        {copied ? "E-mail copiado!" : "Copiar e-mail"}
      </button>
    </div>
  );
}
