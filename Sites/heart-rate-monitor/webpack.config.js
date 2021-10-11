'use strict'
const path = require('path')
module.exports = {
    mode: 'development',
    // entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/js'
    },
    watch: true,
    // devtool: 'source-map',
    module: {
        rules: [
          // {
          //   test: /\.s[ac]ss$/i,
          //   use: [
          //     // Creates `style` nodes from JS strings
          //     "style-loader",
          //     // Translates CSS into CommonJS
          //     "css-loader",
          //     // Compiles Sass to CSS
          //     "sass-loader",
          //   ],
          // },
        ],
      },
};