// WorkItem component
import React from 'react';

interface WorkItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const WorkItem: React.FC<WorkItemProps> = ({
  year,
  title,
  duration,
  details,
}) => {
  return (
    <ol
      className="flex flex-col pt-3 md:flex-row relative border-l border-stone-200"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <li className="mb-7 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white " />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md shadow-lg shadow-[#4c85e6] hover:scale-105 ease-in duration-300">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base whitespace-pre-wrap font-normal text-stone-500">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
