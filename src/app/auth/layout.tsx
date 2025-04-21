import { auth } from '@/auth';
import { paths } from '@/lib/paths';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const AuthLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (session) {
    redirect(paths.vacancies.link);
  }

  return children;
};

export default AuthLayout;
