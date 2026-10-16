import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const FormButton: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      className="group mt-6 flex min-h-[56px] w-full items-center justify-between overflow-hidden rounded-xl bg-[#001b5e] px-5 text-left shadow-lg shadow-[#4c85e6]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4c85e6]/30 dark:bg-[#d3f8cd] dark:shadow-black/30 dark:hover:shadow-black/40"
    >
      <span className="font-bold text-white dark:text-[#001b5e]">
        {t('contact.submit')}
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xl text-white transition-transform duration-300 group-hover:translate-x-1 dark:bg-[#001b5e]/10 dark:text-[#001b5e]">
        <AiOutlineArrowRight aria-hidden="true" />
      </span>
    </button>
  );
});
