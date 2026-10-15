import { ProjectItem } from '../project-item';
import { project } from '../../data.ts';
import { SmilingFace } from 'fluent-emoji';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="max-w-[1240px] m-auto md:pl-20 pl-4 pr-4 py-10"
    >
      <h2 className="h2">{t('projects.heading')}</h2>
      <p className="flex items-center justify-center gap-3 text-center py-8 text-2xl">
        {t('projects.description')}
        <SmilingFace className="w-[40px]"/>
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mt-5">
        {project.map((item, id) => {
          const {img, titleKey, stack, href} = item;
          return (
            <ProjectItem
              key={id}
              img={img}
              title={t(`projects.items.${titleKey}`)}
              stack={stack}
              href={href}
            />
          );
        })}
      </div>
    </div>
  );
});

