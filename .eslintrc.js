module.exports = {
  extends: ['standard'],
  plugins: ['svelte3'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  globals: {
    gsap: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'camelcase': ['error', { ignoreDestructuring: true, properties: 'never' }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  },
}
