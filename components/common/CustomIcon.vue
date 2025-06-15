<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  strokeWidth: number;
  name: string;
}>();

// Define the customize function to modify SVG content
const customize = (
  content: string,
  name: string,
  prefix: string,
  provider: string
) => {
  content = content.replace(
    /stroke-width="[^"]*"/g,
    `stroke-width="${props.strokeWidth}"`
  ); // Change stroke width to 2
  // .replace(/stroke="[^"]*"/g, `stroke="#FF5733"`) // Change stroke color to red
  // .replace(/fill="[^"]*"/g, `fill="#FF5733"`) // Change fill color to red
  // .replace(/animation-duration="[^"]*"/g, `animation-duration="1s"`) // Change animation duration to 1s (for animated icons)
  // .replace(/opacity="[^"]*"/g, `opacity="0.8"`);// Change opacity to 0.8
  return content;
};
</script>

<template>
  <Icon :icon="name" mode="svg" :customize="customize" />
</template>
