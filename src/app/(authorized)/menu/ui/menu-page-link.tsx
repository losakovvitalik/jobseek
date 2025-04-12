import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface MenuPageLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

const MenuPageLink = ({ children, href, className }: MenuPageLinkProps) => {
  return (
    <Link
      className={cn(
        'border-border h-10 rounded-lg border-2 border-b-4 font-semibold flex items-center justify-center',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuPageLink;
