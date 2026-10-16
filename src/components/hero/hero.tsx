import photo from '../../assets/image/photo.avif';
import { HeroLink } from '../UI/hero-link';
import { HeroAnimation } from '../UI/hero-animation';
import { HeroTitle } from '../UI/hero-title';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="hero-title" className="relative min-h-[100dvh] overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover object-left scale-x-[-1]"
        src={photo}
        alt={t('hero.imageAlt')}
        width={1200}
        height={1600}
        loading="eager"
        decoding="async"
      />
      <div className="relative min-h-[100dvh] w-full bg-white/60 transition-colors duration-300 dark:bg-slate-950/80">
        <div
          className="m-auto flex min-h-[100dvh] w-full max-w-[900px] flex-col items-center justify-start px-5 py-28 lg:items-start lg:justify-center lg:py-16">
          <HeroTitle/>
          <p className="mt-5 max-w-2xl text-center text-lg leading-relaxed text-stone-700 lg:text-left dark:text-slate-300">
            {t('hero.summary')}
          </p>
          <HeroAnimation/>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a className="primary-link" href="#case-studies">{t('hero.caseStudiesCta')}</a>
            <a className="secondary-link" href="#contact">{t('hero.contactCta')}</a>
          </div>
          <HeroLink/>
        </div>
      </div>
    </section>
  );
});

