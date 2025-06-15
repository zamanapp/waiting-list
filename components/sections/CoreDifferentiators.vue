<script setup lang="ts">
import PrayerAnchor from "../differentiators/PrayerAnchor.vue";
</script>

<template>
  <div class="py-6 sm:py-6">
    <div class="max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
      <div
        class="grid grid-cols-1 gap-4 mt-10 sm:mt-16 lg:grid-cols-8 lg:grid-rows-3"
      >
        <HijriCalendar />
        <Deeds />
        <Wird />
        <Kenz />
        <HabitTracker />
        <div
          class="flex flex-col gap-4 p-px grow grid-rows-subgrid lg:col-span-3"
        >
          <PrayerAnchor class="grow" />
          <Spaces class="grow" />
        </div>
      </div>
    </div>
  </div>
</template>
