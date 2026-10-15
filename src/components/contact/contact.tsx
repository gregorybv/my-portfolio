import { ContactForm } from '../UI/contact-form';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="max-w-[900px] m-auto md:pl-20 px-4 py-16">
      <h2 className="h2">{t('contact.heading')}</h2>
      <ContactForm/>
    </div>
  );
});

