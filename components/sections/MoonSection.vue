<template>
  <section
    class="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
  >
    <!-- Content Grid -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen"
      >
        <!-- Text Content -->
        <div class="lg:col-span-5 text-white space-y-8">
          <!-- Headline -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight font-main">
              Time as Allah intended
            </h2>

            <p class="text-xl text-slate-300 leading-relaxed font-main">
              Every second connects you to the cosmic order. Watch time unfold
              in perfect harmony with Islamic tradition.
            </p>
          </div>

          <!-- Key Points -->
          <div class="space-y-6">
            <div
              class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 class="text-lg font-semibold text-white mb-2 font-main">
                Following Prophetic Tradition
              </h3>
              <p class="text-slate-300 text-sm font-main">
                The same moon that guided 1,400 years of Islamic civilization.
                Connect with authentic Islamic time.
              </p>
            </div>

            <div
              class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 class="text-lg font-semibold text-white mb-2 font-main">
                Live Islamic Calendar
              </h3>
              <p class="text-slate-300 text-sm font-main">
                Real-time visualization of Islamic time - seconds, minutes,
                hours, days, and months in perfect rotation.
              </p>
            </div>
          </div>
        </div>

        <!-- Moon Animation -->
        <div class="lg:col-span-7 flex items-center justify-center">
          <div class="relative">
            <!-- Moon Component -->
            <div class="relative z-10">
              <Moon
                :moon-size="moonSize"
                :line-weight="16"
                :calendar="Calendars.UMM_AL_QURA"
                class="mx-auto origin-center pointer-events-none"
                show-guide
              />
            </div>

            <!-- Time Indicators -->
            <div
              class="absolute bottom-0 start-1/2 transform -translate-x-1/2 translate-y-8 lg:translate-y-16"
            >
              <div
                class="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20"
              >
                <div class="text-center">
                  <div class="text-white/60 text-xs mb-2 font-main">
                    Live Islamic Calendar
                  </div>
                  <div
                    class="flex items-center gap-4 text-white/80 text-sm font-main"
                  >
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-white rounded-full opacity-60" />
                      <span>Seconds</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-white rounded-full opacity-80" />
                      <span>Hours</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-white rounded-full opacity-90" />
                      <span>Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Quote -->
      <div
        class="absolute bottom-12 start-1/2 transform -translate-x-1/2 text-center"
      >
        <div
          class="bg-white/5 backdrop-blur-sm rounded-xl px-8 py-6 border border-white/10 max-w-2xl"
        >
          <blockquote class="text-white/90 text-lg italic mb-4 font-main">
            "And We made from them leaders guiding by Our command when they were
            patient and were certain of Our signs."
          </blockquote>
          <cite class="text-white/60 text-sm font-main">Quran 32:24</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendars } from "~/types/Calendars";

// Composables
const { width } = useWindowSize();

// Moon size calculation for responsive display
const padding = ref(48);
const moonSize = computed(() => {
  const screenWidth = width.value;
  if (screenWidth < 768) {
    return Math.min(screenWidth - padding.value * 2, 280);
  } else if (screenWidth < 1024) {
    return Math.min(screenWidth * 0.4, 350);
  } else {
    return Math.min(screenWidth * 0.35, 420);
  }
});
</script>
