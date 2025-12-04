import type { Metadata } from 'next';
import './globals.generated.css';

export const metadata: Metadata = {
  title: 'Danilo – Portfolio',
  description: 'Design, não é só estética. É intenção, estratégia e experiência.',
};

import Header from '@/components/layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f5f7fb] text-slate-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
