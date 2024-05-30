<template>
  <ContentDoc :path="localePath('/privacy-policy')" />
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>
