import { FormButton } from '../form-button';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactForm: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <form
      action="https://getform.io/f/da699e76-08d8-4b86-8287-fb489777d6b9"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="contact-name">
            {t('contact.name')}
          </label>
          <input
            id="contact-name"
            className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="contact-phone">
            {t('contact.phone')}
          </label>
          <input
            id="contact-phone"
            className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
            type="text"
            name="phone"
          />
        </div>
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="contact-email">
          {t('contact.email')}
        </label>
        <input
          id="contact-email"
          className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          type="email"
          name="name"
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="contact-subject">
          {t('contact.subject')}
        </label>
        <input
          id="contact-subject"
          className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          type="text"
          name="subject"
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="contact-message">
          {t('contact.message')}
        </label>
        <textarea
          id="contact-message"
          className="rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          rows={5}
          name="message"
        ></textarea>
      </div>
      <FormButton/>
    </form>
  );
});

