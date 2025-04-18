'use client';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const ThemeHandler = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    console.log('test', theme);
    let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }

    themeColorMeta.content = theme === 'dark' ? '#000' : '#fff';
  }, [theme, pathname]);

  return children;
};

export default ThemeHandler;
