module.exports = {
  entry: './js/entry.js',
  output: {
    path: './public/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.js$/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
        //{ test: /js\/solvers/, loader: 'worker-loader' }
    ]
  },
  // output.publicPath: '/foo-app/'
  devServer: {
    contentBase: './public/'
  }
}
