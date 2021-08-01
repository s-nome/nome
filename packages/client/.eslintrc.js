module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['public/index.html'],
      rules: {
        'prettier/prettier': 'off',
        'vue/comment-directive': 'off',
      },
    },
    {
      files: ['*.mdx'],
      extends: [
        'eslint:recommended',
        'plugin:mdx/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: false,
            tabWidth: 2,
            trailingComma: 'es5',
          },
        ],
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
}
