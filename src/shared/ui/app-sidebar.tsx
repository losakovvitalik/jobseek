import { Inbox, Mail, Menu, Search, WalletCards } from 'lucide-react';

import { paths } from '@/lib/paths';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';

const items = [
  {
    title: 'Вакансии',
    url: paths.vacancies.link,
    icon: WalletCards,
  },
  {
    title: 'Новости',
    url: paths.posts.link,
    icon: Inbox,
  },
  {
    title: 'Сообщения',
    url: paths.chat.link,
    icon: Mail,
  },
  {
    title: 'Поиск',
    url: paths.searchLink,
    icon: Search,
  },
  {
    title: 'Меню',
    url: paths.menuLink,
    icon: Menu,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>JobSeek</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
