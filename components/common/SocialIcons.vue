<template>
  <div class="flex items-center gap-3">
    <NuxtLink to="https://t.me/zamanapp" target="__blank">
      <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:telegram" />
    </NuxtLink>
    <NuxtLink to="https://x.com/zaman_hq">
      <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:new-twitter" />
    </NuxtLink>
    <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:linkedin-01" />
    <NuxtLink to="https://github.com/zamanapp" target="__blank">
      <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:github" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
