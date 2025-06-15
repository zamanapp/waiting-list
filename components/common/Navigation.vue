<template>
  <nav
    :dir="localeProperties.dir"
    class="z-50 grid items-center justify-between w-screen grid-cols-2 px-6 py-3 md:grid-cols-4 lg:grid-cols-5 md:px-12"
  >
    <NuxtLink
      class="inline-flex items-center gap-2 align-middle cols-span-1 lg:col-span-2"
      :to="localePath('/')"
    >
      <Logo :size="mobile ? 'md' : 'lg'" />
    </NuxtLink>

    <Drawer v-if="mobile" v-model:open="isOpen" class="col-span-1 md:invisible">
      <div class="inline-flex items-center justify-end gap-8">
        <DarkmodeSwitcher />
        <DrawerTrigger as="button">
          <Icon class="cursor-pointer w-7 h-7" icon="hugeicons:menu-05" />
        </DrawerTrigger>
      </div>

      <DrawerContent>
        <DrawerHeader class="gap-6 my-12">
          <NuxtLink @click="isOpen = false" :to="localePath('/manifesto')">
            <DrawerTitle>{{ $t("header.manifesto") }}</DrawerTitle>
          </NuxtLink>
          <NuxtLink v-if="config.launched" @click="isOpen = false">
            <DrawerTitle>{{ $t("header.blog") }}</DrawerTitle>
          </NuxtLink>
          <NuxtLink v-if="config.launched" @click="isOpen = false">
            <DrawerTitle>{{ $t("header.changelog") }}</DrawerTitle>
          </NuxtLink>
          <LangSwitcher fullname class="mx-auto my-3" />

          <SocialIcons class="mx-auto my-3" />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>

    <div v-if="!mobile" class="flex justify-center invisible md:visible">
      <NuxtLink
        :to="localePath('/manifesto')"
        class="px-3 py-2 text-base font-medium cursor-pointer lg:text-lg"
      >
        {{ $t("header.manifesto") }}
      </NuxtLink>
    </div>

    <div
      v-if="!mobile"
      class="flex items-center justify-end invisible gap-3 text-base lg:text-lg cols-span-1 md:col-span-2 lg:col-span-2 md:visible"
    >
      <DarkmodeSwitcher />
      <NuxtLink
        v-if="config.launched"
        class="py-2 font-medium cursor-pointer lg:px-3"
      >
        {{ $t("header.blog") }}
      </NuxtLink>
      <NuxtLink
        v-if="config.launched"
        class="py-2 font-medium cursor-pointer lg:px-3"
      >
        {{ $t("header.changelog") }}
      </NuxtLink>
      <div class="py-2 font-medium lg:px-3">
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

const isOpen = ref(false);

const config = useAppConfig();
</script>
