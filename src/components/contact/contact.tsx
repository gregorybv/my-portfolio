import { ContactForm } from '../UI/contact-form';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';

export const Contact: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-container max-w-[1360px]"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-[#001b5e]/15 bg-white/35 p-3 shadow-2xl shadow-[#4c85e6]/10 sm:p-5 dark:border-[#d3f8cd]/15 dark:bg-slate-900/35 dark:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4c85e6]/15 blur-3xl dark:bg-[#d3f8cd]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#d3f8cd]/70 blur-3xl dark:bg-[#4c85e6]/10"
        />

        <div className="relative grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <header className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.4rem] bg-[#001b5e] p-7 text-white sm:p-10 lg:min-h-full dark:bg-[#d3f8cd] dark:text-[#001b5e]">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[3rem] border-white/[0.06] dark:border-[#001b5e]/[0.06]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[4rem] border-[#4c85e6]/20 dark:border-[#001b5e]/10"
            />

            <div className="relative">
              <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl shadow-lg shadow-black/10 ring-1 ring-white/15 dark:bg-[#001b5e]/10 dark:ring-[#001b5e]/15">
                <AiOutlineMail aria-hidden="true" />
              </span>
              <h2
                id="contact-heading"
                className="max-w-lg text-4xl font-bold leading-tight sm:text-5xl"
              >
                {t('contact.heading')}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200 dark:text-[#001b5e]/75">
                {t('contact.description')}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative mt-auto flex items-center gap-3 pt-12"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#d3f8cd] shadow-[0_0_0_6px_rgba(211,248,205,0.12)] dark:bg-[#001b5e]" />
              <span className="h-px flex-1 bg-white/20 dark:bg-[#001b5e]/20" />
              <span className="font-mono text-sm text-white/50 dark:text-[#001b5e]/50">
                &lt;/&gt;
              </span>
            </div>
          </header>

          <div className="rounded-[1.4rem] border border-[#001b5e]/10 bg-white/80 p-6 sm:p-8 lg:p-10 dark:border-white/10 dark:bg-slate-950/75">
            <ContactForm />
            <p className="mt-5 border-t border-[#001b5e]/10 pt-5 text-sm leading-relaxed text-stone-600 dark:border-white/10 dark:text-slate-400">
              {t('contact.privacy')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

