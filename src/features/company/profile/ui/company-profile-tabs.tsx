import ProfileTabs, { ProfileTab } from '@/widgets/profile/ui/profile-tabs';
import CompanyInfoTabsContent from './company-info-tabs-content';
import CompanyPostsTabsContent from './company-posts-tabs-content';
import CompanyReviewTabsContent from './company-review-tabs-content';
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
  {
    content: <CompanyPostsTabsContent />,
    label: 'Публикации',
    value: 'posts',
  },
  {
    content: <CompanyReviewTabsContent />,
    label: 'Отзывы',
    value: 'reviews',
  },
];

const CompanyProfileTabs = () => {
  return <ProfileTabs tabs={tabs} />;
};

export default CompanyProfileTabs;
