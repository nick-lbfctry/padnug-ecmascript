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