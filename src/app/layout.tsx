import type { Metadata } from "next";
import { Inter, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import { CookieConsentProvider } from "../components/cookie-consent";
import { AnalyticsScripts } from "../components/analytics-scripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  weight: ["500", "700"],
  subsets: ["latin", "latin-ext"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trilha Finance",
  description:
    "Finanças tradicionais e tecnologia num só lugar: planejamento financeiro, wealth planning, desenvolvimento de software e blockchain.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${chakraPetch.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-base font-sans text-text-primary">
        <CookieConsentProvider>
          {children}
          <AnalyticsScripts />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
