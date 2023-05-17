<template>
  <p class="absolute max-w-md ml-6 font-medium text-center mt-36">
    "Oh child of Adam. You are but a number of days. If your day goes by. A
    piece of you goes as well."
    <span class="font-mono text-gray-400">-Al-Hasan Al-Basri</span>
  </p>
  <Moon
    :moon-size="moonSize"
    :line-weight="24"
    class="mx-auto origin-center"
    show-guide
  />
</template>

<script setup lang="ts">
const { height, width } = useWindowSize();
const moonSize = ref(width.value);
let moon = ref<SVGSVGElement | null>(null);
onMounted(() => {
  moon.value = document.querySelector("svg");
  handleResize();
  watch(width, handleResize);
  watch(height, handleResize);
  watch(moonSize, handleResize);
});

function handleResize() {
  const y = height.value - moonSize.value / 2;

  if (moon.value?.style) {
    moon.value.style.transform = `translateY(${y}px)`;
  }
  if (moonSize.value > width.value) {
    moonSize.value = width.value;
    // just a guard code in case the moonSize is greater than the width
    const x =
      width.value / 2 + (moonSize.value - width.value) / 2 - moonSize.value / 2;
    if (moon.value?.style) {
      moon.value.style.transform = `translateX(${x}px)`;
    }
  }
}
</script>
