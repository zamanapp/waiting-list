<template>
  <USelectMenu v-model="selected" :options="locales">
    <template #label>
      {{ selected.name }}
    </template>
    <template #option="{ option }">
      {{ option.name }}
    </template>
  </USelectMenu>
</template>

<script setup lang="ts">
import { LocaleObject } from "vue-i18n-routing";
import { DefaultConfigOptions } from "@formkit/vue";

const formKitConfig = inject<DefaultConfigOptions>(Symbol.for("FormKitConfig"));

const { locales, setLocale } = useI18n();
const selected = ref(locales.value[0] as LocaleObject);

watch(selected, () => {
  setLocale(selected.value.code);
  formKitConfig!.locale = selected.value.code;
});
</script>
