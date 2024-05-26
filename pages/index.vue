<template>
  <div
    ref="left"
    class="dark absolute w-[50%] h-screen overflow-hidden z-[2] bg-gray-900 text-white"
  >
    <Navigation />

    <div
      class="absolute flex flex-col w-screen overflow-hidden lg:w-[50vw] items-center lg:items-start mt-24 md:mt-36 font-medium lg:mx-12 lg:mt-36"
    >
      <h2
        class="max-w-sm mx-12 mb-6 text-4xl font-semibold text-center text-pretty lg:mx-0 md:text-5xl md:max-w-lg lg:max-w-md lg:text-start font-main dark:text-slate-200"
      >
        {{ $t("waiting.manage") }}
      </h2>
      <JoinModal button-type="outline" :waiting-text="$t('waiting.waiting')" />
    </div>

    <div
      class="absolute flex justify-center w-screen text-xl font-medium text-center mt-80 lg:justify-end md:invisible float-start rtl:text-3xl lg:text-lg lg:pe-12 lg:mt-36"
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
        :calendar="Calendars.ISO"
        class="absolute mx-auto origin-center pointer-events-none"
        show-guide
      />
    </div>
  </div>

  <div class="absolute w-full h-screen overflow-hidden">
    <Navigation />
    <div
      class="absolute flex flex-col w-screen overflow-hidden md:mt-36 lg:w-[50vw] items-center lg:items-start mt-24 font-medium lg:mx-12 lg:mt-36"
    >
      <h2
        class="max-w-sm mx-12 mb-6 text-4xl font-semibold text-center md:max-w-lg lg:mx-0 md:text-5xl lg:max-w-md lg:text-start font-main dark:text-slate-200"
      >
        {{ $t("waiting.manage") }}
      </h2>
      <JoinModal
        button-type="secondary"
        :waiting-text="$t('waiting.waitingExpand')"
      />
    </div>

    <div
      class="absolute flex justify-center w-screen text-xl font-medium text-center mt-80 lg:justify-end md:invisible float-start rtl:text-3xl lg:text-lg lg:pe-12 lg:mt-36"
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
import { breakpointsTailwind } from "@vueuse/core";
import { Calendars } from "../types/Calendars";

definePageMeta({
  layout: "slider",
});

const { height, width } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(115); // p-12 = 48px
const moonSize = computed(() => {
  if (mobile.value) {
    return width.value * 2;
  } else if (tablets.value) {
    return width.value * 2;
  } else {
    return width.value - padding.value * 2;
  }
});

const lineWeight = computed(() => {
  if (mobile.value) {
    return 28;
  } else if (tablets.value) {
    return 30;
  } else {
    return 30;
  }
});

let moons = ref<NodeListOf<SVGSVGElement> | null>(null);
let left = ref<HTMLElement | null>(null);
// const { locale } = useI18n();

const { x } = useMouse();
const sideWidth = computed(() => (x.value / width.value) * 100);

const isMoonBiggerThanWidth = computed(() => moonSize.value > width.value);
const desiredX = computed(() => {
  return isMoonBiggerThanWidth.value
    ? width.value / 2 - moonSize.value / 2
    : (width.value - moonSize.value) / 2;
});

const desiredY = computed(() => {
  return height.value - moonSize.value / 2;
});

onMounted(() => {
  moons.value = document.querySelectorAll("svg#moonSymbol");
  handleResize();
  watch([width, height, moonSize, tablets], handleResize);

  watch(sideWidth, (value) => {
    left.value!.style.width = `${value}%`;
  });

  // if (locale.value === "ar") {
  //   watch(sideWidth, (value) => {
  //     left.value!.style.width = `${value}%`;
  //   });
  // } else {
  //   watch(sideWidth, (value) => {
  //     left.value!.style.width = `${value}%`;
  //   });
  // }
});

function handleResize() {
  if (moons.value) {
    for (let moon of moons.value) {
      moon.style.transform = `translate(${desiredX.value}px, ${desiredY.value}px)`;
    }
  }
}
</script>
