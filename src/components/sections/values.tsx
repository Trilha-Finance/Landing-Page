"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

// Diagram geometry, in viewBox units (the SVG scales to its container).
const VIEW = 400;
const C = VIEW / 2;
const CORE_R = 80; // central circle holding the logo
const RING_INNER = 102;
const RING_OUTER = 186;
const GAP = 9; // constant width of the straight gap between two segments
const ICON_SIZE = 38;

type Value = { number: string; name: string; text: string; icon: React.ReactNode };

// Icons are drawn on a 24×24 grid with a 1.5 stroke, so all five share one line weight.
const values: Value[] = [
  {
    number: "01",
    name: "Ética",
    text: "Agimos com integridade em cada recomendação, sempre no melhor interesse de quem confia em nós.",
    icon: (
      <>
        <path d="M12 3.5v16M8 19.5h8M5 6.5h14" />
        <path d="M5 6.5 2.5 12.5a2.5 2.5 0 0 0 5 0Z" />
        <path d="M19 6.5l-2.5 6a2.5 2.5 0 0 0 5 0Z" />
      </>
    ),
  },
  {
    number: "02",
    name: "Transparência",
    text: "Explicamos custos, riscos e decisões com clareza, sem letras miúdas.",
    icon: (
      <>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    number: "03",
    name: "Confidencialidade",
    text: "Suas informações patrimoniais são tratadas com sigilo e proteção rigorosos.",
    icon: (
      <>
        <path d="M12 2.5 4.5 5.5v6c0 4.5 3.2 8.4 7.5 10 4.3-1.6 7.5-5.5 7.5-10v-6Z" />
        <rect x="9" y="11" width="6" height="5" rx="1" />
        <path d="M10.25 11V9.5a1.75 1.75 0 0 1 3.5 0V11" />
      </>
    ),
  },
  {
    number: "04",
    name: "Renovação",
    text: "Revisamos o plano continuamente para acompanhar cada nova etapa da vida.",
    icon: (
      <>
        <path d="M19.5 12a7.5 7.5 0 0 1-13.1 5" />
        <path d="M4.5 12a7.5 7.5 0 0 1 13.1-5" />
        <path d="M17.8 3.2v3.9h-3.9M6.2 20.8v-3.9h3.9" />
      </>
    ),
  },
  {
    number: "05",
    name: "Evolução",
    text: "Buscamos crescimento consistente e sustentável, para indivíduos, famílias e empresas.",
    icon: (
      <>
        <path d="M3 20.5h18" />
        <path d="m3.5 16 5-5 3.5 3.5 7.5-8" />
        <path d="M15 6.5h4.5V11" />
      </>
    ),
  },
];

const point = (r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)] as const;
};
const fmt = (n: number) => n.toFixed(3);

/**
 * One annular sector per value, all built from the same rule: equal angular
 * share, first one centred at 12 o'clock, and edges pulled in by an angle that
 * keeps the gap the same width at every radius (so gaps read as parallel bands).
 */
const step = 360 / values.length;
const segments = values.map((_, i) => {
  const mid = -90 + i * step;
  const edge = (r: number) => (Math.asin(GAP / 2 / r) * 180) / Math.PI;
  const [oStart, oEnd] = [mid - step / 2 + edge(RING_OUTER), mid + step / 2 - edge(RING_OUTER)];
  const [iStart, iEnd] = [mid - step / 2 + edge(RING_INNER), mid + step / 2 - edge(RING_INNER)];
  const p = [point(RING_OUTER, oStart), point(RING_OUTER, oEnd), point(RING_INNER, iEnd), point(RING_INNER, iStart)];
  const d = [
    `M${fmt(p[0][0])} ${fmt(p[0][1])}`,
    `A${RING_OUTER} ${RING_OUTER} 0 0 1 ${fmt(p[1][0])} ${fmt(p[1][1])}`,
    `L${fmt(p[2][0])} ${fmt(p[2][1])}`,
    `A${RING_INNER} ${RING_INNER} 0 0 0 ${fmt(p[3][0])} ${fmt(p[3][1])}`,
    "Z",
  ].join(" ");
  const [ix, iy] = point((RING_INNER + RING_OUTER) / 2, mid);
  return { d, icon: { x: ix - ICON_SIZE / 2, y: iy - ICON_SIZE / 2 } };
});

