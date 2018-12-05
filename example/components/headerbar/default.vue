<template>
  <header class="header">
    <nav class="header__container">
      <div class="header__left">
        <nuxt-link class="header__brand" :to="{ name: 'index' }">
          <span class="header__icon yarn-logo yarn-logo--adidas"></span>
          <span class="header__headline">
            {{ $t('meta.title') }}
          </span>
        </nuxt-link>
      </div>
      <div class="header__right">
        <a class="header__icon header__icon--light" :href="$t('repository.url')" target="blank">
          <img class="header__icon--img" src="~/static/github-mark-light.png"/>
        </a>
      </div>
    </nav>
  </header>
</template>
