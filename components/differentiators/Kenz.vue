<template>
  <GlareLineFrame
    title="Kenz AI"
    description="Capture thoughts, ideas, and inspirations with ease. Let AI organize and remember the details so you can resurface anything with cues."
    class="relative flex w-full h-full p-px lg:col-span-5"
  >
    <div class="relative w-full h-full min-h-80">
      <BlackHole
        :strokeColor="strokeColor"
        class="absolute inset-0 flex items-center justify-center rounded-xl"
      />
    </div>
  </GlareLineFrame>
</template>

<script setup lang="ts">
import { formatThemeColors, type ColorType } from "~/lib/tailwind-theme";

const isDark = useDark();
const strokeColor = computed(() => {
  return formatThemeColors("slate")[isDark.value ? 300 : 700];
});
</script>
