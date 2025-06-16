<template>
  <main class="w-full h-full">
    <TyndallEffect
      class="min-h-screen bg-gradient-to-br dark:from-slate-950 dark:to-white/25 from-white to-slate-300/40"
    >
      <div class="flex flex-col items-center w-full px-5 transform">
        <!-- <Badge>Stay informed</Badge> -->

        <h1
          class="text-4xl ~max-w-sm/3xl font-bold tracking-tight text-center bg-gradient-to-br dark:from-slate-200/90 dark:via-slate-50 dark:to-white from-slate-950/90 via-slate-950 to-black bg-clip-text md:text-6xl"
        >
          {{ $t("cta.title") }}
        </h1>

        <div
          class="flex w-full ~max-w-sm/2xl mx-auto flex-col items-center justify-center gap-4 align-middle md:flex-row ~mt-8/12"
        >
          <Form
            id="sabrListForm"
            class="w-full space-y-6"
            :validation-schema="schema"
            @submit="submitHandler"
          >
            <FormField name="email" v-slot="{ componentField }">
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    ref="emailInput"
                    :placeholder="$t('modal.placeholder')"
                    class="w-full h-12 ring ring-slate-300/20 dark:ring-slate-300/10"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage class="absolute px-2 dark:text-red-300" />
              </FormItem>
            </FormField>

            <FormField name="username" v-slot="{ componentField }">
              <FormItem v-auto-animate class="username">
                <FormLabel class="username"> Username </FormLabel>
                <FormControl>
                  <Input
                    class="username"
                    type="text"
                    placeholder="Username"
                    v-bind="componentField"
                    tabindex="-1"
                    autocomplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </Form>

          <GlassButton
            :color="isDark ? '#fff' : '#000'"
            class="z-10 w-full mt-4 text-lg font-medium md:mt-0"
            form="sabrListForm"
            type="submit"
          >
            <span
              class="mx-2 transition-all duration-300 transform invert"
              v-show="loading"
            >
              <MoonLoading class="mx-auto" />
            </span>
            {{ " " }} {{ $t("waiting.earlyAccess") }}
          </GlassButton>
        </div>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          :size="1.5"
          :color="isDark ? '#fff' : '#f97316'"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
const isDark = useDark();

const emailInput = ref<HTMLInputElement | null>(null);

const loading = ref(false);

defineExpose({
  emailInput,
});

const { $clientPosthog, $serverPosthog } = useNuxtApp();
let posthogClient = null;

if (import.meta.server) {
  posthogClient = $serverPosthog;
} else {
  posthogClient = $clientPosthog;
}

const { localeProperties, t } = useI18n();
const emitter = useEmitter();

const schema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: t("modal.required"),
      })
      .email(t("modal.error")),
    username: z.string().optional(),
  })
);

const submitHandler = async (values: any) => {
  loading.value = true;
  if (values.username) {
    posthogClient?.capture("waitlist-suspect", { values });
    emitter.emit("error", {
      title: t("modal.suspicious"),
    });
    return;
  }
  const { success, message } = await $fetch("/api/sabirin", {
    method: "POST",
    body: JSON.stringify({
      email: values?.email,
      locale: localeProperties.value.code,
    }),
  });

  if (success) {
    posthogClient?.capture("waitlist-success", { email: values.email });
    if (message === "You are already in the waiting list") {
      emitter.emit("success", {
        title: t("modal.alreadyOnList"),
      });
      posthogClient?.capture("waitlist-success-repeat", {
        email: values.email,
      });
    } else {
      emitter.emit("success", {
        title: t("modal.success"),
      });
      posthogClient?.capture("waitlist-success-unique", {
        email: values.email,
      });
    }

    // TODO: add a message that confirms the user has been added to the waitlist when they are already on it
  } else {
    posthogClient?.capture("waitlist-failure", {
      email: values.email,
      error: message,
    });
    emitter.emit("error", {
      title: t("modal.somethingWentWrong"),
    });
  }
  loading.value = false;
};
</script>

<style>
.username {
  margin: 0;
  padding: 0;
  position: absolute;
  left: -999999999px;
}
</style>
