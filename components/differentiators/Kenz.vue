<template>
  <GlareLineFrame
    :title="$t('features.kenz.title')"
    :description="$t('features.kenz.description')"
    class="relative flex w-full h-full p-px lg:col-span-5"
  >
    <div class="relative w-full h-full min-h-80">
      <BlackHole
        :strokeColor="strokeColor"
        class="absolute inset-0 flex items-center justify-center rounded-xl"
      >
      </BlackHole>
    </div>
  </GlareLineFrame>
</template>

<script setup lang="ts">
import { formatThemeColors } from "~/lib/tailwind-theme";
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const mobile = breakpoints.smaller("md");

const isDark = useDark();
const strokeColor = computed(() => {
  return formatThemeColors("slate")[isDark.value ? 300 : 700];
});
</script>
