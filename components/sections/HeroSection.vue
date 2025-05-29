<template>
  <div class="w-screen h-screen overflow-hidden bg-black font-main">
    <div
      class="relative z-10 flex flex-col items-center justify-center w-screen gap-4 mx-auto mt-24 mb-4"
    >
      <div class="max-w-3xl font-bold text-center text-white text-7xl">
        <p>Manage your time around what matters</p>
      </div>

      <div class="text-muted-foreground">
        Manage your
        <span class="font-bold">deen, schedule, habits</span>, and
        <span class="font-bold">life</span> — in one place built for the
        <span class="font-bold">everyday Muslim</span>.
      </div>

      <div class="flex flex-col items-center justify-center w-full gap-8">
        <div
          class="flex items-center justify-center max-w-sm gap-2 mx-auto mb-12"
        >
          <Input id="email" type="email" placeholder="Email" />
          <Button :variant="isDark ? '' : 'secondary'"> Join Waitlist </Button>
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center w-full mx-auto">
      <Badge :variant="isDark ? '' : 'secondary'">Follow us on X</Badge>
    </div> -->

    <div
      class="relative z-0 -mt-32 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b from-white to-black"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-neutral-950 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { value: isDark } = useDark();
</script>
