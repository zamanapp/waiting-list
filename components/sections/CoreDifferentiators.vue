<template>
  <section class="px-6 py-24 bg-slate-50 dark:bg-slate-800">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2
          class="mb-6 text-4xl font-bold md:text-5xl text-slate-900 dark:text-white font-main"
        >
          What makes Zaman different
        </h2>
        <p
          class="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 font-main"
        >
          Four fundamental innovations that set us apart from every other
          productivity app
        </p>
      </div>

      <!-- Differentiators Grid -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- 1. Native Hijri Support -->
        <div
          class="p-8 bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-700"
        >
          <div class="flex items-start gap-4 mb-6">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-slate-900 dark:bg-white rounded-xl"
            >
              <Icon
                icon="lucide:calendar"
                class="w-6 h-6 text-white dark:text-slate-900"
              />
            </div>
            <div>
              <h3
                class="text-2xl font-bold text-slate-900 dark:text-white font-main"
              >
                World's First Hijri-Native Calendar
              </h3>
              <p class="mt-2 text-slate-600 dark:text-slate-300 font-main">
                Built from the ground up with Islamic time. Not a Gregorian
                calendar with Islamic dates slapped on.
              </p>
            </div>
          </div>

          <!-- Feature Demo -->
          <div
            class="p-4 border bg-slate-50 dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700"
          >
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div
                  class="text-sm text-slate-500 dark:text-slate-400 font-main"
                >
                  Recurrence Rules
                </div>
                <div
                  class="p-2 mt-1 font-mono text-xs rounded bg-slate-200 dark:bg-slate-700"
                >
                  FREQ=YEARLY;BYMONTH=9
                </div>
              </div>
              <div>
                <div
                  class="text-sm text-slate-500 dark:text-slate-400 font-main"
                >
                  Moon Sighting
                </div>
                <div class="text-2xl">🌙</div>
                <div
                  class="text-xs text-slate-600 dark:text-slate-300 font-main"
                >
                  Auto-adjust
                </div>
              </div>
              <div>
                <div
                  class="text-sm text-slate-500 dark:text-slate-400 font-main"
                >
                  Precision
                </div>
                <div
                  class="font-semibold text-slate-900 dark:text-white font-main"
                >
                  Minute-level
                </div>
                <div
                  class="text-xs text-slate-600 dark:text-slate-300 font-main"
                >
                  accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Time-Aware Deeds -->
        <div
          class="p-8 bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-700"
        >
          <div class="flex items-start gap-4 mb-6">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-slate-900 dark:bg-white rounded-xl"
            >
              <Icon
                icon="lucide:clock-3"
                class="w-6 h-6 text-white dark:text-slate-900"
              />
            </div>
            <div>
              <h3
                class="text-2xl font-bold text-slate-900 dark:text-white font-main"
              >
                Time-Aware Islamic Deeds
              </h3>
              <p class="mt-2 text-slate-600 dark:text-slate-300 font-main">
                Discover what to do and when. Every deed comes with timing,
                context, and authentic sources.
              </p>
            </div>
          </div>

          <!-- Feature Demo -->
          <div
            class="p-4 border bg-slate-50 dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700"
          >
            <div class="space-y-3">
              <div
                class="p-3 bg-white border rounded-lg dark:bg-slate-700 border-slate-200 dark:border-slate-600"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="font-medium text-slate-900 dark:text-white font-main"
                    >Duha Prayer</span
                  >
                  <span
                    class="text-xs text-slate-500 dark:text-slate-400 font-main"
                    >Now</span
                  >
                </div>
                <div
                  class="mt-1 text-xs text-slate-600 dark:text-slate-300 font-main"
                >
                  ⏰ After sunrise • 📚 2-12 rakats • 🔗 Sources included
                </div>
              </div>
              <div class="p-3 rounded-lg bg-slate-200 dark:bg-slate-600">
                <div class="flex items-center justify-between">
                  <span
                    class="font-medium text-slate-900 dark:text-white font-main"
                    >Friday Khutbah</span
                  >
                  <span
                    class="text-xs text-slate-500 dark:text-slate-400 font-main"
                    >2h 30m</span
                  >
                </div>
                <div
                  class="mt-1 text-xs text-slate-600 dark:text-slate-300 font-main"
                >
                  📅 Add to calendar • ✅ Track attendance • 📖 Learn etiquette
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Islamic Context Habits -->
        <div
          class="p-8 bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-700"
        >
          <div class="flex items-start gap-4 mb-6">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-slate-900 dark:bg-white rounded-xl"
            >
              <Icon
                icon="lucide:target"
                class="w-6 h-6 text-white dark:text-slate-900"
              />
            </div>
            <div>
              <h3
                class="text-2xl font-bold text-slate-900 dark:text-white font-main"
              >
                Islamic-Contextualized Habit Tracking
              </h3>
              <p class="mt-2 text-slate-600 dark:text-slate-300 font-main">
                Pre-built Islamic habit sets with intelligent insights that
                understand your faith.
              </p>
            </div>
          </div>

          <!-- Feature Demo -->
          <div
            class="p-4 border bg-slate-50 dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700"
          >
            <div class="space-y-4">
              <!-- Habit Views -->
              <div class="flex gap-2">
                <button
                  class="px-3 py-1 text-xs text-white rounded bg-slate-900 dark:bg-white dark:text-slate-900 font-main"
                >
                  Daily Prayers
                </button>
                <button
                  class="px-3 py-1 text-xs rounded bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 font-main"
                >
                  Rawatib
                </button>
                <button
                  class="px-3 py-1 text-xs rounded bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 font-main"
                >
                  Athkar
                </button>
              </div>

              <!-- Insight -->
              <div class="p-3 rounded-lg bg-slate-200 dark:bg-slate-700">
                <div
                  class="mb-1 text-sm font-medium text-slate-900 dark:text-white font-main"
                >
                  💡 Pattern Detected
                </div>
                <div
                  class="text-xs text-slate-600 dark:text-slate-300 font-main"
                >
                  You read Quran 40% more on days when you wake up for Fajr
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Dunya-Akhirah Integration -->
        <div
          class="p-8 bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-700"
        >
          <div class="flex items-start gap-4 mb-6">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-slate-900 dark:bg-white rounded-xl"
            >
              <Icon
                icon="lucide:shuffle"
                class="w-6 h-6 text-white dark:text-slate-900"
              />
            </div>
            <div>
              <h3
                class="text-2xl font-bold text-slate-900 dark:text-white font-main"
              >
                Seamless Dunya-Akhirah Planning
              </h3>
              <p class="mt-2 text-slate-600 dark:text-slate-300 font-main">
                Every widget talks to each other. Complete a deed, it
                auto-tracks in habits. Schedule Quran, it syncs everywhere.
              </p>
            </div>
          </div>

          <!-- Feature Demo -->
          <div
            class="p-4 border bg-slate-50 dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700"
          >
            <div class="space-y-3">
              <!-- Connection Flow -->
              <div class="flex items-center gap-2 text-sm font-main">
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Read Surah Al-Kahf</span
                >
                <Icon
                  icon="lucide:arrow-right"
                  class="w-4 h-4 text-slate-500"
                />
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Opens Wird</span
                >
              </div>
              <div class="flex items-center gap-2 text-sm font-main">
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Complete Prayer</span
                >
                <Icon
                  icon="lucide:arrow-right"
                  class="w-4 h-4 text-slate-500"
                />
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Auto-tracked</span
                >
              </div>
              <div class="flex items-center gap-2 text-sm font-main">
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Schedule Quran</span
                >
                <Icon
                  icon="lucide:arrow-right"
                  class="w-4 h-4 text-slate-500"
                />
                <span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-600"
                  >Syncs Calendar</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
