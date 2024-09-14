import babelParser from '@babel/eslint-parser';
import htmlParser from '@html-eslint/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: [ 'dist/**/*',
      '*config.js',
      '!eslint.config.js',
      '!vite.config.js' ],
  },
  js.configs.recommended,
  {
    files: [ 'src/**/*.{js,ts,jsx,tsx,vue}' ],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: babelParser,
      parserOptions: {
        // babelrc: false,
        requireConfigFile: false,
        presets: [ '@babel/preset-env' ],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'linebreak-style': [ 0, 'windows' ],
      'quotes': 'off',
      'semi': 'off',
      'no-unused-vars': 'off',
      // 'no-undef': 'off',
    },
    plugins: {},
  },
  {
    ...htmlParser.configs['flat/recommended'],
    files: [ 'src/**/*.{html,htm}' ],
    rules: {
      // Must be defined again. If not, all recommended rules will be lost
      ...htmlParser.configs['flat/recommended'].rules,
      '@html-eslint/indent': [ 'error', 2 ],
    },
  },
  {
    ...prettierConfig,
    rules: {
      'array-element-newline': [ 'error', { minItems: 4 } ],
      'indent': [ 'error', 2 ],
      'trailingComma': [ 0, 'es5' ],
      'no-tabs': [ 2 ],
      'semi': [ 2, 'always' ],
      'quotes': [ 2, 'single' ],
      'quote-props': [ 2, 'consistent-as-needed' ],
      'arrow-parens': [ 2, 'as-needed', { requireForBlockBody: true } ],
      'array-bracket-spacing': [ 2, 'always' ],
      'eol-last': [ 2, 'always' ],
      'max-len': [ 1, 100 ],
      'block-spacing': [ 2, 'always' ],
      'comma-dangle': [ 'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      } ],
    },
  },
];
