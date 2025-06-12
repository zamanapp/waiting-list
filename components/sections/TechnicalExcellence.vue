<template>
  <div class="relative pt-24 mb-96">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative px-6 py-20 overflow-hidden isolate sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-16 [mask-composite:intersect] rtl:[mask-image:linear-gradient(to_left,transparent,black_3rem),linear-gradient(to_right,transparent,black_7rem),linear-gradient(to_bottom,transparent,black_7rem),linear-gradient(to_top,transparent,black_7rem)] [mask-image:linear-gradient(to_right,transparent,black_3rem),linear-gradient(to_left,transparent,black_7rem),linear-gradient(to_bottom,transparent,black_7rem),linear-gradient(to_top,transparent,black_7rem)]"
      >
        <div
          class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0"
        >
          <div class="lg:row-start-2 lg:max-w-xl">
            <h2
              class="text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Built with Itqan for Muslims by Muslims.
            </h2>
            <p class="mt-6 dark:text-slate-300 text-slate-700 text-lg/8">
              Zaman strives to deliver the best experience deserving of Muslims
              - a platform that respects your privacy, works everywhere, and
              maintains the highest standards of quality in everything we do.
            </p>
          </div>
          <img
            :src="
              isDark ? '/img/remaining-dark.png' : '/img/remaining-light.png'
            "
            alt="Product screenshot"
            class="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 dark:ring-white/10 ring-slate-900/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            width="2432"
            height="1442"
          />
          <div
            class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10"
          >
            <dl
              class="max-w-xl space-y-8 dark:text-slate-300 text-slate-700 text-base/7 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative"
              >
                <dt
                  class="inline-block font-semibold text-black ms-12 dark:text-white"
                >
                  <Icon
                    :icon="feature.icon"
                    class="absolute -top-1 dark:text-emerald-600 text-emerald-400 left-1 size-8"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline text-slate-700 dark:text-slate-300">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="absolute -translate-y-1/2 pointer-events-none left-12 top-1/2 -z-10 transform-gpu blur-3xl lg:-bottom-48 lg:top-auto lg:translate-y-0 lg:transform-gpu"
          aria-hidden="true"
        >
          <div
            class="aspect-[1155/678] w-[72.1873rem] bg-gradient-to-tr dark:from-white dark:to-slate-700 from-slate-700 to-white opacity-25"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const isDark = useDark();

const features = [
  {
    name: "Privacy-first.",
    description:
      "Zaman is built with privacy in mind. We are not in the business of selling Muslims data.",
    icon: "ic:baseline-shield-moon",
  },
  {
    name: "Local-first.",
    description:
      "Zaman uses a sync engine to deliver locale first experience and offline support.",
    icon: "ic:baseline-cloud-off",
  },
  {
    name: "High-performance.",
    description:
      "Built for speed and real-time sync. Every interaction should feel instant.",
    icon: "ic:baseline-flash-on",
  },
];
</script>
