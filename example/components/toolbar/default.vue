<template>
  <div class="toolbar">
    <div class="toolbar__left">
      <button class="btn btn-tertiary btn-square" @click="toggleFilter">
        <span class="yarn-icon yarn-icon--filter"
            :class="filterClass">
        </span>
      </button>
      <span class="toolbar__vertical-divider"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'filterActive' ],
  computed: {
    filterClass() {
      return this.filterActive ? 'color--blue-100' : '';
    }
  },
  methods: {
    toggleFilter() {
      this.$emit('toggleFilter');
    }
  }
};
</script>
