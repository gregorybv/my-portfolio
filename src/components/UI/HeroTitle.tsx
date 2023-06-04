// HeroTitle component

import React from 'react';
import TextSpan from './TextSpan';

const HeroTitle: React.FC = () => {
  const one = "I'm".split('');
  const two = 'Gregory'.split('');
  const three = 'web'.split('');
  const four = 'developer'.split('');

  return (
    <div
      className="sm:text-8xl text-5xl flex flex-col font-bold text-gray-800"
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
};

export default HeroTitle;
