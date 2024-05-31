<template>
  <nav
    class="grid items-center justify-between w-screen grid-cols-2 px-6 py-3 md:grid-cols-4 lg:grid-cols-5 md:px-12"
  >
    <NuxtLink
      class="inline-flex items-center gap-2 align-middle cols-span-1 lg:col-span-2"
      to="/"
    >
      <Logo class="h-9 w-9 dark:fill-gray-200" />
      <div class="pb-1 text-3xl leading-loose font-logo">
        <span class="font-bold">z</span>
        <span class="font-semibold">a</span>
        <span class="font-medium">m</span>
        <span>a</span>
        <span class="font-light">n</span>
      </div>
    </NuxtLink>

    <Drawer v-if="mobile" class="col-span-1 md:invisible">
      <DrawerTrigger class="inline-flex items-center justify-end" as="button">
        <Icon class="cursor-pointer w-7 h-7" icon="hugeicons:menu-05" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="gap-6 my-12">
          <NuxtLink :to="localePath('/manifesto')">
            <DrawerTitle>Manifesto</DrawerTitle>
          </NuxtLink>
          <NuxtLink>
            <DrawerTitle>Blog</DrawerTitle>
          </NuxtLink>
          <NuxtLink>
            <DrawerTitle>Changelog</DrawerTitle>
          </NuxtLink>
          <SocialIcons class="mx-auto my-3" />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>

    <div v-if="!mobile" class="flex justify-center invisible md:visible">
      <NuxtLink
        :to="localePath('/manifesto')"
        class="px-3 py-2 text-lg font-medium cursor-pointer"
      >
        Manifesto
      </NuxtLink>
    </div>

    <div
      v-if="!mobile"
      class="flex items-center justify-end invisible gap-3 cols-span-1 md:col-span-2 lg:col-span-2 md:visible"
    >
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

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const localePath = useLocalePath();
const breakpoints = useBreakpoints(breakpointsTailwind);

const mobile = breakpoints.smaller("md");
</script>
