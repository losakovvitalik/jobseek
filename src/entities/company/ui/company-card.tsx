import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import { Star } from 'lucide-react';
import Link from 'next/link';
import CompanyAvatar from './company-avatar';
import CompanyPartnerIcon from './company-partner-icon';

const CompanyCard = () => {
  return (
    <Card className="h-full w-full">
      <CardContent>
        <Link href={'/company/34'} className="flex items-center gap-2">
          <CompanyAvatar src="/company-placeholder.png" />
          <Typography className="font-semibold">Сбербанк</Typography>
          <CompanyPartnerIcon />
        </Link>
        <Typography className="text-muted-foreground mt-2" size={'xs'}>
          Ведущий банк России основанный в 1864 году. Лидер в IT сфере и разработке искусственного
          интеллекта в России.
        </Typography>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Typography className="font-medium" size={'xs'}>
              4.67
            </Typography>
            <Star className="size-3 fill-white" />
          </div>
          <Typography className="text-[6px]">&#9679;</Typography>
          <Typography className="font-medium" size={'xs'}>
            238
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
