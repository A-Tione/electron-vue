module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'indent': ['warn', 4, { 'SwitchCase': 1 }],
        lintOnSave: undefined
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
}
