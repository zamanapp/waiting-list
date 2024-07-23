<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  loading: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="`${cn(
      buttonVariants({ variant, size }),
      props.class
    )} inline-flex align-middle items-center justify-center gap-3`"
  >
    <span class="transition-all duration-300 transform dark" v-show="loading">
      <MoonLoading class="mx-auto" />
    </span>
    <slot />
  </Primitive>
</template>
