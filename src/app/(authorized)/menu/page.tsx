import ToggleThemeButton from '@/features/toggle-theme/ui/toggle-theme-button';
import { Button } from '@/shared/ui/button';
import PageTitle from '@/shared/ui/page-title';
import ProfileCard from '@/widgets/profile/ui/profile-card';

const MenuPage = () => {
  return (
    <div>
      <PageTitle>Дополнительно</PageTitle>
      <ProfileCard
        name={'Виталий'}
        description={'Frontend разработчик'}
        imageUrl={'/avatar-placeholder.png'}
      />
      <div className={'mt-4 flex flex-col gap-4'}>
        <ToggleThemeButton className={'w-full'} />
        <Button className={'w-full'} size={'lg'} variant={'outline'}>Мои резюме</Button>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>Мои отклики</Buttona>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>
          Избранное
        </Button>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>
          Настройки
        </Button>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>
          Уведомления
        </Button>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>
          Пользовательское соглашение
        </Button>
        <Button className={'w-full'} size={'lg'} variant={'outline'}>
          Контакты
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
