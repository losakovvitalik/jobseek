'use client';

import useLayoutStore from '@/shared/stores/use-layout-store';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileHeader = () => {
  const page = useLayoutStore((state) => state.page);
  const router = useRouter();

  const handleBack = () => {
    try {
      if (history.length === 1) return 'Первая страница';

      const referrer = document.referrer;
      if (!referrer) router.push('/jobs');

      const currentHost = window.location.hostname;
      const referrerHost = new URL(referrer).hostname;

      return currentHost === referrerHost ? router.back() : router.push(`/jobs`);
    } catch {
      return router.push('/jobs');
    }
  };

  if (!page) {
    return <div />;
  }

  return (
    <header className="bg-accent relative flex h-14 items-center justify-center rounded-b p-2 text-2xl">
      <ArrowLeft className="absolute top-1/2 left-4 -translate-y-1/2" onClick={handleBack} />
      {page}
    </header>
  );
};

export default MobileHeader;
