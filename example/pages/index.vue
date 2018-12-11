<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('common.plugin') }}</p>
          <h2>{{ $t('views.index.name') }}</h2>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <markdown-renderer type="url" src=""/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import markdownRenderer from '~/components/markdown/renderer';

export default {
  components: {
    markdownRenderer
  }
};
</script>
