import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: [".next", "out"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    // Generated screens (src/app/*/page.tsx) carry a described `@ts-nocheck`: they come
    // from the approved design under its own JS runtime contract, not hand-written
    // TypeScript (see next.config.ts). The pragma must sit before any other statement to
    // take effect, which also makes the default ban-ts-comment rule flag it; allow it here
    // rather than losing the exemption tsc otherwise depends on for these files.
    files: ["src/app/**/page.tsx"],
    rules: {
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-nocheck": "allow-with-description" }],
    },
  },
);
