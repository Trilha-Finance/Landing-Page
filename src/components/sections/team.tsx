import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const members = [
  { name: "Kathryn Murphy", role: "Managing Director, Ventiq" },
  { name: "Arlene McCoy", role: "Founder, Ventiq" },
  { name: "Leslie Alexander", role: "General Partner, VenturEdge" },
  { name: "Devon Lane", role: "Principal, Ventiq" },
];

export function Team() {
  return (
    <section id="team" className="relative z-10 p-3 pt-[120px] md:p-5 md:pt-[120px]">
      <div className="rounded-[30px] bg-white px-4 pb-[100px] pt-[120px]">
        <div className="text-center">
          <SectionBadge>Our Team</SectionBadge>
          <RevealHeading
            text="Our Experienced Advisory Team"
            className="mx-auto mt-[3px] max-w-[480px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
          />
        </div>
        <ul className="mx-auto mt-14 grid max-w-[1342px] gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((m) => (
            <li key={m.name} className="relative mx-auto w-full max-w-[315px]">
              <ImagePlaceholder label={`Foto: ${m.name}`} className="h-[355px] rounded-t-[20px]" />
              <div className="relative rounded-b-[20px] bg-white px-10 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <a
                  href="#contact"
                  aria-label={`Contact ${m.name}`}
                  className="absolute -top-5 right-5 grid size-10 place-items-center rounded-full bg-brand text-sm text-white"
                >
                  <i className="fa-solid fa-plus" />
                </a>
                <h3 className="font-heading text-2xl font-semibold leading-[34px] text-brand-deep">{m.name}</h3>
                <p className="mt-1 text-sm leading-[18px] text-muted">{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
