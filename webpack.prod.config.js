const config = require('./webpack.config.js')
const webpack = require('webpack')

const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    mangle: {
      screw_ie8: true
    },
    output: {
      comments: false,
      screw_ie8: true
    }
  })
]

productionPlugins.forEach((plugin) => {
  config.plugins.push(plugin)
})

module.exports = config
