import { FC, memo } from 'react';

interface ProjectItemProps {
  img: string;
  title: string;
  href: string;
  stack: string;
}

export const ProjectItem: FC<ProjectItemProps> = memo(({
                                                         img,
                                                         title,
                                                         href,
                                                         stack,
                                                       }) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#4c85e6] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] hover:scale-110 ease-in duration-300">
      <img
        src={img}
        alt="projectitemImage"
        className="h-full rounded-xl group-hover:opacity-10"
        loading="lazy"
      />
      <div
        className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wide text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <a href={href} target="_blank">
          <p
            className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-[#001b5e] hover:text-white ease-in duration-300">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
});

