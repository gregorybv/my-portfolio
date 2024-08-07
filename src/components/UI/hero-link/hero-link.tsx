import { FC, memo } from 'react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const HeroLink: FC = memo(() => {
  return (
    <div
      className="flex justify-between max-w-[200px] w-full mt-2.5"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1300"
    >
      <a href="https://t.me/MrGregorybv" target="_blank">
        <FaTelegram className="cursor-pointer" size={30}/>
      </a>
      <a href="https://github.com/gregorybv" target="_blank">
        <FaGithub className="cursor-pointer" size={30}/>
      </a>
      <a
        href="https://www.linkedin.com/in/gregory-berezin-58444a23a/"
        target="_blank"
      >
        <FaLinkedin className="cursor-pointer" size={30}/>
      </a>
    </div>
  );
});

