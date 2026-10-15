import { WorkItem } from '../work-item';
import { work } from '../../data.ts';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Work: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 pt-12 py-16">
      <h2 className="h2">{t('work.heading')}</h2>
      {work.map((item) => (
        <WorkItem
          key={item.id}
          year={t(`work.items.${item.id}.year`)}
          title={item.title}
          duration={t(`work.items.${item.id}.duration`)}
          details={t(`work.items.${item.id}.details`)}
        />
      ))}
    </div>
  );
});

