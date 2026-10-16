import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineAppstore,
  AiOutlineRead,
  AiOutlineTool,
  AiOutlineUser,
} from 'react-icons/ai';

const expertiseAreas = [
  {
    id: 'architecture',
    number: '01',
    Icon: AiOutlineAppstore,
    className: 'lg:col-span-7',
  },
  {
    id: 'quality',
    number: '02',
    Icon: AiOutlineRead,
    className: 'lg:col-span-5',
  },
  {
    id: 'performance',
    number: '03',
    Icon: AiOutlineTool,
    className: 'lg:col-span-5',
  },
  {
    id: 'leadership',
    number: '04',
    Icon: AiOutlineUser,
    className: 'lg:col-span-7',
  },
] as const;

export const Expertise: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-container max-w-[1280px]"
    >
      <h2 id="expertise-heading" className="h2">{t('expertise.heading')}</h2>
      <p className="section-intro">{t('expertise.description')}</p>

      <div className="relative overflow-hidden rounded-[2rem] border border-[#001b5e]/15 bg-white/35 p-3 shadow-2xl shadow-[#4c85e6]/10 sm:p-5 dark:border-[#d3f8cd]/15 dark:bg-slate-900/35 dark:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4c85e6]/15 blur-3xl dark:bg-[#d3f8cd]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#d3f8cd]/70 blur-3xl dark:bg-[#4c85e6]/10"
        />

        <div className="relative grid gap-3 lg:grid-cols-12">
          {expertiseAreas.map(({ id, number, Icon, className }, index) => (
            <article
              key={id}
              className={`group relative min-h-[220px] overflow-hidden rounded-[1.4rem] border border-[#001b5e]/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#001b5e]/25 hover:shadow-xl hover:shadow-[#4c85e6]/10 sm:p-7 dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-[#d3f8cd]/30 dark:hover:shadow-black/30 ${className}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-8 select-none text-[8rem] font-black leading-none text-[#001b5e]/[0.035] transition-transform duration-500 group-hover:-translate-x-2 dark:text-[#d3f8cd]/[0.035]"
              >
                {number}
              </span>

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001b5e] text-2xl text-white shadow-lg shadow-[#4c85e6]/25 dark:bg-[#d3f8cd] dark:text-[#001b5e] dark:shadow-black/30">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-[0.25em] text-stone-400 dark:text-slate-500">
                    / {number}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <h3 className="text-xl font-bold text-[#001b5e] sm:text-2xl dark:text-[#d3f8cd]">
                    {t(`expertise.items.${id}.title`)}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-stone-600 dark:text-slate-300">
                    {t(`expertise.items.${id}.description`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
