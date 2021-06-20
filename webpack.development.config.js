const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // CORE CONFIG
  // sourceMaps enabled by default.
  mode: 'development',
  entry: './src/index.js',
  output: {
    // no need for caching in development
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // can be used to configure servign static assets on CDN or Express server i.e. { publicPath: ' http://some-cdn.com/'}
    // `dist/${publicPath}/`
    // dont forget final `/`
    publicPath: '',
    // clean output in `dist` before each build
    clean: true
  },

  // DEV SERVER
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9000,
    writeToDisk: true
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
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          // 'style-loader', // replaced by minification plugin
          'style-loader',
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
    new HtmlWebpackPlugin({
      title: "Webpack Y'all",
      template: 'src/index.hbs',
      meta: {
        description: 'a-custom-meta-tag'
      },
      description: 'page-description'
    })
  ]
}
