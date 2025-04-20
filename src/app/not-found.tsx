import { auth } from '@/auth';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';

const NotFound = async () => {
  const session = await auth();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mb-20">
        <Typography variant={'subtitle'}>Упс... Страница не найдена</Typography>
        <Button asChild className="mt-4 w-full">
          {session ? (
            <Link href={paths.vacancies.link}>К вакансиям</Link>
          ) : (
            <Link href={paths.auth.link} className="mt-4">
              Авторизация
            </Link>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
