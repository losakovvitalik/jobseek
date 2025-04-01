'use client';
import CompanyPartnerIcon from '@/entities/company/ui/compnay-partner-icon';
import CompanyProfileTabs from '@/features/company/profile/ui/company-profile-tabs';
import usePageTitle from '@/shared/hooks/use-page-title';
import StarIcon from '@/shared/ui/icons/star-icon';
import Typography from '@/shared/ui/typography';
import ProfileCard from '@/widgets/profile/ui/profile-card';
import { Circle } from 'lucide-react';

const CompanyPage = () => {
  usePageTitle('Сбербанк');

  return (
    <div className="grid h-full grid-rows-[auto_1fr]">
      <ProfileCard
        name={
          <div>
            <div className="flex items-center gap-1">
              <Typography size={'xl'}>Сбербанк</Typography>
              <CompanyPartnerIcon />
            </div>
            <div className="flex items-center gap-1">
              <Typography className="font-bold">512</Typography>
              <Circle className="size-1 fill-white" />
              <Typography className="font-bold">5</Typography>
              <StarIcon />
            </div>
          </div>
        }
        imageUrl="/company-placeholder.png"
        description="Лидер в разработке искусственного интеллекта в России"
      />

      <CompanyProfileTabs />
    </div>
  );
};

export default CompanyPage;
