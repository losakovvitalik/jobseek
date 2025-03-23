import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import { Star } from 'lucide-react';
import CompanyAvatar from './company-avatar';
import PartnerCompanyIcon from './partner-company-icon';

const CompanyCard = () => {
  return (
    <Card className="h-full w-full">
      <CardContent>
        <div className="flex items-center gap-2">
          <CompanyAvatar src="/company-placeholder.png" />
          <Typography className="font-semibold">Сбербанк</Typography>
          <PartnerCompanyIcon />
        </div>
        <Typography className="text-muted-foreground mt-2" size={'xs'}>
          Лидер в разработке искусственного интеллекта в России
        </Typography>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Typography className='font-medium' size={'xs'}>4.67</Typography>
            <Star className="size-3 fill-white" />
          </div>
          <Typography className='text-[6px]'>&#9679;</Typography>
          <Typography className='font-medium' size={'xs'}>238</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
