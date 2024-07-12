import { ContactForm } from '../UI/contact-form';
import { FC, memo } from 'react';

export const Contact: FC = memo(() => {
  return (
    <div id="contact" className="max-w-[900px] m-auto md:pl-20 px-4 py-16">
      <h2 className="h2">Contact me</h2>
      <ContactForm/>
    </div>
  );
});

