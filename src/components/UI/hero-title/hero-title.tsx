import { FC, memo } from 'react';
import { TextSpan } from '../text-span';

export const HeroTitle: FC = memo(() => {
  const one = 'I\'m'.split('');
  const two = 'Gregory'.split('');
  const three = 'web'.split('');
  const four = 'developer'.split('');

  return (
    <div
      className="flex flex-col text-5xl font-bold text-gray-800 transition-colors sm:text-8xl dark:text-slate-100"
      data-aos="fade-down"
      data-aos-duration="1300"
    >
      <div className="flex">
        {one.map((letter, index) => {
          return (
            <TextSpan className="p-5" key={index}>
              {letter}
            </TextSpan>
          );
        })}
      </div>

      <div className="flex">
        {two.map((letter, index) => {
          return (
            <TextSpan className="flex" key={index}>
              {letter}
            </TextSpan>
          );
        })}
      </div>

      <div className="flex gap-5">
        <div className="flex">
          {three.map((letter, index) => {
            return (
              <TextSpan className="p-5" key={index}>
                {letter}
              </TextSpan>
            );
          })}
        </div>

        <div className="flex">
          {four.map((letter, index) => {
            return (
              <TextSpan className="p-5" key={index}>
                {letter}
              </TextSpan>
            );
          })}
        </div>
      </div>
    </div>
  );
});

