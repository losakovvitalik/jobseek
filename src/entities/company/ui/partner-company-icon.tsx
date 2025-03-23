import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip';
import { BadgeCheck } from 'lucide-react';

const PartnerCompanyIcon = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <BadgeCheck />
        </TooltipTrigger>
        <TooltipContent>
          <p>Компания партнер</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PartnerCompanyIcon;
