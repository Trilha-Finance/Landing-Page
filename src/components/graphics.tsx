import { ChainIcon, WealthIcon } from "./icons";
import { BlinkingCursor, StatusDot } from "./chrome";

export function HeroGraphic() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-sm items-center justify-center border border-border-line sm:h-[420px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-line) 1px, transparent 1px), linear-gradient(90deg, var(--border-line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute h-64 w-64 rounded-full bg-neon/10 blur-3xl" />
      <div className="absolute h-72 w-72 rotate-45 border border-border-line" />
      <div className="absolute h-56 w-56 rotate-12 border border-neon/20" />

      <div className="absolute left-2 top-6 flex items-center gap-3 border border-border-line bg-black px-4 py-3 sm:left-0">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-neon/40 text-neon">
          <WealthIcon className="h-4 w-4" />
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
          Planejamento Financeiro
        </span>
      </div>

      <div className="absolute bottom-8 right-2 flex items-center gap-3 border border-border-line bg-black px-4 py-3 sm:right-0">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-line text-text-secondary">
          <ChainIcon className="h-4 w-4" />
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide text-text-primary">
          Blockchain &amp; Web3
        </span>
      </div>

      <span className="relative flex h-24 w-24 items-center justify-center border border-neon bg-black text-neon">
        <TrailIcon className="h-11 w-11" />
      </span>

      <span className="absolute bottom-2 left-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-text-secondary">
        <StatusDot className="mr-1.5 align-middle" />
        SYS_TRILHA
        <BlinkingCursor className="ml-0.5" />
      </span>
    </div>
  );
}

export function TrailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 19c3-1 3-4 6-5s3-4 6-5 4-1 4-4" strokeDasharray="0.5 3.2" />
      <circle cx="4" cy="19" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BannerGraphic() {
  return (
    <div className="relative mx-auto flex h-40 w-full max-w-xs items-center justify-center border border-border-line sm:h-48">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-line) 1px, transparent 1px), linear-gradient(90deg, var(--border-line) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute h-40 w-40 rounded-full bg-neon/10 blur-2xl" />
      <span className="relative flex h-20 w-20 items-center justify-center border border-neon/50 text-neon">
        <TrailIcon className="h-9 w-9" />
      </span>
    </div>
  );
}
