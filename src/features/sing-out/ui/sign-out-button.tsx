'use client';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/shared/ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

const SignOutButton = ({ onClick, className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn('flex justify-start items-center gap-1 w-full', className)}
      onClick={(event) => {
        signOut();
        onClick?.(event);
      }}
      {...props}
    >
      <LogOut /> Выйти
    </Button>
  );
};

export default SignOutButton;
