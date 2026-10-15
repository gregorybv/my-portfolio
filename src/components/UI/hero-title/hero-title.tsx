import { FC, memo } from 'react';
import { TextSpan } from '../text-span';
import { useTranslation } from 'react-i18next';

export const HeroTitle: FC = memo(() => {
  const { t } = useTranslation();
  const one = t('hero.title.intro').split('');
  const two = t('hero.title.name').split('');
  const three = t('hero.title.profession').split('');

  return (
    <div
      className="flex flex-col text-5xl font-bold text-gray-800 transition-colors sm:text-8xl dark:text-slate-100"
      data-aos="fade-down"
      data-aos-duration="1300"
    >
      <div className="flex">
        {one.map((letter, index) => {
          return (
            <TextSpan className="p-5" key={index}>
              {letter}
            </TextSpan>
          );
        })}
      </div>

      <div className="flex">
        {two.map((letter, index) => {
          return (
            <TextSpan className="flex" key={index}>
              {letter}
            </TextSpan>
          );
        })}
      </div>

      <div className="flex">
        {three.map((letter, index) => {
          return (
            <TextSpan className="p-5" key={index}>
              {letter}
            </TextSpan>
          );
        })}
      </div>
    </div>
  );
});

