import { WinkingFace } from 'fluent-emoji';
import { FC, memo } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const HeroAnimation: FC = memo(() => {
  return (
    <h2
      className="flex items-center pt-4 text-2xl text-gray-800 transition-colors sm:text-4xl dark:text-slate-200"
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
        style={{fontSize: '1em', paddingLeft: '5px'}}
      />
      <WinkingFace className="w-[55px] pl-3"/>
    </h2>
  );
});
