<script setup lang="ts">
import type { NuxtError } from "#app";

const { width } = useWindowSize();

const size = (20 * width.value) / 100;

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="flex flex-col items-center justify-center w-full h-screen"
      v-if="error?.statusCode === 404"
    >
      <h2 class="w-full font-medium text-center text-9xl">The year is</h2>
      <h1 class="inline-flex items-center leading-none error">
        4<MoonLoading :line-weight="14" :size="size" />4
      </h1>
      <p class="text-xl italic text-gray-600">
        it seems that a glitch in the time space continuum has occurred.
      </p>
      <NuxtLink
        class="px-6 py-3 m-3 text-xl text-white bg-black rounded-md"
        to="/"
        >Go back to {{ new Date().getFullYear() }}</NuxtLink
      >
    </div>
    <div
      v-else
      class="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <p class="text-3xl font-semibold">{{ error?.statusCode }}</p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          An Error Occurred
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          It seems that you have encountered an error. Please try again later.
        </p>
        <div class="flex items-center justify-center mt-10 gap-x-6">
          <NuxtLink
            to="/"
            class="px-6 py-3 m-3 text-xl text-white bg-black rounded-md"
            >Go back home</NuxtLink
          >
        </div>
        <pre
          v-if="error?.message"
          class="flex w-full py-3 mt-3 text-sm text-red-500 text-start"
        >
          {{ error.message }}
        </pre>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.error {
  font-size: 30vw;
}
</style>
