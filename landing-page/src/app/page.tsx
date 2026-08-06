import { ContactSection } from "../components/contact-section";
import { FooterSection } from "../components/footer-section";
import { Navbar } from "../components/navbar";
import { NewsletterSection } from "../components/newsletter-section";

export default function Home() {
  return (
    <main className="w-full bg-[#083C33] text-white">
      <Navbar />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
