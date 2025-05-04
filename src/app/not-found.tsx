'use client';

import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentStoredPath = sessionStorage.getItem('currentPath');
    if (currentStoredPath) {
      sessionStorage.setItem('previousPath', currentStoredPath);
    }
    sessionStorage.setItem('currentPath', window.location.pathname);
  }, [pathname]);

  const handleBack = () => {
    const previousPath = sessionStorage.getItem('previousPath');

    if (previousPath && previousPath !== window.location.pathname) {
      router.back();
    } else {
      router.push(paths.vacancies.link);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mb-20">
        <Typography variant={'subtitle'}>Упс... Страница не найдена</Typography>
        <Button onClick={handleBack} className="mt-4 w-full">
          Назад
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
