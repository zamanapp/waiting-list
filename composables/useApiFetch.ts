import type { UseFetchOptions } from "#app";
import type { Ref } from "vue";
import type { FetchResponse } from "ofetch";

const emitter = useEmitter();
// define rules to skip some response errors
const skippable = (response: FetchResponse<any>): boolean => {
  return response.url.includes("auth/me");
};

export function useApiFetch<T extends Record<string, any>>(
  path: Ref<string> | string,
  options?: UseFetchOptions<T>
) {
  const config = useRuntimeConfig();
  return useFetch(`/api/${unref(path)}`, {
    ...options,
    credentials: "include",
    baseURL: config.public.backEndpoint,
    onResponseError({ response }) {
      if (!skippable(response)) {
        // Handle the response errors
        response._data?.errors.forEach((e: any) => {
          emitter.emit("error", {
            title: "Something went wrong",
            options: {
              description: e.message
                ? `${e.message} ${e.field ? e.field : ""}`
                : "Please try again later",
            },
          });
        });
      }
    },
    onRequestError({ error }) {
      emitter.emit("error", {
        title: "Something went wrong",
        options: {
          description: error.message || "Please try again later",
        },
      });
    },
  });
}
