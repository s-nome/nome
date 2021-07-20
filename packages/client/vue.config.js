const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,css,scss}'],
        fix: true,
      }),
    ],
  },
}
