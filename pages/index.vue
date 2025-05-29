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

    <!-- Moon Section -->
    <MoonSection />

    <!-- Final CTA Section -->
    <TynDall />

    <!-- Footer -->
    <GlobalFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
