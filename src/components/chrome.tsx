import type { ReactNode } from "react";
import { CheckIcon } from "./icons";

export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-neon ${className}`}
    >
      /{index} {label}
    </p>
  );
}

export function CornerMarks({ className = "text-border-line" }: { className?: string }) {
  return (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-mono)] text-xs ${className}`}
      >
        +
      </span>
      <span
        aria-hidden
        className={`pointer-events-none absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-mono)] text-xs ${className}`}
      >
        +
      </span>
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 select-none font-[family-name:var(--font-mono)] text-xs ${className}`}
      >
        +
      </span>
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 select-none font-[family-name:var(--font-mono)] text-xs ${className}`}
      >
        +
      </span>
    </>
  );
}

export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-2 w-2 shrink-0 animate-cybr-pulse bg-neon ${className}`}
    />
  );
}

export function BlinkingCursor({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`animate-cybr-cursor text-neon ${className}`}>
      _
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex h-14 items-center justify-center gap-3 border border-neon bg-neon px-8 font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-white transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon"
    >
      {children}
      <span aria-hidden className="text-base transition-transform duration-[200ms] ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

export function PrivacyConsentCheckbox({
  id,
  checked,
  onChange,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <span
          className={`relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border bg-bg-pure ${
            error ? "border-red-600" : checked ? "border-neon" : "border-border-line"
          }`}
        >
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            aria-required="true"
            aria-invalid={error || undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          {checked && <CheckIcon className="h-3.5 w-3.5 text-neon" aria-hidden />}
        </span>
        <span className="text-sm leading-6 text-text-secondary">
          Li e concordo com a{" "}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noreferrer"
            className="text-text-primary underline underline-offset-2 hover:text-neon"
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="pl-8 text-xs text-red-600">
          É necessário concordar com a Política de Privacidade pra enviar o formulário.
        </p>
      )}
    </div>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center justify-center gap-2 border border-border-line px-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
    >
      {children}
    </a>
  );
}
