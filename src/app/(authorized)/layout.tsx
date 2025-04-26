import { AppSidebar } from '@/shared/ui/app-sidebar';
import MobileHeader from '@/shared/ui/layout/mobile-header';
import MobileMenu from '@/shared/ui/layout/mobile-menu';
import { SidebarProvider } from '@/shared/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="grid h-full w-full grid-rows-[auto_1fr_auto] overflow-hidden">
        <MobileHeader />
        <main className="w-full overflow-auto p-2 lg:h-[calc(100vh-64px)] lg:px-10 lg:py-4">
          {children}
        </main>
        <MobileMenu />
      </div>
    </SidebarProvider>
  );
}
