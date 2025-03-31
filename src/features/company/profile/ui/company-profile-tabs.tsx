import ProfileTabs, { ProfileTab } from '@/widgets/profile/ui/profile-tabs';
import CompanyInfoTabsContent from './company-info-tabs-content';

const tabs: ProfileTab[] = [
  {
    content: <CompanyInfoTabsContent />,
    label: 'Информация',
    value: 'info',
  },
];

const CompanyProfileTabs = () => {
  return <ProfileTabs tabs={tabs} />;
};

export default CompanyProfileTabs;
