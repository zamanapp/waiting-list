<template>
  <div
    class="min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 font-main dark:text-slate-50"
  >
    <!-- Hero Section -->
    <HeroSection />

    <!-- Core Differentiators Section -->
    <CoreDifferentiators />

    <!-- Technical Excellence Section -->
    <TechnicalExcellence />

    <!-- Alternative Tech Section -->
    <AlternativeTech />

    <!-- Final CTA Section -->
    <TynDall ref="tyndallRef" />

    <!-- FAQ Section -->
    <FAQ />

    <!-- Footer -->
    <GlobalFooter />
  </div>
</template>

<script setup lang="ts">
import TynDall from "~/components/cta/TynDall.vue";

definePageMeta({
  layout: "default",
});

const { t } = useI18n();

useSeoMeta({
  title: t("seo.index.title"),
  description: t("seo.index.description"),
  keywords: t("seo.index.keywords"),
  ogTitle: t("seo.index.ogTitle"),
  ogDescription: t("seo.index.ogDescription"),
  ogImage: "https://zaman.app/img/og-index.png",
  ogType: "website",
  ogUrl: "https://zaman.app",
  ogSiteName: "Zaman",
  twitterTitle: t("seo.index.twitterTitle"),
  twitterDescription: t("seo.index.twitterDescription"),
  twitterSite: "@zaman_hq",
  twitterImage: "https://zaman.app/img/og-index.png",
  twitterCard: "summary_large_image",
});

const tyndallRef = ref<InstanceType<typeof TynDall> | null>(null);

const emitter = useEmitter();

onMounted(() => {
  emitter.on("scroll:to:join", () => {
    const el = (tyndallRef.value as any)?.$el ?? tyndallRef.value;
    if (el && "scrollIntoView" in el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
</script>
