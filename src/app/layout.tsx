import { ThemeProvider } from '@/app/providers/theme-provider';
import type { Metadata, Viewport } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeHandler from './providers/theme-handler';

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
  description: 'Приложение для поиска вакансий и сотрудников',
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={'h-dvh max-h-dvh overflow-hidden'} lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} pb-safe-area !h-dvh antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeHandler>
            <SessionProvider>{children}</SessionProvider>
          </ThemeHandler>
        </ThemeProvider>
      </body>
    </html>
  );
}
