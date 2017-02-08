const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'index.bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2017'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules',
      path.resolve(__dirname, "./src")
    ],
    // directories where to look for modules

    extensions: [".js"],
  }
};