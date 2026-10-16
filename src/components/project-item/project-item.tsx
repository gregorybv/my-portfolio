import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectItemProps {
  img: string;
  title: string;
  href: string;
  stack: string;
}

export const ProjectItem: FC<ProjectItemProps> = memo(({
                                                         img,
                                                         title,
                                                         href,
                                                         stack,
                                                       }) => {
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg shadow-[#4c85e6]/40 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:shadow-black/40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#001b5e] dark:focus-visible:outline-[#d3f8cd]"
        aria-label={`${title}: ${t('projects.moreInfo')}`}
      >
        <img
          src={img}
          alt={t('projects.imageAlt', {title})}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-2xl font-bold tracking-wide text-[#001b5e] dark:text-[#d3f8cd]">
            {title}
          </h3>
          <p className="pb-5 pt-2 text-sm uppercase tracking-wide text-stone-600 dark:text-slate-300">
            {stack}
          </p>
          <span className="mt-auto font-bold text-[#001b5e] underline decoration-2 underline-offset-4 dark:text-[#d3f8cd]">
            {t('projects.moreInfo')}
          </span>
        </div>
      </a>
    </article>
  );
});

