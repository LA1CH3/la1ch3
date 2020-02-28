/**
 *  Spacing (margin, padding, grid gap)
 *
 *  Major-third (1.25) scale used for spacing
 */

const scaleModifier = 1.25;

const scaledSpacing = (scalePosition: number): string =>
  `${Math.pow(scaleModifier, scalePosition)}rem`;

export const spacingTiny = scaledSpacing(-2);
export const spacingSmall = scaledSpacing(-1);
export const spacingMedium = scaledSpacing(0);
export const spacingLarge = scaledSpacing(1);
export const spacingHuge = scaledSpacing(2);
export const spacingGiant = scaledSpacing(3);
export const spacingMassive = scaledSpacing(4);
