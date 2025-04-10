import MobileHeader from '@/components/layout/mobile-header';
import MobileMenu from '@/components/layout/mobile-menu';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full grid-rows-[auto_calc(100%-var(--spacing-menu))_auto] overflow-hidden">
      <MobileHeader />
      <main className="h-full overflow-auto p-2">{children}</main>
      <MobileMenu />
    </div>
  );
}
