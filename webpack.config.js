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
  }
};