<template>
  <div
    class="absolute inset-x-0 flex flex-col max-w-md mx-auto font-medium text-center lg:ms-12 lg:inset-x-auto lg:start-0 mt-36"
  >
    <h2
      class="mb-6 text-5xl font-semibold rtl:text-7xl text-start font-main dark:text-slate-200"
      v-html="$t('waiting.manage')"
    ></h2>
    <button
      ref="expandableElement"
      class="px-6 py-3 text-xl font-normal text-white bg-black rounded-md dark:text-slate-200 w-fit disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-700"
      @click="isOpen = true"
    >
      <TextExpander
        class="text-2xl lg:text-xl"
        :text="$t('waiting.waiting')"
        :expanded-text="$t('waiting.waitingExpand')"
        :expand="expand"
      />
    </button>
  </div>
  <p
    class="absolute inset-x-0 max-w-xs mx-auto text-2xl font-medium text-center lg:text-lg lg:me-12 lg:inset-x-auto lg:end-0 mt-36"
  >
    "{{ $t("waiting.body") }}"
    <span
      class="block mt-2 font-mono text-sm text-slate-400 dark:text-slate-200"
      >-{{ $t("waiting.author") }}</span
    >
  </p>

  <div dir="ltr">
    <Moon
      :moon-size="moonSize"
      :line-weight="lineWeight"
      class="fixed mx-auto origin-center pointer-events-none"
      show-guide
    />
  </div>
  <UModal v-model="isOpen">
    <div>content?</div>
  </UModal>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const { height, width } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

const widthSurface = ref(width.value);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(48); // p-12 = 48px
const moonSize = ref(widthSurface.value - padding.value * 2);
const lineWeight = ref(32);
const rotation = ref(0);

const expand = ref(false);
const isOpen = ref(false);

const expandableElement = ref();
const isHovered = useElementHover(expandableElement);

watch(isHovered, () => {
  expand.value = isHovered.value;
});

let moon = ref<SVGSVGElement | null>(null);

onMounted(() => {
  moon.value = document.querySelector("svg#moonSymbol");
  handleResize();
  watch(width, handleResize);
  watch(height, handleResize);
  watch(moonSize, handleResize);
  watch(tablets, handleResize);
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
