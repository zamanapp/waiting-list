<script lang="ts" setup>
import type { CalendarHeadingProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { CalendarHeading, useForwardProps } from "radix-vue";
import { computed } from "vue";

const props = defineProps<
  CalendarHeadingProps & { class?: HTMLAttributes["class"] }
>();

const slots = defineSlots<{
  default: (props: { headingValue: string }) => any;
}>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const { fixHijriCalendarHeading } = useHijriCalendarFix();
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    :class="cn('text-sm font-medium', props.class)"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      {{ fixHijriCalendarHeading(headingValue) }}
    </slot>
  </CalendarHeading>
</template>
