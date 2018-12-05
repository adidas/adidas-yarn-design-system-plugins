<template>
  <ul class="nav nav-pills">
    <nuxt-link class="nav-tab"
        v-for="{ id, to } in tabs"
        :to="to"
        :key="id">
      <li class="nav-link">
        {{ $t(`views.plugins.plugin-${ id }.name`) }}
      </li>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  name: 'nav-tabs',
  props: [ 'tabs' ]
};
</script>

<style lang="less">
  .nav.nav-pills {
    margin-bottom: 0;
  }
</style>
