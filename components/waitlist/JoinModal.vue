<template>
  <Dialog :open="open">
    <DialogTrigger class="pointer-events-auto" as-child>
      <Button
        @click="openDialog"
        :variant="buttonType"
        class="px-6 py-3 mt-3 text-xl font-medium rounded-md pointer-events-auto w-52 lg:self-start disabled:cursor-not-allowed"
      >
        {{ waitingText }}
      </Button>
    </DialogTrigger>

    <DialogContent :disable-outside-pointer-events="true" :trapFocus="true">
      <DialogClose
        @click="open = false"
        class="absolute end-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <X class="w-4 h-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
      <DialogHeader :dir="localeProperties.dir">
        <DialogTitle>{{ $t("modal.header") }}</DialogTitle>
        <Form
          id="sabrListForm"
          class="space-y-6"
          :validation-schema="schema"
          @submit="submitHandler"
        >
          <FormField name="email" v-slot="{ componentField }">
            <FormItem v-auto-animate>
              <FormLabel>
                {{ $t("modal.email") }}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  :placeholder="$t('modal.placeholder')"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
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
        <DialogDescription>
          <p>
            {{ $t("modal.privacy") }}
            <NuxtLink to="/privacy" class="underline cursor-pointer">{{
              $t("modal.policy")
            }}</NuxtLink>
          </p>
        </DialogDescription>

        <DialogFooter>
          <Button :loading="loading" form="sabrListForm" type="submit">{{
            $t("modal.join")
          }}</Button>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-vue-next";
import { useApiFetch } from "~/composables/useApiFetch";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const { $posthog } = useNuxtApp();

defineProps({
  waitingText: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String as PropType<
      | "default"
      | "link"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | null
      | undefined
    >,
    required: false,
    default: null,
  },
});

const open = ref(false);
const loading = ref(false);
const emitter = useEmitter();
const { localeProperties, t } = useI18n();

function openDialog() {
  open.value = true;
  $posthog()?.capture("waitlist-open");
}

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
    $posthog()?.capture("waitlist-suspect", { values });
    emitter.emit("error", {
      title: t("modal.suspicious"),
    });
    return;
  }
  const { error, pending } = await useApiFetch("waitlist", {
    method: "POST",
    body: JSON.stringify({ email: values?.email }),
  });

  if (!error.value) {
    $posthog()?.capture("waitlist-success", { email: values.email });
    emitter.emit("success", {
      title: t("modal.success"),
    });
    open.value = false;
    // TODO: add a message that confirms the user has been added to the waitlist when they are already on it
  } else {
    $posthog()?.capture("waitlist-failure", {
      email: values.email,
      error: error.value,
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
