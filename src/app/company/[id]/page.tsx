'use client';
import PartnerCompanyIcon from '@/entities/company/ui/partner-company-icon';
import usePageTitle from '@/shared/hooks/use-page-title';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import Image from 'next/image';

const CompanyPage = () => {
  usePageTitle('Сбербанк');

  return (
    <div>
      <Card className="bg-secondary">
        <CardContent>
          <div className="flex items-center gap-4">
            <Image
              className="h-20 w-20 rounded-full object-cover"
              src={'/company-placeholder.png'}
              alt=""
              width={80}
              height={80}
            />
            <div>
              <div className="flex gap-2">
                <Typography size={'xl'}>Сбербанк</Typography>
                <PartnerCompanyIcon />
              </div>
              <Typography className="text-muted-foreground">
                Лидер в разработке искусственного интеллекта в России
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyPage;
