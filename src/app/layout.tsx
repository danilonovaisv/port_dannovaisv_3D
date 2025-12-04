import React from "react";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BRAND_ASSETS } from "../config/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danilo Novais — Portfólio",
  description:
    "Portfólio de Danilo Novais Vilela — design, estratégia e experiências digitais imersivas.",
  icons: {
    icon: BRAND_ASSETS.favicons.color,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#F4F5F7] text-[#111111] font-sans selection:bg-[#0057FF] selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
