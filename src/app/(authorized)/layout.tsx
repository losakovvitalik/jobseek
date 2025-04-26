import { AppSidebar } from '@/shared/ui/app-sidebar';
import Header from '@/shared/ui/layout/header';
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
      <div className="grid h-screen w-full grid-rows-[auto_1fr_auto] overflow-hidden">
        <Header />
        <main className="w-full overflow-auto p-2 lg:px-10 lg:py-4">
          {children}
        </main>
        <MobileMenu />
      </div>
    </SidebarProvider>
  );
}
