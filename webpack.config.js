let webpack = require('webpack')
let path = require('path')

module.exports = {
  entry: path.join(__dirname, 'js', 'entry.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.js$/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  // output.publicPath: '/foo-app/'
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
