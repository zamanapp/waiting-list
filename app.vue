<template>
  <Notifications />
  <NuxtLoadingIndicator color="black" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// turn on dark mode as default since the webste is optimized for dark mode

const darkMode = useDark();
console.log(darkMode.value);
if (!darkMode.value) {
  console.log("dark mode is off");
  darkMode.value = true;
}
</script>

<style>
html,
body,
#__nuxt {
  @apply h-full;
}
html[dir="rtl"] {
  font-size: 18px;
}
/* body {
  overflow: hidden;
} */
</style>
