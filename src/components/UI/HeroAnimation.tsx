import { WinkingFace } from 'fluent-emoji';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroAnimation: React.FC = () => {
  return (
    <h2
      className="flex items-center sm:text-4xl text-2xl pt-4 text-gray-800"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <TypeAnimation
        sequence={[
          'Developer',
          2000,
          'Coder',
          2000,
          'Technical enthusiast',
          2000,
          'And just a good man',
          2000,
        ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        style={{ fontSize: '1em', paddingLeft: '5px' }}
      />
      {/* emoji */}
      <WinkingFace className="w-[55px] pl-3" />
    </h2>
  );
};

export default HeroAnimation;
