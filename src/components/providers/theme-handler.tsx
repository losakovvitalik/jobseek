'use client';
import useLayoutStore from '@/shared/stores/use-layout-store';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const ThemeHandler = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const page = useLayoutStore((state) => state.page);
  const pathname = usePathname();

  useEffect(() => {
    console.log('test', theme);
    let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }

    const light = page ? 'oklch(0.97 0 0)' : '#fff';
    themeColorMeta.content = theme === 'dark' ? '#000' : light;
  }, [theme, pathname, page]);

  return children;
};

export default ThemeHandler;
