module.exports = {
  "packages/client/**/*.{js,vue,html,ts,mdx}": [
    "npx --workspace=client vue-cli-service lint",
  ],
};
