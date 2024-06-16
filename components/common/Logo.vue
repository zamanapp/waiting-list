<template>
  <LogoSVG class="h-9 w-9 dark:fill-gray-200" />
  <div
    v-if="localeProperties.dir === 'ltr'"
    class="pb-1 text-3xl leading-loose font-logo"
  >
    <span class="font-bold">{{ $t("header.logo")[0] }}</span>
    <span class="font-semibold">{{
      localeProperties.dir === "rtl"
        ? $t("header.logo").substring(1, 3)
        : $t("header.logo")[1]
    }}</span>
    <span class="font-medium">{{ $t("header.logo")[2] }}</span>
    <span v-if="localeProperties.dir !== 'rtl'">{{
      $t("header.logo")[3]
    }}</span>
    <span class="font-light">{{ $t("header.logo")[4] }}</span>
  </div>
  <div v-else class="pb-1 text-3xl leading-loose font-logoArabic">
    {{ $t("header.logo") }}
  </div>
</template>

<script setup>
const { localeProperties } = useI18n();
</script>
