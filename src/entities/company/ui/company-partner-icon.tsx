import { Tip } from '@/shared/ui/tip';
import { BadgeCheck } from 'lucide-react';

export interface CompanyPartnerIconProps {
  className?: string;
}

const CompanyPartnerIcon = ({ className }: CompanyPartnerIconProps) => {
  return (
    <Tip content={<p>Компания партнер</p>}>
      <BadgeCheck className={className} />
    </Tip>
  );
};

export default CompanyPartnerIcon;
