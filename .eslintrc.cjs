const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard',
        'plugin:editorconfig/all',
        'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        'editorconfig',
    ],
    rules: {
        'no-tabs': 0,
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'never' }],
        'padded-blocks': ['error', 'never'],
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prefer-promise-reject-errors': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-irregular-whitespace': ['off', { skipTemplates: true }],
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': ['error', 4],
        'vue/no-deprecated-slot-attribute': 'off',
        // 'vue/singleline-html-element-content-newline':
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 5,
                multiline: 1,
            },
        ],
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignores: ['pre', 'textarea', 'button', 'th', 'tr', ...INLINE_ELEMENTS],
            },
        ],
    },
}
