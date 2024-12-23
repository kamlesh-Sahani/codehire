import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add rules you want to disable here
      "rule-name-to-disable": "off", // Replace with the actual rule name
      "another-rule-to-disable": "off",
    },
  },
];

export default eslintConfig;
