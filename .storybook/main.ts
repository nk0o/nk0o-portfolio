import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../styles/**/*.mdx',
    '../styles/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 2,
                  modules: {
                    auto: /\.module\.scss$/, // .module.scss 파일에만 CSS 모듈 적용
                  },
                },
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  implementation: require.resolve('sass'),
                  additionalData: `
                    @import "styles/common.scss";
                  `,
                  sourceMap: false,
                  sassOptions: {
                    includePaths: [path.resolve(__dirname, '../node_modules')],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
