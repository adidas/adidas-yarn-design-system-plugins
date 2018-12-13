import Vue from 'vue';
import MarkdownRenderer from '~/components/markdown/default.vue';

const components = { MarkdownRenderer };

Object.entries(components).forEach(([ name, component ]) => {
  Vue.component(name, component);
});
