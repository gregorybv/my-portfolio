import { FC, memo } from 'react';

export const FormButton: FC = memo(() => {
  return (
    <button className="group mt-4 w-full rounded-lg bg-[#001b5e] p-4 shadow-lg shadow-[#4c85e6] transition-colors dark:bg-[#d3f8cd] dark:shadow-black/30">
      <p className="text-xl text-gray-100 transition duration-200 ease-in group-hover:scale-110 dark:text-[#001b5e]">
        Send Message
      </p>
    </button>
  );
});
