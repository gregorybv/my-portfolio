import { HeroLink } from '../UI/hero-link';
import { FC, memo } from 'react';

export const Footer: FC = memo(() => {
  return (
    <footer className="mt-5 flex items-center justify-between bg-[#d3f8cd] px-9 py-4 shadow-[#4c85e6] transition-colors duration-300 dark:bg-slate-900 dark:shadow-black/30">
      <p className="text-xl text-[#001b5e] transition-colors dark:text-[#d3f8cd]">
        &copy; G&StArt {new Date().getFullYear()}
      </p>
      <HeroLink/>
    </footer>
  );
});

