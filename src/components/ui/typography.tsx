import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const typographyVariants = cva('', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg font-medium',
      xl: 'text-xl font-medium'
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface TypographyProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof typographyVariants>,
    PropsWithChildren {
  asChild?: boolean;
}

const Typography = ({ asChild, className, size, ...props }: TypographyProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          size,
        }),
      )}
      {...props}
    />
  );
};

export default Typography;
