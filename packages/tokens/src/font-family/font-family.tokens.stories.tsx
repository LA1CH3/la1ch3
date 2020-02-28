import React from 'react';

import * as CSS from 'csstype';

import { fontFamily as fontFamilyStack } from './font-family.tokens';
import { fontSizeMedium } from '../font-size/font-size.tokens';
import { lineHeightBodyMedium } from '../line-height/line-height.tokens';

const fontFamilyStyles: CSS.Properties = {
  fontSize: fontSizeMedium,
  lineHeight: lineHeightBodyMedium,
};

export default {
  title: 'Font Family',
};

export const fontFamily = () => (
  <p style={fontFamilyStyles}>{fontFamilyStack}</p>
);
