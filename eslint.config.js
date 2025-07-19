import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
        'react-hooks': pluginReactHooks,
    },
    rules: {
        ...pluginReactHooks.configs.recommended.rules,
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];