<template>
  <div
    class="relative flex items-center justify-start w-full h-auto min-h-screen gap-10 overflow-hidden sui-tyndall-effect"
    :style="wrapperStyle"
  >
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-24 lg:h-56 left-[-64vw] top-[48vw] lg:left-[-28vw] lg:top-[32vw] xl:left-[-16vw] xl:top-[21vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '40deg', scaleY: 0.5 }"
      :enter="{ opacity: 0.8, rotate: '40deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-12 lg:h-24 left-[-60vw] top-[40vw] lg:left-[-32vw] lg:top-[24vw] xl:left-[-12vw] xl:top-[17vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '32deg', scaleY: 0.5 }"
      :enter="{ opacity: 0.92, rotate: '32deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="streak flex-none mix-blend-overlay overflow-hidden pointer-events-none absolute w-[200%] lg:w-[150%] h-20 lg:h-48 left-[-32vw] top-[32vw] lg:left-[-12vw] lg:top-[18vw] xl:left-[-10vw] xl:top-[10vw]"
      v-motion
      :initial="{ opacity: 0, rotate: '24deg', scaleY: 0.5 }"
      :enter="{ opacity: 1, rotate: '24deg', scaleY: 1 }"
      :duration="2000"
    />
    <div
      class="absolute top-0 left-0 right-0 z-10 flex-none h-56 overflow-hidden pointer-events-none overlay"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 flex-none h-screen particles-effect"
      v-if="$slots.particles"
    >
      <slot name="particles" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    streakColor?: string;
  }>(),
  {
    streakColor: "rgb(255, 255, 255)",
  }
);

const { streakColor } = toRefs(props);

const wrapperStyle = computed(() => {
  return {
    "--streak-color": streakColor.value,
  };
});
</script>

<style scoped>
.sui-tyndall-effect {
  --streak-color: rgb(0, 225, 255);
}

/* .sui-tyndall-effect .overlay {
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.32) 43%,
    rgba(0, 0, 0, 0.12) 70%,
    rgba(0, 0, 0, 0) 100%
  );
} */

.sui-tyndall-effect .streak {
  background: linear-gradient(
    90deg,
    var(--streak-color) 16%,
    rgba(255, 255, 255, 0) 100%
  );
  mask: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.5) 64%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sui-tyndall-effect .particles-effect {
  mask: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0) 30%,
    rgb(0, 0, 0) 36%,
    rgb(0, 0, 0) 63%,
    rgba(0, 0, 0, 0) 76%
  );
}
</style>
