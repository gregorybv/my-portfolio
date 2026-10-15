import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

const getStoredTheme = (): Theme | null => {
  try {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error);
    return null;
  }
};

const getInitialTheme = (): Theme => (
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'
);

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (getStoredTheme()) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      if (event.newValue === 'light' || event.newValue === 'dark') {
        setTheme(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      console.warn('Unable to save the theme preference.', error);
    }
  };

  return {theme, toggleTheme};
};
