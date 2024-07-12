import { FC, memo, useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/all';
import { SidenavMobile } from '../UI/sidenav-mobile';
import { SidenavItem } from '../UI/sidenav-item';

export const Sidenav: FC = memo(() => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = useCallback(() => {
    setNav(!nav);
  }, [nav]);

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-5 right-5 z-[99] md:hidden"
        size={30}
      />
      {nav ? <SidenavMobile handleNav={handleNav}/> : ''}
      <SidenavItem/>
    </div>
  );
});

