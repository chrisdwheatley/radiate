var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel?optional[]=runtime&stage=0',
      exclude: /node_modules/
    }]
  }
};