// The logo PNG is a wordmark; only its square mountain mark (x 12–350, y 12–341
// of 1303×355) is shown in the core, cropped by the wrapper below.
const LOGO = { width: 1303, height: 355, markX: 12, markY: 12, markW: 338, markH: 329 };

export function Values() {
  const [active, setActive] = useState<number | null>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);

  // Tapping a ring segment selects its value. On mobile the list sits below the
  // diagram, so the selected description is also scrolled into view.
  const select = (i: number) => {
    const item = items.current[i];
    if (!item) return;
    item.focus({ preventScroll: true });
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="valores" className="px-3 pt-[60px] md:px-5">
      <div className="rounded-[30px] bg-white px-6 py-16 md:px-12 lg:py-[100px]">
        <div className="text-center">
          <SectionBadge>Nossos Valores</SectionBadge>
          <RevealHeading
            text="Os valores que guiam cada passo da sua trilha"
            className="mx-auto mt-[3px] max-w-[760px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
          />
        </div>

        <div className="mx-auto mt-[60px] grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-20">
          <div>
            <ol className="flex flex-col gap-2">
              {values.map((v, i) => (
                <li key={v.number}>
                  <button
                    ref={(el) => {
                      items.current[i] = el;
                    }}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    className={`flex w-full items-start gap-5 rounded-[20px] px-5 py-4 text-left transition-colors duration-300 ${
                      active === i ? "bg-mist" : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`mt-[5px] w-6 shrink-0 font-body text-sm font-bold tabular-nums tracking-[1.6px] transition-colors duration-300 ${
                        active === i ? "text-brand" : "text-muted"
                      }`}
                    >
                      {v.number}
                    </span>
                    <span>
                      <span className="block font-heading text-xl font-semibold leading-[30px] text-brand-deep">{v.name}</span>
                      <span className="mt-1 block text-base leading-[28px] text-muted">{v.text}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative order-first mx-auto aspect-square w-full max-w-[520px] lg:order-none">
            <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="size-full overflow-visible" role="img" aria-label="Valores da Trilha Finance: Ética, Transparência, Confidencialidade, Renovação e Evolução">
              {segments.map((s, i) => {
                const on = active === i;
                return (
                  <g
                    key={values[i].number}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => select(i)}
                    className="cursor-pointer"
                  >
                    <title>{values[i].name}</title>
                    <path
                      d={s.d}
                      strokeWidth={1}
                      strokeLinejoin="round"
                      className={`transition-[fill,stroke] duration-300 ${on ? "fill-brand stroke-brand" : "fill-white stroke-brand/15"}`}
                    />
                    <svg
                      x={s.icon.x}
                      y={s.icon.y}
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`pointer-events-none transition-[stroke] duration-300 ${on ? "stroke-lime" : "stroke-brand"}`}
                    >
                      {values[i].icon}
                    </svg>
                  </g>
                );
              })}
              <circle cx={C} cy={C} r={CORE_R} className="fill-white stroke-brand/15" strokeWidth={1} />
            </svg>

            {/* Logo mark, centred in the core with a safety margin (~62% of its diameter). */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[18%]"
              style={{ width: `${((CORE_R * 2 * 0.62) / VIEW) * 100}%`, aspectRatio: `${LOGO.markW} / ${LOGO.markH}` }}
            >
              <Image
                src="/images/logo.png"
                alt="Trilha Finance"
                width={LOGO.width}
                height={LOGO.height}
                className="absolute max-w-none"
                style={{
                  width: `${(LOGO.width / LOGO.markW) * 100}%`,
                  left: `${(-LOGO.markX / LOGO.markW) * 100}%`,
                  top: `${(-LOGO.markY / LOGO.markH) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
