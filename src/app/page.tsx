import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Footer } from "@/components/sections/footer";
import { Services } from "@/components/sections/services";
import { Values } from "@/components/sections/values";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Values />
      <Services />
      <HowItWorks />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
