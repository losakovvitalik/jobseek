'use client';
import { paths } from '@/lib/paths';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import { BookOpen, Mail, Menu, Search, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenuLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  const pathname = usePathname();

  return (
    <Button
      className={cn('size-10', {
        'ring-ring/50 ring-[2px] border-gray-300': href === pathname,
      })}
      asChild
      size={'icon'}
      variant={'link'}
    >
      <Link href={href}>
        <Icon className="size-6" />
      </Link>
    </Button>
  );
};

const menuLinks = [
  { path: paths.searchLink, icon: Search, key: 'search' },
  { path: paths.postsLink, icon: BookOpen, key: 'posts' },
  { path: paths.jobsLink, icon: WalletCards, key: 'jobs' },
  { path: paths.chat.link, icon: Mail, key: 'chats' },
  { path: paths.menuLink, icon: Menu, key: 'menu' },
];

const MobileMenu = () => {
  const pathname = usePathname();

  if (pathname.split('/').length >= 3) {
    return null;
  }

  return (
    <div className="border-border h-menu bg-background z-10 grid grid-cols-5 items-center justify-items-center border-t px-4">
      {menuLinks.map((link) => (
        <MobileMenuLink key={link.key} href={link.path} icon={link.icon} />
      ))}
    </div>
  );
};

export default MobileMenu;
