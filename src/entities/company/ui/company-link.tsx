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
    <div className={'flex gap-1'}>
      <Link href={'/company/34'} className={cn('flex items-center gap-2', className)}>
        <CompanyAvatar className={'size-6'} src="/company-placeholder.png" />
        <Typography className="font-semibold">Сбербанк</Typography>
      </Link>
      <CompanyPartnerIcon />
    </div>
  );
};

export default CompanyLink;
