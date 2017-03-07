let webpack = require('webpack')
let path = require('path')
let env = process.env.WEBPACK_ENV

let webpackConfig = {
  entry: path.join(__dirname, 'source', 'js', 'entry.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        // { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.js$/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
        { test: /\.html$/, loader: 'html-loader'}
    ]
  },
  plugins: [

  ],
  // output.publicPath: '/foo-app/'
  // devServer: {
    // contentBase: path.join(__dirname, 'public')
  // }
}

if (env == 'build') {
  webpackConfig.output.path = path.join(__dirname, 'dist')
  webpackConfig.output.filename = 'bundle.min.js'

  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }))
}

module.exports = webpackConfig
