<template>
  <div class="flex items-center gap-3">
    <SimpleTooltip content="Telegram">
      <NuxtLink to="https://t.me/zamanapp" target="__blank">
        <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:telegram" />
      </NuxtLink>
    </SimpleTooltip>
    <SimpleTooltip content="Twitter | X">
      <NuxtLink to="https://x.com/zaman_hq" target="__blank">
        <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:new-twitter" />
      </NuxtLink>
    </SimpleTooltip>
    <SimpleTooltip content="Instagram">
      <NuxtLink to="https://www.linkedin.com/company/zamanhq" target="__blank">
        <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:linkedin-01" />
      </NuxtLink>
    </SimpleTooltip>
    <SimpleTooltip content="Github">
      <NuxtLink to="https://github.com/zamanapp" target="__blank">
        <Icon class="w-5 h-5 cursor-pointer" icon="hugeicons:github" />
      </NuxtLink>
    </SimpleTooltip>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
