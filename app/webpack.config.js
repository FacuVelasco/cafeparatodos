module.exports = {
  devtool: 'source-map',
  entry: [
      './index.js'
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/../api/public'
  }
}