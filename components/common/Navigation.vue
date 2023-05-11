<template>
  <nav class="flex justify-between mx-6 items-center">
    <NuxtLink class="text-5xl" to="/">*</NuxtLink>
    <div class="flex gap-3">
      <button class="capitalize">{{ mode }}</button>
      <button>English</button>
      <button>Waitlist</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const mode = useColorMode(); // Ref<'dark' | 'light'>
</script>
