const path = require('path');
const url = require('url');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const readMarkdownFiles = require('./scripts/markdown-files.js');
const readPlugins = require('./scripts/plugin-files');

const { HOSTNAME = '/_nuxt/', BASE = '' } = process.env;
const _BASE = BASE ? `/${ path.basename(BASE) }/` : '';

module.exports = {
  srcDir: './example',
  build: {
    vendor: [ 'choicesjs-stencil' ],
    plugins: [ new CopyWebpackPlugin([{ from: './node_modules/choicesjs-stencil/dist', to: './' }]) ],
    publicPath: url.resolve(HOSTNAME, _BASE)
  },
  head: {
    title: 'adidas YARN Design System plugins',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    bodyAttrs: {
      class: 'yarn'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: path.join(_BASE, '/favicon.ico')
      }
    ]
  },
  css: [
    './node_modules/@adidas/yarn-design-system/dist/yarn-logo.css',
    './node_modules/@adidas/yarn-design-system/dist/yarn-icon.css',
    './node_modules/@adidas/yarn-design-system/dist/yarn.css',
    './packages/choicesjs-stencil/dist/yarn-plugin-choicesjs-stencil.css',
    '~/styles/style.less'
  ],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vendor.js'
  ],
  router: {
    base: _BASE,
    linkExactActiveClass: 'active'
  },
  generate: {
    dir: './docs'
  },
  env: {
    markdown: readMarkdownFiles('example/locales'),
    plugins: readPlugins('example/pages/plugins')
  }
};
