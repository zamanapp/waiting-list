<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Title>Title</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <Navigation />
      <slot />
      <DefaultFooter />
    </Body>
  </Html>
</template>

<script setup>
const route = useRoute();
const appConfig = useAppConfig();
// const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const title = computed(
  () => route.meta.title ?? `${appConfig.appName} - Coming soon`
);

// const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))
</script>
