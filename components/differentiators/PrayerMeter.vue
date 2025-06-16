<template>
  <div
    ref="prayerMeterWrapper"
    class="w-[67rem] md:w-[100rem] lg:w-[130rem] h-12"
  >
    <div class="relative inline-flex items-center w-full align-middle">
      <svg
        id="prayer_meter"
        ref="prayerMeter"
        width="100%"
        :height="height"
        class="overflow-visible transition-all duration-200 ease-out"
        preserveAspectRatio="none"
      >
        <!-- Define the clip path using the time unit markers -->
        <defs>
          <clipPath id="timeUnitClip">
            <rect
              v-for="(timeAnchor, index) in timeAnchors"
              :key="timeAnchor.name"
              :x="
                index === 0
                  ? 0
                  : prayerOffsets[index - 1] * offsetUnit + GAP_SIZE
              "
              :y="
                isPrayerMeterHovered || showPrayerTimeLabel !== 'none'
                  ? height - height * HIGHT_RATIO
                  : 0
              "
              rx="4"
              :width="
                index === 0
                  ? prayerOffsets[index] * offsetUnit
                  : (prayerOffsets[index] - prayerOffsets[index - 1]) *
                      offsetUnit -
                    GAP_SIZE
              "
              :height="prayerMeterHeight"
            />
          </clipPath>
        </defs>

        <!-- Define the gradients -->
        <!-- <linearGradient id="linearOverlay" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#09203f" />
            <stop offset="100%" stop-color="#537895" />
          </linearGradient> -->

        <linearGradient id="linearOverlay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4e4376" />
          <stop offset="100%" stop-color="#2b5876" />
        </linearGradient>

        <g ref="prayerMeterGroup">
          <!-- Background time unit markers -->
          <g
            v-for="(timeAnchor, index) in timeAnchors"
            :key="`bg-${timeAnchor.name}`"
            class="cursor-pointer group"
            @mouseenter="hoveredElement = `duration-${index}`"
            @mouseleave="hoveredElement = null"
          >
            <rect
              :x="
                index === 0
                  ? 0
                  : prayerOffsets[index - 1] * offsetUnit + GAP_SIZE
              "
              :y="
                isPrayerMeterHovered || showPrayerTimeLabel !== 'none'
                  ? height - height * HIGHT_RATIO
                  : 0
              "
              rx="4"
              :width="
                index === 0
                  ? prayerOffsets[index] * offsetUnit
                  : (prayerOffsets[index] - prayerOffsets[index - 1]) *
                      offsetUnit -
                    GAP_SIZE
              "
              :height="prayerMeterHeight"
              class="transition-all duration-200 fill-slate-200 dark:fill-slate-800"
            />
            <!-- Intervals between prayers labels -->
            <text
              :x="
                index === 0
                  ? prayerOffsets[index] * offsetUnit -
                    (prayerOffsets[index] * offsetUnit) / 2
                  : prayerOffsets[index] * offsetUnit -
                    ((prayerOffsets[index] - prayerOffsets[index - 1]) *
                      offsetUnit -
                      GAP_SIZE) /
                      2
              "
              :y="height - height * HIGHT_RATIO - 6"
              text-anchor="middle"
              class="text-sm capitalize transition-opacity duration-200 opacity-0 fill-foreground"
              :class="
                hoveredElement === `duration-${index}`
                  ? 'opacity-100'
                  : 'opacity-0'
              "
            >
              <template v-for="(part, i) in formatDuration(index)" :key="i">
                <tspan :class="part.class">{{ part.text }}</tspan>
              </template>
            </text>
          </g>

          <!-- Progress bar that gets clipped -->
          <rect
            x="0"
            :y="
              isPrayerMeterHovered || showPrayerTimeLabel !== 'none'
                ? height - height * HIGHT_RATIO
                : 0
            "
            :width="dayProgressInPx"
            :height="prayerMeterHeight"
            class="transition-all duration-100 ease-out cursor-pointer pointer-events-none fill-slate-300 dark:fill-slate-700"
            clip-path="url(#timeUnitClip)"
          />

          <!-- Prayer time indicators -->
          <g
            v-for="(prayer, i) in prayers"
            :key="prayer.name"
            @click="handleClick(prayer)"
            class="transition-all ease-out origin-center cursor-pointer group"
            @mouseenter="hoveredElement = `prayer-${prayer.name}`"
            @mouseleave="hoveredElement = null"
          >
            <!-- solid rectangle to indicate the prayer time -->
            <rect
              :x="prayerOffsets[i] * offsetUnit + (GAP_SIZE / 2 - 2)"
              :y="
                isPrayerMeterHovered || showPrayerTimeLabel !== 'none'
                  ? height - height * HIGHT_RATIO + 2
                  : 2
              "
              :width="
                showPrayerTimeLabel === 'all' ||
                showPrayerTimeLabel === prayer.name
                  ? 8
                  : 4
              "
              :height="prayerMeterHeight - 4"
              rx="2"
              style="transform-origin: center"
              :class="`transition-all duration-200 origin-center group-hover:fill-teal-500 group-hover:dark:fill-teal-300 ${
                (nextPrayerIsNear && prayer.name === prayers[0].name) ||
                showPrayerTimeLabel === 'all' ||
                showPrayerTimeLabel === prayer.name
                  ? 'fill-teal-400 dark:fill-teal-300'
                  : now.getTime() > prayer.time.getTime()
                  ? 'fill-slate-400 dark:fill-slate-700'
                  : 'fill-slate-200 dark:fill-slate-800'
              }`"
              :style="{
                transform: `translateX(${
                  showPrayerTimeLabel === 'all' ||
                  showPrayerTimeLabel === prayer.name
                    ? '-2px'
                    : '0'
                })`,
              }"
            />

            <!-- Pulse animation -->
            <rect
              v-if="nextPrayerIsNear && prayer.name === prayers[0].name"
              :x="prayerOffsets[i] * offsetUnit + (GAP_SIZE / 2 - 2)"
              :y="
                isPrayerMeterHovered || showPrayerTimeLabel !== 'none'
                  ? height - height * HIGHT_RATIO + 2
                  : 2
              "
              :width="
                showPrayerTimeLabel === 'all' ||
                showPrayerTimeLabel === prayer.name
                  ? 8
                  : 4
              "
              :height="prayerMeterHeight - 4"
              :rx="
                showPrayerTimeLabel === 'all' ||
                showPrayerTimeLabel === prayer.name
                  ? 8
                  : 4
              "
              :class="`transition-all animate-close-time origin-center group-hover:fill-teal-500 group-hover:dark:fill-teal-300 fill-teal-500 dark:fill-teal-300`"
              :style="{
                transform: `translateX(${
                  showPrayerTimeLabel === 'all' ||
                  showPrayerTimeLabel === prayer.name
                    ? '-2px'
                    : '0'
                })`,
              }"
            />

            <!-- Prayer name label -->
            <text
              :x="prayerOffsets[i] * offsetUnit"
              :y="height - height * HIGHT_RATIO - 6"
              text-anchor="middle"
              class="text-sm capitalize transition-opacity duration-200 fill-teal-500 dark:fill-teal-300"
              :class="
                showPrayerTimeLabel === prayer.name ||
                hoveredElement === `prayer-${prayer.name}`
                  ? 'opacity-100'
                  : 'opacity-0'
              "
            >
              <tspan>{{ $t(`prayers.${prayer.name}`) }}</tspan>
              -
              <tspan class="font-semibold">
                {{ formateTime(prayer.time) }}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Temporal } from "@js-temporal/polyfill";

type PrayerNamesType =
  | "fajr"
  | "sunrise"
  | "dhuhr"
  | "asr"
  | "maghrib"
  | "isha";

interface TimeObject {
  name: PrayerNamesType;
  time: Date;
}

const locale = computed(() => "en-US");
const showPrayerTimeLabel = ref<"none" | "all" | PrayerNamesType>("fajr");
const now = ref(new Date("2025-06-05T20:36:00.000Z"));
const hoveredElement = ref<string | null>("prayer-fajr");

const timeFormatter = new Intl.DateTimeFormat(locale.value, {
  hour: "numeric",
  minute: "numeric",
});

const startTimeMs = 1749147420000;
const endTimeMs = 1749233820000;
const MS_TO_MIN = 60000; // 1 minute
const MS_TO_DAY = 86400000; // 1 day
const GAP_SIZE = 14; // the gap size between the prayer times (px)
const HIGHT_RATIO = 0.7;
const prayers: TimeObject[] = [
  {
    name: "fajr",
    time: new Date("2025-06-05T20:45:00.000Z"),
  },
  {
    name: "sunrise",
    time: new Date("2025-06-05T22:20:00.000Z"),
  },
  {
    name: "dhuhr",
    time: new Date("2025-06-06T05:12:00.000Z"),
  },
  {
    name: "asr",
    time: new Date("2025-06-06T08:38:00.000Z"),
  },
  {
    name: "maghrib",
    time: new Date("2025-06-06T11:21:00.000Z"),
  },
  {
    name: "isha",
    time: new Date("2025-06-06T12:51:00.000Z"),
  },
];

const MIN_FROM_LAST_LAST_THIRD_TO_LAST_THIRD = computed(() =>
  Math.round((endTimeMs - startTimeMs) / MS_TO_MIN)
);

const prayerMeter = ref(null);
const prayerMeterWrapper = ref(null);
const prayerMeterGroup = ref(null);

const offsetUnit = ref(0);
const { height } = useElementSize(prayerMeterWrapper, undefined, {
  box: "content-box",
});
const isPrayerMeterHovered = useElementHover(prayerMeterGroup);

const prayerMeterHeight = computed(() => {
  const BaseHeight = height.value;
  if (isPrayerMeterHovered.value || showPrayerTimeLabel.value !== "none") {
    return BaseHeight * HIGHT_RATIO;
  }
  return BaseHeight;
});

watch(prayerMeter, () => {
  const { width } = useElementBounding(prayerMeter);
  offsetUnit.value = width.value / MIN_FROM_LAST_LAST_THIRD_TO_LAST_THIRD.value;
});

useResizeObserver(prayerMeter, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  offsetUnit.value = width / MIN_FROM_LAST_LAST_THIRD_TO_LAST_THIRD.value;
});

const timeAnchors = computed(() => [
  ...prayers,
  { name: "end", time: new Date(endTimeMs) },
]);

const prayerOffsets = computed(() =>
  timeAnchors.value.map((v) =>
    Math.round((v.time.getTime() - startTimeMs) / MS_TO_MIN)
  )
);

function formateTime(time: Date) {
  if (time) {
    return timeFormatter.format(time);
  }
}

function handleClick(prayer: TimeObject) {
  if (showPrayerTimeLabel.value === "none") {
    showPrayerTimeLabel.value = prayer.name as PrayerNamesType;
  } else if (showPrayerTimeLabel.value === "all") {
    showPrayerTimeLabel.value = "none";
  } else if (showPrayerTimeLabel.value === prayer.name) {
    showPrayerTimeLabel.value = "all";
  } else {
    showPrayerTimeLabel.value = prayer.name as PrayerNamesType;
  }
}

const dayProgressInPx = computed(() => {
  if (startTimeMs > now.value.getTime()) {
    // this happens when the calculator is ahead of the current time
    // because the start time is ahead of the current time,
    // we need to subtract the difference from the interval between the start and end times
    const difference = startTimeMs - now.value.getTime();
    const interval = endTimeMs - startTimeMs;
    return ((interval - difference) / MS_TO_MIN) * offsetUnit.value;
  } else {
    return ((now.value.getTime() - startTimeMs) / MS_TO_MIN) * offsetUnit.value;
  }
});

const nextPrayerIsNear = computed(() => {
  const nextPrayer = prayers[0].time;
  return nextPrayer
    ? nextPrayer.getTime() - now.value.getTime() < 10 * MS_TO_MIN
    : false;
});

const durationFormatter = new Intl.DurationFormat(locale.value, {
  style: "narrow",
});

const formatDuration = (index: number) => {
  const timeAnchor = timeAnchors.value[index];
  const previousTimeAnchor =
    index === 0
      ? { time: new Date(startTimeMs) }
      : timeAnchors.value[index - 1];

  if (
    now.value.getTime() < timeAnchor.time.getTime() &&
    now.value.getTime() > previousTimeAnchor.time.getTime()
  ) {
    // the current time is between the current and previous time anchor
    const firstDuration = Temporal.Duration.from({
      milliseconds: now.value.getTime() - previousTimeAnchor.time.getTime(),
    }).round({
      largestUnit: "hours",
      smallestUnit: "minutes",
    });
    const secondDuration = Temporal.Duration.from({
      milliseconds: timeAnchor.time.getTime() - now.value.getTime(),
    }).round({
      largestUnit: "hours",
      smallestUnit: "minutes",
    });
    return [
      {
        text: durationFormatter.format(firstDuration),
        class: "fill-slate-400 dark:fill-slate-500",
      },
      { text: " - ", class: "" },
      { text: durationFormatter.format(secondDuration), class: "" },
    ];
  } else if (startTimeMs > now.value.getTime()) {
    // this happens when the calculator is ahead of the current time
    // when this happens we have to make some adjustments to the durations displayed for the last portion of the day
    if (timeAnchor.name === "end") {
      // we need to subtract a day form both times
      const newAnchorTime = new Date(timeAnchor.time.getTime() - MS_TO_DAY);
      const newPreviousTimeAnchor = new Date(
        previousTimeAnchor.time.getTime() - MS_TO_DAY
      );
      const firstDuration = Temporal.Duration.from({
        milliseconds: now.value.getTime() - newPreviousTimeAnchor.getTime(),
      }).round({
        largestUnit: "hours",
        smallestUnit: "minutes",
      });
      const secondDuration = Temporal.Duration.from({
        milliseconds: newAnchorTime.getTime() - now.value.getTime(),
      }).round({
        largestUnit: "hours",
        smallestUnit: "minutes",
      });
      return [
        {
          text: durationFormatter.format(firstDuration),
          class: "fill-slate-400 dark:fill-slate-500",
        },
        { text: " - ", class: "" },
        { text: durationFormatter.format(secondDuration), class: "" },
      ];
    } else {
      // this is most likely a dead branch, but I'm keeping it here for now
      const duration = Temporal.Duration.from({
        milliseconds:
          timeAnchor.time.getTime() - previousTimeAnchor.time.getTime(),
      }).round({
        largestUnit: "hours",
        smallestUnit: "minutes",
      });
      return [
        {
          text: durationFormatter.format(duration),
          class: "fill-slate-400 dark:fill-slate-500",
        },
      ];
    }
  }
  const duration = Temporal.Duration.from({
    milliseconds: timeAnchor.time.getTime() - previousTimeAnchor.time.getTime(),
  }).round({
    largestUnit: "hours",
    smallestUnit: "minutes",
  });
  return [
    {
      text: durationFormatter.format(duration),
      // check if the duration is past or future
      class:
        timeAnchor.time.getTime() < now.value.getTime()
          ? "fill-slate-400 dark:fill-slate-500"
          : "",
    },
  ];
};
</script>

<style>
#prayer_meter * {
  transform-box: fill-box;
}

@keyframes close-time {
  75%,
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
.animate-close-time {
  animation: close-time 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
