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
  ],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://api.fonts.coollabs.io",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          // only pull zaman for the logo
          href: "https://api.fonts.coollabs.io/css2?family=Space+Grotesk:wght@300..700&display=swap&text=zaman",
        },
      ],
    },
  },

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

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      backEndpoint:
        process.env.NODE_ENV === "production"
          ? process.env.BACK_ENDPOINT
          : "http://localhost:3333",
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
