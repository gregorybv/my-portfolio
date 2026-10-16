import { FormButton } from '../form-button';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactForm: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <form
      action="https://getform.io/f/da699e76-08d8-4b86-8287-fb489777d6b9"
      method="POST"
    >
      <div hidden>
        <label htmlFor="contact-company">Company website</label>
        <input
          id="contact-company"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-2">
        <div className="flex flex-col">
          <label className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70" htmlFor="contact-name">
            {t('contact.name')}
          </label>
          <input
            id="contact-name"
            className="min-h-[52px] rounded-xl border border-[#001b5e]/15 px-4 focus:border-[#4c85e6] dark:border-white/15 dark:focus:border-[#d3f8cd]"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70" htmlFor="contact-phone">
            {t('contact.phone')}
          </label>
          <input
            id="contact-phone"
            className="min-h-[52px] rounded-xl border border-[#001b5e]/15 px-4 focus:border-[#4c85e6] dark:border-white/15 dark:focus:border-[#d3f8cd]"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      </div>

      <div className="mt-5 grid w-full gap-5 sm:grid-cols-2">
        <div className="flex flex-col">
          <label className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70" htmlFor="contact-email">
            {t('contact.email')}
          </label>
          <input
            id="contact-email"
            className="min-h-[52px] rounded-xl border border-[#001b5e]/15 px-4 focus:border-[#4c85e6] dark:border-white/15 dark:focus:border-[#d3f8cd]"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70" htmlFor="contact-subject">
            {t('contact.subject')}
          </label>
          <input
            id="contact-subject"
            className="min-h-[52px] rounded-xl border border-[#001b5e]/15 px-4 focus:border-[#4c85e6] dark:border-white/15 dark:focus:border-[#d3f8cd]"
            type="text"
            name="subject"
            autoComplete="off"
            required
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <label className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#001b5e]/70 dark:text-[#d3f8cd]/70" htmlFor="contact-message">
          {t('contact.message')}
        </label>
        <textarea
          id="contact-message"
          className="min-h-[132px] resize-y rounded-xl border border-[#001b5e]/15 p-4 focus:border-[#4c85e6] dark:border-white/15 dark:focus:border-[#d3f8cd]"
          rows={4}
          name="message"
          required
        ></textarea>
      </div>
      <FormButton/>
    </form>
  );
});

