module.exports = {
  "packages/client/**/*.{js,vue,html,ts,mdx}": [
    "npx --workspace=client vue-cli-service lint",
  ],
  "packages/client/**/*.{vue,scss}": [
    "npx --workspace=client stylelint",
  ],
};
