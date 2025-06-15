<template>
  <div class="w-screen h-screen mt-24 overflow-hidden font-main">
    <div
      class="relative z-10 flex flex-col items-center justify-center w-screen gap-6 mx-auto mt-6"
    >
      <div
        ref="heroTitle"
        class="~max-w-sm/3xl font-bold text-center ~text-3xl/7xl ~mx-3/0"
      >
        <h2>{{ $t("waiting.manage") }}</h2>
      </div>

      <p
        ref="heroSubtitle"
        class="~max-w-sm/3xl ~text-base/2xl text-center text-muted-foreground ~mx-3/0"
        v-html="$t('waiting.tagline')"
      ></p>

      <div class="flex flex-col items-center justify-center w-full gap-8">
        <div
          ref="heroButton"
          class="flex items-center justify-center max-w-sm gap-2 mx-auto mb-12"
        >
          <!-- <Input id="email" type="email" placeholder="Email" /> -->
          <!-- <Button
            class="text-lg font-medium"
            @click="emitter.emit('scroll:to:join')"
          >
            {{ $t("waiting.waitingExpand") }}
          </Button> -->

          <GlassButton
            :color="isDark ? '#fff' : '#000'"
            class="text-lg font-medium"
            @click="emitter.emit('scroll:to:join')"
          >
            {{ $t("waiting.waitingExpand") }}
          </GlassButton>
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center w-full mx-auto">
      <Badge :variant="isDark ? '' : 'secondary'">Follow us on X</Badge>
    </div> -->

    <div
      ref="heroBackground"
      class="relative -mt-32 h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesEffect
        :density="1200"
        :size="1.5"
        :minSize="0.5"
        :color="isDark ? '#fff' : '#000'"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
      <div
        class="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_center,#5eead42e,transparent_70%)] bg-[radial-gradient(circle_at_bottom_center,theme(backgroundColor.slate[300]),transparent_70%)]"
      />
      <div
        class="absolute inset-x-0 -bottom-[254px] h-full w-full rounded-[100%] bg-gradient-to-b dark:from-white dark:to-black from-slate-700 to-sky-100"
      />
      <div
        class="absolute inset-x-0 -bottom-[256px] h-full w-full rounded-[100%] bg-slate-300 dark:bg-neutral-950 shadow-[inset_0_2px_20px_theme(backgroundColor.slate[700]),0_-10px_50px_1px_theme(backgroundColor.slate[500])] dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
      />
    </div>
    <div
      ref="heroBottomText"
      class="absolute inset-x-0 bottom-12 md:bottom-36 lg:bottom-24"
    >
      <p
        class="~max-w-sm/xl ~text-xl/5xl text-center mx-auto ~px-6/0 font-bold md:font-medium"
      >
        {{ $t("waiting.catchline") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const isDark = useDark();

const heroTitle = templateRef<HTMLElement>("heroTitle");
const heroSubtitle = templateRef<HTMLElement>("heroSubtitle");
const heroButton = templateRef<HTMLElement>("heroButton");
const heroBackground = templateRef<HTMLElement>("heroBackground");
const heroBottomText = templateRef<HTMLElement>("heroBottomText");

const emitter = useEmitter();

onMounted(() => {
  // Set initial states for all elements
  const slideDownElements = [
    { element: heroTitle.value, delay: 0.1 },
    { element: heroSubtitle.value, delay: 0.3 },
    { element: heroButton.value, delay: 0.5 },
    { element: heroBottomText.value, delay: 0.9 },
  ];

  slideDownElements.forEach(({ element, delay }) => {
    if (element) {
      gsap.set(element, {
        y: -50,
        opacity: 0,
      });

      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay,
      });
    }
  });

  // Background slides up from bottom
  if (heroBackground.value) {
    gsap.set(heroBackground.value, {
      y: 100,
      opacity: 0,
    });

    gsap.to(heroBackground.value, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.2,
    });
  }
});
</script>
