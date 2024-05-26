<template>
  <nav
    class="absolute grid items-center justify-between w-screen grid-cols-5 px-12 py-3 backdrop-blur-xl"
  >
    <NuxtLink
      class="inline-flex items-center col-span-2 gap-2 align-middle"
      to="/"
    >
      <Logo class="h-9 w-9 dark:fill-gray-200" />
      <div class="pb-1 text-3xl leading-loose">
        <span class="font-bold">z</span>
        <span class="font-semibold">a</span>
        <span class="font-medium">m</span>
        <span>a</span>
        <span class="font-light">n</span>
      </div>
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
