export default {
    env: {
<<<<<<< HEAD
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
  
=======
        browser: true,
        es2021: true,
        amd: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
        "vue/multi-word-component-names": [
            0,
            {
                ignores: [],
            },
        ],
    },
};
>>>>>>> 4ad320c95d268d99079d9cdf0ab4bbd746518c89
