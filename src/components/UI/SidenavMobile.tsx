// SidenavMobile component

import { navbarmin } from '../../data';

interface SidenavMobileProps {
  handleNav: () => void;
}

const SidenavMobile: React.FC<SidenavMobileProps> = ({ handleNav }) => {
  return (
    <div className="fixed w-full h-screen bg-[#e3f6e0] flex flex-col justify-center items-center z-20">
      {navbarmin.map((item, id) => {
        const { href, Iconmin, name } = item;
        return (
          <a key={id} onClick={handleNav} href={href} className="mobile group">
            <Iconmin
              size={20}
              className="group-hover:text-[#08fdd8] group-hover:scale-105 ease-in duration-200"
            />
            <span className="pl-4 group-hover:text-[#08fdd8] group-hover:scale-105 ease-in duration-200">
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SidenavMobile;
