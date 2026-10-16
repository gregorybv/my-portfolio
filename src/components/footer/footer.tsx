import { HeroLink } from '../UI/hero-link';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <footer className="mt-5 flex flex-col items-center justify-between gap-4 bg-[#d3f8cd] px-6 py-5 shadow-[#4c85e6] transition-colors sm:flex-row dark:bg-slate-900 dark:shadow-black/30">
      <p className="text-center text-lg text-[#001b5e] transition-colors sm:text-left dark:text-[#d3f8cd]">
        &copy; Grigoriy Berezin {new Date().getFullYear()} · {t('footer.role')}
      </p>
      <HeroLink/>
    </footer>
  );
});

