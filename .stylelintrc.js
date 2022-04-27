module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order', 'stylelint-scss'],
    // customSyntax: 'postcss-scss',
    files: ['**/*.css', '**/*.less', '**/*.scss', '**/*.sass'],
    rules: {
        indentation: 4,
        'declaration-empty-line-before': 'never',
        'rule-empty-line-before': 'never',
        // 'selector-class-pattern': 'ant-[a-z]+',

    },
};
