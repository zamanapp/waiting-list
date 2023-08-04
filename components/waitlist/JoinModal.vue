<template>
  <button
    ref="expandableElement"
    class="px-6 py-3 text-xl font-normal text-white bg-black rounded-md dark:text-slate-200 w-fit disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-700"
    @click="isOpen = true"
  >
    <TextExpander
      class="text-2xl lg:text-xl"
      :text="$t('waiting.waiting')"
      :expanded-text="$t('waiting.waitingExpand')"
      :expand="expand"
    />
  </button>
  <UModal v-model="isOpen">
    <UCard>
      <FormKit
        type="form"
        id="login"
        v-model="identity"
        submit-label="Login"
        @submit="submitHandler"
        :actions="false"
      >
        <div class="flex items-start w-full">
          <FormKit
            type="email"
            name="email"
            :sectionsSchema="{
              label: { $el: null, children: [] },
            }"
            :placeholder="$t('modal.email')"
            :label="$t('modal.email')"
            validation="required|email"
            :classes="{
              outer: 'w-2/3 mx-2 my-0',
            }"
          />
          <FormKit
            type="submit"
            :classes="{
              outer: 'grow my-0',
              wrapper: '$reset my-0',
            }"
          >
            <div class="flex justify-center align-top">
              <MoonLoading v-if="loading" />
              <div v-else>{{ $t("modal.join") }}</div>
            </div>
          </FormKit>
        </div>
      </FormKit>
      <p>
        {{ $t("modal.privacy") }}
        <RouterLink to="/privacy" class="underline cursor-pointer">{{
          $t("modal.policy")
        }}</RouterLink>
      </p>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { useApiFetch } from "~/composables/useApiFetch";

const emitter = useEmitter();
const isOpen = ref(false);

const expand = ref(false);

const expandableElement = ref();
const isHovered = useElementHover(expandableElement);

watch(isHovered, () => {
  expand.value = isHovered.value;
});

const identity = ref({
  email: "",
});

let loading = ref(false);

const submitHandler = async () => {
  const { error, pending } = await useApiFetch("waitlist", {
    method: "POST",
    body: JSON.stringify(identity.value),
  });

  loading = pending;

  if (!error.value) {
    emitter.emit("success", "Successfully joined the waiting list");
    isOpen.value = false;
  }
};
</script>
