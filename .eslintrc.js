module.exports = {
    root: true, // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8, // 支持es8语法，但并不意味着同时支持新的 ES8 全局变量或类型
        sourceType: 'module', // 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        // "project": "./tsconfig.json",
        // 使用的额外的语言特性
        ecmaFeatures: {
            jsx: true, // 启用 jsx
            tsx: true, // 启用 tsx
            globalReturn: true, // 允许在全局作用域下使用 return 语句
            impliedStrict: true // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
        }
    },
    settings: {
        react: {
            pragma: 'React',
            version: '16.6.3'
        }
    },
    env: {
        es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        node: true, // Node.js 全局变量和 Node.js 作用域
        browser: true // 浏览器全局变量
    },
    extends: [
        // "dt-insight",
        'standard',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['import', 'react', 'jsx-a11y', 'react-hooks'],
    globals: {
        expect: 'readonly',
        test: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly'
    },

    rules: {
        semi: 0,
        strict: 0,
        indent: [2, 4,
            {
                SwitchCase: 1, // 指定 switch-case 语句的缩进级别
                VariableDeclarator: 1, // 指定 var 变量声明语句的缩进级别
                outerIIFEBody: 1, // 指定 IIFE（立即调用的函数表达式）的缩进级别
                MemberExpression: 1, // 指定多行属性链的缩进级别
                FunctionDeclaration: { parameters: 1, body: 1 }, // 通过传入一个对象来指定函数声明的缩进规则
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 }, // 通过传入一个对象来指定函数调用表达式的缩进规则
                ArrayExpression: 1, // 指定数组中的元素的缩进级别
                ObjectExpression: 1, // 指定对象中的属性的缩进级别
                ImportDeclaration: 1, // 指定 import 语句的缩进级别
                flatTernaryExpressions: false, // 指定是否需要缩进嵌套在其他三元表达式中的三元表达式
                ignoreComments: false, // 指定注释是否需要需要与前一行或下一行的节点对齐
                ignoredNodes: [
                    'TemplateLiteral *',
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ],
                offsetTernaryExpressions: true
            }
        ],
        'arrow-body-style': 0,
        'no-return-assign': 0,
        'no-useless-constructor': 0,
        eqeqeq: 0,
        'no-console': 1,
        'no-debugger': 2,
        'no-param-reassign': 1,
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
        'react/display-name': [0],
        'react/sort-comp': 0,
        'react/jsx-uses-react': 1,
        'react/prefer-stateless-function': 0,
        'react/jsx-closing-bracket-location': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/prop-types': [0, { ignore: ['children'] }],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.js', '.jsx'] }],
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'standard/object-curly-even-spacing': 0,
        'standard/no-callback-literal': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
}
