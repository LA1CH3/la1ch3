import React from 'react';

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

const hslRegex = /hsl\(\d+\,\d+\%\,(\d+)\%\)/;

const getLightnessFromHsl = (hslString: string): string | null => {
  const lightnessMatch = hslRegex.exec(hslString);

  console.log(hslString);
  console.log(lightnessMatch);

  if (lightnessMatch !== null) {
    return lightnessMatch[1];
  } else {
    return null;
  }
};

const colorContrast = (lighter: string, darker: string): string | null => {
  const lighterLightness = getLightnessFromHsl(lighter);
  const darkerLightness = getLightnessFromHsl(darker);

  // from WCAG contrast ratio
  // https://www.w3.org/TR/WCAG20/#contrast-ratiodef
  if (darkerLightness && lighterLightness) {
    return Number(
      (Number(lighterLightness) + 0.05) / (Number(darkerLightness) + 0.5),
    ).toFixed(3);
  } else {
    return null;
  }
};

export default {
  title: 'Colors',
};

const boxStyles = (
  backgroundColor: string,
  textColor: string,
  borderColor: string,
): CSS.Properties => ({
  padding: spacingMedium,
  backgroundColor,
  color: textColor,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor,
});

export const white = () => (
  <div style={boxStyles(colorWhite, colorGray10, colorGray10)}>
    <div>color: white</div>
    <div>contrast: {colorContrast(colorWhite, colorGray10)}</div>
  </div>
);

export const gray10 = () => (
  <div style={boxStyles(colorGray10, colorWhite, colorWhite)}>gray10</div>
);

export const gray60 = () => (
  <div style={boxStyles(colorGray60, colorGray10, colorGray10)}>gray60</div>
);

export const gray80 = () => (
  <div style={boxStyles(colorGray80, colorGray10, colorGray10)}>gray80</div>
);

export const gray90 = () => (
  <div style={boxStyles(colorGray90, colorGray10, colorGray10)}>gray90</div>
);
