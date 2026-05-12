import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SITE, getMetadataBase } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getMetadataBase();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `Transfer Sal Cabo Verde — ${SITE.locality} | Aeroporto, hotel e passeios`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Transfer Sal Cabo Verde na ilha do Sal: viagens aeroporto ↔ hotel, deslocações, tours e apoio a mobilidade reduzida. Marca por telefone ou WhatsApp — atendimento directo.",
  keywords: [
    SITE.primaryKeyword,
    "transfer ilha do sal",
    "transfer aeroporto sal",
    "taxi sal cabo verde",
    "táxi sal",
    "transfer santa maria",
    "aeroporto amílcar cabral transfer",
    "passeios sal cabo verde",
    "transporte sal ilha",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_CV",
    alternateLocale: ["pt_PT", "en"],
    url: siteUrl,
    siteName: SITE.name,
    title: `Transfer Sal Cabo Verde — ${SITE.locality}`,
    description:
      "Transfer na ilha do Sal (Cabo Verde): aeroporto, hotel, passeios e mobilidade reduzida. Contacto directo por telefone ou WhatsApp.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Transfer Sal Cabo Verde — ${SITE.locality}`,
    description:
      "Transfer na ilha do Sal: aeroporto, hotel e passeios. Marca por telefone ou WhatsApp.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "travel",
  /** Ícones: `app/icon.tsx` + `app/apple-icon.tsx` (Next injeta automaticamente). */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
