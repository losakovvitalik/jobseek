'use client';

import { AppSidebar } from '@/shared/ui/app-sidebar';
import { SidebarProvider } from '@/shared/ui/sidebar';

export default function ShadcnSidebarProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="h-full">
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
