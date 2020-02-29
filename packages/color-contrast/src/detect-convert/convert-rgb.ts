import { rgbRegex } from '../detect-color-type';

export const convertRgb = (rgbValue: string): number[] | void => {
  const extractedRgbValues = rgbValue.match(rgbRegex);

  if (extractedRgbValues && extractedRgbValues.length > 3) {
    const r = Number(extractedRgbValues[1]);
    const g = Number(extractedRgbValues[2]);
    const b = Number(extractedRgbValues[3]);

    return [r, g, b];
  } else {
    throw new Error('Unable to convert rgb string to rgb values');
  }
};
