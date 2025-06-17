<template>
  <div
    class="grid justify-center ~max-w-sm/xl grid-flow-row gap-12 pt-24 pb-12 mx-auto auto-rows-max"
  >
    <div class="flex flex-col items-center rtl:gap-3 rtl:font-logoArabic">
      <h1 class="text-4xl font-bold md:text-5xl">
        {{ $t("manifesto.title") }}
      </h1>
      <h2
        class="italic font-medium text-gray-600 dark:text-gray-400 md:text-lg"
      >
        {{ $t("manifesto.subtitle") }}
      </h2>
    </div>
    <RaisingStar />
    <div
      :class="`flex flex-col gap-6 mx-1 mb-12 text-center font-mono rtl:font-regular rtl:leading-loose rtl:font-monoArabic`"
    >
      <p v-for="(content, i) in $tm('manifesto.paragraphs')" :key="i">
        {{ $rt(content) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useSeoMeta({
  title: t("seo.manifesto.title"),
  description: t("seo.manifesto.description"),
  keywords: t("seo.manifesto.keywords"),
  ogTitle: t("seo.manifesto.ogTitle"),
  ogDescription: t("seo.manifesto.ogDescription"),
  ogImage: t("seo.manifesto.ogImage"),
  ogType: "website",
  ogUrl: "https://zaman.app",
  ogSiteName: "Zaman",
  twitterTitle: t("seo.manifesto.twitterTitle"),
  twitterDescription: t("seo.manifesto.twitterDescription"),
  twitterSite: "@zaman_hq",
  twitterImage: t("seo.manifesto.twitterImage"),
  twitterCard: "summary_large_image",
});
</script>
