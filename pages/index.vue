<template>
  <div
    class="absolute inset-x-0 flex flex-col mx-8 mt-20 font-medium md:mx-14 lg:max-w-md md:text-center lg:mx-12 lg:inset-x-auto lg:start-0 lg:mt-36"
  >
    <h2
      class="mb-6 text-5xl font-semibold text-start font-main dark:text-slate-200"
      v-html="$t('waiting.manage')"
    ></h2>
    <!-- <JoinModal /> -->
  </div>

  <p
    class="absolute inset-x-0 invisible float-left max-w-xs mx-auto text-2xl font-medium text-center lg:visible mt-96 rtl:text-3xl lg:text-lg lg:me-12 lg:inset-x-auto lg:end-0 lg:mt-36"
  >
    "{{ $t("waiting.body") }}"
    <span
      class="block mt-2 font-mono text-sm text-slate-400 dark:text-slate-200"
      >-{{ $t("waiting.author") }}</span
    >
  </p>

  <div dir="ltr">
    <!-- <Moon
      :moon-size="moonSize"
      :line-weight="lineWeight"
      class="fixed mx-auto origin-center pointer-events-none"
      show-guide
    /> -->
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
const i18n = useI18n();

const { height, width } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

const widthSurface = ref(width.value);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(48); // p-12 = 48px
const moonSize = ref(widthSurface.value - padding.value * 2);
const lineWeight = ref(32);
const rotation = ref(0);

let moon = ref<SVGSVGElement | null>(null);

onMounted(() => {
  moon.value = document.querySelector("svg#moonSymbol");
  handleResize();
  watch([width, height, moonSize, tablets], handleResize);
  // watch(width, handleResize);
  // watch(height, handleResize);
  // watch(moonSize, handleResize);
  // watch(tablets, handleResize);
});

function handleResize() {
  if (mobile.value) {
    const y = moonSize.value * 1.25;
    const x = widthSurface.value;
    moonSize.value = widthSurface.value * 2;
    lineWeight.value = 28;

    rotation.value = 45;
    if (moon.value?.style) {
      moon.value.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
    }
  } else if (tablets.value) {
    const y = moonSize.value / 2 - padding.value * 2;
    const x = widthSurface.value;
    moonSize.value = widthSurface.value * 2;
    lineWeight.value = 32;
    rotation.value = 45;
    if (moon.value?.style) {
      moon.value.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
    }
  } else {
    const y = height.value - moonSize.value / 2;
    const x = (width.value - moonSize.value) / 2;
    if (moon.value?.style) {
      moon.value.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (moonSize.value > width.value) {
      moonSize.value = width.value - padding.value * 2;
      // just a guard code in case the moonSize is greater than the width
      const x =
        width.value / 2 +
        (moonSize.value - width.value) / 2 -
        moonSize.value / 2;
      if (moon.value?.style) {
        moon.value.style.transform = `translateX(${x}px)`;
      }
    }
  }
}
</script>

<style>
#moonSymbol {
  shape-outside: circle(50%);
  float: left;
}
</style>
