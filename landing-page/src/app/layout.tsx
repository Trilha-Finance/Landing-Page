import type { Metadata } from "next";
import { Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
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
      className={`${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-base font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
