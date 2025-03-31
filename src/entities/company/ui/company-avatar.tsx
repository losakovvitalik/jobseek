import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

export interface CompanyAvatarProps {
  src: string;
  className?: string;
}

const companyAvatarVariants = cva('size-12 rounded-full object-cover', {
  variants: {
    size: {
      xs: 'size-4',
      sm: 'size-6',
      md: 'size-8',
      lg: 'size-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const CompanyAvatar = ({
  className,
  size,
  src,
}: CompanyAvatarProps & VariantProps<typeof companyAvatarVariants>) => {
  return (
    <Image
      className={cn(
        companyAvatarVariants({
          className: className,
          size,
        }),
      )}
      src={src}
      alt=""
      width={96}
      height={96}
    />
  );
};

export default CompanyAvatar;
