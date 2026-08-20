import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {ignores: ['**/dist/**', '**/node_modules/**', '**/legacy.html']},
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {...globals.browser, ...globals.node},
      parserOptions: {ecmaFeatures: {jsx: true}, sourceType: 'module'},
    },
    plugins: {react, 'react-hooks': reactHooks, 'react-refresh': reactRefresh},
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'off',
    },
    settings: {react: {version: '19.2'}},
  },
];
