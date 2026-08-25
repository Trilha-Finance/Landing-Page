import { ApproachSection } from "../components/approach-section";
import { ClosingCtaSection } from "../components/closing-cta-section";
import { ContactSection } from "../components/contact-section";
import { FaqSection } from "../components/faq-section";
import { FooterSection } from "../components/footer-section";
import { HeroSection } from "../components/hero-section";
import { HighlightBannerSection } from "../components/highlight-banner-section";
import { Navbar } from "../components/navbar";
import { NewsletterSection } from "../components/newsletter-section";
import { PillarsSection } from "../components/pillars-section";
import { ServicesSection } from "../components/services-section";
import { StatementSection } from "../components/statement-section";
import { SupportSection } from "../components/support-section";
import { TechMarqueeSection } from "../components/tech-marquee-section";
import { TestimonialsSection } from "../components/testimonials-section";

export default function Home() {
  return (
    <main className="w-full bg-bg-base text-text-primary">
      <Navbar />
      <HeroSection />
      <StatementSection />
      <TechMarqueeSection />
      <PillarsSection />
      <ApproachSection />
      <ServicesSection />
      <HighlightBannerSection />
      <TestimonialsSection />
      <SupportSection />
      <FaqSection />
      <ClosingCtaSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
