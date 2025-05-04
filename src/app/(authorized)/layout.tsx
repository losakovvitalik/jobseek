import Header from '@/shared/ui/layout/header';
import MobileMenu from '@/shared/ui/layout/mobile-menu';
import ShadcnSidebarProvider from './providers/shadcn-sidebar-provider';

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShadcnSidebarProvider>
      <div className="grid h-full w-full grid-rows-[auto_1fr_auto] overflow-hidden">
        <Header />
        <main className="w-full overflow-auto p-2 lg:px-10 lg:py-4">{children}</main>
        <MobileMenu />
      </div>
    </ShadcnSidebarProvider>
  );
}
