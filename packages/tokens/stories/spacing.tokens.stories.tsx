import React from 'react';

import * as CSS from 'csstype';

import { colorGray10, colorWhite } from '../src/colors.tokens';

import {
  spacingTiny,
  spacingSmall,
  spacingMedium,
  spacingLarge,
  spacingHuge,
  spacingGiant,
  spacingMassive,
} from '../src/spacing.tokens';

export default {
  title: 'Spacing',
};

const boxStyles = (spacing: string): CSS.Properties => ({
  color: colorWhite,
  backgroundColor: colorGray10,
  padding: spacing,
});

export const all = () => (
  <>
    {[
      ['tiny', spacingTiny],
      ['small', spacingSmall],
      ['medium', spacingMedium],
      ['large', spacingLarge],
      ['huge', spacingHuge],
      ['giant', spacingGiant],
      ['massive', spacingMassive],
    ].map(([name, size], i) => (
      <div key={i} style={{ ...boxStyles(size), marginTop: spacingLarge }}>
        {name}
      </div>
    ))}
  </>
);

export const withPaddingTiny = () => (
  <div style={boxStyles(spacingTiny)}>la1ch3</div>
);

export const withPaddingSmall = () => (
  <div style={boxStyles(spacingSmall)}>la1ch3</div>
);

export const withPaddingMedium = () => (
  <div style={boxStyles(spacingMedium)}>la1ch3</div>
);

export const withPaddingLarge = () => (
  <div style={boxStyles(spacingLarge)}>la1ch3</div>
);

export const withPaddingHuge = () => (
  <div style={boxStyles(spacingHuge)}>la1ch3</div>
);

export const withPaddingGiant = () => (
  <div style={boxStyles(spacingGiant)}>la1ch3</div>
);

export const withPaddingMassive = () => (
  <div style={boxStyles(spacingMassive)}>la1ch3</div>
);
