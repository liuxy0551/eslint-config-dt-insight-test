module.exports = {
    files: ['**/*.css', '**/*.scss'],
    customSyntax: require('postcss-scss'),
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        indentation: 4, // 缩进4格
        'declaration-empty-line-before': 'never', // 第一条属性声明前不允许有空行
        // 'selector-class-pattern': 'ant-[a-z]+',

        // 规则之前的空行
        'rule-empty-line-before': [
            'always',
            {
                except: ['inside-block', 'first-nested'],
            },
        ],
        'alpha-value-notation': 'number', // 小数显示数字(number)或百分数(percentage)
        'color-function-notation': 'legacy', // 颜色 rgba 等使用传统逗号隔开
    },
};
