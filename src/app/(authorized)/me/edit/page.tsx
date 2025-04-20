import { auth } from '@/auth';
import UserEditForm from '@/entities/user/ui/user-edit-form';
import PageTitle from '@/shared/ui/page-title';

const MeEditPage = async () => {
  const session = await auth();

  return (
    <div>
      <PageTitle>Редактирование профиля</PageTitle>
      <UserEditForm defaultValues={session ? session.user : undefined} />
    </div>
  );
};

export default MeEditPage;
