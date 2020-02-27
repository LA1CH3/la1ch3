const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-storysource'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
        },
        {
          loader: 'react-docgen-typescript-loader',
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.plugins.push(new ForkTsCheckerPlugin());

    return config;
  },
};
