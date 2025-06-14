<template>
  <GlareLineFrame
    :title="$t('features.hijriCalendar.title')"
    :description="$t('features.hijriCalendar.description')"
    class="flex p-px lg:col-span-5"
    hide-overflow
  >
    <div class="relative flex w-full">
      <img
        :src="`/img/calendar-${isDark ? 'dark' : 'light'}.png`"
        alt="Hijri Calendar"
        class="absolute top-24 md:top-16 md:start-72 object-cover opacity-80 h-80 [mask-image:linear-gradient(to_left,transparent,black_12rem)]"
      />
      <!-- <CalendarSwitch
        class="self-end h-full scale-75 md:scale-100 bottom-6 ms-auto"
      /> -->
      <CalendarSwitch class="h-full scale-75 md:scale-100 bottom-6" />
    </div>
    <!-- <CalendarGrid class="absolute bottom-6" /> -->
  </GlareLineFrame>
</template>

<script setup lang="ts">
const isDark = useDark();

const { t } = useI18n();
</script>
