const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const production = process.env.NODE_ENV === 'production';
const library = process.env.LIBRARY_NAME || 'yarn-plugin-choicesjs-stencil';
const assets = 'assets';

/**
 * Returns the current date in English string format.
 * @returns {string} Release date.
 */
function getReleaseDate() {
  return (new Date()).toLocaleDateString('en-en', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Returns the current year.
 * @returns {string} Current year.
 */
function getYear() {
  return (new Date()).toLocaleDateString('en-en', { year: 'numeric' });
}

module.exports = {
  entry: {
    [library]: './src/less/main.less'
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, './dist'),
    library,
    libraryTarget: 'umd'
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.(eot|svg|ttf|woff(2)?)$/,
        loader: `file-loader?name=${ assets }/[name].[ext]`
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.BannerPlugin({
      banner: `
${ pkg.name } v${ pkg.version }
Copyright adidas ${ getYear() }
Release date: ${ getReleaseDate() }
      `.trim()
    })
  ],
  devtool: production ? 'source-map' : 'inline-source-map'
};
