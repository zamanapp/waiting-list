<template>
  <div
    :class="` border-2 bg-white dark:bg-slate-800 ${borderColor} rounded-xl`"
  >
    <div
      :class="`w-full h-full px-6 py-4 flex justify-between rounded-xl leading-8 text-left ${backgroundColor}`"
    >
      <div class="w-4/5">
        <h3 v-if="title" :class="`mb-3 text-lg font-medium ${HighTextColor}`">
          {{ title }}
        </h3>
        <p :class="`leading-6 ${mediumTextColor}`">
          <slot></slot>
        </p>
      </div>
      <button
        v-if="action"
        @click="$emit('actionClick')"
        :class="`self-end font-medium ${HighTextColor} underline cursor-pointer justify-self-end`"
      >
        {{ action }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "content", "action", "type"]);
const borderColor = ref(`border-slate-100`);
const backgroundColor = ref(`bg-slate-50/50`);
const HighTextColor = ref(`text-slate-500`);
const mediumTextColor = ref(`text-slate-500/80`);

if (props.type) {
  switch (props.type) {
    case "success":
      borderColor.value = `border-green-100 dark:border-green-900`;
      backgroundColor.value = `bg-green-50/50 dark:bg-green-800`;
      HighTextColor.value = `text-green-500 dark:text-green-100`;
      mediumTextColor.value = `text-green-500/80 dark:text-green-50`;
      break;
    case "info":
      borderColor.value = `border-sky-100 dark:border-sky-900`;
      backgroundColor.value = `bg-sky-50/50 dark:bg-sky-800`;
      HighTextColor.value = `text-sky-500 dark:text-sky-100`;
      mediumTextColor.value = `text-sky-500/80 dark:text-sky-50`;
      break;
    case "warning":
      borderColor.value = `border-amber-100 dark:border-amber-900`;
      backgroundColor.value = `bg-amber-50/50 dark:bg-amber-800`;
      HighTextColor.value = `text-amber-500 dark:text-amber-100`;
      mediumTextColor.value = `text-amber-500/80 dark:text-amber-50`;
      break;
    case "danger":
      borderColor.value = `border-red-100 dark:border-red-900`;
      backgroundColor.value = `bg-red-50/50 dark:bg-red-800`;
      HighTextColor.value = `text-red-500 dark:text-red-100`;
      mediumTextColor.value = `text-red-500/80 dark:text-red-50`;
      break;
  }
}
</script>
