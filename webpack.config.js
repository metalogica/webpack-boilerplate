var path = require('path')

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
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
