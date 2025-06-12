<template>
  <LogoSVG class="dark:fill-gray-200" :class="logoSize" />
  <div
    v-if="localeProperties.dir === 'ltr' && !noText"
    class="pb-1 leading-loose font-logo"
    :class="textSize"
  >
    <span class="font-bold">{{ $t("header.logo")[0] }}</span>
    <span class="font-semibold">{{
      localeProperties.dir !== "ltr"
        ? $t("header.logo").substring(1, 3)
        : $t("header.logo")[1]
    }}</span>
    <span class="font-medium">{{ $t("header.logo")[2] }}</span>
    <span v-if="localeProperties.dir === 'ltr'">{{
      $t("header.logo")[3]
    }}</span>
    <span class="font-light">{{ $t("header.logo")[4] }}</span>
  </div>
  <div
    v-else-if="!noText"
    class="pb-1 leading-loose font-logoArabic"
    :class="textSize"
  >
    {{ $t("header.logo") }}
  </div>
</template>

<script setup lang="ts">
const { localeProperties } = useI18n();

const props = defineProps({
  size: {
    type: String as PropType<"sm" | "md" | "lg" | "xl">,
    default: "lg",
  },
  noText: {
    type: Boolean,
    default: false,
  },
});

const textSize = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-lg";
    case "md":
      return "text-2xl";
    case "lg":
      return "text-3xl";
  }
});

const logoSize = computed(() => {
  switch (props.size) {
    case "sm":
      return "size-6";
    case "md":
      return "size-6";
    case "lg":
      return "size-9";
    case "xl":
      return "size-28";
  }
});
</script>
