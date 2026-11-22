import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const posts = [
  { title: "Investor Negotiations: Building Win‑Win Deals", category: "Funding" },
  { title: "Cap Table Clarity: Avoiding Common Pitfalls", category: "Growth" },
  { title: "Mastering Valuation: Key Metrics For Founders", category: "Investment" },
];

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-[1320px] px-4 pb-[120px] pt-[120px] xl:px-0">
      <div className="text-center">
        <SectionBadge variant="white">news &amp; Blogs</SectionBadge>
        <RevealHeading
          text="Insights from Our Venture Capital Blog"
          className="mx-auto mt-[3px] max-w-[700px] font-heading text-4xl font-semibold leading-tight text-brand-deep md:text-[56px] md:leading-[67px]"
        />
      </div>
      <ul className="mt-11 grid gap-[30px] lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.title} className="border-b-2 border-white pb-[30px]">
            <article>
              <div className="relative">
                <ImagePlaceholder label="Foto: artigo" className="h-[279px] rounded-t-[10px]" />
                <div className="absolute bottom-0 left-[30px] flex h-[75px] w-[81px] flex-col items-center justify-center rounded-t-[10px] bg-brand text-white">
                  <span className="font-body text-[30px] font-semibold leading-[30px]">09</span>
                  <span className="text-sm">Jul</span>
                </div>
              </div>
              <div className="flex gap-4 bg-[#e8e8e8] px-3 py-2 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-user" />
                  By rimon
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-folder-open" />
                  {post.category}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold leading-[34px] text-brand-deep">
                <a href="#blog" className="hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 text-base leading-[25.6px] text-muted">
                You Have Full Control of Your Fundraising Journey This service is best for our Full
              </p>
              <a
                href="#blog"
                className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold uppercase text-ink hover:text-brand"
              >
                Read More
                <i className="fa-solid fa-circle-arrow-right" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
