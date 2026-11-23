import Image, { getImageProps } from "next/image";
import { PillLink } from "@/components/ui/pill-link";
import { Navbar } from "./navbar";

const bgCommon = { alt: "", fill: true, sizes: "100vw", loading: "eager", fetchPriority: "high" } as const;
const {
  props: { srcSet: desktopBg },
} = getImageProps({ ...bgCommon, src: "/images/hero/bg.jpg" });
const { props: mobileBg } = getImageProps({ ...bgCommon, src: "/images/hero/bg-mobile.jpg" });

export function Hero() {
  return (
    <section id="top" className="px-3 pt-3 md:px-5 md:pt-5">
      <div className="relative isolate overflow-hidden rounded-[30px] lg:min-h-[893px]">
        {/* Portrait photo on mobile, where the tall hero would crop the wide one to a narrow slice. */}
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopBg} />
          <img {...mobileBg} alt="" className="-z-20 object-cover" />
        </picture>
        <Image
          src="/images/hero/overlay.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 hidden object-cover md:block"
        />
        {/* Mobile stacks the copy over most of the photo, so its fade reaches up to the subheader. */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(19,67,67,0.3)_0%,rgba(19,67,67,0.45)_18%,rgba(19,67,67,0.88)_38%,rgba(19,67,67,0.92)_100%)] md:hidden" />
        <Navbar />

        <div className="flex flex-col px-6 pb-10 pt-40 md:px-[90px] md:pb-[90px] lg:min-h-[893px] lg:justify-end lg:pt-[200px]">
          {/* From lg up each span is kept on one line, so both texts read as exactly two lines. */}
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-white md:text-7xl lg:text-[min(95px,calc((100vw-240px)/17.5))]">
            <span className="lg:block lg:whitespace-nowrap">Seu patrimônio merece uma trilha, </span>
            <span className="lg:block lg:whitespace-nowrap">não um palpite.</span>
          </h1>

          <p className="mt-8 text-base leading-[30.4px] text-white md:mt-10">
            <span className="lg:block lg:whitespace-nowrap">
              Wealth Planning para famílias e empresários: olhamos para o seu patrimônio pessoal{" "}
            </span>
            <span className="lg:block lg:whitespace-nowrap">
              e para o da sua empresa como um todo, para planejar, investir, proteger e crescer, em uma só trilha.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-[938px] lg:flex-1">
              <PillLink href="#about" className="whitespace-nowrap">
                Saiba mais
              </PillLink>

              <hr className="mt-[33px] max-w-[938px] border-white/20" />

              <div className="mt-[45px] flex flex-wrap items-center gap-5">
                <Image src="/images/hero/avatars.png" alt="Clientes satisfeitos" width={160} height={40} />
                <span className="font-body text-[40px] font-semibold leading-10 text-white">99,3%</span>
                <div className="flex flex-col gap-1">
                  <Image src="/images/hero/stars.png" alt="5 estrelas" width={80} height={15} />
                  <span className="text-base leading-[30.4px] text-white">De retenção em nossos serviços de planejamento patrimonial</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[357px] shrink-0 rounded-[35px] bg-[rgba(224,224,224,0.25)] p-5 backdrop-blur-[5px]">
              <div className="relative h-[200px] overflow-hidden rounded-[25px]">
                <Image
                  src="/images/hero/video-thumb.png"
                  alt="Consultores trabalhando juntos"
                  fill
                  sizes="317px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-heading text-[19.2px] font-medium leading-[26.88px] text-white">
                  Wealth Planning
                  <br />
                  Trilha Finance
                </p>
                <div className="flex items-center gap-[38px]">
                  <Image src="/images/hero/divider.png" alt="" width={1} height={45} />
                  <Image
                    src="/images/hero/advisory-icon.svg"
                    alt=""
                    width={50}
                    height={50}
                    className="-scale-x-100 rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
