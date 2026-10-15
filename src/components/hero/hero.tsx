import photo from '../../assets/image/photo.jpg';
import { HeroLink } from '../UI/hero-link';
import { HeroAnimation } from '../UI/hero-animation';
import { HeroTitle } from '../UI/hero-title';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={photo}
        alt={t('hero.imageAlt')}
      />
      <div className="absolute left-0 top-0 h-screen w-full bg-white/50 transition-colors duration-300 dark:bg-slate-950/75">
        <div
          className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <HeroTitle/>
          <HeroAnimation/>
          <HeroLink/>
        </div>
      </div>
    </div>
  );
});

