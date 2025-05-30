<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >
    {{ fullname ? locale.name : locale.code }}
  </NuxtLink>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

defineProps({
  fullname: {
    type: Boolean,
    default: false,
  },
});

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
