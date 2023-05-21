<template>
  <nav
    class="fixed flex items-center justify-between w-full px-12 py-3 backdrop-blur-xl"
  >
    <NuxtLink class="h-12 text-7xl" to="/">*</NuxtLink>

    <div class="flex items-center gap-3">
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
//
</script>
