'use strict';
const webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/src/ox.js',
  },
  output: {
    path: __dirname + '/dst/js/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.vuex'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}
