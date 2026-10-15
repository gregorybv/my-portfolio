// @ts-ignore
import AnimatedCursor from 'react-animated-cursor';
import { FC, memo } from 'react';
import { Theme } from '../../../hooks/use-theme';

interface CursorProps {
  theme: Theme;
}

export const Cursor: FC<CursorProps> = memo(({theme}) => {
  return (
    <div>
      <AnimatedCursor
        innerSize={12}
        outerSize={10}
        color={theme === 'dark' ? '211, 248, 205' : '0, 27, 94'}
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    </div>
  );
});

