import { detectColorType } from '../detect-color-type';
import { convertRgb } from './convert-rgb';
import { convertHsl } from './convert-hsl';
import { convertHex } from './convert-hex';

export const detectConvert = (colorValue: string): number[] | void => {
  switch (detectColorType(colorValue)) {
    case 'rgb':
      return convertRgb(colorValue);
    case 'hsl':
      return convertHsl(colorValue);
    case 'hex':
      return convertHex(colorValue);
    case 'keyword':
      return 'convert keyword string to values';
  }
};
