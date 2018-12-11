<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('common.plugin') }}</p>
          <h2>{{ $t('views.plugins.plugin-choicesjs-stencil.name') }}</h2>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <markdown-renderer type="url" src="choicesjs-stencil"/>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="row">
        <h4 class="col-xs-12 col-sm-10 col-sm-offset-1">
          {{ $t('views.plugins.plugin-choicesjs-stencil.example.name') }}
        </h4>
      </div>
      <div class="row">
        <form name="choicesjs-stencil" class="col-xs-12 col-sm-10 col-sm-offset-1">
          <div class="row select">
            <h5 class="col-xs-12">
              {{ $t('views.plugins.plugin-choicesjs-stencil.example.type.text') }}
            </h5>
            <choicesjs-stencil class="col-xs-12 choicesjs-stencil"
                type="text"
                name="text"
                :placeholder="$t('views.plugins.plugin-choicesjs-stencil.example.config.placeholder')"
                v-pre/>
          </div>
          <div class="row select">
            <h5 class="col-xs-12">
              {{ $t('views.plugins.plugin-choicesjs-stencil.example.type.single') }}
            </h5>
            <choicesjs-stencil class="col-xs-12 choicesjs-stencil"
                type="single"
                name="single"
                value="Superstar,Gazelle,Stan Smith,Campus"
                v-pre/>
          </div>
          <div class="row select">
            <h5 class="col-xs-12">
              {{ $t('views.plugins.plugin-choicesjs-stencil.example.type.multiple') }}
            </h5>
            <choicesjs-stencil class="col-xs-12 choicesjs-stencil choicesjs-stencil--multiline"
                type="multiple"
                name="multiple"
                v-pre/>
          </div>
          <div class="row">
            <div class="col-xs-12 submit">
              <button type="submit" class="btn btn-primary">{{ $t('common.submit') }}</button>
            </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1 results">
          <h6 v-if="type">
            {{ $t(`views.plugins.plugin-choicesjs-stencil.example.result.${ type }`) }}
          </h6>
          <div>
            <div class="results__item text-ellipsis" v-for="value in values" :key="value.id">
              <span class="results__item--type">({{ value.name }})</span>
              <span class="results__item--value" :title="transformFormValue(value.value)">
                {{ transformFormValue(value.value) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import markdownRenderer from '~/components/markdown/renderer';
import { choices, createChoiceTemplate, createItemTemplate, events, getFormValues }
  from '~/services/choicesjs-stencil';

export default {
  data() {
    return {
      type: '',
      values: []
    };
  },
  methods: {
    transformFormValue(value) {
      return typeof value === 'string' ? value.split(',').join(', ') : value;
    },
    transformEventData(data) {
      return data ? JSON.stringify(data, null, ' ') : '';
    }
  },
  mounted() {
    const MAX_ITEMS = 8;
    const selectText = document.querySelector('choicesjs-stencil[type=text]');
    const selectSingle = document.querySelector('choicesjs-stencil[type=single]');
    const selectMultiple = document.querySelector('choicesjs-stencil[type=multiple]');
    const form = document.querySelector('form[name=choicesjs-stencil]');

    form.addEventListener('submit', (event) => {
      this.type = 'form';
      this.values = getFormValues(form);

      event.preventDefault();
      event.stopImmediatePropagation();
    });

    selectText.removeItems = true;
    selectText.removeItemButton = true;

    selectMultiple.choices = choices;
    selectMultiple.maxItemCount = MAX_ITEMS;
    selectMultiple.callbackOnCreateTemplates = function(template) {
      return {
        choice: createChoiceTemplate(template, this.config, choices),
        item: createItemTemplate(template, this.config, choices)
      };
    };

    [ selectSingle, selectMultiple ].forEach((select) => {
      select.editItems = true;
      select.removeItems = true;
      select.removeItemButton = true;
      select.placeholderValue = this.$t('views.plugins.plugin-choicesjs-stencil.example.config.placeholder');
      select.noResultsText = this.$t('views.plugins.plugin-choicesjs-stencil.example.config.no-results');
      select.noChoicesText = this.$t('views.plugins.plugin-choicesjs-stencil.example.config.no-choices');
      select.itemSelectText = this.$t('views.plugins.plugin-choicesjs-stencil.example.config.item-selection');
      select.addItemText = (value) => this.$t('views.plugins.plugin-choicesjs-stencil.example.config.add-item', { value });
      select.maxItemText = (maxItemCount) => this.$t('views.plugins.plugin-choicesjs-stencil.example.config.max-items', { maxItemCount });
    });
  },
  components: {
    markdownRenderer
  }
};
</script>

<style lang="less">
  @import '../../styles/variables';

  .container {
    .row.select {
      margin: @padding-large-vertical 0;
    }

    .submit {
      text-align: center;
      margin: @padding-large-vertical;
    }

    .results {
      font-size: @font-size-x-small;

      .results__item {
        border: 1px solid @blue-100;
        color: @blue-100;
        padding: @padding-small-vertical @padding-base-horizontal;
        margin: @padding-xs-vertical @padding-xs-horizontal;
        max-width: 20rem;
        display: inline-block;

        .results__item--type {
          font-style: italic;
          margin-right: @padding-small-horizontal;
        }
      }
    }
  }
</style>
