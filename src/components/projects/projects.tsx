import { ProjectItem } from '../project-item';
import { project } from '../../data';
import { SmilingFace } from 'fluent-emoji';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: FC = memo(() => {
  const { t } = useTranslation();
  const featuredProjects = project.filter(({featured}) => featured);
  const otherProjects = project.filter(({featured}) => !featured);

  const renderProject = ({id, img, titleKey, stack, href}: typeof project[number]) => (
    <ProjectItem
      key={id}
      img={img}
      title={t(`projects.items.${titleKey}`)}
      stack={stack}
      href={href}
    />
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-container max-w-[1240px]"
    >
      <h2 id="projects-heading" className="h2">{t('projects.heading')}</h2>
      <p className="flex items-center justify-center gap-3 text-center py-8 text-2xl">
        {t('projects.description')}
        <SmilingFace className="w-[40px]" aria-hidden="true"/>
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mt-5">
        {featuredProjects.map(renderProject)}
      </div>
      <details className="mt-10">
        <summary className="mx-auto w-fit cursor-pointer rounded-lg px-4 py-3 font-bold text-[#001b5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-[#d3f8cd]">
          {t('projects.otherProjects')}
        </summary>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map(renderProject)}
        </div>
      </details>
    </section>
  );
});

