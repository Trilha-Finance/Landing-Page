"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

type Billing = "monthly" | "yearly";

// Yearly prices are not in the design yet: they are shown as 10x monthly
// (two months free) until real values are decided.
const plans = [
  { name: "Starter Plan", monthly: 199, featured: false },
  { name: "Growth Plan", monthly: 210, featured: true },
  { name: "Enterprise Plan", monthly: 150, featured: false },
];

const features = [
  "Unlimited features",
  "Multi language content",
  "30 Days free trial features",
  "Data backup and recovery",
  "Updates via dashboard & slack",
  "Synced to cloud database",
];

const perks = ["Get 30 Day Free Trial", "No Any Hidden Fees Pay", "You Can Cancel Anytime"];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="mx-auto max-w-[1320px] px-4 pt-[120px] xl:px-0">
      <div className="text-center">
        <SectionBadge variant="white">Pricing Plan</SectionBadge>
        <RevealHeading
          text="Our VC Consulting Plans for Founders & Investors"
          className="mx-auto mt-[3px] max-w-[757px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
        />
        <div className="mt-6 inline-flex rounded-[40px] bg-white" role="group" aria-label="Billing period">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={billing === b}
              onClick={() => setBilling(b)}
              className={`h-[62px] rounded-[40px] px-9 text-base capitalize transition-colors ${
                billing === b ? "bg-ink text-white" : "text-ink"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-[61px] grid gap-[30px] lg:grid-cols-3">
        {plans.map((plan) => {
          const price = billing === "monthly" ? plan.monthly : plan.monthly * 10;
          const dark = plan.featured;
          return (
            <li
              key={plan.name}
              className={`relative overflow-hidden rounded-[20px] border p-[50px] ${
                dark ? "border-brand bg-brand text-white" : "border-[#eee] bg-white"
              }`}
            >
              {dark ? (
                <span className="absolute -right-[42px] top-[26px] w-[170px] rotate-45 bg-lime py-1 text-center text-xs font-semibold uppercase tracking-wide text-brand">
                  recommend
                </span>
              ) : null}
              <div className={`border-b pb-[38px] ${dark ? "border-white/15" : "border-[#e8eaf1]"}`}>
                <i className={`fa-brands fa-artstation text-[60px] leading-[60px] ${dark ? "text-lime" : "text-brand"}`} />
                <p className={`mt-6 flex items-baseline font-bold ${dark ? "text-white" : "text-brand-deep"}`}>
                  <span className="text-lg">$</span>
                  <span className="text-5xl leading-[63px]">{price}</span>
                  <span className={`ml-1 text-base font-normal ${dark ? "text-white/70" : "text-[#6b7280]"}`}>
                    /{billing === "monthly" ? "Monthly" : "Yearly"}
                  </span>
                </p>
                <h3 className={`mt-[11px] font-heading text-2xl font-semibold leading-[33.6px] ${dark ? "text-white" : "text-brand-deep"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-[11px] text-sm leading-[14px] ${dark ? "text-white/70" : "text-muted"}`}>
                  Customized anything in anytime
                </p>
              </div>
              <ul className="flex flex-col gap-[10px] pt-[18px]">
                {features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-base leading-[30.4px] ${dark ? "text-white/80" : "text-muted"}`}>
                    <span className="relative size-5 shrink-0">
                      {dark ? (
                        // Same check icon, tinted lime so it reads on the dark card.
                        <span className="absolute inset-[12%] bg-lime [mask:url(/images/pricing/check.svg)_center/contain_no-repeat]" />
                      ) : (
                        <Image src="/images/pricing/check.svg" alt="" fill className="!inset-[12%] !size-[76%]" />
                      )}
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 flex h-[59px] items-center justify-center rounded-[48px] text-sm font-semibold uppercase tracking-[0.7px] transition-colors ${
                  dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-lime text-brand hover:bg-[#b5f08f]"
                }`}
              >
                choose plan
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="mt-10 flex flex-wrap justify-center gap-x-[25px] gap-y-3">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-2 text-base leading-[30.4px] text-muted">
            <Image src="/images/pricing/check-small.svg" alt="" width={18} height={18} />
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
