import { HeroLink } from '../UI/hero-link';
import { FC, memo } from 'react';

export const Footer: FC = memo(() => {
  return (
    <footer className="mt-5 flex justify-between items-center px-9 py-4 bg-[#d3f8cd] shadow-[#4c85e6]">
      <p className="text-xl text-[#001b5e]">&copy; G&StArt 2023</p>
      <HeroLink/>
    </footer>
  );
});

