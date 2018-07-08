const { isProduction } = require('webpack-mode')


module.exports = (env, test) => {
  if (isProduction) {
    return require('./webpack.production')
  } else {
    return require('./webpack.development')
  }
}
