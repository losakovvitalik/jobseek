'use client';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
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
    <button className={cn('flex items-center gap-1 cursor-pointer', className)} onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />} Включить {theme === 'dark' ? 'светлую' : 'темную'}{' '}
      тему
    </button>
  );
};

export default ToggleThemeButton;
