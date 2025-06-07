<template>
  <div ref="chartContainer" class="flex flex-col w-screen h-6">
    <div
      ref="memorizationChart"
      class="flex w-screen text-xs text-slate-600 dark:text-slate-100"
    />
  </div>
</template>

<script setup lang="ts">
import * as Plot from "@observablehq/plot";

const memorizationChart = ref<HTMLDivElement>();
const chartContainer = ref<HTMLDivElement>();

onMounted(() => {
  const { width } = useElementSize(chartContainer.value);

  watch(
    width,
    () => {
      renderChart();
    },
    {
      immediate: true,
    }
  );
});

function random(numbers: number[]) {
  // 75% chance of returning first number
  if (Math.random() < 0.97) {
    return numbers[0];
  }
  // 25% chance of returning any other number (0.5 or 1)
  const otherNumbers = numbers.slice(1); // [0.5, 1]
  return otherNumbers[Math.floor(Math.random() * otherNumbers.length)];
}

function renderChart() {
  if (!memorizationChart.value) return;

  const { width } = useElementSize(chartContainer.value);

  // Generate memorization data for 6236 verses (reversed order - end to beginning)
  const memorization = Array.from({ length: 6236 }, (_, i) => {
    const status = random([0, 0.5, 1]);
    return {
      verse: 6236 - i, // Reverse order: end of Quran to Al-Fatiha
      position: i,
      status,
    };
  });

  const plot = Plot.plot({
    width: width.value,
    marks: [
      Plot.tickX(memorization, {
        x: "position",
        stroke: (d) => {
          if (d.status === 1) return "#22c55e";
          if (d.status === 0.5) return "#84cc16";
          return "transparent";
        },
      }),
    ],
    axis: null,
  });

  // Clear previous chart and append new one
  if (memorizationChart.value) {
    memorizationChart.value.innerHTML = "";
    memorizationChart.value.append(plot);
  }
}
</script>
