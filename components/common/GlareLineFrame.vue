<template>
  <div
    class="relative flex flex-col justify-center overflow-hidden border-2 shadow-sm rounded-2xl bg-slate-50/20 dark:bg-slate-900/20 group border-slate-200 dark:border-slate-800"
  >
    <div
      class="relative z-10 flex flex-col items-start w-full h-full p-6 cursor-pointer md:gap-8"
    >
      <div class="flex flex-col w-full gap-3 group">
        <div class="flex justify-between w-full">
          <div class="font-semibold ~text-base/3xl">{{ title }}</div>
        </div>
        <div
          class="text-slate-500 dark:text-slate-300 sm:text-xs md:text-sm lg:text-base"
        >
          {{ description }}
        </div>
      </div>
      <div
        :class="`relative w-full h-full flex-1  rounded-[8px] p-3 transition-all ease-linear ${
          hideOverflow ? 'overflow-hidden' : ''
        }`"
      >
        <slot />
      </div>
    </div>
    <div
      class="dark:bg-[radial-gradient(circle_at_50%_0,_rgba(128,128,128,_.2),_rgba(0,_0,_0,_0)_80%),_radial-gradient(circle_at_50%_0,_#181818,_rgba(0,_0,_0,_0))] absolute bottom-0 left-0 right-0 top-0 z-0 opacity-0 transition-all ease-linear group-hover:opacity-100"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  hideOverflow?: boolean;
}>();
</script>
