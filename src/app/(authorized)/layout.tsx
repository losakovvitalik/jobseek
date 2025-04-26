import MobileHeader from '@/components/layout/mobile-header';
import MobileMenu from '@/components/layout/mobile-menu';
import { AppSidebar } from '@/shared/ui/app-sidebar';
import { SidebarProvider } from '@/shared/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full grid-rows-[auto_auto_auto] overflow-hidden lg:block">
      <MobileHeader />
      <SidebarProvider className="w-full overflow-auto">
        <AppSidebar />
        <main className="h-full w-full overflow-auto p-2 lg:w-full lg:h-svh">{children}</main>
      </SidebarProvider>
      <MobileMenu />
    </div>
  );
}
