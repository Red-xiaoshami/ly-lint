"use strict";
module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
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
//# sourceMappingURL=base.js.map