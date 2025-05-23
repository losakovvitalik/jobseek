'use client';
import { paths } from '@/lib/paths';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import { BookOpen, Mail, Menu, Search, WalletCards } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

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
        'ring-ring/50 border-gray-300 ring-[2px]': href === pathname,
      })}
      asChild
      size={'icon'}
      variant={'link'}
    >
      <MotionLink
        href={href}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15 }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <Icon className="size-6" />
      </MotionLink>
    </Button>
  );
};

const menuLinks = [
  { path: paths.searchLink, icon: Search, key: 'search' },
  { path: paths.posts.link, icon: BookOpen, key: 'posts' },
  { path: paths.vacancies.link, icon: WalletCards, key: 'jobs' },
  { path: paths.chat.link, icon: Mail, key: 'chats' },
  { path: paths.menuLink, icon: Menu, key: 'menu' },
];

const MobileMenu = () => {
  const pathname = usePathname();

  if (pathname.split('/').length >= 3) {
    return null;
  }

  return (
    <div className="border-border h-menu bg-background z-10 grid grid-cols-5 items-center justify-items-center border-t px-4 lg:hidden">
      {menuLinks.map((link) => (
        <MobileMenuLink key={link.key} href={link.path} icon={link.icon} />
      ))}
    </div>
  );
};

export default MobileMenu;
