<template>
  <div class="flex flex-col items-center pt-24 pb-12">
    <ContentDoc
      class="prose dark:prose-invert"
      :path="localePath('/restrictions')"
    />
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();

const { t } = useI18n();

useSeoMeta({
  title: t("seo.index.title"),
  description: t("seo.index.description"),
  keywords: t("seo.index.keywords"),
  ogTitle: t("seo.index.ogTitle"),
  ogDescription: t("seo.index.ogDescription"),
  ogImage: t("seo.index.ogImage"),
  ogType: "website",
  ogUrl: "https://zaman.app",
  ogSiteName: "Zaman",
  twitterTitle: t("seo.index.twitterTitle"),
  twitterDescription: t("seo.index.twitterDescription"),
  twitterSite: "@zaman_hq",
  twitterImage: t("seo.index.twitterImage"),
  twitterCard: "summary_large_image",
});
</script>
