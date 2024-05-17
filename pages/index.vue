<template>
  <div
    ref="left"
    class="dark absolute w-full h-screen overflow-hidden z-[2] bg-gray-900 text-white"
  >
    <Navigation />

    <div
      class="absolute flex flex-col w-[50vw] mx-8 mt-20 font-medium md:mx-14 md:text-center lg:mx-12 lg:mt-36"
    >
      <h2
        class="max-w-sm mb-6 text-5xl font-semibold lg:max-w-md text-start font-main dark:text-slate-200"
        v-html="$t('waiting.manage')"
      ></h2>
      <!-- <JoinModal /> -->
    </div>

    <div
      class="absolute flex justify-end invisible float-left w-screen text-2xl font-medium text-center lg:visible mt-96 rtl:text-3xl lg:text-lg lg:pe-12 lg:mt-36"
    >
      <p class="max-w-xs">
        "{{ $t("waiting.body") }}"
        <span
          class="block mt-2 font-mono text-sm text-slate-400 dark:text-slate-200"
          >-{{ $t("waiting.author") }}</span
        >
      </p>
    </div>

    <div dir="ltr">
      <Moon
        :moon-size="moonSize"
        :line-weight="lineWeight"
        class="absolute mx-auto origin-center pointer-events-none"
        show-guide
      />
    </div>
  </div>

  <div class="absolute w-full h-screen overflow-hidden">
    <Navigation />
    <div
      class="absolute flex flex-col w-[50vw] mx-8 mt-20 font-medium md:mx-14 md:text-center lg:mx-12 lg:mt-36"
    >
      <h2
        class="max-w-sm mb-6 text-5xl font-semibold lg:max-w-md text-start font-main dark:text-slate-200"
        v-html="$t('waiting.manage')"
      ></h2>
      <!-- <JoinModal /> -->
    </div>

    <div
      class="absolute flex justify-end invisible float-left w-screen text-2xl font-medium text-center lg:visible mt-96 rtl:text-3xl lg:text-lg lg:pe-12 lg:mt-36"
    >
      <p class="max-w-xs">
        "{{ $t("waiting.body") }}"
        <span
          class="block mt-2 font-mono text-sm text-slate-400 dark:text-slate-200"
          >-{{ $t("waiting.author") }}</span
        >
      </p>
    </div>

    <div dir="ltr">
      <Moon
        :moon-size="moonSize"
        :line-weight="lineWeight"
        class="absolute mx-auto origin-center pointer-events-none"
        show-guide
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "slider",
});

import { breakpointsTailwind } from "@vueuse/core";

const { height, width } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(48); // p-12 = 48px
const moonSize = ref(width.value - padding.value * 2);
const lineWeight = ref(32);
const rotation = ref(0);

let moons = ref<NodeListOf<SVGSVGElement> | null>(null);
let left = ref<HTMLElement | null>(null);

const { x } = useMouse();
const leftWidth = computed(() => (x.value / width.value) * 100);

onMounted(() => {
  moons.value = document.querySelectorAll("svg#moonSymbol");
  handleResize();
  watch([width, height, moonSize, tablets], handleResize);
  // watch(width, handleResize);
  // watch(height, handleResize);
  // watch(moonSize, handleResize);
  // watch(tablets, handleResize);
  if (left.value) {
    watch(leftWidth, (value) => {
      left.value!.style.width = `${value}%`;
    });
  }
});

function handleResize() {
  if (mobile.value) {
    const y = moonSize.value * 1.25;
    const x = width.value;
    moonSize.value = width.value * 2;
    lineWeight.value = 28;

    rotation.value = 45;
    if (moons.value) {
      for (let moon of moons.value) {
        moon.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
      }
    }
  } else if (tablets.value) {
    const y = moonSize.value / 2 - padding.value * 2;
    const x = width.value;
    moonSize.value = width.value * 2;
    lineWeight.value = 32;
    rotation.value = 45;
    if (moons.value) {
      for (let moon of moons.value) {
        moon.style.transform = `translate(-${x}px, ${y}px) rotate(${rotation.value}deg)`;
      }
    }
  } else {
    const y = height.value - moonSize.value / 2;
    const x = (width.value - moonSize.value) / 2;
    if (moons.value) {
      for (let moon of moons.value) {
        moon.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    if (moonSize.value > width.value) {
      moonSize.value = width.value - padding.value * 2;
      // just a guard code in case the moonSize is greater than the width
      const x =
        width.value / 2 +
        (moonSize.value - width.value) / 2 -
        moonSize.value / 2;
      if (moons.value) {
        for (let moon of moons.value) {
          moon.style.transform = `translateX(${x}px)`;
        }
      }
    }
  }
}
</script>
