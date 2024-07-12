import { navbar } from '../../../data.ts';
import { FC, memo } from 'react';

export const SidenavItem: FC = memo(() => {
  return (
    <div className="md:block hidden fixed top-[25%] z-10 ">
      <div className="flex flex-col">
        {navbar.map((item, id) => {
          const {href, Icon} = item;
          return (
            <a
              key={id}
              href={href}
              className="group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer"
              data-aos="flip-left"
              data-aos-duration="1300"
            >
              <Icon
                size={25}
                className="group-hover:scale-150 ease-in duration-300 group-hover:text-[#08fdd8]"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
});
