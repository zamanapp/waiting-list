// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
  ],

  // nitro: {
  //   debug: true,
  //   prerender: {
  //     routes: [
  //       "/manifesto",
  //       "/ar/manifesto",
  //       "/",
  //       "/ar",
  //       "/privacy",
  //       "/terms",
  //       "/sharia",
  //       "/restrictions",
  //     ],
  //   },
  // },

  // routeRules: {
  //   "/manifesto": {
  //     prerender: true,
  //   },
  //   "/ar/manifesto": {
  //     prerender: true,
  //   },
  //   "/": {
  //     prerender: true,
  //   },
  //   "/ar": {
  //     prerender: true,
  //   },
  //   "/privacy": {
  //     prerender: true,
  //   },
  //   "/terms": {
  //     prerender: true,
  //   },
  //   "/sharia": {
  //     prerender: true,
  //   },
  //   "/restrictions": {
  //     prerender: true,
  //   },
  // },

  imports: {
    dirs: ["composables/**"],
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        language: "en-US",
        dir: "ltr",
        file: "en.json",
      },
      {
        name: "العربية",
        code: "ar",
        language: "ar-SA",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    lazy: false,
    langDir: "locales",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    // precompile: { strictMessage: false },
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://zaman.app"
        : "http://localhost:3000",
    detectBrowserLanguage: {
      useCookie: true,
    },
    compilation: { strictMessage: false, escapeHtml: false },
  },

  content: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  runtimeConfig: {
    loopsApiKey: "",
    telegramBotToken: "",
    // Keys within public are also exposed client-side
    public: {
      backEndpoint:
        process.env.NODE_ENV === "production"
          ? process.env.BACK_ENDPOINT
          : "http://localhost:3333",
      posthogPublicKey: "phc_rKNNztrSrr1Knq5A9s2nIhDfvwYR2NLsMNGovGQu6ug",
      posthogHost: "https://us.i.posthog.com",
    },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
      },
    },
  },

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },

  $development: {
    devtools: {
      enabled: true,
    },
  },
});
