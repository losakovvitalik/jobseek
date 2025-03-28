import MobileHeader from '@/components/layout/mobile-header';
import MobileMenu from '@/components/layout/mobile-menu';
import { ThemeProvider } from '@/components/providers/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JobSeek',
  description: 'JobSeek App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} h-dvh antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <MobileHeader />
            <main className="overflow-auto p-2">{children}</main>
            <MobileMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
