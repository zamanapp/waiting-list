import type { Temporal } from "@js-temporal/polyfill";

export const enum SpecificityEnum {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
  LIFE = "life",
}

export interface Deed {
  uid: string;
  start: Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime;
  end: Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime;
  summary: string;
  duration: Temporal.Duration;
  specificity: SpecificityEnum;
  isChecked?: boolean;
}
