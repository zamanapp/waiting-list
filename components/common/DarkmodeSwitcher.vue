<template>
  <div class="flex items-center gap-2">
    <Icon
      :icon="isDark ? 'hugeicons:sun-02' : 'hugeicons:moon-02'"
      class="cursor-pointer size-6"
      @click="toggleDark()"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
