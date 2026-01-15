import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsonc from 'eslint-plugin-jsonc';
import jsoncParser from 'jsonc-eslint-parser';

export default tseslint.config(
  // CONFIGURACIÓN GLOBAL: Se aplica a TODOS los archivos .ts del proyecto
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        // Esto permite que ESLint analice tipos en todo el proyecto
        project: true, 
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // CONFIGURACIÓN ESPECÍFICA: Solo para carpetas de soporte (Pages, Utils, Data)
  {
    files: ['pages/**/*.ts', 'utils/**/*.ts', 'data/**/*.ts'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },

  // CONFIGURACIÓN ESPECÍFICA: Solo para la carpeta de TESTS
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.ts'], // Solo aplica reglas de Playwright aquí
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'warn',
      'playwright/no-skipped-test': 'warn',
    },
  },
  // Configuración para archivos JSON
  {
    files: ['**/*.json', '**/*.jsonc'], // Aplica a archivos en data/ y cualquier otro .json
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc,
    },
    rules: {
      // Usar las reglas recomendadas del plugin
      ...jsonc.configs['recommended-with-json'].rules,
      // Reglas personalizadas:
      'jsonc/indent': ['error', 2],
      'jsonc/comma-dangle': ['error', 'never'], // Prohíbe comas al final (clásico error en JSON)
    },
  },

  // IGNORAR CARPETAS (Sustituye al antiguo .eslintignore)
  {
    ignores: [
        'node_modules/',
        'test-results/',
        'playwright-report/',
        'blob-report/',
        'playwright/.cache/'
    ],
  },

  eslintConfigPrettier,
);
