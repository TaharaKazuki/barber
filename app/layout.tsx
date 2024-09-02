import type { Metadata, Viewport } from 'next';
import { Cormorant_Upright, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const cormorant_upright = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant_upright',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open_sans',
});

export const metadata: Metadata = {
  title: "Cut Only Barber's",
  description: "Mabashi Cut Only Barber's Home Page",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(`${cormorant_upright.variable} ${open_sans.variable}`)}
      >
        {children}
      </body>
    </html>
  );
}
