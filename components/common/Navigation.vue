<template>
  <nav
    class="absolute flex items-center justify-between w-screen px-12 py-3 backdrop-blur-xl"
  >
    <NuxtLink class="w-28" to="/">
      <!-- <TextLogo /> -->
      <div class="h-12 text-7xl">*</div>
    </NuxtLink>

    <div>
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Our Manifesto
      </NuxtLink>
    </div>

    <div class="flex items-center gap-3">
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Blog
      </NuxtLink>
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Changelog
      </NuxtLink>
      <!-- <LangSwitcher /> -->
      <!-- <ThemeSwitcher /> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
//
</script>
