<template>
  <div
    ref="deedCardRef"
    :id="`deed-card-${deedIndex}`"
    :class="[
      'relative flex flex-col font-sans transition-all ease-out border rounded-lg shadow-sm cursor-pointer group hover:shadow-md dark:shadow-inner-shadow-dark-md dark:hover:shadow-inner-shadow-dark-float',
      isChecked &&
        'border-emerald-500 dark:bg-emerald-950/20 bg-gradient-to-br from-emerald-50 to-background dark:from-emerald-900/20 dark:to-background',
      !isChecked && 'dark:border-slate-500',
    ]"
  >
    <!-- Pre-deeds -->
    <div
      v-if="preDeeds.length && !compact"
      :class="`px-3 py-1 overflow-hidden text-xs  text-emerald-700`"
    >
      <div
        :id="`pre-deed-collapsed-${deedIndex}`"
        class="flex items-center gap-1.5"
      >
        <span class="font-medium">+{{ preDeeds.length }}</span>
        <span class="text-emerald-600">pre-deeds</span>
      </div>
    </div>
    <!-- The deed info -->
    <div :class="`flex flex-col w-full gap-1 ${getPadding()}`">
      <div class="flex items-center justify-between w-full dark:text-white">
        <div class="flex items-center gap-2">
          <Checkbox
            :id="`track-deed-${deed?.uid}-${deed?.start.toString()}`"
            v-model:checked="isChecked"
            class="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
          />
          <label
            :for="`track-deed-${deed?.uid}-${deed?.start.toString()}`"
            :class="[
              'font-medium transition-colors duration-200',
              isChecked &&
                'text-emerald-600 dark:text-emerald-400 line-through',
            ]"
            >{{ deed?.summary }}</label
          >
        </div>
        <div v-if="showIcons || isCardHovered" class="flex items-center gap-3">
          <ToolTipInfo :delay="300" side="top" content="Notification">
            <Icon
              :class="[
                'p-1 rounded-full size-5 hover:text-slate-500 dark:hover:text-slate-300',
                isChecked
                  ? 'text-emerald-500 dark:text-emerald-500'
                  : 'text-slate-400 dark:text-slate-300',
              ]"
              icon="hugeicons:notification-off-01"
            />
          </ToolTipInfo>
          <ToolTipInfo :delay="300" side="top" content="Add to calendar">
            <Icon
              :class="[
                'p-1 rounded-full size-5 hover:text-slate-500 dark:hover:text-slate-300',
                isChecked
                  ? 'text-emerald-500 dark:text-emerald-500'
                  : 'text-slate-400 dark:text-slate-300',
              ]"
              icon="hugeicons:calendar-add-01"
            />
          </ToolTipInfo>
          <ToolTipInfo :delay="300" side="top" content="Share">
            <Icon
              :class="[
                'p-1 rounded-full size-5 hover:text-slate-500 dark:hover:text-slate-300',
                isChecked
                  ? 'text-emerald-500 dark:text-emerald-500'
                  : 'text-slate-400 dark:text-slate-300',
              ]"
              icon="hugeicons:share-08"
            />
          </ToolTipInfo>
          <ToolTipInfo :delay="300" side="top" content="Add to timeline">
            <Icon
              v-if="showAddDeedToTimeline"
              @click="addDeedToTimeline(deed!)"
              :class="[
                'p-1 rounded-full size-5 hover:text-slate-500 dark:hover:text-slate-300',
                isChecked
                  ? 'text-emerald-500 dark:text-emerald-500'
                  : 'text-slate-400 dark:text-slate-300',
              ]"
              icon="hugeicons:time-quarter-pass"
            />
          </ToolTipInfo>
        </div>
      </div>
      <div
        v-if="!compact"
        class="flex items-center justify-between w-full gap-2"
      >
        <div class="text-sm select-none text-slate-400 dark:text-white/60">
          {{ formatDeedTime(deed?.start!) }} <span class="font-sans">-</span>
          {{ formatDeedTime(deed?.end!) }} {{ " • " }}
          {{ formatDeedDuration(deed?.duration!) }}
        </div>

        <div class="inline-flex items-center gap-2">
          <div
            v-if="isProgressBarHovered"
            class="text-xs font-medium transition-opacity duration-200 rounded-md whitespace-nowrap"
          >
            {{ formatDeedDuration(remainingDuration) }} left
          </div>

          <div
            v-if="deed?.specificity === SpecificityEnum.DAY && ongoing"
            class="w-20 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
            ref="progressBarRef"
          >
            <div
              class="h-full transition-all duration-200 ease-out bg-slate-300 dark:bg-slate-700"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post-deeds -->
    <div
      v-if="postDeeds.length && !compact"
      :class="`px-3 py-1 overflow-hidden text-xs  text-emerald-700`"
    >
      <div
        :id="`post-deed-collapsed-${deedIndex}`"
        class="flex items-center gap-1.5"
      >
        <span class="font-medium">+{{ postDeeds.length }}</span>
        <span class="text-emerald-600">post-deeds</span>
      </div>
    </div>
    <!-- Happening this month -->
    <div
      v-if="happeningThisMonth && showHappening === 'year'"
      class="flex items-center justify-center w-full pb-1 border-t bg-lime-100 border-lime-500"
    >
      <span class="text-lime-600">Starting this month</span>
    </div>
    <!-- Happening this week -->
    <div
      v-if="happeningThisWeek && showHappening === 'month'"
      class="flex items-center justify-center w-full pb-1 bg-green-100 border-t border-green-500"
    >
      <span class="text-green-600">Starting this week</span>
    </div>
    <!-- Happening today -->
    <div
      v-if="happeningToday && showHappening === 'week'"
      class="flex items-center justify-center w-full pb-1 bg-teal-100 border-t border-teal-500"
    >
      <span class="text-teal-600">Starting today</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Temporal } from "@js-temporal/polyfill";
