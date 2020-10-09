module.exports = {
  extends: ['standard'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  globals: {
    gsap: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    camelcase: ['error', { ignoreDestructuring: true, properties: 'never' }],
    quotes: ['error', 'single'],
  },
}
