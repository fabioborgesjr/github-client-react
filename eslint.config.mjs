const { FlatCompat } = require("@eslint/eslintrc");

// Compatibilidade com pacotes antigos, como plugins.
const compat = new FlatCompat({
    baseDirectory: __dirname, // Necessário para resolver os caminhos antigos
});

module.exports = [
    ...compat.config({
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
        },
        plugins: ["@typescript-eslint", "react"],
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
        ],
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".ts"] }],
            "import/extensions": [
                "error",
                "ignorePackages",
                { ts: "off", tsx: "off" },
            ],
        },
    }),
];
