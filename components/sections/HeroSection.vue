<template>
  <div class="w-screen h-screen mt-24 overflow-hidden font-main">
    <div
      class="relative flex flex-col items-center justify-center w-screen gap-6 mx-auto mt-6"
    >
      <div class="max-w-3xl font-bold text-center text-7xl">
        <p>{{ $t("waiting.manage") }}</p>
      </div>

      <div class="max-w-3xl text-2xl text-center text-muted-foreground">
        Manage your
        <span class="font-bold">deen, schedule, habits</span>, and
        <span class="font-bold">life</span> — in one place built for the
        <span class="font-bold">everyday Muslim</span>.
      </div>

      <div class="flex flex-col items-center justify-center w-full gap-8">
        <div
          class="flex items-center justify-center max-w-sm gap-2 mx-auto mb-12"
        >
          <!-- <Input id="email" type="email" placeholder="Email" /> -->
          <Button class="text-lg font-medium">
            {{ $t("waiting.waitingExpand") }}
          </Button>
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center w-full mx-auto">
      <Badge :variant="isDark ? '' : 'secondary'">Follow us on X</Badge>
    </div> -->

    <div
      class="relative -mt-32 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        :color="isDark ? '#fff' : '#f97316'"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)] bg-[radial-gradient(circle_at_bottom_center,#fef3c7,transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b dark:from-white dark:to-black from-amber-300 to-white"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-50 dark:bg-neutral-950 shadow-[inset_0_2px_20px_#fff7ed,0_-10px_50px_1px_#fed7aa] dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
    <div class="absolute inset-x-0 bottom-16">
      <p class="max-w-xl mx-auto text-5xl font-bold text-center">
        You deserver a space that keeps your faith at the center - not an
        afterthought
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark();
</script>
