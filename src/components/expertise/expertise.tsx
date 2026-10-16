import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const expertiseAreas = ['architecture', 'quality', 'performance', 'leadership'] as const;

export const Expertise: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="section-container">
      <h2 id="expertise-heading" className="h2">{t('expertise.heading')}</h2>
      <p className="section-intro">{t('expertise.description')}</p>
      <div className="grid gap-5 md:grid-cols-2">
        {expertiseAreas.map((area) => (
          <article
            key={area}
            className="rounded-2xl border border-[#001b5e]/15 bg-white/60 p-6 dark:border-[#d3f8cd]/15 dark:bg-slate-900/70"
          >
            <h3 className="text-xl font-bold text-[#001b5e] dark:text-[#d3f8cd]">
              {t(`expertise.items.${area}.title`)}
            </h3>
            <p className="mt-3 leading-relaxed text-stone-600 dark:text-slate-300">
              {t(`expertise.items.${area}.description`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
