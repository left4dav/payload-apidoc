module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ["@typescript-eslint", 'prettier'],
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
