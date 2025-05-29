<template>
  <section class="relative w-full h-full bg-black">
    <TyndallEffect
      class="min-h-screen bg-gradient-to-br from-black/50 to-slate-900/30"
      streak-color="rgb(100, 116, 139)"
    >
      <div
        class="absolute flex flex-col items-center w-full px-5 transform -translate-x-1/2 top-48 left-1/2"
      >
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Icon name="lucide:moon" class="w-4 h-4 text-slate-400 me-2" />
          <span class="text-sm font-medium text-white/90 font-main"
            >Coming Soon</span
          >
        </div>

        <!-- Main Headline -->
        <h1
          class="mt-8 text-4xl font-medium tracking-tight text-center text-white md:text-6xl max-w-5xl font-main"
        >
          Join the revolution in<br />
          <span class="text-slate-400"> Islamic productivity </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="mt-6 text-xl text-white/70 max-w-3xl text-center leading-relaxed font-main"
        >
          Be among the first to experience the world's first Hijri-native
          productivity suite. Your spiritual journey deserves technology that
          understands your faith.
        </p>

        <!-- Stats -->
        <div
          class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl w-full"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2 font-main">
              2,847
            </div>
            <div class="text-sm text-white/60 font-main">Muslims waiting</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2 font-main">6</div>
            <div class="text-sm text-white/60 font-main">
              Integrated widgets
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2 font-main">100%</div>
            <div class="text-sm text-white/60 font-main">
              Privacy guaranteed
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="z-10 mt-12">
          <JoinModal
            :waiting-text="$t('waiting.waiting')"
            button-type="default"
            class="bg-white text-black hover:bg-slate-100 font-semibold px-8 py-4 text-lg h-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-main"
          />
        </div>

        <!-- Supporting Text -->
        <div class="mt-8 text-center">
          <p class="text-white/60 text-sm font-main">
            ✨ Be among the first to experience Islamic productivity redefined
          </p>
          <p class="text-white/50 text-xs mt-2 font-main">
            No spam, ever. Your email is safe with us.
          </p>
        </div>

        <!-- Simple Features List -->
        <div
          class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full"
        >
          <div
            class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div class="flex items-center gap-3">
              <Icon name="lucide:calendar" class="w-5 h-5 text-white" />
              <span class="text-white font-medium font-main"
                >Native Hijri calendar support</span
              >
            </div>
          </div>

          <div
            class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div class="flex items-center gap-3">
              <Icon name="lucide:clock" class="w-5 h-5 text-white" />
              <span class="text-white font-medium font-main"
                >Time-aware Islamic deeds</span
              >
            </div>
          </div>

          <div
            class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div class="flex items-center gap-3">
              <Icon name="lucide:target" class="w-5 h-5 text-white" />
              <span class="text-white font-medium font-main"
                >Islamic habit tracking</span
              >
            </div>
          </div>

          <div
            class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div class="flex items-center gap-3">
              <Icon name="lucide:shield" class="w-5 h-5 text-white" />
              <span class="text-white font-medium font-main"
                >Privacy-first design</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Particles Effect -->
      <template #particles>
        <ParticlesEffect
          id="cta-particles"
          :density="100"
          :size="1"
          :min-size="0.3"
          :speed="0.8"
          :min-speed="0.1"
          :opacity="0.6"
          :min-opacity="0.1"
          color="#ffffff"
          background="transparent"
          :opacity-speed="1.5"
          :options="{}"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </section>
</template>

<script setup lang="ts">
import TyndallEffect from "~/components/cta/TyndallEffect.vue";
import ParticlesEffect from "~/components/cta/ParticlesEffect.vue";
import JoinModal from "~/components/waitlist/JoinModal.vue";
import { Icon } from "@iconify/vue";
</script>
