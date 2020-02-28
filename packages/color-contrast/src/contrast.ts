import relativeLuminance from 'relative-luminance';

// https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors

export const colorContrast = (color1: number[], color2: number[]): number => {
  // TODO: determine which is lighter/darker based on RGB values

  // https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const relativeLuminance1 = relativeLuminance(color1);
  const relativeLuminance2 = relativeLuminance(color2);

  // https://www.w3.org/TR/WCAG20/#contrast-ratiodef

  const result =
    (Math.max(relativeLuminance1, relativeLuminance2) + 0.05) /
    (Math.min(relativeLuminance1, relativeLuminance2) + 0.05);

  if (result < 1) {
    return 1 / result;
  } else {
    return result;
  }
};
