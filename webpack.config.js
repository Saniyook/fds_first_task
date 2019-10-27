const webpack = require('webpack')

module.exports = function (entry) {
  return {
    mode: 'production',
    entry,
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
}