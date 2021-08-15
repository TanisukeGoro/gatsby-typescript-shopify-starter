module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'graphql'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    quotes: 'off',
    '@typescript-eslint/quotes': [
      2,
      'backtick',
      {
        avoidEscape: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(
          __dirname,
          'src/__generated__gatsby-introspection.json'
        ),
      },
    ],
  },
}
