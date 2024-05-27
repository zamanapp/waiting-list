<template>
  <Toaster position="top-right" rich-colors />
</template>

<script lang="ts" setup>
import { Toaster, toast } from "vue-sonner";
import type { ExternalToast } from "~/composables/useEmitter";
import { errorsMap } from "~/utils/constants/Errors";

interface NotificationPayload {
  title: string;
  options?: ExternalToast;
}

const emitter = useEmitter();

emitter.on("info", (payload: NotificationPayload) => {
  toast(payload.title, payload.options);
});

emitter.on("success", (payload: NotificationPayload) => {
  toast.success(payload.title, payload.options);
});

emitter.on("warning", (payload: NotificationPayload) => {
  toast.warning(payload.title, payload.options);
});

emitter.on("error", (payload: NotificationPayload) => {
  // check if the error has a friendlier message
  const friendlierMessage = errorsMap.has(payload.title)
    ? errorsMap.get(payload.title)
    : payload.title;
  toast.error(friendlierMessage!, payload.options);
});
</script>
