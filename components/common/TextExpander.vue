<template>
  <div class="inline-flex items-center justify-center px-1">
    <span class="px-2">&nbsp;</span>
    <span class="transition-all ease-linear">{{ content }}</span>
    <span class="px-2">&nbsp;</span>
  </div>
</template>

<script lang="ts">
import type { Ref } from "vue";

const propsConfig = {
  text: {
    type: String,
    required: true,
  },
  expandedText: {
    type: String,
    required: true,
  },
  expand: {
    type: Boolean,
    required: false,
    default: false,
  },
};
</script>

<script setup lang="ts">
// https://codesandbox.io/s/flamboyant-haze-32r9jg?file%5C=/src/App.js&file=/src/ScrambleText.js
const props = defineProps(propsConfig);
const firstInterval: Ref<NodeJS.Timeout | null> = ref(null);
const secondInterval: Ref<NodeJS.Timeout | null> = ref(null);
const speed = ref(30);
const { locale } = useI18n();

function clearIntervals() {
  if (secondInterval.value) {
    clearInterval(secondInterval.value);
    secondInterval.value = null;
  }
  if (firstInterval.value) {
    clearInterval(firstInterval.value);
    firstInterval.value = null;
  }
}

function doExpand(state: boolean) {
  clearIntervals();
  if (state) {
    const firstEnd = computed(() => content.value?.length === 0);
    const secondEnd = computed(
      () => content.value?.length === fullContent.value?.length
    );
    const increment = ref(0);
    firstInterval.value = setInterval(() => {
      content.value = content.value?.slice(0, -1);
      if (firstEnd.value && firstInterval.value) {
        clearInterval(firstInterval.value);
        firstInterval.value = null;
        secondInterval.value = setInterval(() => {
          content.value =
            content.value + fullContent.value!.charAt(increment.value);
          increment.value++;
          if (secondEnd.value && secondInterval.value) {
            clearInterval(secondInterval.value);
            secondInterval.value = null;
          }
        }, speed.value);
      }
    }, speed.value);
  } else {
    const firstEnd = computed(() => content.value?.length === 0);
    const secondEnd = computed(
      () => content.value?.length === retractedContent.value?.length
    );
    const increment = ref(0);
    firstInterval.value = setInterval(() => {
      content.value = content.value?.slice(0, -1);
      if (firstEnd.value && firstInterval.value) {
        clearInterval(firstInterval.value);
        firstInterval.value = null;
        secondInterval.value = setInterval(() => {
          content.value =
            content.value + retractedContent.value!.charAt(increment.value);
          increment.value++;
          if (secondEnd.value && secondInterval.value) {
            clearInterval(secondInterval.value);
            secondInterval.value = null;
          }
        }, speed.value);
      }
    }, speed.value);
  }
}

const fullContent = toRef(props, "expandedText");
const retractedContent = toRef(props, "text");

const content = ref(retractedContent.value);

watch(
  locale,
  () => {
    content.value = props.expand ? fullContent.value : retractedContent.value;
  },
  { flush: "post" }
);
watch(
  () => props.expand,
  (v) => {
    doExpand(v);
  }
);
</script>
