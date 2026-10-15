import { FC, memo } from 'react';

interface WorkItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

export const WorkItem: FC<WorkItemProps> = memo(({
                                                   year,
                                                   title,
                                                   duration,
                                                   details,
                                                 }) => {
  return (
    <ol
      className="relative flex flex-col border-l border-stone-300 pt-3 transition-colors md:flex-row dark:border-slate-700"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <li className="mb-7 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300 transition-colors dark:border-slate-950 dark:bg-slate-600"/>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span
            className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md shadow-lg shadow-[#4c85e6] hover:scale-105 ease-in duration-300">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e] transition-colors dark:text-[#d3f8cd]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-500 dark:text-slate-400">
            {duration}
          </span>
        </p>
        <p className="my-2 whitespace-pre-wrap text-base font-normal text-stone-600 transition-colors dark:text-slate-300">
          {details}
        </p>
      </li>
    </ol>
  );
});

