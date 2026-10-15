import { Cursor } from '../UI/cursor';
import { Sidenav } from '../sidenav';
import { Hero } from '../hero';
import { Work } from '../work';
import { Projects } from '../projects';
import { Contact } from '../contact';
import { Footer } from '../footer';
import { FC, memo } from 'react';
import { useTheme } from '../../hooks/use-theme';

export const Main: FC = memo(() => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div>
      <Cursor theme={theme}/>
      <Sidenav theme={theme} onThemeToggle={toggleTheme}/>
      <Hero/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
});
