<template>
  <main class="w-full h-full bg-black">
    <TyndallEffect
      class="min-h-screen bg-gradient-to-br from-black/50 to-white/30"
    >
      <div
        class="absolute flex flex-col items-center w-full px-5 transform -translate-x-1/2 top-48 left-1/2"
      >
        <Badge>New Version 1.0</Badge>

        <h1
          class="mt-8 text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-stone-200/90 via-stone-50 to-white bg-clip-text md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>

        <Button class="z-10 w-40 mt-12"> Start for free </Button>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          :size="1.5"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import TyndallEffect from "@/components/cta/TyndallEffect.vue";
import ParticlesEffect from "@/components/cta/ParticlesEffect.vue";
// import GlassBorderButton from "@/components/cta/GlassBorderButton.vue";
</script>
