<template>
  <div class="markdown" v-html="document"></div>
</template>

<script>
import { Converter } from 'showdown';

const HEADER_LEVEL_START = 3;
const converter = new Converter();

converter.setFlavor('github');
converter.setOption('headerLevelStart', HEADER_LEVEL_START);
converter.setOption('openLinksInNewWindow', true);

export default {
  props: [ 'src' ],
  data() {
    return {
      document: null
    };
  },
  mounted() {
    const src = this.src ? `${ this.src }/` : '';
    const document = require(`~/locales/${ src }${ this.$root.$options.lang }.md`);

    this.document = converter.makeHtml(document);
  }
};
</script>
