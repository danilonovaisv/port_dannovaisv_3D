import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Danilo – Portfolio',
  description: 'Design, não é só estética. É intenção, estratégia e experiência.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f5f7fb] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}