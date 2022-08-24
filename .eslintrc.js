module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['next-env.d.ts'],
  rules: {
    'prefer-template': 'warn',
    'no-nested-ternary': 2,
    'object-shorthand': 'warn',
    'no-unneeded-ternary': 2,
    'import/no-unresolved': 'off', // handled by typescript
    'import/order': [
      'error',
      {
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          {
            pattern: '@packages/**',
            group: 'internal',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'parent',
          'object',
          'type',
          'unknown',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      { 'ts-ignore': false, 'ts-nocheck': false },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowDouble',
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        // suffix: ['Type'], // we need to enable it when we are ready to solve the errors
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allowDouble',
      },
    ],
    'no-useless-computed-key': 'warn',
    eqeqeq: ['error', 'smart'],
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'no-useless-concat': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        message:
          'The method `toLocaleString` is not allowed due to performane concerns!. Consider using `Intl.NumberFormat` or `Intl.DateFormat` instead.',
        selector: 'MemberExpression > Identifier[name="toLocaleString"]',
      },
      {
        message:
          'The method `toLocaleTimeString` is not allowed due to performane concerns!. Consider using `Intl.NumberFormat` or `Intl.DateFormat` instead.',
        selector: 'MemberExpression > Identifier[name="toLocaleTimeString"]',
      },
    ],
    'import/first': 'error',
    'no-dupe-keys': 'warn',
    'no-extend-native': 'warn',
    'no-empty-pattern': 'warn',
    'no-lone-blocks': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jest-import': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debugging-utils': 'error',
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
  },
  overrides: [
    {
      files: ['*.inline.js'],
      rules: {
        'prefer-template': ['off'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },

    'import/internal-regex':
      '^@(?!testing-library|google-cloud|mediaplatform|next.*$).*',
    // matches all packages starting with @ excluding those we use from node_modules,
    // they are listed here explicitly as this regex ignores import/external-module-folders rule
  },
  plugins: ['import', 'jest', 'testing-library'],
};
