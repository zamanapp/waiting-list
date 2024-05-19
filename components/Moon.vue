<template>
  <svg
    id="moonSymbol"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    :width="sizePx"
    :height="sizePx"
    :viewBox="`0 0 ${maxDimension} ${maxDimension}`"
  >
    <defs>
      <circle id="moon" :cx="centerX" :cy="centerY" :r="outerSize" />
      <circle id="crescent" :cx="centerX" :cy="centerY" :r="moonSize" />
      <clipPath id="clip-moon">
        <use xlink:href="#crescent" />
      </clipPath>
      <path
        :dir="$i18n.localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'"
        id="months"
        class="origin-center"
        :d="circleToPath(moonSize + MONTHS_R_CONST)"
      />
      <path
        id="days"
        class="origin-center"
        :d="circleToPath(moonSize + DAYS_R_CONST)"
      />
      <path
        id="hours"
        class="origin-center"
        :d="circleToPath(moonSize + HOURS_R_CONST)"
      />
      <path
        id="minutes"
        class="origin-center"
        :d="circleToPath(moonSize + MINUTES_R_CONST)"
      />
      <path
        id="seconds"
        class="origin-center"
        :d="circleToPath(moonSize + SECONDS_R_CONST)"
      />
    </defs>

    <text
      :dir="$i18n.localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'"
      v-if="showGuide"
      class="origin-center"
      ref="monthsPath"
      :transform="`rotate(0 ${centerX} ${centerY})`"
      :textLength="monthsTextLength"
    >
      <textPath
        :dir="$i18n.localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'"
        :class="`origin-center ${
          $i18n.localeProperties.dir === 'rtl' ? 'font-monoArabic' : 'font-mono'
        } fill-gray-300 dark:fill-gray-500`"
        :style="`font-size: ${monthsFontSize}px;`"
        :textLength="monthsTextLength"
        href="#months"
      >
        <tspan>
          {{ months.split(month)[0] }}
        </tspan>
        <tspan class="font-semibold fill-black dark:fill-gray-300" dy="0">
          {{ month }}
        </tspan>
        <tspan>
          {{ months.split(month)[1] }}
        </tspan>
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="origin-center"
      ref="daysPath"
      :transform="`rotate(0 ${centerX} ${centerY})`"
      :textLength="daysTextLength"
    >
      <textPath
        class="font-mono fill-gray-300 dark:fill-gray-500"
        :style="`font-size: ${daysFontSize}px;`"
        :textLength="daysTextLength"
        href="#days"
      >
        <tspan>
          {{ days.split(String(day))[0] }}
        </tspan>
        <tspan class="font-semibold fill-black dark:fill-gray-300" dy="0">
          {{ day }}
        </tspan>
        <tspan>
          {{ days.split(String(day))[1] }}
        </tspan>
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="origin-center"
      ref="hoursPath"
      :transform="`rotate(0 ${centerX} ${centerY})`"
      :textLength="hoursTextLength"
    >
      <textPath
        class="font-mono fill-gray-300 dark:fill-gray-500"
        :style="`font-size: ${hoursFontSize}px;`"
        :textLength="hoursTextLength"
        href="#hours"
      >
        <tspan>{{ hours.split(String(hour))[0] }}</tspan>
        <tspan class="font-semibold fill-black dark:fill-gray-300" dy="0">
          {{ hour }}
        </tspan>
        <tspan>{{ hours.split(String(hour))[1] }}</tspan>
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="origin-center"
      ref="minutesPath"
      :transform="`rotate(0 ${centerX} ${centerY})`"
      :textLength="minutesTextLength"
    >
      <textPath
        class="font-mono fill-gray-300 dark:fill-gray-500"
        :style="`font-size: ${minutesFontSize}px;`"
        :textLength="minutesTextLength"
        href="#minutes"
      >
        <tspan>
          {{ minutes.split(String(minute))[0] }}
        </tspan>
        <tspan class="font-semibold fill-black dark:fill-gray-300" dy="0">
          {{ minute }}
        </tspan>
        <tspan>
          {{ minutes.split(String(minute))[1] }}
        </tspan>
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="origin-center"
      ref="secondsPath"
      :transform="`rotate(0 ${centerX} ${centerY})`"
      :textLength="secondsTextLength"
    >
      <textPath
        class="font-mono fill-gray-300 dark:fill-gray-500"
        :style="`font-size: ${secondsFontSize}px;`"
        :textLength="secondsTextLength"
        href="#seconds"
      >
        <tspan>
          {{ seconds.split(String(second))[0] }}
        </tspan>
        <tspan class="font-semibold fill-black dark:fill-gray-300" dy="0">
          {{ second }}
        </tspan>
        <tspan>
          {{ seconds.split(String(second))[1] }}
        </tspan>
      </textPath>
    </text>

    <rect
      class="illusion fill-black dark:fill-gray-950"
      clip-path="url(#clip-moon)"
      width="50%"
      height="100%"
      :x="flipValue"
    />
    <rect
      class="illusion fill-white dark:fill-gray-300"
      clip-path="url(#clip-moon)"
      width="50%"
      height="100%"
      :x="flipValue === 0 ? maxDimension / 2 : 0"
    />

    <use
      fill-opacity="0"
      fill="white"
      class="stroke-black dark:stroke-gray-300 dark:shadow-xl shadow-gray-200"
      href="#moon"
      :stroke-width="lineWeight"
    ></use>
    <use href="#crescent" :class="`disc ${fill}`" />
    <!-- <rect width="3px" height="100%" :x="centerX" fill="red" />
    <rect width="100%" height="3px" :y="centerY" fill="red" /> -->
  </svg>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { Calendars, calendarsValues } from "../types/Calendars";

const BASE_SIZE = 348;

const propsConfig = {
  moonSize: {
    type: Number,
    default: BASE_SIZE,
    required: false,
  },
  lineWeight: {
    type: Number,
    default: 14,
    required: false,
  },
  moonDegree: {
    type: Number,
    required: false,
  },
  flip: {
    type: Boolean,
    default: false,
    required: false,
  },
  date: {
    type: [String, Number, Object] as PropType<string | number | Date>,
    required: false,
  },
  calendar: {
    type: String as PropType<Calendars>,
    required: false,
    validator(value: Calendars) {
      return calendarsValues.includes(value);
    },
    default: Calendars.UMM_AL_QURA,
  },
  showGuide: {
    type: Boolean,
    require: false,
    default: false,
  },
};
</script>

<script setup lang="ts">
import { Temporal, Intl } from "@js-temporal/polyfill";
import { computed, ref } from "vue";
import { breakpointsTailwind, useWindowFocus, whenever } from "@vueuse/core";
import { gsap } from "gsap";
import Browser from "bowser";
// https://tc39.es/proposal-temporal/docs/calendar.html#writing-cross-calendar-code
// todo: customize https://github.com/GriffinJohnston/uiball-loaders
// realtime: https://dev.to/thormeier/use-your-i-moon-gination-lets-build-a-moon-phase-visualizer-with-css-and-js-aih
// https://css-tricks.com/set-text-on-a-circle/
// http://jsfiddle.net/alnitak/ah1k1mo3/
const props = defineProps(propsConfig);
const breakpoints = useBreakpoints(breakpointsTailwind);
const focused = useWindowFocus();
const encoder = new TextEncoder();

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const { locale } = useI18n();

let orbsSurface = computed(() => {
  if (mobile.value) {
    return props.moonSize * 1.75; // 175% of the moon size
  } else if (tablets.value) {
    return props.moonSize * 1.5; // 150% of the moon size
  } else {
    return props.moonSize * 0.73; // we take 73% of the remaining space to allow it to be used by the orbits
  }
});

// we calculate the orbits radius additional constant by by dividing that space equally then we minus the font size used on the orb to shift the radius
const MONTHS_R_CONST = computed(() => orbsSurface.value); // the last orbit uses all the available space
const DAYS_R_CONST = computed(
  () => orbsSurface.value * (4 / 5) - daysFontSize.value / 3
);
const HOURS_R_CONST = computed(
  () => orbsSurface.value * (3 / 5) - hoursFontSize.value / 2
);
const MINUTES_R_CONST = computed(
  () => orbsSurface.value * (2 / 5) - minutesFontSize.value
);
const SECONDS_R_CONST = computed(
  () => orbsSurface.value * (1 / 5) - secondsFontSize.value
);

const moCircumference = computed(
  () => 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value)
);
const dCircumference = computed(
  () => 2 * Math.PI * (props.moonSize + DAYS_R_CONST.value)
);
const hCircumference = computed(
  () => 2 * Math.PI * (props.moonSize + HOURS_R_CONST.value)
);
const mCircumference = computed(
  () => 2 * Math.PI * (props.moonSize + MINUTES_R_CONST.value)
);
const sCircumference = computed(
  () => 2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value)
);

const monthsFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface.value);
  // we take the size of the hijri months as they are longer
  const size = circumference / encoder.encode(hijriMonths.value).length;
  return size * 1.3;
});
const daysFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (4 / 5));
  const size = circumference / days.value.length;
  return size * 1.3;
});
const hoursFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (3 / 5));
  const size = circumference / hours.value.length;
  return size * 1.2;
});
const minutesFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (2 / 5));
  const size = circumference / (minutes.length + (minutes.length - 1));
  return size * 4;
});
const secondsFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (1 / 5));
  const size = circumference / (seconds.length + (seconds.length - 1));
  return size * 4;
});

const browser = Browser.getParser(window.navigator.userAgent).getBrowser().name;

const monthsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value);
  const unit = circumference / moLength.value;
  return browser === "Safari" ? circumference - unit : circumference - unit;
});

const daysTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + DAYS_R_CONST.value);
  const unit = circumference / days.value.length;
  return browser === "Safari" ? circumference - unit : circumference - unit;
});

const hoursTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + HOURS_R_CONST.value);
  const unit = circumference / hours.value.length;
  return browser === "Safari" ? circumference - unit : circumference - unit;
});

const minutesTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + MINUTES_R_CONST.value);
  const unit = circumference / minutes.length;
  return browser === "Safari" ? circumference - unit : circumference - unit;
});

const secondsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value);
  const unit = circumference / seconds.length;
  return browser === "Safari" ? circumference - unit : circumference - unit;
});

const monthsPath = ref<SVGTextElement | null>(null);
const daysPath = ref<SVGTextElement | null>(null);
const hoursPath = ref<SVGTextElement | null>(null);
const minutesPath = ref<SVGTextElement | null>(null);
const secondsPath = ref<SVGTextElement | null>(null);

const sizePx = computed(() => `${props.moonSize}px`);
const outerSize = computed(() => props.moonSize + props.lineWeight / 2 - 1);
const maxDimension = computed(() => props.moonSize * 4);
const centerX = computed(() => maxDimension.value / 2);
const centerY = computed(() => maxDimension.value / 2);

const cal = computed(() =>
  Temporal.Calendar.from(
    props.calendar ? props.calendar : Calendars.UMM_AL_QURA
  )
);
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

let temporalDate = useTemporalNow({
  calendar: cal.value,
  timeZone,
});

const moonPhase = computed(() => {
  return props.moonDegree || props.moonDegree === 0
    ? props.moonDegree
    : (temporalDate.value.withCalendar(Calendars.UMM_AL_QURA).day * 360) /
        (temporalDate.value.withCalendar(Calendars.UMM_AL_QURA).daysInMonth +
          1);
});

let moonDeg = computed(() => `${moonPhase.value}deg`);

const seconds = Array.from({ length: 60 }, (_: number, i: number) =>
  i <= 9 ? `0${i}` : String(i)
)
  .join(" ")
  .concat(" ");

const minutes = Array.from({ length: 60 }, (_: number, i: number) =>
  i <= 9 ? `0${i}` : String(i)
)
  .join(" ")
  .concat(" ");

let hours = computed(() => {
  return Array.from(
    { length: temporalDate.value.hoursInDay },
    (_: number, i: number) => (i + 1 <= 9 ? `0${i + 1}` : String(i + 1))
  )
    .join(" ")
    .concat(" ");
});

let days = computed(() => {
  return Array.from(
    { length: temporalDate.value.daysInMonth },
    (_: number, i: number) => (i + 1 <= 9 ? `0${i + 1}` : String(i + 1))
  )
    .join(" ")
    .concat(" ");
});

const months = computed(() => {
  return Array.from(
    { length: temporalDate.value.monthsInYear },
    (_: number, i: number) => {
      const date = temporalDate.value.with({
        day: 1,
        month: i + 1,
      });
      return " ".concat(
        new Intl.DateTimeFormat(locale.value, {
          month: "short",
          calendar: cal.value,
        }).format(date.toInstant())
      );
    }
  )
    .join("")
    .concat(" ");
});

const hijriMonths = computed(() => {
  return Array.from(
    {
      length: temporalDate.value.withCalendar(Calendars.UMM_AL_QURA)
        .monthsInYear,
    },
    (_: number, i: number) => {
      const date = temporalDate.value.withCalendar(Calendars.UMM_AL_QURA).with({
        day: 1,
        month: i + 1,
      });
      return " ".concat(
        new Intl.DateTimeFormat(locale.value, {
          month: "short",
          calendar: Calendars.UMM_AL_QURA,
        }).format(date.toInstant())
      );
    }
  )
    .join("")
    .concat(" ");
});

const month = computed(() => {
  return new Intl.DateTimeFormat(locale.value, {
    month: "short",
    calendar: cal.value,
  }).format(temporalDate.value.toInstant());
});

// some ligatures in arabic combine two letters in one glyph so we need to count them out
console.log(months.value);
console.log(locale.value);
// const DUAL_GLYPH_LIGATURES = 4;
// const moLength = computed(() =>
//   locale.value === "ar"
//     ? months.value.length - DUAL_GLYPH_LIGATURES
//     : months.value.length
// );
const moLength = computed(() => encoder.encode(months.value).length);

console.log("length", moLength.value);
console.log("size", encoder.encode(months.value).length);

const day = computed(() => {
  return temporalDate.value.day <= 9
    ? `0${temporalDate.value.day}`
    : String(temporalDate.value.day);
});

const hour = computed(() => {
  if (temporalDate.value.hour === 0) {
    return "24";
  } else if (temporalDate.value.hour <= 9) {
    return `0${temporalDate.value.hour}`;
  } else {
    return String(temporalDate.value.hour);
  }
});

const minute = computed(() => {
  return temporalDate.value.minute <= 9
    ? `0${temporalDate.value.minute}`
    : String(temporalDate.value.minute);
});

const second = computed(() => {
  return temporalDate.value.second <= 9
    ? `0${temporalDate.value.second}`
    : String(temporalDate.value.second);
});

const moSpace = computed(() => moCircumference.value / moLength.value);
const moUnit = computed(() => (moSpace.value * 360) / moCircumference.value);
const moIndex = computed(() =>
  locale.value === "ar"
    ? months.value.length -
      (months.value.search(month.value) + month.value.length)
    : months.value.search(month.value)
);
const monthsRotation = computed(() => {
  return (
    moUnit.value * moIndex.value -
    (moLength.value / 4) * moUnit.value +
    (moUnit.value * (month.value.length - 1)) / 2
  );
});

const dSpace = computed(() => dCircumference.value / days.value.length);
const dUnit = computed(() => (dSpace.value * 360) / dCircumference.value);
const dIndex = computed(() => days.value.search(day.value));
const daysRotation = computed(
  () =>
    dUnit.value * dIndex.value +
    dUnit.value -
    (days.value.length / 4) * dUnit.value
);

const hSpace = computed(() => hCircumference.value / hours.value.length);
const hUnit = computed(() => (hSpace.value * 360) / hCircumference.value);
const hIndex = computed(() => hours.value.search(hour.value));
const hoursRotation = computed(
  () =>
    hUnit.value * hIndex.value +
    hUnit.value -
    (hours.value.length / 4) * hUnit.value
);

const mSpace = computed(() => mCircumference.value / minutes.length);
const mUnit = computed(() => (mSpace.value * 360) / mCircumference.value);
const mIndex = computed(() => minutes.search(minute.value));
const minutesRotation = computed(
  () =>
    mUnit.value * mIndex.value +
    mUnit.value -
    (minutes.length / 4) * mUnit.value
);

// circumference -> 360
// one space -> ?
// one space * 360 / circumference
const sSpace = computed(() => sCircumference.value / seconds.length);
const sUnit = computed(() => (sSpace.value * 360) / sCircumference.value);
const sIndex = computed(() => seconds.search(second.value));
const secondsRotation = computed(
  () =>
    sUnit.value * sIndex.value +
    sUnit.value -
    (seconds.length / 4) * sUnit.value
);

const resettingAnimation = ref(false);

whenever(focused, () => {
  if (!resettingAnimation.value) {
    resettingAnimation.value = true;
    gsap.fromTo(
      secondsPath.value,
      {
        attr: {
          transform: `rotate(0 ${centerX.value} ${centerY.value})`,
        },
      },
      {
        attr: {
          transform: `rotate(${-secondsRotation.value} ${centerX.value} ${
            centerY.value
          })`,
        },
        duration: 0.1,
        // in out
        ease: "sine",
        transformOrigin: "center center center",
      }
    );

    gsap.fromTo(
      minutesPath.value,
      {
        attr: {
          transform: `rotate(0 ${centerX.value} ${centerY.value})`,
        },
      },
      {
        attr: {
          transform: `rotate(${-minutesRotation.value} ${centerX.value} ${
            centerY.value
          })`,
        },
        duration: 0.5,
        // in out
        ease: "sine",
        transformOrigin: "center center center",
      }
    );

    gsap.fromTo(
      hoursPath.value,
      {
        attr: {
          transform: `rotate(0 ${centerX.value} ${centerY.value})`,
        },
      },
      {
        attr: {
          transform: `rotate(${-hoursRotation.value} ${centerX.value} ${
            centerY.value
          })`,
        },
        duration: 0.5,
        // in out
        ease: "sine",
        transformOrigin: "center center center",
      }
    );

    gsap.fromTo(
      daysPath.value,
      {
        attr: {
          transform: `rotate(0 ${centerX.value} ${centerY.value})`,
        },
      },
      {
        attr: {
          transform: `rotate(${-daysRotation.value} ${centerX.value} ${
            centerY.value
          })`,
        },
        duration: 0.5,
        // in out
        ease: "sine",
        transformOrigin: "center center center",
      }
    );

    gsap.fromTo(
      monthsPath.value,
      {
        attr: {
          transform: `rotate(0 ${centerX.value} ${centerY.value})`,
        },
      },
      {
        attr: {
          transform: `rotate(${-monthsRotation.value} ${centerX.value} ${
            centerY.value
          })`,
        },
        duration: 0.5,
        // in out
        ease: "sine",
        transformOrigin: "center center center",
      }
    );
    resettingAnimation.value = false;
  }
});

onMounted(() => {
  watch(secondsRotation, () => {
    gsap.to(secondsPath.value, {
      attr: {
        transform: `rotate(${-secondsRotation.value} ${centerX.value} ${
          centerY.value
        })`,
      },
      duration: 0.3,
      // in out
      ease: "sine",
      transformOrigin: "center center center",
    });
    gsap.to(minutesPath.value, {
      attr: {
        transform: `rotate(${-minutesRotation.value} ${centerX.value} ${
          centerY.value
        })`,
      },
      duration: 0.5,
      // in out
      ease: "sine",
      transformOrigin: "center center center",
    });
    gsap.to(hoursPath.value, {
      attr: {
        transform: `rotate(${-hoursRotation.value} ${centerX.value} ${
          centerY.value
        })`,
      },
      duration: 0.5,
      // in out
      ease: "sine",
      transformOrigin: "center center center",
    });
    gsap.to(daysPath.value, {
      attr: {
        transform: `rotate(${-daysRotation.value} ${centerX.value} ${
          centerY.value
        })`,
      },
      duration: 0.5,
      // in out
      ease: "sine",
      transformOrigin: "center center center",
    });
    gsap.to(monthsPath.value, {
      attr: {
        transform: `rotate(${-monthsRotation.value} ${centerX.value} ${
          centerY.value
        })`,
      },
      duration: 0.5,
      // in out
      ease: "sine",
      transformOrigin: "center center center",
    });
  });
});

// watch(
//   locale,
//   () => {
//     // arabic text combines some letters into one ligature
//     monthsRotation.value = 0;
//     monthsRotation.value =
//       moUnit * moIndex.value -
//       (moLength.value / 4) * moUnit +
//       (moUnit * (month.value.length - 1)) / 2;

//     console.log("local length", moLength.value);
//     console.log("locale index", moIndex.value);
//     console.log("locale rotation", monthsRotation.value);

//     daysRotation.value =
//       dUnit * dIndex + dUnit - (days.value.length / 4) * dUnit;

//     // hoursRotation.value =
//     //   hUnit * hIndex + hUnit - (hours.value.length / 4) * hUnit;

//     // minutesRotation.value = mUnit * mIndex + mUnit - (minutes.length / 4) * mUnit;

//     // secondsRotation.value = sUnit * sIndex + sUnit - (seconds.length / 4) * sUnit;
//   },
//   { flush: "post" }
// );
const flipValue = computed(() => {
  if (props.flip) {
    return moonPhase.value > 180 ? 0 : maxDimension.value / 2;
  } else {
    return moonPhase.value > 180 ? maxDimension.value / 2 : 0;
  }
});

const fill = computed(() =>
  moonPhase.value >= 90 && moonPhase.value <= 270
    ? "fill-white dark:fill-gray-300"
    : "fill-black dark:fill-gray-950"
);

function circleToPath(
  r: number,
  cx: number = centerX.value,
  cy: number = centerY.value
) {
  // https://stackoverflow.com/questions/5737975/circle-drawing-with-svgs-arc-path/10477334#10477334
  return `M ${cx} ${cy}
      m -${r}, 0
      a ${r},${r} 0 1,1 ${r * 2},0
      a ${r},${r} 0 1,1 -${r * 2},0`;
}
</script>

<style>
.disc {
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateY(v-bind(moonDeg));
  backface-visibility: visible;
}

text {
  text-rendering: geometricPrecision;
}
</style>
