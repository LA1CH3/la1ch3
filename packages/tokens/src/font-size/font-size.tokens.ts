/**
 *  Font Sizes
 *
 *  Perfect-fourth (1.33) scale used for font-sizes
 */

const scaleModifier = 1.333;

const scaledFontSize = (scalePosition: number): string =>
  `${Math.pow(scaleModifier, scalePosition)}rem`;

export const fontSizeTiny = scaledFontSize(-2); // copyright text, legalise
export const fontSizeSmall = scaledFontSize(-1); // validation messages, supplemental text
export const fontSizeMedium = scaledFontSize(0); // body text
export const fontSizeLarge = scaledFontSize(1); // subheadings, h6-h4
export const fontSizeHuge = scaledFontSize(2); // h3
export const fontSizeGiant = scaledFontSize(3); // h2
export const fontSizeMassive = scaledFontSize(4); // h1
