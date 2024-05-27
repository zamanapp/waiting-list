<template>
  <div class="p-24">
    <button
      @click="
        calendar =
          calendar === Calendars.UMM_AL_QURA
            ? Calendars.ISO
            : Calendars.UMM_AL_QURA
      "
    >
      {{ calendar }}
    </button>
  </div>
  <div dir="ltr" class="grid items-center">
    <Moon
      :moon-size="moonSize"
      :line-weight="lineWeight"
      :calendar="calendar"
      class="mx-auto origin-center pointer-events-none"
      show-guide
    />
  </div>
</template>

<script setup lang="ts">
const { height, width } = useWindowSize();
import { Calendars } from "../types/Calendars";

const padding = ref(48); // p-12 = 48px
const moonSize = ref(width.value - padding.value * 2);
const lineWeight = ref(32);

const calendar = ref<Calendars>(Calendars.UMM_AL_QURA);
</script>
