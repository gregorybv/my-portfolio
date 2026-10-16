import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { work } from '../../data';

const fields = ['problem', 'role', 'decisions', 'outcome', 'stack'] as const;

export const CaseStudies: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="section-container max-w-[1100px]"
    >
      <h2 id="case-studies-heading" className="h2">{t('caseStudies.heading')}</h2>
      <p className="section-intro">{t('caseStudies.description')}</p>
      <div className="grid gap-6 lg:grid-cols-2">
        {work.map(({id, title}) => (
          <article
            key={id}
            className="rounded-2xl border border-[#001b5e]/15 bg-white/70 p-6 shadow-lg shadow-[#4c85e6]/10 dark:border-[#d3f8cd]/15 dark:bg-slate-900/70 dark:shadow-black/20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 dark:text-slate-400">
              {title}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[#001b5e] dark:text-[#d3f8cd]">
              {t(`caseStudies.items.${id}.title`)}
            </h3>
            <dl className="mt-6 space-y-4">
              {fields.map((field) => (
                <div key={field}>
                  <dt className="font-bold text-slate-900 dark:text-slate-100">
                    {t(`caseStudies.fields.${field}`)}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-stone-600 dark:text-slate-300">
                    {t(`caseStudies.items.${id}.${field}`)}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};
