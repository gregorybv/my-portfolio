import { FC, memo } from 'react';
import { TextSpan } from '../text-span';
import { useTranslation } from 'react-i18next';

export const HeroTitle: FC = memo(() => {
  const { t } = useTranslation();
  const intro = t('hero.title.intro');
  const name = t('hero.title.name');
  const profession = t('hero.title.profession');

  return (
    <h1
      id="hero-title"
      aria-label={`${intro} ${name} ${profession}`}
      className="hero-title flex max-w-full flex-col text-gray-900 transition-colors dark:text-white"
    >
      <span
        className="text-lg font-semibold text-[#001b5e] sm:text-xl dark:text-[#d3f8cd]"
        aria-hidden="true"
      >
        {intro}
      </span>
      <span
        className="mt-2 flex text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        aria-hidden="true"
      >
        {Array.from(name).map((letter, index) => (
          <TextSpan className="inline-block" key={`${letter}-${index}`}>
            {letter === ' ' ? '\u00A0' : letter}
          </TextSpan>
        ))}
      </span>
      <span
        className="mt-3 flex text-3xl font-semibold leading-tight text-stone-700 sm:text-5xl lg:text-6xl dark:text-slate-300"
        aria-hidden="true"
      >
        {Array.from(profession).map((letter, index) => (
          <TextSpan className="inline-block" key={`${letter}-${index}`}>
            {letter === ' ' ? '\u00A0' : letter}
          </TextSpan>
        ))}
      </span>
    </h1>
  );
});

