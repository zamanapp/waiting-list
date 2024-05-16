<template>
  <Notifications />
  <NuxtLoadingIndicator color="black" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
html,
body,
#__nuxt {
  @apply h-full dark:bg-slate-800 dark:text-slate-400;
}
html[dir="rtl"] {
  font-size: 18px;
}
/* body {
  overflow: hidden;
} */
</style>
