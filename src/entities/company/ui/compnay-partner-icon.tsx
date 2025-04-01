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
    // <TooltipProvider>
    //   <Tooltip>
    //     <TooltipTrigger asChild>
    //       <BadgeCheck />
    //     </TooltipTrigger>
    //     <TooltipContent>
    //       <p>Компания партнер</p>
    //     </TooltipContent>
    //   </Tooltip>
    // </TooltipProvider>
  );
};

export default CompanyPartnerIcon;
