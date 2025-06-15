<template>
  <div class="flex flex-col items-center justify-center align-middle">
    <div
      class="inline-flex items-start justify-start gap-2 px-4 align-baseline"
    >
      <div class="w-20 min-w-max">Hijri Calendar</div>
      <Switch
        :default-checked="isHijri"
        v-model:checked="isHijri"
        @update:checked="toggleHijri"
      >
      </Switch>
    </div>
    <Calendar
      v-slot="{ weekDays, grid }"
      :model-value="value"
      :locale="locale"
      class="p-4 mt-6 bg-white border shadow-md dark:shadow-slate-800/50 dark:bg-slate-900 dark:border-slate-800 rounded-xl"
      fixed-weeks
    >
      <CalendarHeader class="flex items-center justify-between">
        <CalendarPrev
          class="inline-flex items-center cursor-pointer justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
        >
          <Icon icon="radix-icons:chevron-left" class="w-6 h-6" />
        </CalendarPrev>
        <CalendarHeading class="text-[15px] font-medium" />

        <CalendarNext
          class="inline-flex items-center cursor-pointer justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
        >
          <Icon icon="radix-icons:chevron-right" class="w-6 h-6" />
        </CalendarNext>
      </CalendarHeader>
      <div
        class="flex flex-col pt-4 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <CalendarGrid
          v-for="month in grid"
          :key="month.value.toString()"
          class="w-full space-y-1 border-collapse select-none"
        >
          <CalendarGridHead>
            <CalendarGridRow class="grid w-full grid-cols-7 mb-1">
              <CalendarHeadCell
                v-for="day in weekDays"
                :key="day"
                class="text-xs rounded-md text-green8"
              >
                {{ day }}
              </CalendarHeadCell>
            </CalendarGridRow>
          </CalendarGridHead>
          <CalendarGridBody class="grid">
            <CalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="grid grid-cols-7"
            >
              <CalendarCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
                class="relative text-sm text-center"
              >
                <CalendarCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9"
                />
              </CalendarCell>
            </CalendarGridRow>
          </CalendarGridBody>
        </CalendarGrid>
      </div>
    </Calendar>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  createCalendar,
  getLocalTimeZone,
  toCalendar,
  today,
  type CalendarIdentifier,
} from "@internationalized/date";

const { locale } = useI18n();

const calendars = [
  { key: "islamic-umalqura", name: "Islamic (Umm al-Qura)" },
  { key: "iso8601", name: "Gregorian" },
];

const calendar = ref<CalendarIdentifier>(
  calendars[0].key as CalendarIdentifier
);

const value = computed(() =>
  toCalendar(today(getLocalTimeZone()), createCalendar(calendar.value))
);

const isHijri = ref(true);

function toggleHijri() {
  calendar.value = isHijri.value ? "islamic-umalqura" : "iso8601";
}
</script>
