var path = require('path');
 
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist')
  }
};
 