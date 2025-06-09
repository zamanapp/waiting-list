<template>
  <GlareLineFrame
    title="Your Wird"
    description="Schedule and track your memorization, revision, and recitation of the Quran"
    class="relative flex p-px lg:col-span-3"
    hide-overflow
  >
    <div
      class="relative overflow-hidden [mask-composite:intersect] rtl:[mask-image:linear-gradient(to_right,transparent,black_7rem),linear-gradient(to_top,transparent,black_7rem)] [mask-image:linear-gradient(to_left,transparent,black_7rem),linear-gradient(to_top,transparent,black_7rem)]"
    >
      <QuranLogo class="fill-emerald-600" :width="100" :height="100" />
      <img
        :src="`/img/wird-${isDark ? 'dark' : 'light'}.png`"
        alt="Wird"
        class="absolute transition-all duration-300 hover:shadow-xl bottom-12 left-16 rtl:left-24 md:left-36"
        style="transform: scale(1.5)"
      />
    </div>

    <!-- <QuranMemorization /> -->
  </GlareLineFrame>
</template>

<script setup lang="ts">
const isDark = useDark();
</script>
