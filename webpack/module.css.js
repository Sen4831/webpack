const path = require('path');

module.exports = function(paths) {
  return {
      module: {
          rules: [
              {
                  test: /\.css$/,
                  include: path.resolve(__dirname, 'css'),
                  use: [
                    {
                      loader: 'style-loader',
                    },
                    {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1,
                          sourceMap: true
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                          plugins: () => [
                              require('autoprefixer')
                          ],
                          sourceMap: true
                      }
                    },
                  ]
              }
          ]
      }
  };
};
