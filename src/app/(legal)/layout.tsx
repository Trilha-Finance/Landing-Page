import Image from "next/image";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-clip">
      {/* A strip of the home hero photo, so the glass navbar looks the same as on the home page. */}
      <header id="top" className="p-3 md:p-5">
        <div className="relative isolate overflow-hidden rounded-[30px] p-3 md:p-5">
          <Image
            src="/images/hero/bg.jpg"
            alt=""
            fill
            sizes="100vw"
            preload
            className="-z-20 object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 -z-10 bg-[rgba(19,67,67,0.3)]" />
          <Navbar base="/" floating={false} />
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}
