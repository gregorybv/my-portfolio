import { WorkItem } from '../work-item';
import { work } from '../../data';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Work: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <section id="work" aria-labelledby="work-heading" className="section-container">
      <h2 id="work-heading" className="h2">{t('work.heading')}</h2>
      <ol>
        {work.map((item) => (
          <WorkItem
            key={item.id}
            year={t(`work.items.${item.id}.year`)}
            title={item.title}
            duration={t(`work.items.${item.id}.duration`)}
            details={t(`work.items.${item.id}.details`)}
          />
        ))}
      </ol>
    </section>
  );
});

