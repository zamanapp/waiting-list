<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 200,
  },
  align: {
    type: String as PropType<"start" | "center" | "end">,
    default: "center",
  },
  side: {
    type: String as PropType<"top" | "right" | "bottom" | "left">,
    default: "top",
  },
});
</script>

<template>
  <TooltipProvider :delay-duration="delay">
    <Tooltip>
      <TooltipTrigger>
        <slot />
        <span class="sr-only">{{ content }}</span>
      </TooltipTrigger>
      <TooltipContent :side="side" :align="align">
        <p>{{ content }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
