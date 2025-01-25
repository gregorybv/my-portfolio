import { Cursor } from '../UI/cursor';
import { Sidenav } from '../sidenav';
import { Hero } from '../hero';
import { Work } from '../work';
import { Projects } from '../projects';
import { Contact } from '../contact';
import { Footer } from '../footer';
import { FC, memo } from 'react';

export const Main: FC = memo(() => {
  return (
    <div>
      <Cursor/>
      <Sidenav/>
      <Hero/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
});
