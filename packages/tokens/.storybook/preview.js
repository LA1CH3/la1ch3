import React from 'react';
import { addDecorator } from '@storybook/react';

import { fontFamily } from '../src/font-family.tokens';

const centeredStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '50%',
  minHeight: '100vh',
  margin: '0 auto',
};

addDecorator((storyFn) => (
  <div style={centeredStyles}>
    <>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

            html {
                font-size: 16px;
                font-family: ${fontFamily};
            }

            * {
                margin: 0;
                padding: 0;
            }
        `}
      </style>
      {storyFn()}
    </>
  </div>
));
