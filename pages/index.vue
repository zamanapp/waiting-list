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

useSeoMeta({
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

const tyndallRef = ref<InstanceType<typeof TynDall> | null>(null);

const emitter = useEmitter();

onMounted(() => {
  emitter.on("scroll:to:join", () => {
    console.log(
      "scrollToTyndall",
      tyndallRef.value,
      tyndallRef.value?.emailInput
    );

    const el = (tyndallRef.value as any)?.$el ?? tyndallRef.value;
    if (el && "scrollIntoView" in el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
</script>
