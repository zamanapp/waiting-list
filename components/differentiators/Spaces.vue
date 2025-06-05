<template>
  <GlareLineFrame class="flex p-px">
    <div
      class="relative z-10 flex flex-col items-start w-full gap-8 p-6 cursor-pointer"
    >
      <div class="flex flex-col w-full group">
        <div class="flex justify-between w-full">
          <div class="font-semibold sm:text-base md:text-lg lg:text-2xl">
            Dynamic Spaces
          </div>
        </div>
        <div
          class="text-slate-800 dark:text-slate-300 sm:text-xs md:text-sm lg:text-base"
        >
          Cater for different aspects of your life
        </div>
      </div>
      <div
        class="w-full h-full flex-1 ring-1 ring-inset ring-white/10 rounded-[8px] p-3 transition-all ease-linear"
      >
        <SpacesIcons />
      </div>
    </div>
  </GlareLineFrame>
</template>
