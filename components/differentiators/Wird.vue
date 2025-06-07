<template>
  <GlareLineFrame
    title="Your Wird"
    description="Schedule and track your memorization, revision, and recitation of the Quran"
    class="flex p-px lg:col-span-3"
  >
    <div
      class="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_left,transparent,black_27rem),linear-gradient(to_top,transparent,black_27rem)]"
    >
      <QuranLogo class="fill-emerald-600" :width="100" :height="100" />
    </div>
    <div>
      <img src="/img/wird.png" alt="Wird" class="w-full h-full" />
    </div>
    <!-- <QuranMemorization /> -->
  </GlareLineFrame>
</template>
