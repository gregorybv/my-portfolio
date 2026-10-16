import { navbar } from '../../../data';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const SidenavItem: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="md:block hidden fixed top-[25%] z-10 ">
      <div className="flex flex-col">
        {navbar.map((item) => {
          const {id, href, Icon, labelKey} = item;
          return (
            <a
              key={id}
              href={href}
              aria-label={t(`navigation.${labelKey}`)}
              className="nav-control group"
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
