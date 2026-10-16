import { Sidenav } from '../sidenav';
import { Hero } from '../hero';
import { Work } from '../work';
import { Projects } from '../projects';
import { Contact } from '../contact';
import { Footer } from '../footer';
import { FC, memo } from 'react';
import { useTheme } from '../../hooks/use-theme';
import { About } from '../about';
import { CaseStudies } from '../case-studies';
import { Expertise } from '../expertise';
import { useTranslation } from 'react-i18next';

export const Main: FC = memo(() => {
  const {theme, toggleTheme} = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-md bg-white px-4 py-3 text-[#001b5e] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t('navigation.skipToContent')}
      </a>
      <Sidenav theme={theme} onThemeToggle={toggleTheme}/>
      <main id="main">
        <Hero/>
        <About/>
        <Work/>
        <CaseStudies/>
        <Expertise/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
});
