module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'curly': ['error', 'all'],
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
};
