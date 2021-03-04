/* eslint-disable no-magic-numbers */

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb-typescript',
    ],
    rules: {
        'no-shadow': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.tsx', 'ts'],
            },
        ],
        'max-lines': [
            'warn',
            {
                max: 200,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'sort-keys': [
            'off',
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        'sort-vars': [
            'off',
            {
                ignoreCase: true,
            },
        ],
        camelcase: [
            'error',
            {
                properties: 'always',
            },
        ],
        'capitalized-comments': 'error',
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'max-depth': ['error', 4],
        'max-nested-callbacks': ['error', 3],
        'max-params': ['error', 3],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 2,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['const', 'let'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['if', 'case', 'return', 'switch', 'try', 'do', 'while'],
            },
        ],
        'prefer-object-spread': 'error',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
                number: true,
                string: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 140,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        'object-curly-spacing': ['warn', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-magic-numbers': [
            'error',
            {
                ignore: [-1, 0, 1, 2],
                ignoreDefaultValues: true,
            },
        ],
        'no-useless-call': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
            },
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        curly: ['error', 'all'],
        'no-mixed-operators': 'error',
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        '@typescript-eslint/indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/no-static-element-interactions': [
            'warn',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
            },
        ],
        'import/prefer-default-export': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
    overrides: [
        {
            files: ['*.tsx', '*.ts'],
            rules: {
                'react/prop-types': 'off',
                'no-unused-vars': 'warn',
            },
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
            },
        },
    ],
};
