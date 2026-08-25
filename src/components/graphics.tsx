import Image from "next/image";
import { CornerMarks } from "./chrome";
import { ChartIcon } from "./icons";
import heroTerminal from "../assets/hero/wireframe-terminal.png";

const BARCODE_HEIGHTS = [14, 22, 10, 26, 16, 12, 24, 18, 10, 20];

function CrosshairMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
      <rect x="7" y="7" width="10" height="10" />
    </svg>
  );
}

function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 text-text-secondary ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M4.5 7h15M4.5 17h15" />
    </svg>
  );
}

function Barcode() {
  return (
    <div className="flex items-end gap-[2px]" aria-hidden>
      {BARCODE_HEIGHTS.map((h, i) => (
        <span key={i} className="w-[2px] bg-text-secondary" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

export function HeroPortrait() {
  return (
    <div className="relative aspect-square w-full overflow-hidden border border-border-line bg-bg-pure">
      <Image
        src={heroTerminal}
        alt="Ilustração wireframe de um terminal de computador retrô"
        fill
        className="object-cover"
        priority
      />

      <div
        aria-hidden
        className="animate-cybr-scan absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-neon/15 to-transparent"
      />

      <div className="absolute left-4 top-4 flex flex-col gap-2">
        <CrosshairMark />
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase leading-tight text-text-secondary">
          &gt;RENDERING...
          <br />
          <span className="text-neon">87%</span>
        </p>
      </div>

      <GlobeMark className="absolute right-4 top-4" />

      <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-col items-start gap-2">
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-neon">
          /01
        </span>
        <Barcode />
      </div>

      <div className="absolute bottom-16 right-4 border border-neon/40 bg-bg-pure/80 px-3 py-2">
        <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase leading-relaxed text-neon">
          X_36.1749
          <br />
          Y_-86.7676
          <br />
          Z_46.6827
        </p>
      </div>

      <span className="absolute bottom-3 right-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-text-secondary">
        {"//SCN_01"}
      </span>

      <CornerMarks />
    </div>
  );
}

// Placeholder até termos uma ilustração wireframe encomendada no mesmo estilo dos outros
// serviços (ver src/assets/services/) — trocar por Image quando o asset existir.
export function DataAnalyticsGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-bg-pure ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-line) 1px, transparent 1px), linear-gradient(90deg, var(--border-line) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <ChartIcon className="relative h-24 w-24 text-neon" />
      <span className="absolute bottom-3 right-3 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wide text-text-secondary">
        {"//DATA_VIZ"}
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
