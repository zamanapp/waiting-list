<template>
  <div
    :class="`relative overflow-hidden bg-white rounded-full moon ${
      dark ? 'border-white' : 'border-black'
    }`"
  >
    <div class="inner"></div>
  </div>
</template>

<script setup lang="ts">
// todo: customize https://github.com/GriffinJohnston/uiball-loaders
// realtime: https://dev.to/thormeier/use-your-i-moon-gination-lets-build-a-moon-phase-visualizer-with-css-and-js-aih
const props = defineProps(["size", "lineWeight", "dark"]);

const sizePx = computed(() => (props.size ? `${props.size}px` : `24px`));
const borderPx = computed(() =>
  props.lineWeight ? `${props.lineWeight}px` : `2px`
);
</script>

<style>
.moon {
  width: v-bind(sizePx);
  height: v-bind(sizePx);
  border-width: v-bind(borderPx);
  transform: translateZ(0);
}

.moon::before {
  @apply bg-black;
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  animation: flip 1s 0.5s steps(2) infinite alternate;
}

.inner {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  animation: rotate 2s linear infinite;
}

.inner::after {
  @apply bg-white;
  transform: rotateY(180deg);
}

.inner::before {
  @apply bg-black;
}

.inner::before,
.inner::after {
  content: " ";
  display: block;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 2s;
  position: absolute;
  backface-visibility: hidden;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes flip {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
