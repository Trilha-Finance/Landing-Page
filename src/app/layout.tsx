import type { Metadata } from "next";
import { DM_Sans, Mona_Sans } from "next/font/google";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import { CookieConsentBanner } from "@/components/cookies/cookie-consent";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trilha Finance",
  description:
    "Apoiamos fundadores e investidores com consultoria estratégica em venture capital, captação de recursos, due diligence e assessoria para crescimento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${monaSans.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