import "@formatjs/intl-durationformat/polyfill";
import { SpecificityEnum, type Deed } from "~/lib/types";
import { Icon } from "@iconify/vue";

const props = defineProps({
  deed: Object as PropType<Deed>,
  deedIndex: Number,
  compact: {
    type: Boolean,
    default: false,
  },
  showIcons: {
    type: Boolean,
    default: true,
  },
  showHappening: {
    type: String,
    default: "",
  },
});

const deedCardRef = ref(null);
const isCardHovered = useElementHover(deedCardRef);
const preDeeds = ref([]);
const postDeeds = ref([]);

const progressBarRef = ref(null);
const isProgressBarHovered = useElementHover(progressBarRef);

const isChecked = ref(props.deed?.isChecked ?? false);

const happeningThisMonth = ref(false);
const happeningThisWeek = ref(false);
const happeningToday = ref(false);

const progressPercentage = ref(0);

const ongoing = ref(false);

const ended = ref(false);

const remainingDuration = Temporal.Duration.from({
  minutes: 0,
});

const locale = ref("en-US");
const timezone = ref(new Intl.DateTimeFormat().resolvedOptions().timeZone);
const startTimeMs = ref(0);
const endTimeMs = ref(0);
const calendar = ref("islamic-umalqura");

const formatDeedTime = (
  date: Temporal.PlainDateTime | Temporal.ZonedDateTime | Temporal.PlainDate
) => {
  return date.withCalendar("iso8601").toLocaleString(locale.value, {
    timeStyle: "short",
    calendar: calendar.value!,
  });
};

const durationFormatter = new Intl.DurationFormat(locale.value, {
  style: "narrow",
});

const formatDeedDuration = (duration: Temporal.Duration) => {
  return durationFormatter.format(duration);
};

const showAddDeedToTimeline = ref(true);

const addDeedToTimeline = (deed: Deed) => {
  console.log(deed);
};

function getPadding() {
  if (props.compact) {
    return "";
  }

  if (!preDeeds.value.length && !postDeeds.value.length) {
    return "p-3";
  }

  if (preDeeds.value.length && postDeeds.value.length) {
    return "px-3";
  }

  if (preDeeds.value.length) {
    return "px-3 pb-3";
  }

  if (postDeeds.value.length) {
    return "px-3 pt-3";
  }
}
</script>

<style>
.deed-card-background {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
