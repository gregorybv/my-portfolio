import photo from '../../assets/image/photo.avif';
import { HeroAnimation } from '../UI/hero-animation';
import { HeroLink } from '../UI/hero-link';
import { HeroTitle } from '../UI/hero-title';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: FC = memo(() => {
  const { t } = useTranslation();
  const highlights = ['experience', 'architecture', 'quality'] as const;

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
      <div className="relative min-h-[100dvh] w-full bg-gradient-to-r from-white/95 via-white/90 to-white/70 transition-colors duration-300 lg:to-white/20 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/75 lg:dark:to-slate-950/40">
        <div className="mx-auto flex min-h-[100dvh] w-full max-w-[1040px] items-center px-5 py-28 md:px-10 lg:py-20">
          <div className="w-full max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#001b5e]/20 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-[#001b5e] backdrop-blur-sm dark:border-[#d3f8cd]/30 dark:bg-slate-950/50 dark:text-[#d3f8cd]">
              {t('hero.eyebrow')}
            </p>
            <HeroTitle/>
            <div className="mt-4 lg:hidden" aria-hidden="true">
              <HeroAnimation/>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700 sm:text-xl dark:text-slate-300">
              {t('hero.summary')}
            </p>

            <ul className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex min-h-[72px] items-center rounded-xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm font-semibold leading-snug text-slate-800 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-200"
                >
                  {t(`hero.highlights.${highlight}`)}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-link" href="#case-studies">{t('hero.caseStudiesCta')}</a>
              <a className="secondary-link" href="#contact">{t('hero.contactCta')}</a>
            </div>
            <HeroLink/>
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] lg:block xl:right-16"
          aria-hidden="true"
        >
          <HeroAnimation/>
        </div>
      </div>
    </section>
  );
});

