module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'next',
        'next/core-web-vitals',
    ],
    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        'jsx-a11y/label-has-associated-control': [ 2, {
            'labelComponents': ['CustomInputLabel'],
            'labelAttributes': ['label'],
            'controlComponents': ['CustomInput'],
            'depth': 3,
        }],
        'semi': ['error', 'always'],
        'prettier/prettier': 0,
    }
};