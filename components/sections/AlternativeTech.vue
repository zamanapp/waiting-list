<template>
  <section class="relative flex flex-col items-center w-full">
    <ParticlesEffect
      :density="1200"
      class="absolute inset-x-0 top-0 w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
    />
    <h2
      class="absolute z-10 w-full px-6 mx-auto text-5xl font-semibold text-center -top-12 md:top-20 lg:top-6"
    >
      {{ $t("alternativeTech.title") }}
    </h2>
    <LightBar class="absolute w-full bottom-96" theme="slate" />
    <div class="absolute w-full top-12">
      <div
        class="relative flex h-[37rem] flex-col items-center justify-center w-full overflow-hidden rounded-lg"
      >
        <p
          class="z-10 flex gap-6 text-5xl font-medium tracking-tighter text-center text-black whitespace-pre-wrap md:gap-20 dark:text-white"
        >
          <Icon icon="cib:apple" class="translate-y-24 md:size-12 size-8" />
          <Icon icon="cib:google" class="translate-y-12 md:size-18 size-12" />
          <Logo no-text size="2xl" />
          <Icon
            icon="cib:microsoft"
            class="translate-y-12 md:size-18 size-12"
          />
          <Icon icon="cib:notion" class="translate-y-24 md:size-12 size-8" />
        </p>
        <Ripple
          class="bg-transparent [mask-image:linear-gradient(to_bottom,white,transparent)]"
          circle-class="rounded-full dark:border-white border-slate-700 bg-slate-500/25 dark:bg-white/25"
          style="--duration: 2.7s"
        />
      </div>
    </div>
    <p class="absolute w-full max-w-md p-6 text-2xl text-center bottom-24">
      {{ $t("alternativeTech.description") }}
    </p>
  </section>
  <GlowyDivider class="absolute pt-0 -bottom-[3.9rem]" direction="top" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isDark = useDark();
</script>
