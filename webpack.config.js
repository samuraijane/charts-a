const path = require('path');

module.exports = {
  entry: ['./src/app/common/d3.js', './src/app/common/britecharts.js', './src/app/app.module.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  }
}
