<template>
  <div class="page-container">
    <headerbar/>
    <main class="main">
      <div class="container">
        <div class="row">
          <nav-tabs class="col-xs-12" :tabs="tabs"/>
        </div>
        <nuxt/>
      </div>
    </main>
    <foot/>
  </div>
</template>

<script>
import foot from '~/components/foot/default';
import headerbar from '~/components/headerbar/default';
import navTabs from '~/components/nav-tabs/default.vue';
import { getPlugins } from '~/services/plugins';

export default {
  data() {
    return {
      activeTabId: ''
    };
  },
  computed: {
    tabs() {
      return getPlugins().map((plugin) => ({
        id: plugin,
        to: `/plugins/${ plugin }`
      }));
    }
  },
  components: {
    foot,
    headerbar,
    navTabs
  }
};
</script>

<style lang="less">
  @import '../styles/variables';

  .main {
    @media screen and (max-width: @screen-xs-max) {
      margin-bottom: 10rem;
    }
  }
</style>
