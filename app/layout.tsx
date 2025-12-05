import React from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Danilo Novais | Portfolio',
  description: 'Portfólio Institucional de Danilo Novais - Design, Estratégia e Experiência.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#F4F5F7] text-[#111111] font-sans selection:bg-[#0057FF] selection:text-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}