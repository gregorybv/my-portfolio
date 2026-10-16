import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const FormButton: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      className="group mt-4 w-full rounded-lg bg-[#001b5e] p-4 shadow-lg shadow-[#4c85e6] transition-colors dark:bg-[#d3f8cd] dark:shadow-black/30"
    >
      <span className="block text-xl text-gray-100 transition duration-200 ease-in group-hover:scale-105 dark:text-[#001b5e]">
        {t('contact.submit')}
      </span>
    </button>
  );
});
