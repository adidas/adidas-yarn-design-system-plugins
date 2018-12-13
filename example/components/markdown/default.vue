<template>
  <vue-showdown :markdown="markdown" flavor="github"/>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      markdown: ''
    };
  },
  mounted() {
    const src = this.src ? `${ this.src }/` : '';

    this.markdown = require(`~/locales/${ src }${ this.$root.$options.lang }.md`);
  }
};
</script>
