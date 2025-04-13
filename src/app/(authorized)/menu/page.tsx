import MenuPageLink from '@/app/(authorized)/menu/ui/menu-page-link';
import { paths } from '@/lib/paths';
import PageTitle from '@/shared/ui/page-title';
import ProfileCard from '@/widgets/profile/ui/profile-card';
import { Bell, ContactIcon, FileUser, Handshake, Heart, ListRestart, Settings } from 'lucide-react';

const MenuPage = () => {
  return (
    <div>
      <ProfileCard
        name={'Виталий'}
        description={'Frontend разработчик'}
        imageUrl={'/avatar-placeholder.png'}
      />
      <div className={'mt-4 flex flex-col gap-4'}>
        <MenuPageLink icon={FileUser} href={paths.menu.resumes}>
          Мои резюме
        </MenuPageLink>
        <MenuPageLink icon={ListRestart} href={paths.menu.applications}>
          Мои отклики
        </MenuPageLink>
        <MenuPageLink icon={Heart} href={paths.menu.favorites}>
          Избранное
        </MenuPageLink>
        <MenuPageLink icon={Bell} href={paths.menu.notifications}>
          Уведомления
        </MenuPageLink>
        <MenuPageLink icon={Settings} href={paths.menu.settings}>
          Настройки
        </MenuPageLink>
        <MenuPageLink icon={Handshake} href={paths.menu.agreement}>
          Пользовательское соглашение
        </MenuPageLink>
        <MenuPageLink icon={ContactIcon} href={paths.menu.contact}>
          Контакты
        </MenuPageLink>
      </div>
    </div>
  );
};

export default MenuPage;
