const path = require('path');
const merge = require('webpack-merge')
const { isProduction } = require('webpack-mode');
const devServer = require('./webpack/devserver');

const MODULES = {
  js: require('./webpack/module.js'),
  sass: require('./webpack/module.sass'),
  css: require('./webpack/module.css'),
  miniCss: require('./webpack/module.miniCss')
}

const PLUGINS = {
  copy: require('./webpack/plugin.copy'),
  html: require('./webpack/plugin.html'),
}

const PATHS = {
  source: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
}

const common = merge([
  {
    entry: [
      path.join(PATHS.source, 'js/index.js'),
      path.join(PATHS.source, 'scss/main.scss'),
    ],
    output: {
      path: PATHS.build,
      filename: "js/bundle.[hash].js",
      publicPath: "/"
    },
    module: {},
    plugins: []
  },
  MODULES.js(),
  PLUGINS.html(PATHS),
  PLUGINS.copy(PATHS)
]);

module.exports = function() {
  if (isProduction) {
    return merge([
      common,
      MODULES.miniCss(PATHS)
    ])
  } else {
    return merge([
      common,
      devServer(),
      MODULES.sass(PATHS),
      MODULES.css(PATHS),
    ])
  }
}
