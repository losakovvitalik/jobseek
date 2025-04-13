import AchievementsCarousel from '@/entities/achievement/ui/achievements-carousel';
import UserInfoTabsContent from '@/entities/user/ui/user-info-tabs-content';
import UserPostsTabsContent from '@/entities/user/ui/user-posts-tabs-content';
import UserSettingsTabsContent from '@/entities/user/ui/user-settings-tabs-content';
import Typography from '@/shared/ui/typography';
import ProfileCard from '@/widgets/profile/ui/profile-card';
import ProfileTabs, { ProfileTab } from '@/widgets/profile/ui/profile-tabs';

const tabs: ProfileTab[] = [
  {
    label: 'Информация',
    value: 'info',
    content: <UserInfoTabsContent />,
  },
  {
    label: 'Посты',
    value: 'posts',
    content: <UserPostsTabsContent />,
  },
  {
    label: 'Настройки',
    content: <UserSettingsTabsContent />,
    value: 'settings',
  },
];

const MePage = () => {
  return (
    <div>
      <ProfileCard
        name={<Typography size={'xl'}>Сергей Витальевич Иванов</Typography>}
        description="Frontend разработчик"
        imageUrl="/avatar-placeholder.png"
      />

      <div className="relative mt-6 grid grid-cols-[24px_1fr] gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
          <Typography className="font-bold">1</Typography>
        </div>
        <div className="bg-secondary h-6 rounded-2xl">
          <div className="h-6 w-8/12 rounded-2xl bg-orange-500"></div>
          <Typography
            className="absolute top-1/2 left-1/2 -translate-1/2 text-center font-medium"
            size={'sm'}
          >
            400 / 600
          </Typography>
        </div>
      </div>

      <Typography className="mt-6" size={'2xl'}>
        Достижения
      </Typography>

      <AchievementsCarousel />

      <ProfileTabs tabs={tabs} />
    </div>
  );
};

export default MePage;
