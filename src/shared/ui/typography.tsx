import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const typographyVariants = cva('', {
  variants: {
    size: {
      default: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg font-medium',
      xl: 'text-xl font-medium',
      '2xl': 'text-2xl font-medium',
      '3xl': 'text-3xl font-medium',
    },
    variant: {
      subtitle: 'text-xl font-bold',
      muted: 'text-muted-foreground',
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

const Typography = ({ asChild, className, size, variant, ...props }: TypographyProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        typographyVariants({
          className,
          size,
          variant,
        }),
      )}
      {...props}
    />
  );
};

export default Typography;
