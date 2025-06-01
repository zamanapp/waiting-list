<template>
  <footer class="relative pb-12">
    <GlowyDivider class="absolute pt-0 pb-32 bottom-[4.1rem]" />
    <div class="px-6 mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <!-- Logo and Copyright -->
        <div class="flex items-center gap-4 mb-6 md:mb-0">
          <div class="flex items-center gap-2">
            <Logo size="sm" />
          </div>
          <div class="text-sm font-main">
            © {{ new Date().getFullYear() }} All rights reserved.
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="link in links"
            :to="link.to"
            class="text-sm transition-colors font-main"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Divider -->
      <div class="pt-8 mt-8 border-t border-slate-800">
        <div class="text-center">
          <p class="text-sm font-main">
            Built with 🤲 and Sabr for every Muslim
          </p>
          <p class="mt-2 text-xs text-slate-600 dark:text-slate-400 font-main">
            "And whoever relies upon Allah - then He is sufficient for him.
            Indeed, Allah will accomplish His purpose." - Quran 65:3
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Manifesto",
    to: "/manifesto",
  },
  {
    label: "Privacy",
    to: "/privacy",
  },
  {
    label: "Terms",
    to: "/terms",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>
