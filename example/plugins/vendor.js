import Vue from 'vue';
import VueShowdown from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';

const HEADER_LEVEL_START = 3;

if (process.browser) {
  require('expose-loader?Choices!choices.js');
  require('choicesjs-stencil/dist/choicesjsstencil');
}

Vue.use(VueShowdown, {
  headerLevelStart: HEADER_LEVEL_START,
  openLinksInNewWindow: true,
  tables: true,
  extensions: [ showdownHighlight ]
});
