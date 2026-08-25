"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { CheckIcon, CloseIcon } from "./icons";
import { CornerMarks } from "./chrome";

export type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentPreferences & {
  version: number;
  updatedAt: string;
};

const STORAGE_KEY = "trilha-cookie-consent";
const STORAGE_VERSION = 1;

const DEFAULT_PREFERENCES: ConsentPreferences = {
  analytics: false,
  marketing: false,
};

// Cache + pub/sub for useSyncExternalStore — keeps getSnapshot() returning a
// stable reference across renders (required to avoid an infinite update loop)
// and lets writes notify every subscribed component instance.
let cachedRaw: string | null = null;
let cachedSnapshot: StoredConsent | null = null;
const listeners = new Set<() => void>();

function parseStoredConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function getSnapshot(): StoredConsent | null {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedSnapshot = parseStoredConsent(raw);
  }
  return cachedSnapshot;
}

function getServerSnapshot(): StoredConsent | null {
  return null;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  function onStorage(e: StorageEvent) {
    if (e.key === STORAGE_KEY) callback();
  }
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function writeStoredConsent(prefs: ConsentPreferences) {
  const payload: StoredConsent = {
    ...prefs,
    version: STORAGE_VERSION,
    updatedAt: new Date().toISOString(),
  };
  const raw = JSON.stringify(payload);
  try {
    window.localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // localStorage indisponível (ex: modo privado) — escolha não persiste entre sessões.
  }
  cachedRaw = raw;
  cachedSnapshot = payload;
  listeners.forEach((listener) => listener());
}

type ConsentContextValue = {
  hasChosen: boolean;
  preferences: ConsentPreferences;
  panelOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: ConsentPreferences) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [panelOpen, setPanelOpen] = useState(false);

  const hasChosen = stored !== null;
  const preferences: ConsentPreferences = stored
    ? { analytics: stored.analytics, marketing: stored.marketing }
    : DEFAULT_PREFERENCES;

  const commit = useCallback((prefs: ConsentPreferences) => {
    writeStoredConsent(prefs);
    setPanelOpen(false);
  }, []);

  const acceptAll = useCallback(() => commit({ analytics: true, marketing: true }), [commit]);
  const rejectNonEssential = useCallback(() => commit({ analytics: false, marketing: false }), [commit]);
  const savePreferences = useCallback((prefs: ConsentPreferences) => commit(prefs), [commit]);
  const openPreferences = useCallback(() => setPanelOpen(true), []);
  const closePreferences = useCallback(() => setPanelOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      hasChosen,
      preferences,
      panelOpen,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- preferences is derived fresh each render from `stored`
    [hasChosen, stored, panelOpen, openPreferences, closePreferences, acceptAll, rejectNonEssential, savePreferences],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {!hasChosen && !panelOpen && <CookieBanner />}
      {panelOpen && <CookiePreferencesPanel />}
    </ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent precisa ser usado dentro de <CookieConsentProvider>");
  }
  return ctx;
}

function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-line bg-bg-pure px-6 py-6 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          Usamos cookies essenciais para o funcionamento do site e, mediante seu
          consentimento, cookies de analytics e marketing pra entender o uso do site e
          melhorar sua experiência. Saiba mais na{" "}
          <a
            href="/politica-de-privacidade"
            className="text-text-primary underline underline-offset-2 hover:text-neon"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={openPreferences}
            className="h-11 whitespace-nowrap border border-border-line px-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
          >
            Personalizar
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="h-11 whitespace-nowrap border border-border-line px-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
          >
            Recusar não essenciais
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="h-11 whitespace-nowrap border border-neon bg-neon px-5 font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wide text-white transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}

function CookiePreferencesPanel() {
  const { preferences, acceptAll, rejectNonEssential, savePreferences, closePreferences } = useCookieConsent();
  // Este componente só existe montado enquanto o painel está aberto (ver
  // CookieConsentProvider), então cada abertura já parte de `preferences` atual —
  // não precisa de efeito pra ressincronizar.
  const [draft, setDraft] = useState<ConsentPreferences>(preferences);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closePreferences();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closePreferences]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 sm:items-center sm:p-6"
      onClick={closePreferences}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-border-line bg-bg-pure p-7 outline-none sm:p-8"
      >
        <CornerMarks />
        <div className="flex items-start justify-between gap-4">
          <h2
            id="cookie-preferences-title"
            className="font-[family-name:var(--font-display)] font-bold text-xl uppercase tracking-tight text-text-primary"
          >
            Preferências de cookies
          </h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Fechar"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-line text-text-secondary transition-colors hover:border-neon hover:text-neon"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Escolha quais categorias de cookies você permite. Cookies essenciais não
          podem ser desativados — são necessários pro site funcionar. Veja detalhes na{" "}
          <a
            href="/politica-de-privacidade"
            className="text-text-primary underline underline-offset-2 hover:text-neon"
          >
            Política de Privacidade
          </a>
          .
        </p>

        <div className="mt-6 space-y-4">
          <ConsentToggle
            label="Essenciais"
            description="Necessários pro funcionamento do site (ex: lembrar sua escolha de cookies). Sempre ativos."
            checked
            disabled
          />
          <ConsentToggle
            label="Analytics"
            description="Ajudam a entender como o site é usado (ex: Google Analytics), de forma agregada."
            checked={draft.analytics}
            onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
          />
          <ConsentToggle
            label="Marketing"
            description="Usados pra personalizar anúncios e medir campanhas (ex: pixels de ads)."
            checked={draft.marketing}
            onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="h-11 whitespace-nowrap border border-border-line px-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
          >
            Recusar não essenciais
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="h-11 whitespace-nowrap border border-border-line px-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary transition-colors duration-[200ms] ease-in-out hover:border-neon hover:text-neon"
          >
            Salvar preferências
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="h-11 whitespace-nowrap border border-neon bg-neon px-5 font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wide text-white transition-colors duration-[200ms] ease-in-out hover:bg-black hover:text-neon"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}

function ConsentToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-4 border p-4 transition-colors duration-[200ms] ease-in-out ${
        checked ? "border-neon" : "border-border-line"
      } ${disabled ? "opacity-60" : "cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neon"}`}
    >
      <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-inherit bg-bg-pure">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        />
        {checked && <CheckIcon className="h-3.5 w-3.5 text-neon" aria-hidden />}
      </span>
      <span>
        <span className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-text-primary">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-6 text-text-secondary">{description}</span>
      </span>
    </label>
  );
}

export function ManageCookiesButton({ className = "" }: { className?: string }) {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      Gerenciar cookies
    </button>
  );
}
