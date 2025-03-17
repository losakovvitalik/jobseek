'use client';
import { cn } from '@/lib/utils';
import { List, Newspaper, Search, User, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

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
        'ring-ring/50 ring-[2px]': href === pathname,
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
  { path: '/search', icon: Search, key: 'search' },
  { path: '/posts', icon: Newspaper, key: 'posts' },
  { path: '/jobs', icon: WalletCards, key: 'jobs' },
  { path: '/messages', icon: List, key: 'messages' },
  { path: '/me', icon: User, key: 'me' },
];

const MobileMenu = () => {
  return (
    <div className="border-border grid grid-cols-5 items-center justify-items-center border-t px-4">
      {menuLinks.map((link) => (
        <MobileMenuLink key={link.key} href={link.path} icon={link.icon} />
      ))}
    </div>
  );
};

export default MobileMenu;
