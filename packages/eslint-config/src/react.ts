export default {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        "ecmaFeatures": {
            jsx: true
        }
    },
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        "vue/multi-word-component-names": [
            0,
            {
                ignores: [],
            },
        ],
    },
};
