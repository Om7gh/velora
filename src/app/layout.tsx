import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Velora — Generate Your Portfolio Instantly',
  description:
    'Velora helps you create a stunning personal portfolio website in seconds. No coding required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
        <body
          className={`min-h-full flex flex-col bg-background text-foreground ${poppins.className}`}
          >
            <Providers>
              {children}
          </Providers>
        </body>
    </html>
  );
}
