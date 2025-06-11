<template>
  <div
    :class="[
      'flex flex-col bg-white dark:bg-slate-900 h-20 w-80 font-sans transition-all ease-out border rounded-lg shadow-sm cursor-pointer group hover:shadow-md dark:shadow-inner-shadow-dark-md dark:hover:shadow-inner-shadow-dark-float',
      isChecked &&
        'border-emerald-500 dark:bg-emerald-950/20 bg-gradient-to-br from-emerald-50 to-background dark:from-emerald-900/20 dark:to-background',
      !isChecked && 'dark:border-slate-700',
    ]"
  >
    <div class="flex flex-col w-full gap-1 p-3">
      <div class="flex items-center justify-between w-full dark:text-white">
        <div class="flex items-center gap-2">
          <Checkbox
            :id="`track-habit-1`"
            v-model:checked="isChecked"
            class="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
          />
          <label
            :for="`track-habit-1`"
            :class="[
              'font-medium transition-colors duration-200',
              isChecked &&
                'text-emerald-600 dark:text-emerald-400 line-through',
            ]"
            >{{ habit }}</label
          >
        </div>
      </div>
      <div class="flex items-center justify-between w-full gap-2">
        <div class="text-sm select-none text-slate-400 dark:text-white/60">
          {{ frequency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    frequency: string;
    habit: string;
    checked: boolean;
  }>(),
  {
    frequency: "Everyday @ 07:00 AM",
    habit: "Habit",
    checked: false,
  }
);

const isChecked = ref(props.checked);
</script>
