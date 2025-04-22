'use client';
import { useEffect } from 'react';
import useLayoutStore from '../stores/use-layout-store';

const usePageTitle = (title: React.ReactNode | null) => {
  const setPage = useLayoutStore((state) => state.setPage);

  useEffect(() => {
    setPage(title);
    return () => setPage(null);
  }, [title, setPage]);
};

export default usePageTitle;
