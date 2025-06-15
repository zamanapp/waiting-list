declare namespace Intl {
  class DurationFormat {
    constructor(
      locales?: string | string[],
      options?: Intl.DurationFormatOptions
    );
    format(duration: {
      years?: number;
      months?: number;
      weeks?: number;
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
      milliseconds?: number;
    }): string;
  }

  interface DurationFormatOptions {
    style?: "long" | "short" | "narrow" | "digital";
    smallestUnit?: "second" | "minute" | "hour" | "day" | "month" | "year";
    largestUnit?: "second" | "minute" | "hour" | "day" | "month" | "year";
    hideZeroValues?:
      | "all"
      | "leadingAndTrailing"
      | "leadingOnly"
      | "trailingOnly"
      | "none";
    numberingSystem?: string;
    round?: boolean;
  }
}
