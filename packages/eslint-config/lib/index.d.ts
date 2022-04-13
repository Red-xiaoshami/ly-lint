declare const _default: {
    vueEslint: {
        env: {
            browser: boolean;
            es2021: boolean;
        };
        extends: string[];
        parserOptions: {
            ecmaVersion: number;
            parser: string;
            sourceType: string;
        };
        plugins: string[];
        rules: {};
    };
    reactEslint: {
        env: {
            browser: boolean;
            es2021: boolean;
            node: boolean;
        };
        extends: string[];
        parserOptions: {
            ecmaVersion: number;
            parser: string;
            sourceType: string;
            ecmaFeatures: {
                jsx: boolean;
            };
        };
        settings: {
            react: {
                pragma: string;
                version: string;
            };
        };
        plugins: string[];
        rules: {
            "vue/multi-word-component-names": (number | {
                ignores: any[];
            })[];
        };
    };
};
export default _default;
