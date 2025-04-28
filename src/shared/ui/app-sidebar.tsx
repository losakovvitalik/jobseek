import { ChevronUp, Inbox, Mail, Menu, Search, User2, WalletCards } from 'lucide-react';

import { auth } from '@/auth';
import SignOutButton from '@/features/sing-out/ui/sign-out-button';
import ToggleThemeButton from '@/features/toggle-theme/ui/toggle-theme-button';
import { paths } from '@/lib/paths';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import Link from 'next/link';

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

export async function AppSidebar() {
  const session = await auth();
  const imageUrl = session?.user.photo?.url;

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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {imageUrl ? <Image width={24} height={24} src={imageUrl} alt="" /> : <User2 />}{' '}
                  {session?.user.name}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top">
                <DropdownMenuItem className="cursor-pointer p-0">
                  <ToggleThemeButton className="h-9 w-full px-2" />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer p-0">
                  <SignOutButton className="!py-0" size={'sm'} variant={'ghost'} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
