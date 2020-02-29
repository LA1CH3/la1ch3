import colorConvert from 'color-convert';

import { hexRegex } from '../detect-color-type';

export const convertHex = (colorValue: string): number[] | void => {
  const extractedHexValue = colorValue.match(hexRegex);

  const [, hexCode] = extractedHexValue;

  if (extractedHexValue && extractedHexValue.length > 1) {
    return colorConvert.hex.rgb(hexCode);
  } else {
    throw new Error('Unable to convert hex color string to rgb values');
  }
};
