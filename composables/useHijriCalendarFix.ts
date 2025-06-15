import { computed } from "vue";
import Browser from "bowser";

interface HijriMonthMapping {
  [key: string]: string;
}

// Mapping of English Gregorian months to their Hijri equivalents
// Based on the Moon component's month mappings
const gregorianToHijriMonths: HijriMonthMapping = {
  // Full month names (what might appear in the bug)
  January: "Muharram",
  February: "Safar",
  March: "Rabi' al-awwal",
  April: "Rabi' al-thani",
  May: "Jumada al-awwal",
  June: "Jumada al-thani",
  July: "Rajab",
  August: "Sha'ban",
  September: "Ramadan",
  October: "Shawwal",
  November: "Dhu al-Qi'dah",
  December: "Dhu al-Hijjah",

  // Abbreviated versions (consistent with Moon component)
  // Jan: "Muh.",
  // Feb: "Saf.",
  // Mar: "Rab. I",
  // Apr: "Rab. II",
  // May: "Jum. I",
  // Jun: "Jum. II",
  // Jul: "Raj.",
  // Aug: "Sha.",
  // Sep: "Ram.",
  // Oct: "Shaw.",
  // Nov: "Dhuʻl-Q.",
  // Dec: "Dhuʻl-H.",
};

export function useHijriCalendarFix() {
  // Detect if we're on Chrome Android (where the bug occurs)
  // Only check on client side to avoid SSR issues
  const isChromiumAndroid = computed(() => {
    // Return false during SSR
    if (import.meta.server) return false;

    // Check if window exists (additional safety check)
    if (typeof window === "undefined") return false;

    try {
      const browserInfo = Browser.parse(window.navigator.userAgent);
      return (
        browserInfo.browser.name === "Chrome" &&
        browserInfo.os.name === "Android"
      );
    } catch (error) {
      // Fallback in case browser detection fails
      console.warn("Browser detection failed:", error);
      return false;
    }
  });

  /**
   * Check if the heading value shows signs of the Chrome Android Islamic calendar bug
   * The bug manifests as:
   * 1. Contains "BC" instead of "AH"
   * 2. Contains Gregorian month names when it should show Hijri months
   */
  const hasChromiumAndroidIslamicCalendarBug = (
    headingValue: string
  ): boolean => {
    // During SSR, we can't detect the browser, so assume no bug
    if (import.meta.server) return false;

    if (!isChromiumAndroid.value) return false;

    // The telltale sign of the bug is "BC" appearing in what should be an Islamic date
    return headingValue.includes("BC");
  };

  /**
   * Fix the Chrome Android bug that shows Gregorian months instead of Hijri months
   * when formatting dates with Islamic calendar, and replaces BC with AH
   *
   * Only applies the fix when the bug symptoms are detected to avoid affecting
   * legitimate Gregorian calendar dates
   */
  const fixHijriCalendarHeading = (headingValue: string): string => {
    // Only apply fix if we detect the specific Chrome Android Islamic calendar bug
    if (!hasChromiumAndroidIslamicCalendarBug(headingValue)) {
      return headingValue;
    }

    // Replace BC with AH for era fix (consistent with Moon component pattern)
    let fixedHeading = headingValue.replace(/\s*BC\s*/g, " AH");

    // Replace Gregorian month names with Hijri equivalents
    Object.entries(gregorianToHijriMonths).forEach(([gregorian, hijri]) => {
      const regex = new RegExp(`\\b${gregorian}\\b`, "gi");
      fixedHeading = fixedHeading.replace(regex, hijri);
    });

    return fixedHeading;
  };

  return {
    isChromiumAndroid,
    fixHijriCalendarHeading,
    hasChromiumAndroidIslamicCalendarBug,
  };
}
