<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      />

      <!-- Main Content -->
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full me-3 animate-pulse" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Now in development
          </span>
        </div>

        <!-- Hero Headline -->
        <h1
          class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
        >
          Manage your time around
          <span
            class="bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent"
          >
            what matters
          </span>
        </h1>

        <!-- Hero Subtitle -->
        <p
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Manage your deen, schedule, habits, and life — in one place built for
          the everyday Muslim.
        </p>

        <!-- CTA Button -->
        <div class="flex justify-center mb-16">
          <JoinModal
            button-type="default"
            :waiting-text="$t('waiting.waiting')"
            class="text-lg px-8 py-4 h-auto"
          />
        </div>

        <!-- Hero Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          <!-- Large Feature Card - Hijri Calendar -->
          <div
            class="md:col-span-8 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div class="flex items-start justify-between mb-6">
              <div>
                <h3
                  class="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                >
                  World's First Hijri-Native Calendar
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Built-in support for Islamic dates with precision down to the
                  minute
                </p>
              </div>
              <div
                class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center"
              >
                <Icon
                  name="lucide:calendar"
                  class="w-6 h-6 text-gray-600 dark:text-gray-300"
                />
              </div>
            </div>
            <!-- Calendar Placeholder -->
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-xl h-48 flex items-center justify-center"
            >
              <div class="text-center">
                <Icon
                  name="lucide:calendar-days"
                  class="w-16 h-16 text-gray-400 mx-auto mb-3"
                />
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Native Hijri calendar with recurrence rules
                </p>
              </div>
            </div>
          </div>

          <!-- Prayer Times Card -->
          <div
            class="md:col-span-4 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Prayer Times
              </h3>
              <Icon
                name="lucide:clock"
                class="w-5 h-5 text-gray-600 dark:text-gray-300"
              />
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2">
                <span class="text-gray-600 dark:text-gray-300">Fajr</span>
                <span class="font-mono text-gray-900 dark:text-white"
                  >5:24 AM</span
                >
              </div>
              <div
                class="flex justify-between items-center py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3"
              >
                <span class="text-blue-700 dark:text-blue-300 font-medium"
                  >Dhuhr</span
                >
                <span class="font-mono text-blue-900 dark:text-blue-100"
                  >12:13 PM</span
                >
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-gray-600 dark:text-gray-300">Asr</span>
                <span class="font-mono text-gray-900 dark:text-white"
                  >3:45 PM</span
                >
              </div>
              <div
                class="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center"
              >
                Next: Asr in 2h 32m
              </div>
            </div>
          </div>

          <!-- Deeds Widget Card -->
          <div
            class="md:col-span-6 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Time-Aware Deeds
              </h3>
              <Icon
                name="lucide:check-circle"
                class="w-5 h-5 text-gray-600 dark:text-gray-300"
              />
            </div>
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <div>
                  <p class="font-medium text-green-800 dark:text-green-200">
                    Friday Khutbah
                  </p>
                  <p class="text-xs text-green-600 dark:text-green-300">
                    12:00 - 12:45 PM
                  </p>
                </div>
                <Icon name="lucide:circle" class="w-4 h-4 text-green-600" />
              </div>
              <div
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p class="font-medium text-gray-800 dark:text-gray-200">
                    Surah Al-Kahf
                  </p>
                  <p class="text-xs text-gray-600 dark:text-gray-300">
                    Recommended today
                  </p>
                </div>
                <Icon name="lucide:circle" class="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <!-- Habit Tracker Card -->
          <div
            class="md:col-span-6 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Habit Progress
              </h3>
              <Icon
                name="lucide:trending-up"
                class="w-5 h-5 text-gray-600 dark:text-gray-300"
              />
            </div>
            <!-- Progress Grid (Github-style) -->
            <div class="grid grid-cols-7 gap-1 mb-4">
              <div
                v-for="i in 49"
                :key="i"
                :class="[
                  'w-3 h-3 rounded-sm',
                  Math.random() > 0.7
                    ? 'bg-green-500'
                    : Math.random() > 0.5
                    ? 'bg-green-300'
                    : Math.random() > 0.3
                    ? 'bg-green-200'
                    : 'bg-gray-100 dark:bg-gray-700',
                ]"
              />
            </div>
            <div
              class="flex justify-between text-xs text-gray-500 dark:text-gray-400"
            >
              <span>7-week streak</span>
              <span>89% completion</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute top-1/4 start-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 animate-pulse"
      />
      <div
        class="absolute bottom-1/4 end-10 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-10 animate-pulse"
        style="animation-delay: 1s"
      />
    </section>

    <!-- Revolutionary Hook Section -->
    <section class="relative py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 mb-6"
          >
            <Icon name="lucide:zap" class="w-4 h-4 text-orange-500 me-2" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
              >Revolutionary</span
            >
          </div>
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            The first
            <span
              class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
              >Hijri-native</span
            ><br />
            productivity suite
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            While others adapt Gregorian calendars for Islamic use, we built
            everything from the ground up with Islamic time at its core.
          </p>
        </div>

        <!-- Innovation Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <!-- Native Hijri Calendar - Large Card -->
          <div class="lg:col-span-8">
            <div
              class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 h-full"
            >
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
                >
                  <Icon
                    name="lucide:calendar-range"
                    class="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Native Hijri Support
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Precision down to the minute
                  </p>
                </div>
              </div>

              <!-- Calendar Demo -->
              <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h4
                      class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Jumada al-Awwal 1446
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      December 2024
                    </p>
                  </div>
                  <div class="flex items-center gap-2">
                    <button
                      class="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Icon
                        name="lucide:chevron-left"
                        class="w-4 h-4 text-gray-600 dark:text-gray-400"
                      />
                    </button>
                    <button
                      class="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Icon
                        name="lucide:chevron-right"
                        class="w-4 h-4 text-gray-600 dark:text-gray-400"
                      />
                    </button>
                  </div>
                </div>

                <!-- Calendar Grid -->
                <div class="grid grid-cols-7 gap-2 mb-4">
                  <div
                    v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
                    :key="day"
                    class="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2"
                  >
                    {{ day }}
                  </div>
                  <div
                    v-for="date in 35"
                    :key="date"
                    :class="[
                      'aspect-square flex items-center justify-center text-sm rounded-lg',
                      date === 15
                        ? 'bg-blue-500 text-white font-semibold'
                        : date > 5 && date < 30
                        ? 'text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-700'
                        : 'text-gray-400 dark:text-gray-600',
                    ]"
                  >
                    {{ date > 5 ? date - 5 : "" }}
                  </div>
                </div>

                <!-- Event Indicators -->
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Recurring: Every Friday Khutbah</span
                    >
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Annual: Ramadan starts in 3 months</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature Highlights -->
          <div class="lg:col-span-4 space-y-6">
            <!-- Recurrence Rules -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center"
                >
                  <Icon name="lucide:repeat" class="w-5 h-5 text-white" />
                </div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Hijri Recurrence
                </h4>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Create events that repeat every Ramadan, on the 15th of Sha'ban,
                or any Islamic date pattern.
              </p>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <code class="text-xs text-gray-700 dark:text-gray-300">
                  FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=1
                </code>
              </div>
            </div>

            <!-- Moon Sighting -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center"
                >
                  <Icon name="lucide:moon" class="w-5 h-5 text-white" />
                </div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Moon Sighting
                </h4>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Manually adjust dates based on local moon sighting and religious
                authorities.
              </p>
            </div>
          </div>
        </div>

        <!-- Widget Interconnectivity Section -->
        <div
          class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4"
            >
              <Icon name="lucide:network" class="w-4 h-4 text-blue-500 me-2" />
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >Connected Ecosystem</span
              >
            </div>
            <h3
              class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Everything works together
            </h3>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Unlike isolated apps, every action in Zaman connects. Track a
              deed, it appears in your habits. Schedule Quran time, it syncs
              with your calendar.
            </p>
          </div>

          <!-- Connection Flow -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            <!-- Deeds Widget -->
            <div
              class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
            >
              <div
                class="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-3 flex items-center justify-center"
              >
                <Icon name="lucide:check-circle" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Deeds
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Complete Friday prayer
              </p>
            </div>

            <!-- Arrow -->
            <div class="hidden md:flex justify-center">
              <Icon name="lucide:arrow-right" class="w-6 h-6 text-gray-400" />
            </div>

            <!-- Habit Tracker -->
            <div
              class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
            >
              <div
                class="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-3 flex items-center justify-center"
              >
                <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Habits
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Auto-tracked
              </p>
            </div>

            <!-- Arrow -->
            <div class="hidden md:flex justify-center">
              <Icon name="lucide:arrow-right" class="w-6 h-6 text-gray-400" />
            </div>

            <!-- Calendar -->
            <div
              class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
            >
              <div
                class="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center"
              >
                <Icon name="lucide:calendar" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Calendar
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Future events scheduled
              </p>
            </div>
          </div>

          <!-- Connection Examples -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:shuffle" class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Drag & Drop
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Drag deeds directly to your calendar or habit tracker
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:link" class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Smart Linking
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Reading Surah Al-Kahf opens Wird widget automatically
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:zap" class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Auto-Sync
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Quran schedule syncs across Wird, Calendar, and Habits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Time-Aware Living Section -->
    <section class="relative py-24 px-6 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6"
          >
            <Icon name="lucide:clock" class="w-4 h-4 text-blue-500 me-2" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
              >Time-Aware</span
            >
          </div>
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Discover what matters,<br />
            <span
              class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >when it matters</span
            >
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every Islamic practice has its perfect time. Zaman helps you
            discover and act on them at exactly the right moment.
          </p>
        </div>

        <!-- PrayerMeter Demo -->
        <div
          class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-600"
        >
          <div class="text-center mb-8">
            <h3
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              PrayerMeter: Your Islamic Day Timeline
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              A glance at your day, anchored in what matters most
            </p>
          </div>

          <!-- PrayerMeter Timeline -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 mb-6">
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-medium">Today</span> • Jumada al-Awwal 15,
                1446
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                📍 New York, NY
              </div>
            </div>

            <!-- Timeline -->
            <div class="relative">
              <!-- Background line -->
              <div
                class="absolute top-6 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"
              ></div>

              <!-- Prayer markers -->
              <div class="relative flex justify-between items-center">
                <!-- Fajr -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-4 h-4 bg-blue-500 rounded-full mb-2 relative z-10 border-2 border-white dark:border-gray-900"
                  ></div>
                  <div
                    class="text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Fajr
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    5:24
                  </div>
                </div>

                <!-- Sunrise -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-3 h-3 bg-yellow-400 rounded-full mb-2 relative z-10"
                  ></div>
                  <div class="text-xs text-gray-600 dark:text-gray-300">
                    Sunrise
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    6:52
                  </div>
                </div>

                <!-- Dhuhr -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-4 h-4 bg-green-500 rounded-full mb-2 relative z-10 border-2 border-white dark:border-gray-900 animate-pulse"
                  ></div>
                  <div
                    class="text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Dhuhr
                  </div>
                  <div class="text-xs text-green-600 font-semibold">12:13</div>
                </div>

                <!-- Asr -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-4 h-4 bg-orange-500 rounded-full mb-2 relative z-10 border-2 border-white dark:border-gray-900"
                  ></div>
                  <div
                    class="text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Asr
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    3:45
                  </div>
                </div>

                <!-- Maghrib -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-4 h-4 bg-red-500 rounded-full mb-2 relative z-10 border-2 border-white dark:border-gray-900"
                  ></div>
                  <div
                    class="text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Maghrib
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    6:18
                  </div>
                </div>

                <!-- Isha -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-4 h-4 bg-purple-500 rounded-full mb-2 relative z-10 border-2 border-white dark:border-gray-900"
                  ></div>
                  <div
                    class="text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Isha
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    7:41
                  </div>
                </div>
              </div>
            </div>

            <!-- Current time indicator -->
            <div class="mt-4 text-center">
              <div
                class="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full"
              >
                <div
                  class="w-2 h-2 bg-green-500 rounded-full me-2 animate-pulse"
                ></div>
                <span
                  class="text-sm font-medium text-green-700 dark:text-green-300"
                  >Next: Dhuhr in 23 minutes</span
                >
              </div>
            </div>
          </div>

          <!-- Time-based recommendations -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800"
            >
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:sunrise" class="w-4 h-4 text-blue-600" />
                <span
                  class="text-sm font-medium text-blue-700 dark:text-blue-300"
                  >Morning (Duha)</span
                >
              </div>
              <p class="text-xs text-blue-600 dark:text-blue-400">
                Duha prayer time - 2 rakats recommended
              </p>
            </div>
            <div
              class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800"
            >
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:book-open" class="w-4 h-4 text-green-600" />
                <span
                  class="text-sm font-medium text-green-700 dark:text-green-300"
                  >Friday</span
                >
              </div>
              <p class="text-xs text-green-600 dark:text-green-400">
                Surah Al-Kahf reading recommended
              </p>
            </div>
            <div
              class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800"
            >
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:moon" class="w-4 h-4 text-purple-600" />
                <span
                  class="text-sm font-medium text-purple-700 dark:text-purple-300"
                  >Night</span
                >
              </div>
              <p class="text-xs text-purple-600 dark:text-purple-400">
                Tahajjud time begins at 1:30 AM
              </p>
            </div>
          </div>
        </div>

        <!-- Moon Phases & Weather Integration -->
        <div
          class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              In harmony with Allah's creation
            </h3>
            <p class="text-gray-300 max-w-2xl mx-auto">
              Stay connected to the natural rhythms that guide Islamic life
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Moon Phases -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:moon" class="w-10 h-10 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-2">Moon Phases</h4>
              <p class="text-gray-300 text-sm mb-3">
                Track Islamic months and plan your worship
              </p>
              <div class="text-xs text-gray-400">
                Current: Waxing Crescent (Day 4)
              </div>
            </div>

            <!-- Weather Awareness -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:cloud-sun" class="w-10 h-10 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-2">Weather Reminders</h4>
              <p class="text-gray-300 text-sm mb-3">
                Adjust practices based on conditions
              </p>
              <div class="text-xs text-gray-400">
                Rain expected - Indoor alternatives ready
              </div>
            </div>

            <!-- Location Awareness -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:map-pin" class="w-10 h-10 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-2">Location Aware</h4>
              <p class="text-gray-300 text-sm mb-3">
                Accurate times for anywhere you are
              </p>
              <div class="text-xs text-gray-400">
                Traveling? Times update automatically
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Connected Ecosystem Section -->
    <section class="relative py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 mb-6"
          >
            <Icon name="lucide:layers" class="w-4 h-4 text-purple-500 me-2" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
              >Connected Ecosystem</span
            >
          </div>
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Where every action<br />
            <span
              class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              >builds your legacy</span
            >
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your spiritual journey isn't isolated actions—it's a connected
            story. Every deed you track becomes habit data. Every habit feeds
            your insights. Every insight guides your growth.
          </p>
        </div>

        <!-- Ecosystem Flow Visualization -->
        <div
          class="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div class="text-center mb-12">
            <h3
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              The Zaman Flywheel
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              See how one good action creates momentum for the next
            </p>
          </div>

          <!-- Central Flow -->
          <div class="relative max-w-4xl mx-auto">
            <!-- Background connections -->
            <svg
              class="absolute inset-0 w-full h-full"
              viewBox="0 0 400 300"
              fill="none"
            >
              <!-- Curved connection lines -->
              <path
                d="M50 150 Q200 50 350 150"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="5,5"
                class="text-gray-300 dark:text-gray-600"
              />
              <path
                d="M350 150 Q200 250 50 150"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="5,5"
                class="text-gray-300 dark:text-gray-600"
              />
              <path
                d="M200 80 Q300 150 200 220"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="5,5"
                class="text-gray-300 dark:text-gray-600"
              />
              <path
                d="M200 220 Q100 150 200 80"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="5,5"
                class="text-gray-300 dark:text-gray-600"
              />
            </svg>

            <!-- Ecosystem Nodes -->
            <div
              class="relative grid grid-cols-3 gap-8 items-center min-h-[300px]"
            >
              <!-- Deeds (Top Left) -->
              <div
                class="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800"
              >
                <div
                  class="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
                >
                  <Icon name="lucide:check-circle" class="w-6 h-6 text-white" />
                </div>
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2"
                >
                  Deeds
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Complete Friday prayer
                </p>
                <div class="mt-4 space-y-2">
                  <div
                    class="bg-green-100 dark:bg-green-800/30 rounded-lg p-2 text-xs text-green-700 dark:text-green-300"
                  >
                    ✓ Automatically tracked
                  </div>
                  <div
                    class="bg-green-100 dark:bg-green-800/30 rounded-lg p-2 text-xs text-green-700 dark:text-green-300"
                  >
                    📅 Added to calendar
                  </div>
                </div>
              </div>

              <!-- Calendar (Top Right) -->
              <div
                class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800"
              >
                <div
                  class="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
                >
                  <Icon name="lucide:calendar" class="w-6 h-6 text-white" />
                </div>
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2"
                >
                  Calendar
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Schedule Quran time
                </p>
                <div class="mt-4 space-y-2">
                  <div
                    class="bg-blue-100 dark:bg-blue-800/30 rounded-lg p-2 text-xs text-blue-700 dark:text-blue-300"
                  >
                    🕌 Prayer times sync
                  </div>
                  <div
                    class="bg-blue-100 dark:bg-blue-800/30 rounded-lg p-2 text-xs text-blue-700 dark:text-blue-300"
                  >
                    📖 Wird integration
                  </div>
                </div>
              </div>

              <!-- Insights (Center) -->
              <div
                class="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800 row-span-2"
              >
                <div
                  class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                >
                  <Icon name="lucide:brain" class="w-8 h-8 text-white" />
                </div>
                <h4
                  class="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3"
                >
                  Personal Insights
                </h4>
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 text-center mb-4"
                >
                  AI-powered growth guidance
                </p>
                <div class="space-y-3">
                  <div
                    class="bg-purple-100 dark:bg-purple-800/30 rounded-lg p-3"
                  >
                    <div
                      class="text-xs font-medium text-purple-700 dark:text-purple-300 mb-1"
                    >
                      This Week
                    </div>
                    <div class="text-xs text-purple-600 dark:text-purple-400">
                      You're most consistent with Fajr on weekends
                    </div>
                  </div>
                  <div
                    class="bg-purple-100 dark:bg-purple-800/30 rounded-lg p-3"
                  >
                    <div
                      class="text-xs font-medium text-purple-700 dark:text-purple-300 mb-1"
                    >
                      Suggestion
                    </div>
                    <div class="text-xs text-purple-600 dark:text-purple-400">
                      Try reading Quran after Fajr for better retention
                    </div>
                  </div>
                </div>
              </div>

              <!-- Habits (Bottom Left) -->
              <div
                class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800"
              >
                <div
                  class="w-12 h-12 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
                >
                  <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
                </div>
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2"
                >
                  Habits
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Build consistency
                </p>
                <div class="mt-4 space-y-2">
                  <div
                    class="bg-orange-100 dark:bg-orange-800/30 rounded-lg p-2 text-xs text-orange-700 dark:text-orange-300"
                  >
                    📊 Progress tracking
                  </div>
                  <div
                    class="bg-orange-100 dark:bg-orange-800/30 rounded-lg p-2 text-xs text-orange-700 dark:text-orange-300"
                  >
                    🎯 Streak counting
                  </div>
                </div>
              </div>

              <!-- Wird (Bottom Right) -->
              <div
                class="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border-2 border-teal-200 dark:border-teal-800"
              >
                <div
                  class="w-12 h-12 bg-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
                >
                  <Icon name="lucide:book-open" class="w-6 h-6 text-white" />
                </div>
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2"
                >
                  Wird
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Quran progress
                </p>
                <div class="mt-4 space-y-2">
                  <div
                    class="bg-teal-100 dark:bg-teal-800/30 rounded-lg p-2 text-xs text-teal-700 dark:text-teal-300"
                  >
                    📚 Memorization sync
                  </div>
                  <div
                    class="bg-teal-100 dark:bg-teal-800/30 rounded-lg p-2 text-xs text-teal-700 dark:text-teal-300"
                  >
                    📝 Notes to Kenz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cross-Widget Features -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Drag & Drop Integration -->
          <div
            class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:move" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Drag & Drop Everything
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Move actions between widgets seamlessly
                </p>
              </div>
            </div>

            <!-- Drag demonstration -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-3 flex-1"
                  >
                    <div class="flex items-center gap-2">
                      <Icon
                        name="lucide:grip-vertical"
                        class="w-4 h-4 text-gray-400"
                      />
                      <span
                        class="text-sm font-medium text-gray-900 dark:text-white"
                        >Read Surah Al-Mulk</span
                      >
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Before sleep • Daily
                    </div>
                  </div>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-gray-400"
                  />
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Habit Tracker
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div
                    class="bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex-1"
                  >
                    <div class="flex items-center gap-2">
                      <Icon
                        name="lucide:grip-vertical"
                        class="w-4 h-4 text-gray-400"
                      />
                      <span
                        class="text-sm font-medium text-gray-900 dark:text-white"
                        >Tahajjud Session</span
                      >
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      2:00 AM • 30 mins
                    </div>
                  </div>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-gray-400"
                  />
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Calendar
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Smart Linking -->
          <div
            class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:link" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Intelligent Connections
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Widgets communicate automatically
                </p>
              </div>
            </div>

            <!-- Smart linking examples -->
            <div class="space-y-4">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"
                  >
                    <Icon name="lucide:book-open" class="w-4 h-4 text-white" />
                  </div>
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Reading Surah Al-Kahf</span
                  >
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Icon name="lucide:arrow-right" class="w-3 h-3" />
                  <span>Opens Wird widget automatically</span>
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
                  >
                    <Icon name="lucide:clock" class="w-4 h-4 text-white" />
                  </div>
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Prayer time approaching</span
                  >
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Icon name="lucide:arrow-right" class="w-3 h-3" />
                  <span>Suggests relevant deeds & wudu reminder</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Growth Analytics -->
        <div
          class="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 text-white"
        >
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Your spiritual growth, quantified
            </h3>
            <p class="text-purple-200 max-w-2xl mx-auto">
              Track meaningful metrics that matter for your akhirah, not just
              vanity numbers
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Consistency Score -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold">Consistency Score</h4>
                <Icon name="lucide:target" class="w-5 h-5 text-purple-300" />
              </div>
              <div class="text-3xl font-bold mb-2">87%</div>
              <div class="text-sm text-purple-200">+5% from last month</div>
              <div class="mt-4 bg-white/20 rounded-full h-2">
                <div
                  class="bg-green-400 h-2 rounded-full"
                  style="width: 87%"
                ></div>
              </div>
            </div>

            <!-- Spiritual Streaks -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold">Active Streaks</h4>
                <Icon name="lucide:flame" class="w-5 h-5 text-orange-300" />
              </div>
              <div class="text-3xl font-bold mb-2">3</div>
              <div class="text-sm text-purple-200">Fajr: 12 days</div>
              <div class="text-sm text-purple-200">Quran: 8 days</div>
              <div class="text-sm text-purple-200">Dhikr: 15 days</div>
            </div>

            <!-- Knowledge Growth -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold">Quran Progress</h4>
                <Icon name="lucide:book" class="w-5 h-5 text-green-300" />
              </div>
              <div class="text-3xl font-bold mb-2">23%</div>
              <div class="text-sm text-purple-200">Memorized</div>
              <div class="text-sm text-purple-200">2.3 Juz completed</div>
            </div>

            <!-- Time in Worship -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold">Weekly Worship</h4>
                <Icon name="lucide:clock" class="w-5 h-5 text-blue-300" />
              </div>
              <div class="text-3xl font-bold mb-2">8.5h</div>
              <div class="text-sm text-purple-200">This week</div>
              <div class="text-sm text-purple-200">+2.1h from last week</div>
            </div>
          </div>

          <!-- Growth Insights -->
          <div class="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 class="font-semibold mb-4 flex items-center gap-2">
              <Icon name="lucide:lightbulb" class="w-5 h-5 text-yellow-300" />
              This Week's Insights
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white/5 rounded-xl p-4">
                <div class="text-sm font-medium text-purple-200 mb-1">
                  💡 Pattern Detected
                </div>
                <div class="text-sm text-purple-100">
                  You read Quran 40% more on days when you wake up for Fajr
                </div>
              </div>
              <div class="bg-white/5 rounded-xl p-4">
                <div class="text-sm font-medium text-purple-200 mb-1">
                  🎯 Recommendation
                </div>
                <div class="text-sm text-purple-100">
                  Try scheduling dhikr after your lunch break for better
                  consistency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy & Modern Excellence Section -->
    <section class="relative py-24 px-6 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6"
          >
            <Icon
              name="lucide:shield-check"
              class="w-4 h-4 text-green-500 me-2"
            />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
              >Privacy & Excellence</span
            >
          </div>
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Built for the<br />
            <span
              class="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
              >modern Muslim</span
            >
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your faith deserves technology that respects your privacy, works
            everywhere, and embodies the excellence Islam teaches us to strive
            for.
          </p>
        </div>

        <!-- Core Principles Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Privacy First -->
          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            >
              <Icon name="lucide:shield" class="w-8 h-8 text-white" />
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4"
            >
              Privacy First
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center mb-6">
              Your spiritual journey is between you and Allah. We never sell
              your data or compromise your privacy.
            </p>

            <!-- Privacy Features -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >End-to-end encryption</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >No data selling ever</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >GDPR compliant</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Open source components</span
                >
              </div>
            </div>
          </div>

          <!-- Local First -->
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            >
              <Icon name="lucide:hard-drive" class="w-8 h-8 text-white" />
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4"
            >
              Local First
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center mb-6">
              Your data lives on your device. Fast, reliable, and always
              accessible—even without internet.
            </p>

            <!-- Local Features -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Works offline</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Lightning fast performance</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Device-native storage</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Sync when you want</span
                >
              </div>
            </div>
          </div>

          <!-- Excellence -->
          <div
            class="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            >
              <Icon name="lucide:sparkles" class="w-8 h-8 text-white" />
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4"
            >
              Excellence
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center mb-6">
              "Allah loves, when one of you does a job, that he does it with
              excellence" - Following prophetic guidance in code.
            </p>

            <!-- Excellence Features -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Thoughtful design</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Accessible to all</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Regular updates</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Community driven</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Modern Features Showcase -->
        <div
          class="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div class="text-center mb-12">
            <h3
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Modern features for modern Muslims
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Experience technology that adapts to your life, not the other way
              around
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Dark Mode -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <div
                class="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon
                  name="lucide:moon"
                  class="w-6 h-6 text-white dark:text-gray-900"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Dark Mode
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Easy on the eyes during night prayers and late study sessions
              </p>
            </div>

            <!-- Multilingual -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:globe" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Multilingual
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Arabic, English, and growing—serving the global ummah
              </p>
            </div>

            <!-- Cross Platform -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:smartphone" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Cross Platform
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Works seamlessly on phone, tablet, and desktop
              </p>
            </div>

            <!-- Offline First -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:wifi-off" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Offline Ready
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Your spiritual practice never depends on connectivity
              </p>
            </div>
          </div>
        </div>

        <!-- Technical Excellence -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Performance -->
          <div
            class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:zap" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Lightning Fast
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Built for speed and efficiency
                </p>
              </div>
            </div>

            <!-- Performance metrics -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-600 dark:text-gray-400"
                  >App startup</span
                >
                <span class="font-semibold text-gray-900 dark:text-white"
                  >&lt; 0.5s</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600 dark:text-gray-400"
                  >Prayer time calculation</span
                >
                <span class="font-semibold text-gray-900 dark:text-white"
                  >Instant</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600 dark:text-gray-400"
                  >Widget switching</span
                >
                <span class="font-semibold text-gray-900 dark:text-white"
                  >Seamless</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600 dark:text-gray-400">Data sync</span>
                <span class="font-semibold text-gray-900 dark:text-white"
                  >Background</span
                >
              </div>
            </div>

            <!-- Performance visualization -->
            <div class="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div
                class="text-sm font-medium text-gray-900 dark:text-white mb-3"
              >
                Performance Score
              </div>
              <div class="flex items-center gap-4">
                <div class="flex-1">
                  <div class="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      class="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                      style="width: 97%"
                    ></div>
                  </div>
                </div>
                <span class="text-2xl font-bold text-green-600">97</span>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Lighthouse Performance Score
              </div>
            </div>
          </div>

          <!-- Security -->
          <div
            class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:lock" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Bank-Grade Security
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Your data is sacred to us
                </p>
              </div>
            </div>

            <!-- Security features -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                >
                  <Icon name="lucide:check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    AES-256 Encryption
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Military-grade data protection
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                >
                  <Icon name="lucide:check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    Zero-Knowledge Architecture
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    We can't access your data even if we wanted to
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                >
                  <Icon name="lucide:check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    Regular Security Audits
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Continuously tested and verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Islamic Values in Technology -->
        <div
          class="bg-gradient-to-br from-green-900 to-emerald-900 rounded-3xl p-8 text-white"
        >
          <div class="text-center mb-12">
            <div
              class="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            >
              <Icon name="lucide:heart" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Technology with a soul
            </h3>
            <p class="text-green-200 max-w-2xl mx-auto">
              Every line of code is written with Islamic principles in mind—from
              the way we handle your data to how we design user experiences.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Trustworthiness (Amanah) -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:handshake" class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-3">Amanah (Trust)</h4>
              <p class="text-green-200 text-sm">
                We treat your data as an amanah—a sacred trust that we're
                accountable for protecting.
              </p>
            </div>

            <!-- Excellence (Ihsan) -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:star" class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-3">Ihsan (Excellence)</h4>
              <p class="text-green-200 text-sm">
                Every feature is crafted with the excellence that Islam
                teaches—as if Allah is watching.
              </p>
            </div>

            <!-- Benefit (Maslaha) -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <Icon name="lucide:users" class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-lg font-semibold mb-3">Maslaha (Benefit)</h4>
              <p class="text-green-200 text-sm">
                Built to bring genuine benefit to the ummah—strengthening faith,
                not distracting from it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Widgets Showcase Section -->
    <section class="relative py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 mb-6"
          >
            <Icon name="lucide:grid-3x3" class="w-4 h-4 text-indigo-500 me-2" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
              >Complete Suite</span
            >
          </div>
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Your complete<br />
            <span
              class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
              >Islamic productivity suite</span
            >
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Six powerful widgets, each designed to elevate a different aspect of
            your Islamic journey. Together, they create a comprehensive system
            for spiritual and worldly success.
          </p>
        </div>

        <!-- Time Widget -->
        <div
          class="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5">
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
                >
                  <Icon name="lucide:clock" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Time Widget
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Your spiritual compass
                  </p>
                </div>
              </div>

              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Never lose sight of what matters most. The Time Widget anchors
                your day in prayer times while helping you visualize the
                preciousness of life itself.
              </p>

              <div class="space-y-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Live prayer times with current prayer highlight</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Dual Hijri & Gregorian calendar display</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Moon phases for Islamic months</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Life progress visualization based on hadith</span
                  >
                </div>
              </div>

              <div
                class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800"
              >
                <div
                  class="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2"
                >
                  💡 Unique Feature
                </div>
                <div class="text-sm text-blue-600 dark:text-blue-400">
                  Prayer time fluctuation charts help you plan your year around
                  what matters most
                </div>
              </div>
            </div>

            <div class="lg:col-span-7">
              <!-- Time Widget Demo -->
              <div
                class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
              >
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4">
                  <div class="flex items-center justify-between mb-3">
                    <div
                      class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Today
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      📍 New York
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        Hijri
                      </div>
                      <div class="font-medium text-gray-900 dark:text-white">
                        15 Jumada al-Awwal
                      </div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        1446
                      </div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        Gregorian
                      </div>
                      <div class="font-medium text-gray-900 dark:text-white">
                        December 15
                      </div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        2024
                      </div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        Moon Phase
                      </div>
                      <div class="text-lg">🌔</div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        Waxing
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Life Progress -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div
                    class="text-sm font-medium text-gray-900 dark:text-white mb-3"
                  >
                    Life Progress (Based on Hadith)
                  </div>
                  <div
                    class="bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2"
                  >
                    <div
                      class="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
                      style="width: 35%"
                    ></div>
                  </div>
                  <div
                    class="flex justify-between text-xs text-gray-500 dark:text-gray-400"
                  >
                    <span>25 years passed</span>
                    <span>~45 years remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Deeds Widget -->
        <div
          class="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 order-2 lg:order-1">
              <!-- Deeds Widget Demo -->
              <div
                class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border border-green-200 dark:border-green-800"
              >
                <!-- Time Scale Tabs -->
                <div class="flex bg-white dark:bg-gray-800 rounded-xl p-1 mb-6">
                  <button
                    class="flex-1 px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg"
                  >
                    Today
                  </button>
                  <button
                    class="flex-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Week
                  </button>
                  <button
                    class="flex-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Month
                  </button>
                  <button
                    class="flex-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Year
                  </button>
                </div>

                <!-- Deed Cards -->
                <div class="space-y-3">
                  <div
                    class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-700"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span class="font-medium text-gray-900 dark:text-white"
                          >Friday Khutbah</span
                        >
                      </div>
                      <div class="flex items-center gap-2">
                        <button
                          class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          <Icon
                            name="lucide:calendar-plus"
                            class="w-4 h-4 text-gray-500"
                          />
                        </button>
                        <button
                          class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          <Icon
                            name="lucide:check-circle"
                            class="w-4 h-4 text-gray-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      12:00 - 12:45 PM • Recommended
                    </div>
                    <div class="text-xs text-green-600 dark:text-green-400">
                      📚 Learn more about the importance and etiquette
                    </div>
                  </div>

                  <div
                    class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-700"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span class="font-medium text-gray-900 dark:text-white"
                          >Read Surah Al-Kahf</span
                        >
                      </div>
                      <div class="flex items-center gap-2">
                        <button
                          class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          <Icon
                            name="lucide:book-open"
                            class="w-4 h-4 text-gray-500"
                          />
                        </button>
                        <button
                          class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          <Icon
                            name="lucide:circle"
                            class="w-4 h-4 text-gray-500"
                          />
                        </button>
                      </div>
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Anytime Friday • Sunnah
                    </div>
                    <div class="text-xs text-yellow-600 dark:text-yellow-400">
                      🔗 Opens Wird widget for guided reading
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 order-1 lg:order-2">
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center"
                >
                  <Icon
                    name="lucide:check-circle-2"
                    class="w-8 h-8 text-white"
                  />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Deeds Widget
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Discover & perform
                  </p>
                </div>
              </div>

              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Never wonder "what should I do now?" again. Discover time-aware
                Islamic practices with context, importance, and step-by-step
                guidance.
              </p>

              <div class="space-y-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Browse daily, weekly, monthly & yearly deeds</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Context-aware recommendations</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Complete with sources and instructions</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >One-click add to calendar or habits</span
                  >
                </div>
              </div>

              <div
                class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800"
              >
                <div
                  class="text-sm font-medium text-green-700 dark:text-green-300 mb-2"
                >
                  🎯 Smart Feature
                </div>
                <div class="text-sm text-green-600 dark:text-green-400">
                  Horizon view shows deeds across multiple time scales
                  simultaneously
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Habit Tracker Widget -->
        <div
          class="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5">
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center"
                >
                  <Icon name="lucide:trending-up" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Habit Tracker
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Build consistency
                  </p>
                </div>
              </div>

              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Transform sporadic good intentions into consistent spiritual
                practice. Track both Islamic and personal habits with insights
                that drive real growth.
              </p>

              <div class="space-y-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Pre-built Islamic habit sets (Prayers, Athkar, etc.)</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >GitHub-style contribution graphs</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Momentum tracking & streak counting</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Custom views for focused tracking</span
                  >
                </div>
              </div>

              <div
                class="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800"
              >
                <div
                  class="text-sm font-medium text-orange-700 dark:text-orange-300 mb-2"
                >
                  📊 Analytics
                </div>
                <div class="text-sm text-orange-600 dark:text-orange-400">
                  Discover patterns like "40% more Quran reading on Fajr days"
                </div>
              </div>
            </div>

            <div class="lg:col-span-7">
              <!-- Habit Tracker Demo -->
              <div
                class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6 border border-orange-200 dark:border-orange-800"
              >
                <!-- Views Tabs -->
                <div class="flex gap-2 mb-4">
                  <button
                    class="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded-lg"
                  >
                    Daily Prayers
                  </button>
                  <button
                    class="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    Rawatib
                  </button>
                  <button
                    class="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    Athkar
                  </button>
                </div>

                <!-- Contribution Graph -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4">
                  <div
                    class="text-sm font-medium text-gray-900 dark:text-white mb-3"
                  >
                    This Year's Progress
                  </div>
                  <div class="grid grid-cols-12 gap-1">
                    <div v-for="month in 12" :key="month" class="space-y-1">
                      <div
                        v-for="week in 4"
                        :key="week"
                        class="grid grid-cols-7 gap-1"
                      >
                        <div
                          v-for="day in 7"
                          :key="day"
                          :class="[
                            'w-3 h-3 rounded-sm',
                            Math.random() > 0.8
                              ? 'bg-orange-600'
                              : Math.random() > 0.6
                              ? 'bg-orange-400'
                              : Math.random() > 0.4
                              ? 'bg-orange-200'
                              : 'bg-gray-100 dark:bg-gray-700',
                          ]"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400"
                  >
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>

                <!-- Current Streaks -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div
                    class="text-sm font-medium text-gray-900 dark:text-white mb-3"
                  >
                    Active Streaks
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div
                      class="text-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg"
                    >
                      <div class="text-lg font-bold text-orange-600">12</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">
                        Fajr days
                      </div>
                    </div>
                    <div
                      class="text-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg"
                    >
                      <div class="text-lg font-bold text-orange-600">8</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">
                        Dhikr days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Two Widget Grid: Wird & Calendar -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Wird Widget -->
          <div
            class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:book-open" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Wird Widget
                </h3>
                <p class="text-gray-600 dark:text-gray-400">Quran companion</p>
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Your complete Quran companion for memorization, recitation, and
              revision. Track progress with precision and integrate seamlessly
              with your schedule.
            </p>

            <div class="space-y-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Memorization tracking (Ayah → Juz level)</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Revision sessions with scoring</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Quick access to key Surahs</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Notes sync to Kenz</span
                >
              </div>
            </div>

            <!-- Wird Demo -->
            <div
              class="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800"
            >
              <div
                class="text-sm font-medium text-gray-900 dark:text-white mb-3"
              >
                Whole Mushaf Progress
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3">
                <div
                  class="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-2"
                >
                  <span>Memorized</span>
                  <span>23%</span>
                </div>
                <div class="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-teal-500 h-2 rounded-full"
                    style="width: 23%"
                  ></div>
                </div>
              </div>
              <div class="text-xs text-teal-600 dark:text-teal-400">
                📖 Al-Baqarah: 125/286 Ayahs • Surah Al-Kahf: Complete ✅
              </div>
            </div>
          </div>

          <!-- Calendar Widget -->
          <div
            class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center"
              >
                <Icon name="lucide:calendar-days" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Calendar Widget
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Plan with purpose
                </p>
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-6">
              The world's first Hijri-native calendar that bridges your dunya
              and akhirah planning. Never lose sight of what matters most.
            </p>

            <div class="space-y-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Hijri recurrence rules</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Prayer times integration</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Google Calendar 2-way sync</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >Multiple timezone support</span
                >
              </div>
            </div>

            <!-- Calendar Demo -->
            <div
              class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  Ramadan 1446
                </div>
                <div class="text-xs text-purple-600 dark:text-purple-400">
                  📅 Auto-calculated
                </div>
              </div>
              <div class="grid grid-cols-7 gap-1 mb-3">
                <div
                  v-for="day in 30"
                  :key="day"
                  :class="[
                    'aspect-square flex items-center justify-center text-xs rounded',
                    day === 1 || day === 15 || day === 27
                      ? 'bg-purple-500 text-white font-medium'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400',
                  ]"
                >
                  {{ day <= 30 ? day : "" }}
                </div>
              </div>
              <div class="text-xs text-purple-600 dark:text-purple-400">
                🌙 Laylat al-Qadr • 📚 I'tikaf scheduled • 🎉 Eid prepared
              </div>
            </div>
          </div>
        </div>

        <!-- Kenz Widget -->
        <div
          class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white border border-gray-700"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 order-2 lg:order-1">
              <!-- Kenz Demo -->
              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-lg font-semibold">
                    Your Islamic Knowledge Vault
                  </h4>
                  <Icon name="lucide:search" class="w-5 h-5 text-white/70" />
                </div>

                <!-- Search Bar -->
                <div
                  class="bg-white/5 rounded-xl p-3 mb-4 border border-white/10"
                >
                  <div class="flex items-center gap-3">
                    <Icon
                      name="lucide:sparkles"
                      class="w-4 h-4 text-yellow-400"
                    />
                    <span class="text-white/70 text-sm"
                      >Search your knowledge...</span
                    >
                  </div>
                </div>

                <!-- Quick Access -->
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <div class="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div class="flex items-center gap-2 mb-2">
                      <Icon
                        name="lucide:bookmark"
                        class="w-4 h-4 text-blue-400"
                      />
                      <span class="text-sm font-medium">Saved Articles</span>
                    </div>
                    <div class="text-xs text-white/70">47 items</div>
                  </div>
                  <div class="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div class="flex items-center gap-2 mb-2">
                      <Icon
                        name="lucide:edit-3"
                        class="w-4 h-4 text-green-400"
                      />
                      <span class="text-sm font-medium">My Notes</span>
                    </div>
                    <div class="text-xs text-white/70">23 items</div>
                  </div>
                </div>

                <!-- Recent Items -->
                <div class="space-y-2">
                  <div class="text-xs text-white/70 mb-2">Recently Added</div>
                  <div class="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center"
                      >
                        <Icon
                          name="lucide:book-open"
                          class="w-4 h-4 text-teal-400"
                        />
                      </div>
                      <div class="flex-1">
                        <div class="text-sm font-medium">
                          Tafsir note on Ayat al-Kursi
                        </div>
                        <div class="text-xs text-white/70">
                          From Wird widget • 2 hours ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center"
                      >
                        <Icon
                          name="lucide:link"
                          class="w-4 h-4 text-blue-400"
                        />
                      </div>
                      <div class="flex-1">
                        <div class="text-sm font-medium">
                          Article: Perfecting Wudu
                        </div>
                        <div class="text-xs text-white/70">
                          islamqa.info • Yesterday
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 order-1 lg:order-2">
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center"
                >
                  <Icon name="lucide:gem" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-3xl font-bold">Kenz Widget</h3>
                  <p class="text-white/70">Your treasure vault</p>
                </div>
              </div>

              <p class="text-lg text-white/80 mb-6">
                Transform scattered thoughts and discoveries into organized
                knowledge. Your personal Islamic knowledge base that grows with
                you.
              </p>

              <div class="space-y-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span class="text-white/80"
                    >AI-powered search and organization</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span class="text-white/80"
                    >Save anything: links, notes, images, PDFs</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span class="text-white/80"
                    >Auto-import from other widgets</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span class="text-white/80"
                    >Telegram integration for quick dumps</span
                  >
                </div>
              </div>

              <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                <div class="text-sm font-medium text-yellow-300 mb-2">
                  🧠 AI-Powered
                </div>
                <div class="text-sm text-white/70">
                  "Find that hadith about intentions" → Instantly surfaces your
                  saved Bukhari note
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moon Animation Section -->
    <section
      class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <!-- Background Stars -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/4 start-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"
        ></div>
        <div
          class="absolute top-1/3 end-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute bottom-1/4 start-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-80"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute top-1/2 start-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-1/3 end-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
          style="animation-delay: 2s"
        ></div>
        <div
          class="absolute top-3/4 end-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"
          style="animation-delay: 2.5s"
        ></div>
      </div>

      <!-- Content Grid -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen"
        >
          <!-- Text Content -->
          <div class="lg:col-span-5 text-white space-y-8">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Icon name="lucide:moon" class="w-4 h-4 text-yellow-400 me-2" />
              <span class="text-sm font-medium text-white/90"
                >Islamic Time</span
              >
            </div>

            <!-- Headline -->
            <div class="space-y-6">
              <h2 class="text-4xl md:text-6xl font-bold leading-tight">
                Your life,<br />
                <span
                  class="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                >
                  in perfect rhythm </span
                ><br />
                with Allah's creation
              </h2>

              <p class="text-xl text-white/80 leading-relaxed">
                Every second connects you to the cosmic order. Every prayer time
                aligns you with the celestial dance. Every lunar month reminds
                you of your place in the grand design.
              </p>
            </div>

            <!-- Insights -->
            <div class="space-y-6">
              <div
                class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:clock" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-2">
                      Time is Sacred
                    </h3>
                    <p class="text-white/70 text-sm">
                      "And it is He who created the heavens and earth in truth.
                      And the day He says, 'Be,' and it is, His word is the
                      truth." - Quran 6:73
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:calendar" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-2">
                      Lunar Guidance
                    </h3>
                    <p class="text-white/70 text-sm">
                      Follow the same moon that guided Prophet Ibrahim, Musa,
                      Isa, and Muhammad ﷺ. Connect with 1,400 years of Islamic
                      tradition.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:heart" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-2">
                      Present Moment
                    </h3>
                    <p class="text-white/70 text-sm">
                      Watch time unfold as Allah intended. Each rotating ring
                      reminds you that this moment is a gift—that's why it's
                      called the present.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Moon Animation -->
          <div class="lg:col-span-7 flex items-center justify-center">
            <div class="relative">
              <!-- Glow Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-3xl scale-150"
              ></div>

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

              <!-- Orbital Rings Indicator -->
              <div
                class="absolute bottom-0 start-1/2 transform -translate-x-1/2 translate-y-8 lg:translate-y-16"
              >
                <div
                  class="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
                >
                  <div class="text-center">
                    <div class="text-white/60 text-xs mb-2">
                      Live Islamic Calendar
                    </div>
                    <div class="flex items-center gap-4 text-white/80 text-sm">
                      <div class="flex items-center gap-2">
                        <div
                          class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                        ></div>
                        <span>Seconds</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div
                          class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                          style="animation-delay: 0.2s"
                        ></div>
                        <span>Minutes</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div
                          class="w-2 h-2 bg-red-400 rounded-full animate-pulse"
                          style="animation-delay: 0.4s"
                        ></div>
                        <span>Hours</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div
                          class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                          style="animation-delay: 0.6s"
                        ></div>
                        <span>Days</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <div
                          class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                          style="animation-delay: 0.8s"
                        ></div>
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
            class="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10 max-w-2xl"
          >
            <blockquote class="text-white/90 text-lg italic mb-4">
              "And We made from them leaders guiding by Our command when they
              were patient and were certain of Our signs."
            </blockquote>
            <cite class="text-white/60 text-sm">Quran 32:24</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative w-full h-full bg-black">
      <TyndallEffect
        class="min-h-screen bg-gradient-to-br from-black/50 to-green-900/30"
        streak-color="rgb(34, 197, 94)"
      >
        <div
          class="absolute flex flex-col items-center w-full px-5 transform -translate-x-1/2 top-48 left-1/2"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Icon
              name="lucide:crescent-moon"
              class="w-4 h-4 text-green-400 me-2"
            />
            <span class="text-sm font-medium text-white/90">Coming Soon</span>
          </div>

          <!-- Main Headline -->
          <h1
            class="mt-8 text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-stone-200/90 via-stone-50 to-white bg-clip-text md:text-6xl max-w-5xl"
          >
            Your spiritual journey<br />
            <span
              class="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent"
            >
              begins with a single step
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="mt-6 text-xl text-white/70 max-w-3xl text-center leading-relaxed"
          >
            Join thousands of Muslims already on the waiting list for the
            world's first Hijri-native productivity suite. Your place in line
            secures early access to revolutionary Islamic time management.
          </p>

          <!-- Stats -->
          <div
            class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl w-full"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">2,847</div>
              <div class="text-sm text-white/60">Muslims waiting</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">6</div>
              <div class="text-sm text-white/60">Powerful widgets</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">100%</div>
              <div class="text-sm text-white/60">Privacy guaranteed</div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="z-10 mt-12">
            <JoinModal
              :waiting-text="$t('waiting.waiting')"
              button-type="default"
              class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 text-lg h-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            />
          </div>

          <!-- Supporting Text -->
          <div class="mt-8 text-center">
            <p class="text-white/60 text-sm">
              ✨ Be among the first to experience Islamic productivity redefined
            </p>
            <p class="text-white/50 text-xs mt-2">
              No spam, ever. Your email is safe with us.
            </p>
          </div>

          <!-- Testimonials Preview -->
          <div
            class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
          >
            <div
              class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  AH
                </div>
                <div>
                  <blockquote class="text-white/90 text-sm italic mb-2">
                    "Finally, a productivity app that understands my faith. The
                    Hijri calendar integration is revolutionary."
                  </blockquote>
                  <cite class="text-white/60 text-xs">
                    Ahmed Hassan, Early Tester
                  </cite>
                </div>
              </div>
            </div>

            <div
              class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  FM
                </div>
                <div>
                  <blockquote class="text-white/90 text-sm italic mb-2">
                    "The prayer time integration with my calendar changed how I
                    plan my day. Absolutely brilliant."
                  </blockquote>
                  <cite class="text-white/60 text-xs">
                    Fatima Mohamed, Beta User
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Particles Effect -->
        <template #particles>
          <ParticlesEffect
            id="cta-particles"
            :density="156"
            :size="1.2"
            :min-size="0.4"
            :speed="1"
            :min-speed="0.2"
            :opacity="0.8"
            :min-opacity="0.1"
            color="#ffffff"
            background="transparent"
            :opacity-speed="2"
            :options="{}"
            class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
          />
        </template>
      </TyndallEffect>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Logo and Copyright -->
          <div class="flex items-center gap-4 mb-6 md:mb-0">
            <div class="flex items-center gap-2">
              <Icon name="lucide:moon" class="w-6 h-6 text-green-400" />
              <span class="text-white font-semibold text-lg">Zaman</span>
            </div>
            <div class="text-white/60 text-sm">
              {{ new Date().getFullYear() }} © All rights reserved.
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center gap-8">
            <a
              href="#"
              class="text-white/60 hover:text-white text-sm transition-colors"
            >
              Manifesto
            </a>
            <a
              href="#"
              class="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              class="text-white/60 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              class="text-white/60 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-800 mt-8 pt-8">
          <div class="text-center">
            <p class="text-white/50 text-sm">
              Built with ❤️ for the global Muslim community
            </p>
            <p class="text-white/40 text-xs mt-2">
              "And whoever relies upon Allah - then He is sufficient for him.
              Indeed, Allah will accomplish His purpose." - Quran 65:3
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import JoinModal from "~/components/waitlist/JoinModal.vue";
import { Icon } from "@iconify/vue";
import { Calendars } from "~/types/Calendars";
import TyndallEffect from "~/components/cta/TyndallEffect.vue";
import ParticlesEffect from "~/components/cta/ParticlesEffect.vue";

definePageMeta({
  layout: "default",
});

// Composables
const { localeProperties } = useI18n();
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
