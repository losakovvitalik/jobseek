'use client';

import { paths } from '@/lib/paths';
import useLayoutStore from '@/shared/stores/use-layout-store';
import Typography from '@/shared/ui/typography';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Header = () => {
  const page = useLayoutStore((state) => state.page);
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

  if (!page) {
    return <div />;
  }

  return (
    <header className="bg-accent h-header relative flex items-center justify-center rounded-b-lg p-2 pl-12 text-2xl">
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
        onClick={handleBack}
      >
        <ArrowLeft />
      </button>
      <Typography className={'line-clamp-1'} size={'xl'}>
        {page}
      </Typography>
    </header>
  );
};

export default Header;
