<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  @apply h-full;
  /* background-color: v-bind("theme.getBackgroundColor"); */
}
body {
  overflow: hidden;
}
</style>
