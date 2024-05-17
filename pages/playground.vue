<template>
  <div class="grid items-center">
    <Moon
      :moon-size="moonSize"
      :line-weight="lineWeight"
      class="mx-auto origin-center pointer-events-none"
      show-guide
    />
  </div>
</template>

<script setup lang="ts">
const { height, width } = useWindowSize();

const padding = ref(48); // p-12 = 48px
const moonSize = ref(width.value - padding.value * 2);
const lineWeight = ref(32);
</script>
