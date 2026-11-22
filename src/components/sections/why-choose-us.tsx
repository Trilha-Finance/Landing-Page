"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

// Only the Mission tab's copy exists in the Figma file; the other tabs reuse it
// until their own text is written.
const tabs = [
  { id: "mission", label: "Mission", title: "Our Mission" },
  { id: "vision", label: "Vision", title: "Our Vision" },
  { id: "philosophy", label: "Philosophy", title: "Our Philosophy" },
  { id: "achievement", label: "Achievement", title: "Our Achievement" },
];

const points = ["Protecting your company", "We offer you solutions", "we take care of you"];

const stats = [
  { value: 90, label: "Success Rate", ring: "/images/why/ring-90.png" },
  { value: 80, label: "Business Growth", ring: "/images/why/ring-80.png" },
];

export function WhyChooseUs() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="p-3 pt-[110px] md:p-5 md:pt-[110px]">
      <div className="grid overflow-hidden rounded-[30px] bg-white lg:grid-cols-[46%_1fr]">
        <div className="relative min-h-[480px]">
          <Image
            src="/images/why/photo.png"
            alt="Advisor and founder reviewing a plan on a laptop"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 right-0 flex h-[320px] w-[min(41%,355px)] min-w-[260px] flex-col items-center overflow-hidden rounded-tl-[30px] bg-[rgba(214,214,214,0.29)] pt-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-[5px]">
            <span className="grid h-28 w-28 place-items-start justify-center rounded-[56px] bg-lime pt-[26px]">
              <Image src="/images/why/award-icon.svg" alt="" width={60} height={60} className="-scale-y-100" />
            </span>
            <p className="mt-[11px] text-center font-heading text-[29.9px] font-medium leading-[41.89px] text-white">
              Best VC
              <br />
              Consulting Firm
              <br />
              Award
            </p>
          </div>
        </div>

        <div className="px-6 py-16 lg:py-[100px] lg:pl-[110px] lg:pr-[150px]">
          <SectionBadge>Why Choose Us</SectionBadge>
          <RevealHeading
            text="Trusted Partner for Strategic Capital Advisory"
            className="mt-[3px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
          />

          <div
            role="tablist"
            aria-label="About our firm"
            className="mt-10 grid grid-cols-2 gap-2 rounded-[30px] bg-mist p-2.5 sm:grid-cols-4 sm:rounded-[100px]"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`h-[60px] rounded-[100px] border text-sm capitalize tracking-[1.008px] transition-colors ${
                  active === t.id
                    ? "border-[#dee2e6] bg-[linear-gradient(99deg,#0e3a37_0%,#3b8b8a_93.92%)] text-white"
                    : "border-transparent text-ink hover:bg-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="mt-10">
            <h3 className="font-heading text-2xl font-semibold leading-[33.6px] text-brand-deep">{tab.title}</h3>
            <p className="mt-5 max-w-[620px] font-heading text-[19.2px] leading-[35px] text-muted">
              everyone with high and useful reward for his/her trading, purchase investment to make
              the Collabo
            </p>
            <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <ul className="flex flex-col gap-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-xl leading-[38px] text-ink">
                    <Image src="/images/why/check.svg" alt="" width={16} height={24} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex gap-[52px]">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <div className="relative size-[150px]">
                      <span className="absolute inset-[35px] grid place-items-center rounded-[80px] bg-white text-xl text-ink">
                        <span>
                          {s.value}
                          <span className="text-base">%</span>
                        </span>
                      </span>
                      <Image src={s.ring} alt="" width={150} height={150} className="absolute inset-0" />
                    </div>
                    <p className="mt-1 font-heading text-[19.2px] font-medium leading-[26.88px] text-brand-deep">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
