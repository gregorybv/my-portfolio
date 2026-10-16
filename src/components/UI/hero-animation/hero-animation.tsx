import { WinkingFace } from 'fluent-emoji';
import { FC, memo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../hooks/use-media-query';

export const HeroAnimation: FC = memo(() => {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <span
      className="flex items-center whitespace-nowrap text-xl font-semibold text-gray-800 transition-colors sm:text-2xl lg:w-[560px] lg:justify-end lg:text-4xl dark:text-slate-200"
    >
      {prefersReducedMotion ? (
        <span className="inline-block w-[220px] text-left sm:w-[360px] lg:w-[480px]">
          {t('hero.roles.developer')}
        </span>
      ) : (
        <TypeAnimation
          key={i18n.resolvedLanguage}
          sequence={[
            t('hero.roles.developer'),
            2000,
            t('hero.roles.coder'),
            2000,
            t('hero.roles.enthusiast'),
            2000,
            t('hero.roles.person'),
            2000,
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          speed={{type: 'keyStrokeDelayInMs', value: 110}}
          deletionSpeed={{type: 'keyStrokeDelayInMs', value: 65}}
          className="inline-block w-[220px] text-left sm:w-[360px] lg:w-[480px]"
          style={{fontSize: '1em'}}
        />
      )}
      <WinkingFace className="w-14 shrink-0 pl-3 lg:w-16" aria-hidden="true"/>
    </span>
  );
});
