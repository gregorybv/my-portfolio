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
    <div
      className="group relative flex h-auto w-full items-center justify-center rounded-xl shadow-lg shadow-[#4c85e6] transition duration-300 ease-in hover:scale-110 hover:bg-gradient-to-r hover:from-gray-200 hover:to-[#001b5e] dark:shadow-black/40 dark:hover:from-slate-700 dark:hover:to-slate-950">
      <img
        src={img}
        alt={t('projects.imageAlt', {title})}
        className="h-full rounded-xl group-hover:opacity-10"
        loading="lazy"
      />
      <div
        className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wide text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <a href={href} target="_blank">
          <p
            className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-[#001b5e] hover:text-white ease-in duration-300">
            {t('projects.moreInfo')}
          </p>
        </a>
      </div>
    </div>
  );
});

