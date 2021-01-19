module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
     'standard-with-typescript',
    'prettier',
  ],
   parserOptions: {
    project: './tsconfig.json'
  }
}
