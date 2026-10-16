import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineAppstore,
  AiOutlineCheck,
  AiOutlineRead,
  AiOutlineTool,
  AiOutlineUser,
} from 'react-icons/ai';

const expertiseAreas = [
  {
    id: 'architecture',
    number: '01',
    Icon: AiOutlineAppstore,
  },
  {
    id: 'quality',
    number: '02',
    Icon: AiOutlineRead,
  },
  {
    id: 'performance',
    number: '03',
    Icon: AiOutlineTool,
  },
  {
    id: 'leadership',
    number: '04',
    Icon: AiOutlineUser,
  },
] as const;

const highlightKeys = ['first', 'second', 'third'] as const;

export const Expertise: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-container max-w-[1440px]"
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

        <div className="relative grid gap-4 lg:grid-cols-2">
          {expertiseAreas.map(({ id, number, Icon }, index) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-[1.4rem] border border-[#001b5e]/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#001b5e]/25 hover:shadow-xl hover:shadow-[#4c85e6]/10 sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-[#d3f8cd]/30 dark:hover:shadow-black/30"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-8 select-none text-[8rem] font-black leading-none text-[#001b5e]/[0.035] transition-transform duration-500 group-hover:-translate-x-2 dark:text-[#d3f8cd]/[0.035]"
              >
                {number}
              </span>

              <div className="relative">
                <header className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001b5e] text-2xl text-white shadow-lg shadow-[#4c85e6]/25 dark:bg-[#d3f8cd] dark:text-[#001b5e] dark:shadow-black/30">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-[#001b5e] sm:text-2xl dark:text-[#d3f8cd]">
                    {t(`expertise.items.${id}.title`)}
                  </h3>
                </header>

                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600 dark:text-slate-300">
                  {t(`expertise.items.${id}.description`)}
                </p>

                <ul className="mt-6 divide-y divide-[#001b5e]/10 border-t border-[#001b5e]/10 dark:divide-white/10 dark:border-white/10">
                  {highlightKeys.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 py-3.5 text-sm leading-relaxed text-stone-600 dark:text-slate-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#001b5e]/10 text-xs text-[#001b5e] dark:bg-[#d3f8cd]/10 dark:text-[#d3f8cd]">
                        <AiOutlineCheck aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        {t(`expertise.items.${id}.highlights.${highlight}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
