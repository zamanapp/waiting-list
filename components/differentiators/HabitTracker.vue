<template>
  <GlareLineFrame
    :title="$t('features.habitTracker.title')"
    :description="$t('features.habitTracker.description')"
    class="flex h-full p-px lg:col-span-5"
  >
    <!-- <HabitChart /> -->
    <div
      class="relative h-80 lg:h-full [mask-composite:intersect] [mask-image:linear-gradient(to_left,transparent,black_2rem),linear-gradient(to_right,transparent,black_2rem)]"
    >
      <!-- FlickeringGrid should be behind the content -->
      <FlickeringGrid class="absolute inset-0 z-0" :color="color" />

      <!-- Marquee should be in front of the grid -->
      <div class="absolute z-10 flex flex-col justify-end h-full py-12">
        <Marquee pauseOnHover>
          <div class="flex gap-3">
            <HabitsList
              v-for="(habit, index) in habits"
              :key="habit.habit"
              :habit="habit.habit"
              :frequency="habit.frequency"
              :checked="habit.checked"
            />
          </div>
        </Marquee>
        <Marquee pauseOnHover reverse>
          <div class="flex gap-3">
            <HabitsList
              v-for="(habit, index) in secondHabits"
              :key="habit.habit"
              :habit="habit.habit"
              :frequency="habit.frequency"
              :checked="habit.checked"
            />
          </div>
        </Marquee>
      </div>
    </div>
  </GlareLineFrame>
</template>

<script setup lang="ts">
const { t } = useI18n();
const isDark = useDark();

const color = computed(() => (isDark.value ? "#6ee7b7" : "#10b981"));

const habits = [
  {
    habit: t("habits.morningAthkar"),
    frequency: t("habits.frequencies.morningAthkar"),
    checked: true,
  },
  {
    habit: t("habits.read10Pages"),
    frequency: t("habits.frequencies.read10Pages"),
    checked: false,
  },
  {
    habit: t("habits.duhaPrayer"),
    frequency: t("habits.frequencies.duhaPrayer"),
    checked: true,
  },
  {
    habit: t("habits.morningWalk"),
    frequency: t("habits.frequencies.morningWalk"),
    checked: false,
  },
];

const secondHabits = [
  {
    habit: t("habits.morningAthkar"),
    frequency: t("habits.frequencies.morningAthkar"),
    checked: false,
  },
  {
    habit: t("habits.read10Pages"),
    frequency: t("habits.frequencies.read10Pages"),
    checked: true,
  },
  {
    habit: t("habits.duhaPrayer"),
    frequency: t("habits.frequencies.duhaPrayer"),
    checked: false,
  },
  {
    habit: t("habits.morningWalk"),
    frequency: t("habits.frequencies.morningWalk"),
    checked: true,
  },
];
</script>
