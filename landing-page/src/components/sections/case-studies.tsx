"use client";

import Image from "next/image";
import { useRef } from "react";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const cases = [
  { title: "Consumer Tech", tag: "VC-Backed Scale-Up", image: "/images/cases/case-1.png" },
  { title: "Orion Capital", tag: "Seed-to-Series A", image: "/images/cases/case-2.png" },
  { title: "Fintech Scale-Up", tag: "VC-Backed Scale-Up", image: "/images/cases/case-3.png" },
];

const marquee = ["Fundraising", "Due Diligence", "Growth Equity", "Exit Planning"];

export function CaseStudies() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: direction * ((card?.clientWidth ?? 586) + 30), behavior: "smooth" });
  };

  return (
    <section id="cases" className="relative pt-[120px]">
      <Image
        src="/images/cases/deco-small.png"
        alt=""
        width={64}
        height={64}
        className="absolute left-[110px] top-[341px] hidden 2xl:block"
      />

      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between xl:px-0">
        <div className="max-w-[640px]">
          <SectionBadge variant="white">Case Studies</SectionBadge>
          <RevealHeading
            text="We Invest in Founders Building the Future"
            className="mt-[3px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
          />
        </div>
        <div className="flex gap-3 md:pb-[21px]">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scroll(dir)}
              aria-label={dir === -1 ? "Previous case study" : "Next case study"}
              className="grid size-[60px] place-items-center rounded-[60px] border border-[#d9d9d9] bg-transparent transition-colors hover:bg-white"
            >
              <Image
                src={dir === -1 ? "/images/cases/prev.svg" : "/images/cases/next.svg"}
                alt=""
                width={21}
                height={24}
                className="-scale-y-100"
              />
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar mt-[39px] flex snap-x snap-mandatory gap-[30px] overflow-x-auto pb-6 pl-[max(16px,calc((100vw-1320px)/2))] pr-4"
      >
        {cases.map((c) => (
          <li key={c.title} className="relative h-[495px] w-[min(586px,85vw)] shrink-0 snap-start">
            <div className="relative h-[435px] overflow-hidden rounded-[20px]">
              <Image src={c.image} alt={c.title} fill sizes="586px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,68,67,0)] to-brand-teal" />
            </div>
            <div className="absolute inset-x-[30px] top-[365px] h-[129px] overflow-hidden rounded-t-[10px] bg-white md:inset-x-[60px]">
              <Image
                src="/images/cases/card-shape.png"
                alt=""
                width={96}
                height={102}
                className="absolute left-[52%] top-[8%] h-[79%] w-auto"
              />
              <div className="relative flex h-full items-center justify-between px-[25px] pb-[5px]">
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-6 text-ink md:text-2xl">{c.title}</h3>
                  <p className="mt-3 text-base leading-[21px] text-muted">{c.tag}</p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Read the ${c.title} case study`}
                  className="grid size-[60px] shrink-0 place-items-center rounded-[10px] bg-brand transition-colors hover:bg-brand-teal"
                >
                  <Image src="/images/icons/arrow-up-right-white.svg" alt="" width={23} height={23} />
                </a>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[5px] rounded-[20px] bg-gradient-to-r from-lime from-[0.58%] to-brand" />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[90px] overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {[...marquee, ...marquee].map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="whitespace-nowrap px-[60px] font-heading text-5xl leading-[63px] text-white">
                    {word}
                  </span>
                  <Image src="/images/marquee/star.svg" alt="" width={52} height={52} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
