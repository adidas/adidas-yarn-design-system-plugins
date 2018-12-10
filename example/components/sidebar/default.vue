<template>
  <aside class="sidebar"
      :class="{
        open: open,
        closed: !open
      }">
    <div class="sidebar__main">
      <div class="panel panel-default">
        <div class="panel-heading">
          <span class="panel-title">
            {{ $t('views.plugins.name') }}
          </span>
        </div>
      </div>
      <div class="panel-group">
        <div class="panel-body">
          <ul class="list-group list-group--vertical">
            <li class="list-group-item list-group-item-light"
                v-for="link in links"
                :key="link.id">
              <nuxt-link class="link label" :to="link.to">
                {{ $t(`views.plugins.plugin-${ link.id }.name`) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: [
    'links',
    'open'
  ]
};
</script>
