import MenuPageLink from '@/app/(authorized)/menu/ui/menu-page-link';
import ToggleThemeButton from '@/features/toggle-theme/ui/toggle-theme-button';
import { paths } from '@/lib/paths';
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
        <Button asChild>
          <ToggleThemeButton />
        </Button>
        <MenuPageLink href={paths.menu.resume}>Мои резюме</MenuPageLink>
        <MenuPageLink href={paths.menu.applications}>Мои отклики</MenuPageLink>
        <MenuPageLink href={paths.menu.favorites}>Избранное</MenuPageLink>
        <MenuPageLink href={paths.menu.settings}>Настройки</MenuPageLink>
        <MenuPageLink href={paths.menu.notifications}>Уведомления</MenuPageLink>
        <MenuPageLink href={paths.menu.agreement}>Пользовательское соглашение</MenuPageLink>
        <MenuPageLink href={paths.menu.contact}>Контакты</MenuPageLink>
      </div>
    </div>
  );
};

export default MenuPage;
