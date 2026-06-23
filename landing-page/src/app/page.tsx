import { ContactSection } from "../components/contact-section";
import { FooterSection } from "../components/footer-section";

export default function Home() {
  return (
    <main className="w-full bg-[#083C33] text-white">
      <ContactSection />
      <FooterSection />
    </main>
  );
}
