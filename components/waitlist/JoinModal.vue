<template>
  <Dialog>
    <DialogTrigger class="pointer-events-auto" as-child>
      <Button
        :variant="buttonType"
        class="px-6 py-3 mt-3 text-xl font-medium rounded-md pointer-events-auto w-52 lg:self-start disabled:cursor-not-allowed"
      >
        {{ waitingText }}
      </Button>
    </DialogTrigger>

    <DialogContent :disable-outside-pointer-events="true" :trapFocus="true">
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
          <Button form="sabrListForm" type="submit">{{
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
import { useApiFetch } from "~/composables/useApiFetch";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

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

const emitter = useEmitter();
const { localeProperties, t } = useI18n();

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
  if (values.username) {
    emitter.emit("error", {
      title: t("modal.suspicious"),
    });
    return;
  }
  const { error, pending } = await useApiFetch("waitlist", {
    method: "POST",
    body: JSON.stringify(values?.email),
  });

  if (!error.value) {
    emitter.emit("success", {
      title: t("modal.success"),
    });
  }
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
