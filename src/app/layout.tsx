import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
