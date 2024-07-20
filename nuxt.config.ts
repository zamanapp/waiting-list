// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "@nuxt/content",
    "@nuxt/image"
  ],

  imports: {
    dirs: ["composables/**"],
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        dir: "ltr",
        file: "en.json",
      },
      {
        name: "العربية",
        code: "ar",
        iso: "ar-SA",
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
        ? process.env.BASE_URL
        : "http://localhost:3000",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },

  content: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  runtimeConfig: {
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