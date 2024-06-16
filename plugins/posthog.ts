import { defineNuxtPlugin } from "#app";
import { isNavigationFailure } from "#vue-router";
import posthog from "posthog-js";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // we add manual pageview capturing below
    loaded: (posthog) => {
      if (import.meta.env.MODE === "development") posthog.debug();
    },
  });

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach((to, from, failure) => {
    nextTick(() => {
      posthog.capture("$pageview", {
        current_url: to.fullPath,
      });
      posthog.capture("$pageleave", {
        current_url: from.fullPath,
      });
      if (isNavigationFailure(failure)) {
        posthog.capture("$pagefailed", { failure });
      }
    });
  });

  return {
    provide: {
      posthog: () => posthogClient,
    },
  };
});
