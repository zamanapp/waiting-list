<template>
  <button
    title="Toggles light & dark"
    aria-label="auto"
    aria-live="polite"
    @click="toggle"
    class="theme-toggle"
  >
    <svg
      class="sun-and-moon dark:stroke-gray-300 hover:stroke-gray-500 stroke-black fill-black dark:fill-gray-300 hover:fill-gray-500 dark:hover:hover:fill-gray-500 dark:hover:stroke-gray-500"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <mask class="origin-center moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle
          class="translate-x-2 dark:translate-x-0 delay-[0.25s] duration-500"
          :cx="colorMode === 'light' ? 24 : 17"
          cy="10"
          r="6"
          fill="black"
        />
      </mask>
      <circle
        class="sun"
        cx="12"
        cy="12"
        r="6"
        :style="
          colorMode === 'dark'
            ? {
                ...sunStyle.default,
                ...sunStyle.dark,
              }
            : { ...sunStyle.default }
        "
        mask="url(#moon-mask)"
      />
      <g
        class="stroke-2 sun-beams duration-[0.25s]"
        stroke="currentColor"
        :style="
          colorMode === 'dark'
            ? { transformOrigin: 'center center', ...beamStyle }
            : { transformOrigin: 'center center' }
        "
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const sunStyle = {
  default: {
    transformOrigin: "center center",
    "transition-timing-function": "var(--ease-3)",
    "transition-duration": ".25s",
  },
  dark: {
    transform: "scale(1.75)",
  },
};

const moonStyle = {};

const beamStyle = {
  opacity: 0,
};

const toggle = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
};
</script>

<style lang="scss">
@import "https://unpkg.com/open-props/easings.min.css";

.theme-toggle {
  --size: 1.3rem;

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;

  svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  @media (hover: none) {
    --size: 48px;
  }
}

/* usage example */
.sun {
  transition: transform 0.5s var(--ease-elastic-3);
}

.sun-beams {
  transition: transform 0.5s var(--ease-elastic-4), opacity 0.5s var(--ease-3);
}

.moon > circle {
  transition: transform 0.25s var(--ease-out-5);
  transition: cx 0.25s var(--ease-out-5);
}
</style>
