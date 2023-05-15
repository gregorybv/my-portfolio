import Cursor from './UI/Cursor';
import Sidenav from './Sidenav';
import Hero from './Hero';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';

const Main: React.FC = () => {
  return (
    <div>
      <Cursor />
      <Sidenav />
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
