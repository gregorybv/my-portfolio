// Main component
import Cursor from './UI/Cursor';
import Sidenav from './Sidenav';
import Hero from './Hero';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Main: React.FC = () => {
  return (
    <div>
      <Cursor />
      <Sidenav />
      <Hero />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
