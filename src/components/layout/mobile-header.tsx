'use client';

import useLayoutStore from '@/shared/stores/use-layout-store';
import Typography from '@/shared/ui/typography';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MobileHeader = () => {
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
      router.push('/jobs');
    }
  };

  if (!page) {
    return <div />;
  }

  if (!page) {
    return <div />;
  }

  return (
    <header className="bg-accent relative flex h-12 items-center justify-center rounded-b-lg p-2 pl-12 text-2xl">
      <ArrowLeft className="absolute top-1/2 left-3 -translate-y-1/2" onClick={handleBack} />
      <Typography className={'line-clamp-1'} size={'xl'}>
        {page}
      </Typography>
    </header>
  );
};

export default MobileHeader;
