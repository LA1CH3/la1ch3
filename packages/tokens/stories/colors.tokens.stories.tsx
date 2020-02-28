import React from 'react';
import { colorContrast, hslToRgb } from '@la1ch3/color-contrast';

import * as CSS from 'csstype';

import {
  colorWhite,
  colorGray10,
  colorGray60,
  colorGray80,
  colorGray90,
  rainbowColors,
} from '../src/colors.tokens';

import { spacingMedium } from '../src/spacing.tokens';

export default {
  title: 'Colors',
};

const boxStyles = (
  backgroundColor: string,
  foregroundColor: string,
): CSS.Properties => ({
  padding: spacingMedium,
  backgroundColor,
  color: foregroundColor,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: foregroundColor,
});

const Color = ({ name, background, foreground }) => (
  <div style={boxStyles(background, foreground)}>
    <div>color: {name}</div>
    <div>
      contrast:{' '}
      {colorContrast(
        hslToRgb(foreground) as number[],
        hslToRgb(background) as number[],
      ).toFixed(3)}
    </div>
  </div>
);

export const white = () => (
  <Color name="white" background={colorWhite} foreground={colorGray10} />
);

export const gray10 = () => (
  <Color name="gray10" background={colorGray10} foreground={colorWhite} />
);

export const gray60 = () => (
  <Color name="gray60" background={colorGray60} foreground={colorGray10} />
);

export const gray80 = () => (
  <Color name="gray80" background={colorGray80} foreground={colorGray10} />
);

export const gray90 = () => (
  <Color name="gray90" background={colorGray90} foreground={colorGray10} />
);
