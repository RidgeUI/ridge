const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    webstart: './src/webStart.js',
    ridge: './src/index.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './build'), to: path.resolve(__dirname, '../../public/npm/ridgejs/build') },
        { from: path.resolve(__dirname, './package.json'), to: path.resolve(__dirname, '../../public/npm/ridgejs/package.json') }
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/env',
                { modules: false }
              ],
              '@babel/react'
            ]
          }
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        // test: /\.svg$/,
        include: [
          /icons/
        ],
        use: [
          '@svgr/webpack', 'url-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
