import SignOutButton from '@/features/sing-out/ui/sign-out-button';
import ToggleThemeButton from '@/features/toggle-theme/ui/toggle-theme-button';
import { buttonVariants } from '@/shared/ui/button';
import PageTitle from '@/shared/ui/page-title';

const SettingsPage = () => {
  return (
    <div>
      <PageTitle>Настройки</PageTitle>
      <div className={'flex flex-col gap-4'}>
        <ToggleThemeButton className={buttonVariants({ variant: 'outline', size: 'lg' })} />
        <SignOutButton />
      </div>
    </div>
  );
};

export default SettingsPage;
