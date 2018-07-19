const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(paths) {
  return {
    plugins: [
      new CopyWebpackPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      }])
    ]
  }
}
