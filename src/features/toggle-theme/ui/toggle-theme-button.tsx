'use client';
import { Button } from '@/shared/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ToggleThemeButtonProps {
  className?: string;
}

const ToggleThemeButton = ({ className }: ToggleThemeButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button className={className} variant={'outline'} size={'lg'} onClick={toggleTheme}>
      Включить {theme === 'dark' ? 'светлую' : 'темную'} тему
    </Button>
  );
};

export default ToggleThemeButton;
