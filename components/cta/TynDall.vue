<template>
  <main class="w-full h-full">
    <TyndallEffect
      class="min-h-screen bg-gradient-to-br dark:from-black/50 dark:to-white/30 from-white to-orange-300/50"
    >
      <div class="flex flex-col items-center w-full px-5 transform">
        <!-- <Badge>Stay informed</Badge> -->

        <h1
          class="text-4xl ~max-w-sm/3xl font-bold tracking-tight text-center bg-gradient-to-br dark:from-slate-200/90 dark:via-slate-50 dark:to-white from-slate-950/90 via-slate-950 to-black bg-clip-text md:text-6xl"
        >
          This is your sign. It's time to get back on track.
        </h1>

        <div
          class="flex w-full ~max-w-sm/2xl mx-auto flex-col items-center justify-center ~gap-2/4 align-middle md:flex-row ~mt-8/12"
        >
          <Input
            ref="emailInput"
            v-model="email"
            :placeholder="$t('modal.placeholder')"
            class="w-full"
          />
          <Button class="z-10 w-full text-lg font-medium">
            {{ $t("waiting.waitingExpand") }}
          </Button>
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
const isDark = useDark();

const emailInput = ref<HTMLInputElement | null>(null);

const email = ref("");

defineExpose({
  emailInput,
});
</script>
