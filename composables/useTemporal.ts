import type { Pausable } from "@vueuse/core";
import { useIntervalFn } from "@vueuse/core";
import type { Ref } from "vue";
import { ref } from "vue";
import { useRafFn } from "@vueuse/core";
import { Temporal } from "@js-temporal/polyfill";

export interface UseTemporalNowOptions<Controls extends boolean> {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls;

  /**
   * Update interval in milliseconds, or use requestAnimationFrame
   *
   * @default requestAnimationFrame
   */
  interval?: "requestAnimationFrame" | number;

  /**
   * Pass a calendar to use, default is "iso8601"
   *
   * @default "iso8601"
   * @see https://tc39.es/proposal-temporal/docs/calendar.html
   */
  calendar?: string | Temporal.Calendar | Temporal.CalendarProtocol;

  /**
   * Pass a Timezone to use, default is "Temporal.Now.timeZoneId()"
   *
   * @default Temporal.Now.timeZoneId()
   */
  timeZone?: string | Temporal.TimeZoneLike;
}

/**
 * Reactive current Date instance.
 *
 * @see https://vueuse.org/useNow
 * @param options
 */
export function useTemporalNow(
  options?: UseTemporalNowOptions<false>
): Ref<Temporal.ZonedDateTime>;
export function useTemporalNow(
  options: UseTemporalNowOptions<true>
): { now: Ref<Temporal.ZonedDateTime> } & Pausable;
export function useTemporalNow(options: UseTemporalNowOptions<boolean> = {}) {
  const {
    calendar = "iso8601",
    timeZone = Temporal.Now.timeZoneId(),
    controls: exposeControls = false,
    interval = "requestAnimationFrame",
  } = options;

  const now = ref(Temporal.Now.zonedDateTime(calendar, timeZone));

  const update = () => (now.value = Temporal.Now.zonedDateTime(calendar));

  const controls: Pausable =
    interval === "requestAnimationFrame"
      ? useRafFn(update, { immediate: true })
      : useIntervalFn(update, interval, { immediate: true });

  if (exposeControls) {
    return {
      now,
      ...controls,
    };
  } else {
    return now;
  }
}

export type UseNowReturn = ReturnType<typeof useTemporalNow>;
