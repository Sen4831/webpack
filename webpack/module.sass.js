const path = require('path');

module.exports = (paths) => {
  return {
      module: {
          rules: [
              {
                test: /\.(sass|scss)$/,
                include: path.join(paths.source, 'scss'),
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
                  {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                  }
                ]
              }
          ]
      }
  };
};
