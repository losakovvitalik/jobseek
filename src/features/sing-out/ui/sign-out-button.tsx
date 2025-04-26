'use client';

import { signOut } from '@/auth';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/shared/ui/button';
import { LogOut } from 'lucide-react';

const SignOutButton = ({ onClick, className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn('flex items-center gap-1', className)}
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
