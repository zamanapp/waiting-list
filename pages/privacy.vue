<template>
  <div class="flex flex-col items-center pt-24 pb-12">
    <ContentDoc
      class="prose dark:prose-invert"
      :path="localePath('/privacy')"
    />
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>
