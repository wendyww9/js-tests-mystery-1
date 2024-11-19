import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("standard"), 
  {ignores: ["test",  "*.config.*"]}, 
  {
    plugins: {
        jest,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...jest.environments.globals.globals,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "max-len": [1, 120, 2, {
            ignoreComments: true,
        }],

        "no-console": "off",
        quotes: ["warn", "single"],

        camelcase: ["error", {
            properties: "always",
        }],

        semi: ["warn", "always"],
    },
}];