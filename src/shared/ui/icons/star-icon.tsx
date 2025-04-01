import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export interface StarIconProps {
  className?: string;
}

const StarIcon = ({ className }: StarIconProps) => {
  return <Star className={cn('size-4 fill-yellow-400 stroke-yellow-400', className)} />;
};

export default StarIcon;
