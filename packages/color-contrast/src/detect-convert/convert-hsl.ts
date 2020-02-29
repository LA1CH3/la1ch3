import colorConvert from 'color-convert';

import { hslRegex } from '../detect-color-type';

export const convertHsl = (colorValue: string): number[] | void => {
  const extractedHslValues = colorValue.match(hslRegex);

  if (extractedHslValues && extractedHslValues.length > 3) {
    const [, h, s, l] = extractedHslValues;

    return colorConvert.hsl.rgb(h, s, l);
  } else {
    throw new Error('Unable to convert hsl string to rgb values');
  }
};
