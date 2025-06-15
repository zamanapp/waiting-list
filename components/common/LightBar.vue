<template>
  <div
    class="relative z-0 flex flex-col items-center justify-center min-h-screen overflow-hidden bg-transparent light-bar"
  >
    <div
      class="relative z-0 flex items-center justify-center w-full scale-y-125 isolate"
    >
      <div
        class="absolute inset-auto right-1/2 h-56 w-[20rem] md:w-[40rem] bg-gradient-conic from-emerald-500 dark:via-slate-950 via-white to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        :style="leftStyle"
      />
      <div
        class="absolute inset-auto left-1/2 h-56 w-[20rem] md:w-[40rem] bg-gradient-conic from-transparent dark:via-slate-950 via-white to-emerald-500 text-white [--conic-position:from_290deg_at_center_top]"
        :style="rightStyle"
      />
      <div
        class="absolute w-full h-48 scale-x-150 translate-y-12 bg-white dark:bg-slate-950 top-1/2 blur-2xl"
      />
      <div
        class="absolute z-50 w-full h-48 bg-transparent top-1/2 opacity-10 backdrop-blur-md"
      />
      <div
        class="absolute inset-auto z-50 h-36 w-[18rem] md:w-[38rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl bg-[var(--sui-light-bar-bg)]"
        :style="topStyle"
      />
      <div
        class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
        :style="bottomStyle"
      />
      <div
        class="absolute inset-auto z-50 h-0.5 w-[18rem] md:w-[40rem] -translate-y-[7rem] blur-sm"
        :style="bottomStyle"
      />

      <div
        class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-slate-950 bg-white"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatThemeColors, type ColorType } from "~/lib/tailwind-theme";
const isDark = useDark();

const props = withDefaults(defineProps<{ theme?: ColorType }>(), {
  theme: "emerald",
});

const { theme } = toRefs(props);

const topStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)["100"],
  };
});
const bottomStyle = computed(() => {
  return {
    backgroundColor: formatThemeColors(theme.value)[
      isDark.value ? "500" : "50"
    ],
  };
});
const leftStyle = computed(() => {
  return {
    "--tw-gradient-from": `${
      formatThemeColors(theme.value)[isDark.value ? "700" : "200"]
    } var(--tw-gradient-from-position)`,
  };
});
const rightStyle = computed(() => {
  return {
    "--tw-gradient-to": `${
      formatThemeColors(theme.value)[isDark.value ? "700" : "200"]
    } var(--tw-gradient-to-position)`,
  };
});
</script>

<style scoped></style>
