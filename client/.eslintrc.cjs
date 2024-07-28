module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/components/ui"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "tailwindcss/no-custom-classname": [
      "error",
      {
        config: require("./tailwind.config.cjs"),
      },
    ],
    "tailwindcss/classnames-order": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "import/no-unresolved": "off",
  },
};
