import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/shared/ui/header/header";
import { Footer } from "@/shared/ui/footer/footer";

import "@/shared/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Артём Узингер — Frontend-разработчик",
  description:
    "Frontend-разработчик с опытом коммерческой разработки. React, Next.js, TypeScript. Портфолио, опыт работы и реализованные проекты.",

  applicationName: "Артём Узингер. Портфолио",

  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Артём Узингер — Frontend-разработчик",
    description: "Портфолио frontend-разработчика: React, Next.js, TypeScript.",
    siteName: "Артём Узингер. Портфолио",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Портфолио frontend-разработчика",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Артём Узингер — Frontend-разработчик",
    description: "Портфолио frontend-разработчика: React, Next.js, TypeScript.",
    images: ["/og-image.jpg"],
  },

  icons: { icon: "/cv/favicon.ico", apple: "/cv/apple-icon.png" },
};

export const RootLayout = ({ children }: DefaultLayoutProps) => (
  <html lang="ru">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);
