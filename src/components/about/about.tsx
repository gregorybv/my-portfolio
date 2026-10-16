import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" aria-labelledby="about-heading" className="section-container">
      <h2 id="about-heading" className="h2">{t('about.heading')}</h2>
      <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-stone-700 dark:text-slate-300">
        <p>{t('about.summary')}</p>
        <p>{t('about.details')}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a className="primary-link" href="#case-studies">{t('about.caseStudiesCta')}</a>
          <a className="secondary-link" href="#contact">{t('about.contactCta')}</a>
        </div>
      </div>
    </section>
  );
};
