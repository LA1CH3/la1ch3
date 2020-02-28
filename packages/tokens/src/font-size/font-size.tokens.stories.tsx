import React from 'react';

import {
  fontSizeTiny,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
  fontSizeHuge,
  fontSizeGiant,
  fontSizeMassive,
} from './font-size.tokens';

interface FontSizeStyles {
  fontSize: string;
}

const fontSizeStyles = (fontSize: string): FontSizeStyles => ({
  fontSize,
});

export default {
  title: 'Font Size',
};

export const all = () => (
  <>
    {[
      ['tiny', fontSizeTiny],
      ['small', fontSizeSmall],
      ['medium', fontSizeMedium],
      ['large', fontSizeLarge],
      ['huge', fontSizeHuge],
      ['giant', fontSizeGiant],
      ['massive', fontSizeMassive],
    ].map(([name, fontSize], i) => (
      <div key={i} style={fontSizeStyles(fontSize)}>
        {name}
      </div>
    ))}
  </>
);

export const tiny = () => (
  <p style={fontSizeStyles(fontSizeTiny)}>
    Copyright 2020 Jay Laiche, All Rights Reserved
  </p>
);

export const small = () => (
  <p style={fontSizeStyles(fontSizeSmall)}>
    Your username must only contain letters and numbers.
  </p>
);

export const medium = () => (
  <p style={fontSizeStyles(fontSizeMedium)}>This is an example of body copy.</p>
);

export const large = () => <p style={fontSizeStyles(fontSizeLarge)}>Heading</p>;

export const huge = () => <p style={fontSizeStyles(fontSizeHuge)}>Heading</p>;

export const giant = () => <p style={fontSizeStyles(fontSizeGiant)}>Heading</p>;

export const massive = () => (
  <p style={fontSizeStyles(fontSizeMassive)}>Heading</p>
);
