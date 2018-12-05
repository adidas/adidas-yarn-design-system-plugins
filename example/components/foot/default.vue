<template>
  <footer class="footer">
    <div class="footer__right">
      <ul class="list-group list-group--horizontal">
        <li class="list-group-item">
          <strong>
            <a :href="$t('meta.brand-link-url')"
                target="_blank"
                rel="nofollow noreferrer noopener"
                class="link label">
              {{ $t('meta.brand-link') }}
            </a>
          </strong>
        </li>
        <li class="list-group-item">
          <a :href="'mailto:'+ $t('meta.yarn-contact')"
              rel="nofollow noreferrer noopener"
              class="link label">
            {{ $t('common.contact') }}
          </a>
        </li>
        <li class="list-group-item">
          <a :href="$t('meta.imprint-url')"
              target="_blank"
              rel="nofollow noreferrer noopener"
              class="link label">
            {{ $t('common.imprint') }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
