import ProfileTabs, { ProfileTab } from '@/widgets/profile/ui/profile-tabs';
import CompanyInfoTabsContent from './company-info-tabs-content';
import CompanyVacanciesTabsContent from './company-vacancies-tabs-content';

const tabs: ProfileTab[] = [
  {
    content: <CompanyInfoTabsContent />,
    label: 'Информация',
    value: 'info',
  },
  {
    content: <CompanyVacanciesTabsContent />,
    label: 'Вакансии',
    value: 'vacancy',
  },
];

const CompanyProfileTabs = () => {
  return <ProfileTabs tabs={tabs} />;
};

export default CompanyProfileTabs;
