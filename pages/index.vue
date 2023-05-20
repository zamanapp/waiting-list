<template>
  <p
    class="absolute inset-x-0 max-w-xs mx-auto text-2xl font-medium text-center lg:text-xl lg:mr-12 lg:inset-x-auto lg:right-0 mt-36"
  >
    "Oh child of Adam. You are nothing more than a collection of days. If your
    day goes by. A piece of you goes as well."
    <span class="block mt-2 font-mono text-gray-400">-Al-Hasan Al-Basri</span>
  </p>
  <Moon
    :moon-size="moonSize"
    :line-weight="lineWeight"
    class="fixed mx-auto origin-center pointer-events-none"
    show-guide
  />
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const { height, width } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(48); // p-12 = 48px
const moonSize = ref(width.value - padding.value * 2);
const lineWeight = ref(32);
const rotation = ref(0);

let moon = ref<SVGSVGElement | null>(null);

onMounted(() => {
  moon.value = document.querySelector("svg#moon");
  handleResize();
  watch(width, handleResize);
  watch(height, handleResize);
  watch(moonSize, handleResize);
  watch(tablets, handleResize);
});

function handleResize() {
  if (mobile.value) {
    const y = moonSize.value * 1.25;
    const x = width.value;
    moonSize.value = width.value * 2;
    lineWeight.value = 28;

    rotation.value = 45;
    if (moon.value?.style) {
      moon.value.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
    }
  } else if (tablets.value) {
    const y = moonSize.value / 2 - padding.value * 2;
    const x = width.value;
    moonSize.value = width.value * 2;
    lineWeight.value = 32;
    rotation.value = 45;
    if (moon.value?.style) {
      moon.value.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
    }
  } else {
    const y = height.value - moonSize.value / 2;
    if (moon.value?.style) {
      moon.value.style.transform = `translateY(${y}px)`;
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
