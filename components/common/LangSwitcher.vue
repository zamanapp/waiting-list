<template>
  <USelectMenu v-model="$i18n.locale" :options="$i18n.availableLocales" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

onMounted(setLocale);
watch(locale, setLocale);

function setLocale() {
  const html = document.querySelector("html");
  html?.setAttribute("lang", String(locale.value));
  html?.setAttribute("dir", locale.value === "en" ? "ltr" : "rtl");
}
</script>
