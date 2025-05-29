<template>
  <div
    class="min-h-screen overflow-x-hidden bg-white dark:bg-slate-900 font-main"
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
    <footer class="py-12 bg-black border-t border-slate-800">
      <div class="px-6 mx-auto max-w-7xl">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <!-- Logo and Copyright -->
          <div class="flex items-center gap-4 mb-6 md:mb-0">
            <div class="flex items-center gap-2">
              <Icon name="lucide:moon" class="w-6 h-6 text-slate-400" />
              <span class="text-lg font-semibold text-white font-main"
                >Zaman</span
              >
            </div>
            <div class="text-sm text-white/60 font-main">
              {{ new Date().getFullYear() }} © All rights reserved.
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center gap-8">
            <a
              href="#"
              class="text-sm transition-colors text-white/60 hover:text-white font-main"
            >
              Manifesto
            </a>
            <a
              href="#"
              class="text-sm transition-colors text-white/60 hover:text-white font-main"
            >
              Privacy
            </a>
            <a
              href="#"
              class="text-sm transition-colors text-white/60 hover:text-white font-main"
            >
              Terms
            </a>
            <a
              href="#"
              class="text-sm transition-colors text-white/60 hover:text-white font-main"
            >
              Contact
            </a>
          </div>
        </div>

        <!-- Divider -->
        <div class="pt-8 mt-8 border-t border-slate-800">
          <div class="text-center">
            <p class="text-sm text-white/50 font-main">
              Built with ❤️ for the global Muslim community
            </p>
            <p class="mt-2 text-xs text-white/40 font-main">
              "And whoever relies upon Allah - then He is sufficient for him.
              Indeed, Allah will accomplish His purpose." - Quran 65:3
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/HeroSection.vue";
import CoreDifferentiators from "~/components/sections/CoreDifferentiators.vue";
import TechnicalExcellence from "~/components/sections/TechnicalExcellence.vue";
import MoonSection from "~/components/sections/MoonSection.vue";
import CTASection from "~/components/sections/CTASection.vue";
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: "default",
});
</script>
