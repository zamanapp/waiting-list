import { UseFetchOptions } from "#app";
import { Ref } from "vue";
import { FetchResponse } from "ofetch";

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
  return useFetch(`${config.public.backEndpoint}/api/${unref(path)}`, {
    ...options,
    credentials: "include",
    onResponseError({ response }) {
      if (!skippable(response)) {
        // Handle the response errors
        response._data?.errors.forEach((e: any) => {
          emitter.emit("error", `${e.message} ${e.field ? e.field : ""}`);
        });
      }
    },
    onRequestError({ error }) {
      emitter.emit("error", error.message);
    },
  });
}
