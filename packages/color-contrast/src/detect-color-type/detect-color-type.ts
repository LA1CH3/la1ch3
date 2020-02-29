export const rgbRegex = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
export const hslRegex = /hsl\((\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)/;
export const hexRegex = /#([A-Z0-9]{6}|[A-Z0-9]{3})/i;

export type ColorType = 'rgb' | 'hsl' | 'hex' | 'keyword';

export const detectColorType = (colorValue: string): ColorType => {
  if (rgbRegex.test(colorValue)) {
    return 'rgb';
  } else if (hslRegex.test(colorValue)) {
    return 'hsl';
  } else if (hexRegex.test(colorValue)) {
    return 'hex';
  } else {
    return 'keyword';
  }
};
