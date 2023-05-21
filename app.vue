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
  @apply h-full dark:bg-slate-800 dark:text-slate-400;
}
html[dir="rtl"] {
  font-size: 20px;
}
body {
  overflow: hidden;
}
</style>
