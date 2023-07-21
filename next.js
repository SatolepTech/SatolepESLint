module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  ignorePatterns: ['node_modules', 'src/generated'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'simple-import-sort',
    'unused-imports'
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'arrow-body-style': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-useless-constructor': ['off'],
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'auto',
        jsxSingleQuote: true,
        printWidth: 70,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      },
      {
        usePrettierrc: false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react$'],
          ['^@assets(/.*|$)', '^@layout(/.*|$)'],
          ['^@common(/.*|$)', '^@config(/.*|$)', '^@pages(/.*|$)'],
          ['^@src(/.*|$)'],
          ['^@\\w'],
          ['^\\.']
        ]
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'sort-imports': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
