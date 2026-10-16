import { WorkItem } from '../work-item';
import { work } from '../../data';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Work: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-container max-w-[1280px]"
    >
      <h2 id="work-heading" className="h2">{t('work.heading')}</h2>

      <div className="relative overflow-hidden rounded-[2rem] border border-[#001b5e]/15 bg-white/35 p-3 shadow-2xl shadow-[#4c85e6]/10 sm:p-5 dark:border-[#d3f8cd]/15 dark:bg-slate-900/35 dark:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4c85e6]/15 blur-3xl dark:bg-[#d3f8cd]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#d3f8cd]/70 blur-3xl dark:bg-[#4c85e6]/10"
        />

        <ol className="relative grid gap-3 lg:grid-cols-2">
          {work.map((item, index) => (
            <WorkItem
              key={item.id}
              index={index}
              year={t(`work.items.${item.id}.year`)}
              title={item.title}
              duration={t(`work.items.${item.id}.duration`)}
              details={t(`work.items.${item.id}.details`)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
});

