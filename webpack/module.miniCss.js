const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (paths) => {
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/,
          include: [
            path.join(paths.source, 'scss'),
            path.join(paths.source, 'css'),
          ],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                  importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                  plugins: () => [
                      require('autoprefixer')
                  ],
              }
            },
            {
              loader: 'sass-loader',
              options: {
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.[hash].css',
        chunkFilename: 'css/[id].[hash].css',
      }),
    ]
  }
}
