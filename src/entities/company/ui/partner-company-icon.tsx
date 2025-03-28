import { Tip } from '@/shared/ui/tip';
import { BadgeCheck } from 'lucide-react';

const PartnerCompanyIcon = () => {
  return (
    <Tip content={<p>Компания партнер</p>}>
      <BadgeCheck />
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

export default PartnerCompanyIcon;
