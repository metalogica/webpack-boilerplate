const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  entry: {
    'homePage': './src/index.js',
    'mortyPage': './src/morty.js'
  },
  output: {
    // [name] is entrypoint filenamew
    // [contenthash] is used for cach-busting
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    // can be used to configure servign static assets on CDN or Express server i.e. { publicPath: ' http://some-cdn.com/'}
    // `dist/${publicPath}/`
    // dont forget final `/`
    publicPath: '',
    // clean output in `dist` before each build
    clean: true
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
      },
      {
        // https://github.com/pcardune/handlebars-loader
        test: /\.hbs$/,
        use: [ 'handlebars-loader' ]
      }
    ]
  },

  // PLUGINS
  plugins: [
    // move all css files in dev into a single css file in production
    // [name] is name of style.scss
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Y'all",
      filename: 'index.html',
      template: 'src/pages/about.hbs',
      minify: true,
      // defined in `entry` field
      chunks: ['homePage'],
      description: 'page-description',
      meta: {
        description: 'a-custom-meta-tag'
      },
    }),
    new HtmlWebpackPlugin({
      title: 'MORTY',
      filename: 'morty.html',
      template: 'src/pages/about.hbs',
      minify: true,
      // defined in `entry` field
      chunks: ['mortyPage'],
      description: 'Picture of morty',
      meta: {
        description: 'Morty pic'
      }
    })
  ]
}
