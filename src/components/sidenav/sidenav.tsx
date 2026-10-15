import { FC, memo, useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/all';
import { SidenavMobile } from '../UI/sidenav-mobile';
import { SidenavItem } from '../UI/sidenav-item';
import { ThemeToggle } from '../UI/theme-toggle';
import { Theme } from '../../hooks/use-theme';
import { LanguageToggle } from '../UI/language-toggle';
import { useTranslation } from 'react-i18next';

interface SidenavProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export const Sidenav: FC<SidenavProps> = memo(({theme, onThemeToggle}) => {
  const [nav, setNav] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleNav = useCallback(() => {
    setNav(!nav);
  }, [nav]);

  return (
    <div>
      <button
        type="button"
        onClick={handleNav}
        className="fixed right-36 top-7 z-[99] rounded-full bg-gray-100 p-2 text-[#001b5e] shadow-lg shadow-[#4c85e6]/50 transition-colors md:hidden dark:bg-slate-800 dark:text-slate-100 dark:shadow-black/30"
        aria-label={nav ? t('navigation.close') : t('navigation.open')}
        aria-expanded={nav}
      >
        <AiOutlineMenu size={30} aria-hidden="true"/>
      </button>
      <div className="fixed right-3 top-5 z-[99] flex">
        <LanguageToggle/>
        <ThemeToggle theme={theme} onToggle={onThemeToggle}/>
      </div>
      {nav && <SidenavMobile handleNav={handleNav}/>}
      <SidenavItem/>
    </div>
  );
});

