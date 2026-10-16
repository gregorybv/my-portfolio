import { FC, memo } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

interface WorkItemProps {
  index: number;
  year: string;
  title: string;
  duration: string;
  details: string;
}

export const WorkItem: FC<WorkItemProps> = memo(({
                                                   index,
                                                   year,
                                                   title,
                                                   duration,
                                                   details,
                                                 }) => {
  const [role, ...detailLines] = details.split('\n');
  const stackLine = detailLines.at(-1) ?? '';
  const [stackLabel, stack = ''] = stackLine.split(/:\s*/, 2);
  const achievements = detailLines
    .slice(0, -1)
    .map((line) => line.replace(/^•\s*/, ''));

  return (
    <li
      className="group relative overflow-hidden rounded-[1.4rem] border border-[#001b5e]/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#001b5e]/25 hover:shadow-xl hover:shadow-[#4c85e6]/10 sm:p-7 dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-[#d3f8cd]/30 dark:hover:shadow-black/30"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="1300"
    >
      <article className="relative flex h-full flex-col">
        <header>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#001b5e]/60 dark:text-[#d3f8cd]/60">
            {title}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-[#001b5e] sm:text-3xl dark:text-[#d3f8cd]">
            {role}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#001b5e] px-3 py-2 text-white dark:bg-[#d3f8cd] dark:text-[#001b5e]">
              <AiOutlineCalendar aria-hidden="true" className="text-base" />
              {year}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#001b5e]/10 bg-[#001b5e]/5 px-3 py-2 text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <AiOutlineClockCircle aria-hidden="true" className="text-base" />
              {duration}
            </span>
          </div>
        </header>

        <ul className="my-7 space-y-3">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex gap-3 leading-relaxed text-stone-600 dark:text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4c85e6] shadow-[0_0_0_4px_rgba(76,133,230,0.12)] dark:bg-[#d3f8cd]"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <footer className="mt-auto border-t border-[#001b5e]/10 pt-5 dark:border-white/10">
          <p className="mb-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-stone-400 dark:text-slate-500">
            {stackLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.split(', ').map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-[#001b5e]/5 px-2.5 py-1.5 text-xs font-medium text-[#001b5e] dark:bg-[#d3f8cd]/10 dark:text-[#d3f8cd]"
              >
                {technology}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </li>
  );
});

