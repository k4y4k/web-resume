/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, './/setup-test-env.js')],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    '\\.svg': '<rootDir>//__mocks__/svgTransform.js',
    '\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-react',
          'babel-preset-gatsby',
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  moduleNameMapper: {
    // "\\.svg": `.//__mocks__/file-mocks.js`,
    '\\.svg': `<rootDir>//__mocks__/svgTransform.js`,
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>//__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
}
