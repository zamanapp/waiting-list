<template>
  <Notifications />
  <NuxtLoadingIndicator color="black" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { notify } from "notiwind";
import { errorsMap } from "./utils/constants/Errors";

const emitter = useEmitter();

emitter.on("error", (message: string) => {
  // check if the error has a friendlier message
  const friendlierMessage = errorsMap.has(message)
    ? errorsMap.get(message)
    : message;
  notify(
    {
      group: "error",
      title: "Error",
      text: friendlierMessage,
    },
    4000
  ); // 4s
});

emitter.on("success", (message: string) => {
  notify(
    {
      group: "success",
      title: "Success",
      text: message,
    },
    4000
  ); // 4s
});

function doSuccess() {
  emitter.emit("success", "Successful message");
}
</script>

<style>
html,
body,
#__nuxt {
  @apply h-full dark:bg-slate-800 dark:text-slate-400;
}
html[dir="rtl"] {
  font-size: 18px;
}
/* body {
  overflow: hidden;
} */
</style>
