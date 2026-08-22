import { ChainIcon, WealthIcon } from "./icons";

export function HeroGraphic() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-sm items-center justify-center sm:h-[420px]">
      <div className="absolute h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute h-72 w-72 rounded-[3rem] border border-white/10" />
      <div className="absolute h-56 w-56 rounded-[2.5rem] border border-white/10" />

      <div className="absolute left-2 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d4a3f] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:left-0">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-deep">
          <WealthIcon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-white">Planejamento Financeiro</span>
      </div>

      <div className="absolute bottom-8 right-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d4a3f] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:right-0">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold">
          <ChainIcon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-white">Blockchain &amp; Web3</span>
      </div>

      <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-gold text-brand-deep">
        <TrailIcon className="h-11 w-11" />
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
      strokeWidth={1.5}
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
    <div className="relative mx-auto flex h-40 w-full max-w-xs items-center justify-center sm:h-48">
      <div className="absolute h-40 w-40 rounded-full bg-brand-gold/10 blur-2xl" />
      <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold ring-1 ring-brand-gold/30">
        <TrailIcon className="h-9 w-9" />
      </span>
    </div>
  );
}
