import { FormButton } from '../form-button';
import { FC, memo } from 'react';

export const ContactForm: FC = memo(() => {
  return (
    <form
      action="https://getform.io/f/da699e76-08d8-4b86-8287-fb489777d6b9"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
            type="text"
            name="phone"
          />
        </div>
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          type="email"
          name="name"
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className="flex rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          type="text"
          name="subject"
        />
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="rounded-lg border-2 border-gray-300 p-3 focus:border-[#4c85e6] dark:border-slate-700 dark:focus:border-[#d3f8cd]"
          rows={5}
          name="message"
        ></textarea>
      </div>
      <FormButton/>
    </form>
  );
});

