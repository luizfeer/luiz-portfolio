import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--ff-display",
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--ff-mono",
  weight: ["400", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--ff-body",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Luiz Almeida – Frontend Engineer",
  description: "Portfólio de Luiz Almeida, Frontend Engineer especializado em Vue, React, TypeScript e interfaces modernas.",
  openGraph: {
    title: "Luiz Almeida – Frontend Engineer",
    description: "Interfaces modernas, responsivas e intuitivas com Vue, React e boas práticas de UI/UX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${spaceMono.variable} ${lora.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
