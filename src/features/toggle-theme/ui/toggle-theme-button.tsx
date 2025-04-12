'use client';
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
    <button className={className} onClick={toggleTheme}>
      Включить {theme === 'dark' ? 'светлую' : 'темную'} тему
    </button>
  );
};

export default ToggleThemeButton;
