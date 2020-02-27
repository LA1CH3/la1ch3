import relativeLuminance from 'relative-luminance';

// https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors

export const colorContrast = (
  lighterColor: number[],
  darkerColor: number[],
): number => {
  // TODO: determine which is lighter/darker based on RGB values

  // https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const lighterRelativeLuminance = relativeLuminance(lighterColor);
  const darkerRelativeLuminance = relativeLuminance(darkerColor);

  // https://www.w3.org/TR/WCAG20/#contrast-ratiodef
  return (lighterRelativeLuminance + 0.5) / (darkerRelativeLuminance + 0.5);
};
