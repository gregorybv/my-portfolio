import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineApartment,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineTeam,
  AiOutlineThunderbolt,
} from 'react-icons/ai';

const metrics = [
  { id: 'experience', value: '7+', suffix: '' },
  { id: 'applications', value: '2', suffix: '' },
  { id: 'data', value: '50K', suffix: '' },
  { id: 'components', value: '60+', suffix: '' },
] as const;

const responsibilityKeys = ['architecture', 'delivery', 'team'] as const;

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-container !max-w-[1440px]"
    >
      <h2 id="about-heading" className="h2">{t('about.heading')}</h2>

      <div className="relative overflow-hidden rounded-[2rem] border border-[#001b5e]/15 bg-white/40 p-3 shadow-2xl shadow-[#4c85e6]/10 sm:p-5 dark:border-[#d3f8cd]/15 dark:bg-slate-900/35 dark:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#4c85e6]/20 blur-3xl dark:bg-[#4c85e6]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#d3f8cd]/80 blur-3xl dark:bg-[#d3f8cd]/10"
        />

        <div className="relative grid gap-4 lg:grid-cols-[1.45fr_1fr]">
          <article
            className="relative overflow-hidden rounded-[1.5rem] bg-[#001b5e] p-7 text-white sm:p-10"
            data-aos="fade-up"
          >
            <div
              aria-hidden="true"
              className="absolute -right-14 -top-20 h-64 w-64 rounded-full border-[42px] border-white/[0.04]"
            />

            <div className="relative">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d3f8cd]">
                <span className="h-px w-8 bg-[#d3f8cd]" />
                {t('about.eyebrow')}
              </p>
              <h3 className="mt-6 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                {t('about.title')}
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
                {t('about.summary')}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {responsibilityKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold"
                  >
                    <AiOutlineCheck
                      aria-hidden="true"
                      className="shrink-0 text-lg text-[#d3f8cd]"
                    />
                    {t(`about.responsibilities.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#d3f8cd] px-5 py-3 font-bold text-[#001b5e] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
                  href="#case-studies"
                >
                  {t('about.caseStudiesCta')}
                  <AiOutlineArrowRight aria-hidden="true" />
                </a>
                <a
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/60 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10"
                  href="#contact"
                >
                  {t('about.contactCta')}
                </a>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map(({ id, value, suffix }, index) => (
              <article
                key={id}
                className="group flex min-h-[170px] flex-col justify-between rounded-[1.5rem] border border-[#001b5e]/10 bg-white/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#001b5e]/25 hover:shadow-xl sm:p-6 dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-[#d3f8cd]/30"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 70}
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500 dark:text-slate-400">
                  {t(`about.metrics.${id}.label`)}
                </span>
                <p className="mt-5 text-4xl font-black tracking-tight text-[#001b5e] sm:text-5xl dark:text-[#d3f8cd]">
                  {value}
                  {suffix}
                </p>
                <p className="mt-2 text-sm leading-snug text-stone-600 dark:text-slate-300">
                  {t(`about.metrics.${id}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="relative mt-4 grid gap-4 rounded-[1.5rem] border border-[#001b5e]/10 bg-white/70 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-7 dark:border-white/10 dark:bg-slate-950/60"
          data-aos="fade-up"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001b5e] text-2xl text-white shadow-lg shadow-[#4c85e6]/20 dark:bg-[#d3f8cd] dark:text-[#001b5e] dark:shadow-black/20">
            <AiOutlineThunderbolt aria-hidden="true" />
          </span>
          <div>
            <p className="font-bold text-[#001b5e] dark:text-[#d3f8cd]">
              {t('about.impact.title')}
            </p>
            <p className="mt-1 leading-relaxed text-stone-600 dark:text-slate-300">
              {t('about.impact.description')}
            </p>
          </div>
          <div className="flex items-center gap-3 text-[#001b5e] dark:text-[#d3f8cd]">
            <AiOutlineApartment aria-hidden="true" className="text-2xl" />
            <span className="h-8 w-px bg-[#001b5e]/20 dark:bg-white/20" />
            <AiOutlineTeam aria-hidden="true" className="text-2xl" />
            <span className="text-sm font-bold">{t('about.impact.team')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
