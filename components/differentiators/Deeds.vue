<template>
  <GlareLineFrame
    :title="$t('features.deeds.title')"
    :description="$t('features.deeds.description')"
    class="flex p-px lg:col-span-3"
  >
    <div class="flex items-center justify-center h-full">
      <div
        class="relative h-full overflow-hidden [mask-composite:intersect] rtl:[mask-image:linear-gradient(to_left,transparent,black_2rem),linear-gradient(to_right,transparent,black_2rem),linear-gradient(to_bottom,transparent,black_2rem),linear-gradient(to_top,transparent,black_2rem)] [mask-image:linear-gradient(to_right,transparent,black_2rem),linear-gradient(to_left,transparent,black_2rem),linear-gradient(to_bottom,transparent,black_2rem),linear-gradient(to_top,transparent,black_2rem)]"
      >
        <!-- <div
          class="grid h-[300px] w-[300px] gap-5 animate-skew-scroll hover-pause-scroll grid-cols-1"
        >
          <DeedsCard
            class="transition-all duration-300 ease-in-out shadow-md cursor-pointer group hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
            v-for="(deed, index) in deeds"
            :key="deed.uid"
            :deed="deed"
            :deed-index="index"
          />
        </div> -->
        <Marquee
          vertical
          class="h-[420px] w-full"
          style="transform: rotateX(20deg) rotateZ(-20deg) skewX(10deg)"
        >
          <ClientOnly>
            <DeedsCard
              class="transition-all duration-300 ease-in-out shadow-md cursor-pointer group hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
              v-for="(deed, index) in deeds"
              :key="deed.uid"
              :deed="deed"
              :deed-index="index"
            />
          </ClientOnly>
        </Marquee>
      </div>
    </div>
  </GlareLineFrame>
</template>

<script setup lang="ts">
import { Temporal } from "@js-temporal/polyfill";
import { SpecificityEnum, type Deed } from "~/lib/types";

const deeds = ref<Deed[]>([
  {
    uid: "01960164-64c2-776b-a8b1-eac0c9a7c713",
    start: Temporal.PlainDateTime.from("2025-06-04T05:45:00"),
    end: Temporal.PlainDateTime.from("2025-06-04T07:02:00"),
    summary: "Fajr",
    duration: Temporal.Duration.from("PT1H17M"),
    specificity: SpecificityEnum.DAY,
  },
  {
    uid: "01960164-64c1-75bc-ae2c-8f99ffe4bd81",
    start: Temporal.PlainDateTime.from("2025-06-04T05:45:00"),
    end: Temporal.PlainDateTime.from("2025-06-04T06:05:00"),
    summary: "Fajr Ratiba",
    duration: Temporal.Duration.from("PT20M"),
    specificity: SpecificityEnum.DAY,
  },
  {
    uid: "01960164-64d7-7554-9a5e-d1378cc3c8f1",
    start: Temporal.PlainDateTime.from("2025-03-30T07:28:00"),
    end: Temporal.PlainDateTime.from("2025-03-31T07:28:00"),
    summary: "Eid al-Fitr",
    duration: Temporal.Duration.from("P1D"),
    specificity: SpecificityEnum.YEAR,
  },
  {
    uid: "01960164-64cc-761c-885d-bb74ad832128",
    start: Temporal.PlainDateTime.from("2025-06-02T07:02:00"),
    end: Temporal.PlainDateTime.from("2025-06-02T19:20:00"),
    summary: "Monday Fasting",
    isChecked: true,
    duration: Temporal.Duration.from("PT12H18M"),
    specificity: SpecificityEnum.WEEK,
  },
  {
    uid: "01960164-64c8-735d-94be-892b52a18dc0",
    start: Temporal.PlainDateTime.from("2025-06-13T07:04:00"),
    end: Temporal.PlainDateTime.from("2025-06-13T18:22:00"),
    summary: "Hijamah",
    duration: Temporal.Duration.from("PT11H18M"),
    specificity: SpecificityEnum.MONTH,
  },
  {
    uid: "01960164-64c8-735d-94be-857a2c90bebd",
    start: Temporal.PlainDateTime.from("2025-06-09T07:03:00"),
    end: Temporal.PlainDateTime.from("2025-06-09T19:22:00"),
    summary: "Ayyam al-beed",
    duration: Temporal.Duration.from("PT12H19M"),
    specificity: SpecificityEnum.MONTH,
  },
  {
    uid: "01960164-64ca-74ad-ab5b-c5f08052fd62",
    start: Temporal.PlainDateTime.from("2025-06-06T07:03:00"),
    end: Temporal.PlainDateTime.from("2025-06-06T12:42:00"),
    summary: "Friday Ghusl",
    duration: Temporal.Duration.from("PT5H39M"),
    specificity: SpecificityEnum.WEEK,
  },
  {
    uid: "01960164-64dd-70bf-b462-c75fe24c87bd",
    start: Temporal.PlainDateTime.from("2025-06-05T05:45:00"),
    end: Temporal.PlainDateTime.from("2025-06-05T19:21:00"),
    summary: "Yaum 'Arafa",
    duration: Temporal.Duration.from("PT13H36M"),
    specificity: SpecificityEnum.YEAR,
  },
  {
    uid: "01960164-64de-75ca-8de7-242fec6d9e50",
    start: Temporal.PlainDateTime.from("2025-03-30T07:13:00"),
    end: Temporal.PlainDateTime.from("2025-04-04T19:21:00"),
    summary: "6 Days of Shawwal",
    duration: Temporal.Duration.from("P5DT12H8M"),
    specificity: SpecificityEnum.YEAR,
  },
  {
    uid: "01960164-64c7-7130-8c5e-d3d7acb0e34c",
    start: Temporal.PlainDateTime.from("2025-03-08T21:06:00"),
    end: Temporal.PlainDateTime.from("2025-03-08T22:06:00"),
    summary: "Taraweeh",
    duration: Temporal.Duration.from("PT1H"),
    specificity: SpecificityEnum.DAY,
  },
]);
</script>

<style scoped>
.hover-pause-scroll:hover {
  animation-play-state: paused;
}
</style>
