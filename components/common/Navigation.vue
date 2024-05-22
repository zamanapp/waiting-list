<template>
  <nav
    class="absolute grid items-center justify-between w-screen grid-cols-5 px-12 py-3 backdrop-blur-xl"
  >
    <NuxtLink class="col-span-2 w-28" to="/">
      <Logo class="h-9 w-9 dark:fill-gray-200" />
    </NuxtLink>

    <div class="flex justify-center">
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Our Manifesto
      </NuxtLink>
    </div>

    <div class="flex items-center justify-end col-span-2 gap-3">
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Blog
      </NuxtLink>
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        Changelog
      </NuxtLink>
      <!-- <LangSwitcher /> -->
      <SocialIcons />
    </div>
  </nav>
</template>
