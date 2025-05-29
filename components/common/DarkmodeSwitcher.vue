<template>
  <div class="flex items-center gap-2">
    <Icon
      name="hugeicons:moon-02"
      class="cursor-pointer size-6"
      v-if="!isDark"
      @click="toggleDark()"
    />
    <Icon
      name="hugeicons:sun-02"
      class="cursor-pointer size-6"
      v-else
      @click="toggleDark()"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>
