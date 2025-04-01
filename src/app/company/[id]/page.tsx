'use client';
import CompanyProfileTabs from '@/features/company/profile/ui/company-profile-tabs';
import usePageTitle from '@/shared/hooks/use-page-title';
import ProfileCard from '@/widgets/profile/ui/profile-card';

const CompanyPage = () => {
  usePageTitle('Сбербанк');

  return (
    <div className='h-full grid grid-rows-[auto_1fr]'>
      <ProfileCard
        name="Сбербанк"
        imageUrl="/company-placeholder.png"
        description="Лидер в разработке искусственного интеллекта в России"
      />

      <CompanyProfileTabs />
    </div>
  );
};

export default CompanyPage;
