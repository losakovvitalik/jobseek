import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface MenuPageLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ElementType;
}

const MenuPageLink = ({ children, href, className, icon: Icon }: MenuPageLinkProps) => {
  return (
    <Link
      className={cn(
        'border-border flex h-10 items-center justify-center gap-2 rounded-lg border-2 border-b-4 font-semibold',
        className,
      )}
      href={href}
    >
      {Icon && <Icon className={'size-4'} />}
      {children}
    </Link>
  );
};

export default MenuPageLink;
