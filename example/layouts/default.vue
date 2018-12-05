<template>
  <div class="page-container">
    <headerbar/>
    <toolbar :filter-active="sidebarOpen" @toggleFilter="toggleSidebar"/>
    <main class="main">
      <sidebar :links="plugins" :open="sidebarOpen"/>
      <div class="container">
        <nuxt/>
      </div>
    </main>
    <foot/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import foot from '~/components/foot/default';
import headerbar from '~/components/headerbar/default';
import sidebar from '~/components/sidebar/default.vue';
import toolbar from '~/components/toolbar/default.vue';
import { getPlugins } from '~/services/plugins';

export default {
  computed: {
    ...mapGetters([ 'sidebarOpen' ]),
    plugins() {
      return getPlugins().map((plugin) => ({
        id: plugin,
        to: `/plugins/${ plugin }`
      }));
    }
  },
  methods: {
    ...mapActions([ 'toggleSidebar' ])
  },
  components: {
    foot,
    headerbar,
    sidebar,
    toolbar
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
