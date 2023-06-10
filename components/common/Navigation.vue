<template>
  <nav
    class="fixed flex items-center justify-between w-full px-12 py-3 backdrop-blur-xl"
  >
    <NuxtLink class="w-28" to="/">
      <!-- <TextLogo /> -->
      <div class="h-12 text-7xl">*</div>
    </NuxtLink>

    <div class="flex items-center gap-3">
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
//
</script>
