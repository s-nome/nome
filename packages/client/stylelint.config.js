module.exports = {
  root: true,
  plugins: ["stylelint-prettier", "stylelint-order", "stylelint-scss"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["use", "forward"] }],
  },
};
