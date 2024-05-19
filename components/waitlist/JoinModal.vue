<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button
        :variant="buttonType"
        class="px-6 py-3 mt-6 text-xl font-normal rounded-md w-52 md:self-end lg:self-start disabled:cursor-not-allowed"
      >
        {{ waitingText }}
      </Button>
    </DialogTrigger>

    <DialogContent :disable-outside-pointer-events="true" :trapFocus="true">
      <DialogHeader>
        <DialogTitle>Get notified when we launch</DialogTitle>
        <form id="sabrListForm" class="space-y-6" @submit="submitHandler">
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
        </form>
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

let loading = ref(false);

const schema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),
  })
);

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const submitHandler = handleSubmit(async (values) => {
  console.log("submitHandler");
  console.log(values);
  const { error, pending } = await useApiFetch("waitlist", {
    method: "POST",
    body: JSON.stringify(values?.email),
  });

  loading = pending;

  if (!error.value) {
    emitter.emit("success", {
      title: "You have been added to the patently waiting!",
    });
  }
});
</script>
