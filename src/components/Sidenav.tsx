// Sidenav component
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/all';
import SidenavMobile from './UI/SidenavMobile';
import SidenavItem from './UI/SidenavItem';

const Sidenav: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-5 right-5 z-[99] md:hidden"
        size={30}
      />
      {/* plugging in the component SidenavMobile */}
      {nav ? <SidenavMobile handleNav={handleNav} /> : ''}
      {/* plugging in the component SidenavItem */}
      <SidenavItem />
    </div>
  );
};

export default Sidenav;
