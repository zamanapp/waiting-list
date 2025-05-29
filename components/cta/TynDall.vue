<template>
  <main class="w-full h-full">
    <TyndallEffect
      class="min-h-screen bg-gradient-to-br dark:from-black/50 dark:to-white/30 from-white/50 to-orange-300/30"
    >
      <div
        class="absolute flex flex-col items-center w-full px-5 transform -translate-x-1/2 top-48 left-1/2"
      >
        <Badge>Stay informed</Badge>

        <h1
          class="mt-8 text-4xl font-bold tracking-tight text-center text-transparent bg-gradient-to-br dark:from-slate-200/90 dark:via-slate-50 dark:to-white from-slate-950/90 via-slate-950 to-black bg-clip-text md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>

        <Button class="z-10 mt-12 text-lg font-medium">
          {{ $t("waiting.waitingExpand") }}
        </Button>
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
</script>
