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
const isDark = useDark();

const color = computed(() => (isDark.value ? "#6ee7b7" : "#10b981"));

const habits = [
  {
    habit: "Morning Athkar",
    frequency: "Everyday @ 06:00 AM",
    checked: true,
  },
  {
    habit: "Read 10 pages",
    frequency: "Everyday @ 09:00 PM",
    checked: false,
  },
  {
    habit: "Duha Prayer",
    frequency: "Everyday @ 10:00 AM",
    checked: true,
  },
  {
    habit: "Morning walk",
    frequency: "Everyday @ 07:00 AM",
    checked: false,
  },
];
const secondHabits = [
  {
    habit: "Morning Athkar",
    frequency: "Everyday @ 06:00 AM",
    checked: false,
  },
  {
    habit: "Read 10 pages",
    frequency: "Everyday @ 09:00 PM",
    checked: true,
  },
  {
    habit: "Duha Prayer",
    frequency: "Everyday @ 10:00 AM",
    checked: false,
  },
  {
    habit: "Morning walk",
    frequency: "Everyday @ 07:00 AM",
    checked: true,
  },
];
</script>
