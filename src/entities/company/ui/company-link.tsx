import { cn } from '@/lib/utils';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';
import CompanyAvatar from './company-avatar';
import CompanyPartnerIcon from './company-partner-icon';

export interface CompanyLinkProps {
  className?: string;
}

const CompanyLink = ({ className }: CompanyLinkProps) => {
  return (
    <Link href={'/company/34'} className={cn('flex items-center gap-2', className)}>
      <CompanyAvatar src="/company-placeholder.png" />
      <Typography className="font-semibold">Сбербанк</Typography>
      <CompanyPartnerIcon />
    </Link>
  );
};

export default CompanyLink;
