import withNuxt from './.nuxt/eslint.config.mjs';
import globals from 'globals';
import vueI18nPlugin from '@intlify/eslint-plugin-vue-i18n';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default withNuxt([
  { files: ['**/*.js,ts,vue'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        google: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
    },
  },
  {
    settings: {
      'vue-i18n': {
        localeDir: {
          pattern: './locales/*.json',
          localeKey: 'file',
        },

        messageSyntaxVersion: '^9.0.0',
      },
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt'],
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
  },
  configPrettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueI18nPlugin.configs['flat/recommended'],
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/require-v-for-key': 'off',
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/ban-ts-comment': ['warn'],
      '@intlify/vue-i18n/no-raw-text': [
        'error',
        {
          ignoreText: ['|', 'fr-FR', 'en-US'],
        },
      ],
      // '@intlify/vue-i18n/key-format-style': [
      //   'error',
      //   'camelCase',
      //   {
      //     allowArray: true,
      //     splitByDots: true,
      //   },
      // ],
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': [
        'error',
        {
          ignoreLocales: [],
        },
      ],
      /** @todo Enable this rule to check unused key but we can't let it enabled because of the use of dynamic keys */
      // '@intlify/vue-i18n/no-unused-keys': [
      //   'error',
      //   {
      //     extensions: ['.js', '.ts', '.json', '.vue'],
      //     ignores: [],
      //     enableFix: false,
      //   },
      // ],
    },
  },
  {
    files: ['**/*.json'],
    rules: {
      'no-irregular-whitespace': 'warn',
    },
  },
]);
