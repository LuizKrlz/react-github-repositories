module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    // prettier aponte todas as regras como erro
    "prettier/prettier": "error",
    //permite usar o js como extension
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    //desativa uma regra que obriga apenas um export default
    "import/prefer-default-export": "off"
  }
};
