module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
};
