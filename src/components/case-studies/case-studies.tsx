import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineBulb,
  AiOutlineCode,
  AiOutlineFlag,
  AiOutlineUser,
} from 'react-icons/ai';
import { work } from '../../data';

const caseFields = [
  { id: 'role', Icon: AiOutlineUser },
  { id: 'decisions', Icon: AiOutlineBulb },
  { id: 'outcome', Icon: AiOutlineFlag },
] as const;

export const CaseStudies: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="section-container max-w-[1360px]"
    >
      <h2 id="case-studies-heading" className="h2">{t('caseStudies.heading')}</h2>
      <p className="section-intro">{t('caseStudies.description')}</p>

      <div className="relative overflow-hidden rounded-[2rem] border border-[#001b5e]/15 bg-white/35 p-3 shadow-2xl shadow-[#4c85e6]/10 sm:p-5 dark:border-[#d3f8cd]/15 dark:bg-slate-900/35 dark:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4c85e6]/15 blur-3xl dark:bg-[#d3f8cd]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#d3f8cd]/70 blur-3xl dark:bg-[#4c85e6]/10"
        />

        <div className="relative grid gap-4 lg:grid-cols-2">
          {work.map(({id, title}, index) => (
            <article
              key={id}
              className="relative overflow-hidden rounded-[1.4rem] border border-[#001b5e]/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#001b5e]/25 hover:shadow-xl hover:shadow-[#4c85e6]/10 sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-[#d3f8cd]/30 dark:hover:shadow-black/30"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <header className="relative border-b border-[#001b5e]/10 pb-6 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#4c85e6] dark:bg-[#d3f8cd]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-slate-400">
                    {title}
                  </p>
                </div>
                <h3 className="mt-4 max-w-lg text-2xl font-bold leading-tight text-[#001b5e] sm:text-3xl dark:text-[#d3f8cd]">
                  {t(`caseStudies.items.${id}.title`)}
                </h3>
              </header>

              <dl className="relative">
                <div className="my-6 rounded-2xl bg-[#001b5e]/[0.045] p-5 dark:bg-[#d3f8cd]/[0.06]">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70">
                    {t('caseStudies.fields.problem')}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-stone-700 dark:text-slate-200">
                    {t(`caseStudies.items.${id}.problem`)}
                  </dd>
                </div>

                <div className="divide-y divide-[#001b5e]/10 dark:divide-white/10">
                  {caseFields.map(({ id: field, Icon }) => (
                    <div
                      key={field}
                      className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr] lg:min-h-[145px] xl:grid-cols-[11rem_1fr]"
                    >
                      <dt className="flex items-center gap-3 font-bold text-slate-900 dark:text-slate-100">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#001b5e] text-lg text-white shadow-md shadow-[#4c85e6]/20 dark:bg-[#d3f8cd] dark:text-[#001b5e] dark:shadow-black/20">
                          <Icon aria-hidden="true" />
                        </span>
                        {t(`caseStudies.fields.${field}`)}
                      </dt>
                      <dd className="leading-relaxed text-stone-600 dark:text-slate-300">
                        {t(`caseStudies.items.${id}.${field}`)}
                      </dd>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex gap-3 rounded-2xl border border-[#001b5e]/10 p-4 dark:border-white/10">
                  <AiOutlineCode
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-xl text-[#001b5e] dark:text-[#d3f8cd]"
                  />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
                      {t('caseStudies.fields.stack')}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                      {t(`caseStudies.items.${id}.stack`)}
                    </dd>
                  </div>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
