<template>
  <Notifications />
  <NuxtLoadingIndicator color="black" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

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
