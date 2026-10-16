import { ContactForm } from '../UI/contact-form';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-container max-w-[900px]">
      <h2 id="contact-heading" className="h2">{t('contact.heading')}</h2>
      <p className="section-intro">{t('contact.description')}</p>
      <ContactForm/>
      <p className="mt-4 text-sm text-stone-600 dark:text-slate-400">
        {t('contact.privacy')}
      </p>
    </section>
  );
});

