var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./js/entry.js",
    output: {
        path: "./public/",/*__dirname,*/
        filename: "bundle.js",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: "babel"},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
        ]
    },
    // output.publicPath: '/foo-app/'
    historyApiFallback: {
      index: './public/'
    },
    plugins: [
      new ExtractTextPlugin("style.css")
    ]
};
