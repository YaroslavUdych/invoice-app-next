import { fileURLToPath } from 'url';
import { dirname } from 'path';

import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImportSort from 'eslint-plugin-simple-import-sort';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/.husky/**',
      '**/coverage/**',
      '**/build/**',
      '**/public/**',
    ],
  },

  js.configs.recommended,
  {
    files: ['src/**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  {
    files: ['next.config.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
      'simple-import-sort': pluginImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [['^react', '^next', '^@?\\w'], ['^@/'], ['^\\.'], ['^.+\\.s?css$']],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },

  {
    rules: {
      ...prettier.rules,
    },
  },
];
