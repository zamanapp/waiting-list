<template>
  <footer
    class="relative h-full overflow-hidden"
    :style="{ paddingTop: `${paddingTop}px` }"
  >
    <GlowyDivider
      class="absolute z-20 p-0 translate-y-1/2 pointer-events-none"
    />
    <div dir="ltr" class="absolute z-0 flex justify-center w-full">
      <Moon
        :moon-size="moonSize"
        :line-weight="lineWeight"
        :calendar="Calendars.UMM_AL_QURA"
        class="absolute mx-auto origin-center"
        show-guide
      />
    </div>

    <div
      ref="footerContent"
      class="relative z-10 w-full p-12 mx-auto bg-white dark:bg-slate-950"
    >
      <div class="flex flex-col items-center justify-between md:flex-row">
        <!-- Logo and Copyright -->
        <div class="flex items-center gap-4 mb-6 md:mb-0">
          <div class="flex items-center gap-2">
            <Logo size="sm" />
          </div>
          <div class="text-sm font-main">
            {{ $t("footer.copyright") }} {{ new Date().getFullYear() }}
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/manifesto" class="text-sm transition-colors font-main">
            {{ $t("footer.manifesto") }}
          </NuxtLink>
          <NuxtLink to="/privacy" class="text-sm transition-colors font-main">
            {{ $t("footer.privacy") }}
          </NuxtLink>
          <NuxtLink to="/terms" class="text-sm transition-colors font-main">
            {{ $t("footer.terms") }}
          </NuxtLink>
          <a
            href="mailto:salam@zaman.com"
            class="text-sm transition-colors font-main"
          >
            {{ $t("footer.contact") }}
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="pt-8 mt-8 border-t border-slate-800">
        <div class="text-center">
          <p
            :dir="localeProperties.dir"
            class="max-w-xs mx-auto text-xs text-slate-600 dark:text-slate-400 font-main"
          >
            "{{ $t("waiting.body") }}"
            <span class="block mt-2 text-sm text-slate-400 dark:text-slate-200"
              >-{{ $t("waiting.author") }}</span
            >
          </p>

          <p class="mt-2 text-sm font-main">
            {{ $t("footer.end") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Calendars } from "~/types/Calendars";
import { breakpointsTailwind } from "@vueuse/core";

let moon = ref<SVGSVGElement | null>(null);
let footerContent = ref<HTMLElement | null>(null);
// let left = ref<HTMLElement | null>(null);
// const quote = ref<HTMLElement | null>(null);

const { x } = useMouse();
const { height, width } = useWindowSize({ includeScrollbar: true });
const breakpoints = useBreakpoints(breakpointsTailwind);
const { height: footerContentHeight } = useElementSize(footerContent);

const paddingTop = computed(() => {
  return moonSize.value / 2 + 48;
});

const WindowRatio = computed(() => width.value / height.value);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const padding = ref(360); // p-12 = 48px
const { localeProperties } = useI18n();

const moonSize = ref(0);
const initialMoonSize = computed(() => {
  if (mobile.value) {
    return width.value * 1.5;
  } else if (tablets.value) {
    return width.value * 2;
  } else {
    const size = width.value - padding.value * 2;
    return WindowRatio.value > 2 ? size * (1 - (WindowRatio.value - 2)) : size;
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

const desiredY = computed(() => {
  return footerContentHeight.value + moonSize.value / 4 - 96;
});

onMounted(() => {
  moon.value = document.querySelector("svg#moonSymbol");
  moonSize.value = initialMoonSize.value;
  handleResize();
  watch([width, height, moonSize, tablets], handleResize);
});

function handleResize() {
  if (moon.value) {
    moon.value.style.transform = `translate(0px, -${desiredY.value}px)`;
  }
}
</script>
