import { navbarmin } from '../../../data.ts';
import { FC, memo } from 'react';

interface SidenavMobileProps {
  handleNav: () => void;
}

export const SidenavMobile: FC<SidenavMobileProps> = memo(({handleNav}) => {
  return (
    <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-[#e3f6e0] transition-colors duration-300 md:hidden dark:bg-slate-950">
      {navbarmin.map((item, id) => {
        const {href, Iconmin, name} = item;
        return (
          <a key={id} onClick={handleNav} href={href} className="mobile group relative">
            <Iconmin
              size={20}
              className="absolute left-[calc(50%-72px)] transition duration-200 ease-in group-hover:scale-105 group-hover:text-[#08fdd8]"
            />
            <span className="text-center transition duration-200 ease-in group-hover:scale-105 group-hover:text-[#08fdd8]">
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
});
