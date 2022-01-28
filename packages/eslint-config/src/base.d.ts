declare const _default: {
    env: {
        browser: boolean;
        es2021: boolean;
        amd: boolean;
        node: boolean;
    };
    extends: string[];
    parserOptions: {
        ecmaVersion: number;
        parser: string;
        sourceType: string;
    };
    plugins: string[];
    rules: {
        "vue/multi-word-component-names": (number | {
            ignores: any[];
        })[];
    };
};
export = _default;
