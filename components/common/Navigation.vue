<template>
  <nav
    :dir="localeProperties.dir"
    class="z-50 grid items-center justify-between w-screen grid-cols-2 px-6 py-3 md:grid-cols-4 lg:grid-cols-5 md:px-12"
  >
    <NuxtLink
      class="inline-flex items-center gap-2 align-middle cols-span-1 lg:col-span-2"
      :to="localePath('/')"
    >
      <Logo />
    </NuxtLink>

    <Drawer v-if="mobile" class="col-span-1 md:invisible">
      <DrawerTrigger
        class="inline-flex items-center justify-end gap-8"
        as="button"
      >
        <LangSwitcher class="mx-auto my-3" />
        <Icon class="cursor-pointer w-7 h-7" icon="hugeicons:menu-05" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="gap-6 my-12">
          <NuxtLink :to="localePath('/manifesto')">
            <DrawerTitle>{{ $t("header.manifesto") }}</DrawerTitle>
          </NuxtLink>
          <NuxtLink>
            <DrawerTitle>{{ $t("header.blog") }}</DrawerTitle>
          </NuxtLink>
          <NuxtLink>
            <DrawerTitle>{{ $t("header.changelog") }}</DrawerTitle>
          </NuxtLink>
          <DarkmodeSwitcher />
          <SocialIcons class="mx-auto my-3" />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>

    <div v-if="!mobile" class="flex justify-center invisible md:visible">
      <NuxtLink
        :to="localePath('/manifesto')"
        class="px-3 py-2 text-lg font-medium cursor-pointer"
      >
        {{ $t("header.manifesto") }}
      </NuxtLink>
    </div>

    <div
      v-if="!mobile"
      class="flex items-center justify-end invisible gap-3 cols-span-1 md:col-span-2 lg:col-span-2 md:visible"
    >
      <DarkmodeSwitcher />
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        {{ $t("header.blog") }}
      </NuxtLink>
      <NuxtLink class="px-3 py-2 text-lg font-medium cursor-pointer">
        {{ $t("header.changelog") }}
      </NuxtLink>
      <div class="px-3 py-2 text-lg font-medium">
        <LangSwitcher />
      </div>
      <SocialIcons />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const localePath = useLocalePath();
const breakpoints = useBreakpoints(breakpointsTailwind);
const { localeProperties } = useI18n();

const mobile = breakpoints.smaller("md");
</script>
