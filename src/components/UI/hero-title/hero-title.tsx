import { FC, memo } from 'react';
import { TextSpan } from '../text-span';
import { useTranslation } from 'react-i18next';

export const HeroTitle: FC = memo(() => {
  const { t } = useTranslation();
  const one = t('hero.title.intro').split('');
  const two = t('hero.title.name').split('');
  const profession = t('hero.title.profession');

  return (
    <h1
      id="hero-title"
      aria-label={`${t('hero.title.intro')} ${t('hero.title.name')} ${profession}`}
      className="flex max-w-full flex-col text-4xl font-bold leading-tight text-gray-800 transition-colors sm:text-5xl lg:text-7xl dark:text-slate-100"
      data-aos="fade-down"
      data-aos-duration="1300"
    >
      <span className="flex" aria-hidden="true">
        {one.map((letter, index) => {
          return (
            <TextSpan className="inline-block" key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </TextSpan>
          );
        })}
      </span>

      <span className="flex" aria-hidden="true">
        {two.map((letter, index) => {
          return (
            <TextSpan className="inline-block" key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </TextSpan>
          );
        })}
      </span>

      <span
        className="mt-2 max-w-[18ch] text-3xl leading-tight sm:text-5xl lg:text-6xl"
        aria-hidden="true"
      >
        {profession}
      </span>
    </h1>
  );
});

