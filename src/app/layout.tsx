import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Luiz Almeida — Frontend Engineer",
  description: "Frontend Engineer que transforma produtos complexos em experiências digitais claras, rápidas e memoráveis.",
  openGraph: {
    title: "Luiz Almeida — Frontend Engineer",
    description: "Código, produto e interface — com intenção em cada detalhe.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
