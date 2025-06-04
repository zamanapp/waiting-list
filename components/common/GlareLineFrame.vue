<template>
  <div class="relative flex flex-col justify-center overflow-hidden group">
    <div
      class="relative w-full h-full p-2 dark:bg-neutral-50/5 outline outline-1 -outline-offset-1 dark:outline-neutral-50/5 outline-slate-300 sm:mx-auto sm:rounded-lg lg:rounded-3xl"
    >
      <div
        class="absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px] bg-gradient-to-r dark:from-neutral-950 from-5% dark:via-white/60 dark:group-hover:via-white via-50% dark:to-neutral-950 to-95%"
      />
      <div
        class="relative flex h-full px-8 overflow-hidden transition-all ease-linear border rounded-2xl dark:border-neutral-700 pt-9 hover:border-neutral-500/80"
      >
        <div
          class="absolute bottom-auto left-0 right-0 top-0 z-10 -mb-[1px] h-[1px]"
        />
        <slot />
        <div
          class="dark:bg-[radial-gradient(circle_at_50%_0,_rgba(128,128,128,_.2),_rgba(0,_0,_0,_0)_80%),_radial-gradient(circle_at_50%_0,_#181818,_rgba(0,_0,_0,_0))] absolute bottom-0 left-0 right-0 top-0 z-0 opacity-0 transition-all ease-linear group-hover:opacity-100"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

withDefaults(
  defineProps<{
    showBuckle?: boolean;
    direction?: "top" | "bottom";
  }>(),
  {
    showBuckle: false,
    direction: "bottom",
  }
);
</script>
