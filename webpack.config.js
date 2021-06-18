const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // can be used to configure servign static assets on CDN or Express server i.e. { publicPath: ' http://some-cdn.com/'}
    // `dist/${publicPath}/`
    // dont forget final `/`
    publicPath: ''
  },

  // MODULE
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 // any img larger than 3 kb will be bundled as separate resource
          }
        }
      },
      // laternative img arrangement
      // {
      //   test: /\.(jpg|png)$/,
      //   use: [ 'file-loader' ]
      // },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.css/,
        use: [
          // 'style-loader', // replaced by minification plugin
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          // 'style-loader', // replaced by minification plugin
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      }
    ]
  },

  // PLUGINS
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin()
  ]
}
