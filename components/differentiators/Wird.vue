<template>
  <GlareLineFrame
    title="Your Wird"
    description="Schedule and track your memorization, revision, and recitation of the Quran"
    class="relative flex p-px lg:col-span-3"
    hide-overflow
  >
    <div
      class="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_left,transparent,black_7rem),linear-gradient(to_top,transparent,black_7rem)]"
    >
      <QuranLogo class="fill-emerald-600" :width="100" :height="100" />
      <img src="/img/wird.png" alt="Wird" class="absolute bottom-12 start-16" />
    </div>

    <!-- <QuranMemorization /> -->
  </GlareLineFrame>
</template>
