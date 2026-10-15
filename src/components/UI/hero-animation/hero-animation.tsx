import { WinkingFace } from 'fluent-emoji';
import { FC, memo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

export const HeroAnimation: FC = memo(() => {
  const { t, i18n } = useTranslation();

  return (
    <h2
      className="flex items-center pt-4 text-2xl text-gray-800 transition-colors sm:text-4xl dark:text-slate-200"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
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
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        style={{fontSize: '1em', paddingLeft: '5px'}}
      />
      <WinkingFace className="w-[55px] pl-3"/>
    </h2>
  );
});
