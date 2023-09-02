<template>
  <div>hello</div>
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
      <path id="months" :d="circleToPath(moonSize + MONTHS_R_CONST)" />
      <path id="days" :d="circleToPath(moonSize + DAYS_R_CONST)" />
      <path id="hours" :d="circleToPath(moonSize + HOURS_R_CONST)" />
      <path id="minutes" :d="circleToPath(moonSize + MINUTES_R_CONST)" />
      <path id="seconds" :d="circleToPath(moonSize + SECONDS_R_CONST)" />
    </defs>

    <text v-if="showGuide" :textLength="monthsTextLength">
      <textPath
        :class="`${
          $i18n.localeProperties.dir === 'rtl' ? 'font-monoArabic' : 'font-mono'
        } fill-slate-300 dark:fill-slate-500`"
        :style="`font-size: ${monthsFontSize}px;`"
        :textLength="monthsTextLength"
        href="#months"
      >
        {{ months.split(month)[0] }}
        <tspan class="font-semibold fill-black dark:fill-slate-300" dy="0">
          {{ month }}
        </tspan>
        {{ months.split(month)[1] }}
      </textPath>
    </text>
    <text v-if="showGuide" :textLength="daysTextLength">
      <textPath
        class="font-mono fill-slate-300 dark:fill-slate-500"
        :style="`font-size: ${daysFontSize}px;`"
        :textLength="daysTextLength"
        href="#days"
      >
        {{ days.split(String(day))[0] }}
        <tspan class="font-semibold fill-black dark:fill-slate-300" dy="0">
          {{ day }}
        </tspan>
        {{ days.split(String(day))[1] }}
      </textPath>
    </text>
    <text v-if="showGuide" :textLength="hoursTextLength">
      <textPath
        class="font-mono fill-slate-300 dark:fill-slate-500"
        :style="`font-size: ${hoursFontSize}px;`"
        :textLength="hoursTextLength"
        href="#hours"
      >
        {{ hours.split(String(hour))[0] }}
        <tspan class="font-semibold fill-black dark:fill-slate-300" dy="0">
          {{ hour }}
        </tspan>
        {{ hours.split(String(hour))[1] }}
      </textPath>
    </text>
    <text v-if="showGuide" :textLength="minutesTextLength">
      <textPath
        class="font-mono fill-slate-300 dark:fill-slate-500"
        :style="`font-size: ${minutesFontSize}px;`"
        :textLength="minutesTextLength"
        href="#minutes"
      >
        {{ minutes.split(String(minute))[0] }}
        <tspan class="font-semibold fill-black dark:fill-slate-300" dy="0">
          {{ minute }}
        </tspan>
        {{ minutes.split(String(minute))[1] }}
      </textPath>
    </text>
    <text v-if="showGuide" :textLength="secondsTextLength">
      <textPath
        class="font-mono fill-slate-300 dark:fill-slate-500"
        :style="`font-size: ${secondsFontSize}px;`"
        href="#seconds"
        :textLength="secondsTextLength"
      >
        {{ seconds.split(String(second))[0].trim() }}
        <tspan class="font-semibold fill-black dark:fill-slate-300" dy="0">
          {{ second }}
        </tspan>
        {{ seconds.split(String(second))[1].trim() }}
      </textPath>
    </text>

    <rect
      class="illusion fill-black dark:fill-slate-950"
      clip-path="url(#clip-moon)"
      width="50%"
      height="100%"
      :x="flipValue"
    />
    <rect
      class="illusion fill-white dark:fill-slate-300"
      clip-path="url(#clip-moon)"
      width="50%"
      height="100%"
      :x="flipValue === 0 ? maxDimension / 2 : 0"
    />

    <use
      fill-opacity="0"
      fill="white"
      class="stroke-black dark:stroke-slate-300 dark:shadow-xl shadow-slate-200"
      href="#moon"
      :stroke-width="lineWeight"
    ></use>
    <use href="#crescent" :class="`disc ${fill}`" />
    <!-- <rect width="3px" height="100%" :x="centerX" fill="red" />
    <rect width="100%" height="3px" :y="centerY" fill="red" /> -->
  </svg>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Calendars, calendarsValues } from "../../types/Calendars";

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
import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
import { computed, ref, unref } from "vue";
import { useNow, breakpointsTailwind } from "@vueuse/core";

// https://tc39.es/proposal-temporal/docs/calendar.html#writing-cross-calendar-code
// todo: customize https://github.com/GriffinJohnston/uiball-loaders
// realtime: https://dev.to/thormeier/use-your-i-moon-gination-lets-build-a-moon-phase-visualizer-with-css-and-js-aih
// https://css-tricks.com/set-text-on-a-circle/
// http://jsfiddle.net/alnitak/ah1k1mo3/
const props = defineProps(propsConfig);
const breakpoints = useBreakpoints(breakpointsTailwind);

const tablets = breakpoints.between("md", "lg");
const mobile = breakpoints.smaller("md");
const { locale } = useI18n();

let orbsSurface = ref(props.moonSize * 0.73); // we take 63% of the remaining space to allow it to be used by the orbits
if (mobile.value) {
  orbsSurface.value = props.moonSize * 1.75;
} else if (tablets.value) {
  orbsSurface.value = props.moonSize * 1.5;
}

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
  () => 2 * Math.PI * (props.moonSize + MINUTES_R_CONST.value)
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
  const size = circumference / (moLength.value + (moLength.value - 1));
  return size * 3;
});
const daysFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (4 / 5));
  const size = circumference / (days.value.length + (days.value.length - 1));
  return size * 3;
});
const hoursFontSize = computed(() => {
  const circumference =
    2 * Math.PI * (props.moonSize + orbsSurface.value * (3 / 5));
  const size = circumference / (hours.value.length + (hours.value.length - 1));
  return size * 3;
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

const sizePx = computed(() => `${props.moonSize}px`);
const outerSize = computed(() => props.moonSize + props.lineWeight / 2 - 1);
const maxDimension = computed(() => props.moonSize * 4);
const centerX = computed(() => maxDimension.value / 2);
const centerY = computed(() => maxDimension.value / 2);

const now = useNow();
const cal = ref(
  Temporal.Calendar.from(
    props.calendar ? props.calendar : Calendars.UMM_AL_QURA
  )
);
unref(now.value).toTemporalInstant = toTemporalInstant;
let temporalDate = unref(now.value).toTemporalInstant().toZonedDateTime({
  calendar: cal.value,
  timeZone: Temporal.Now.timeZone(),
});
let rotation = ref(props.moonDegree ? props.moonDegree : 0);
let moonDeg = ref(`${rotation.value}deg`);
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

let hours = ref(
  Array.from({ length: temporalDate.hoursInDay }, (_: number, i: number) =>
    i + 1 <= 9 ? `0${i + 1}` : String(i + 1)
  )
    .join(" ")
    .concat(" ")
);

let days = ref(
  Array.from({ length: temporalDate.daysInMonth }, (_: number, i: number) =>
    i + 1 <= 9 ? `0${i + 1}` : String(i + 1)
  )
    .join(" ")
    .concat(" ")
);

let months = ref(
  Array.from({ length: temporalDate.monthsInYear }, (_: number, i: number) => {
    const date = Temporal.ZonedDateTime.from({
      day: 1,
      month: i + 1,
      year: temporalDate.year,
      calendar: cal.value,
      timeZone: temporalDate.timeZone,
    });
    return " ".concat(
      new Intl.DateTimeFormat(locale.value, {
        month: "short",
        calendar: cal.value,
      }).format(date)
    );
  })
    .join("")
    .concat(" ")
);

let month = ref(
  new Intl.DateTimeFormat(locale.value, {
    month: "short",
    calendar: cal.value,
  }).format(temporalDate)
);

// some ligatures in arabic combine two letters in one glyph so we need to count them out
const DUAL_GLYPH_LIGATURES = 4;
const moLength = computed(() =>
  locale.value === "ar"
    ? months.value.length - DUAL_GLYPH_LIGATURES
    : months.value.length
);

let day = ref(
  temporalDate.day <= 9 ? `0${temporalDate.day}` : String(temporalDate.day)
);

let hour = computed(() => {
  if (temporalDate.hour === 0) {
    return "24";
  } else if (temporalDate.hour <= 9) {
    return `0${temporalDate.hour}`;
  } else {
    return String(temporalDate.hour);
  }
});

let minute = ref(
  temporalDate.minute <= 9
    ? `0${temporalDate.minute}`
    : String(temporalDate.minute)
);

let second = ref(
  temporalDate.second <= 9
    ? `0${temporalDate.second}`
    : String(temporalDate.second)
);

const moSpace = moCircumference.value / moLength.value;
const moUnit = (moSpace * 360) / moCircumference.value;
const moIndex = computed(() =>
  locale.value === "ar"
    ? months.value.length -
      (months.value.search(month.value) + month.value.length)
    : months.value.search(month.value)
);
const monthsRotation = ref(
  moUnit * moIndex.value -
    (moLength.value / 4) * moUnit +
    (moUnit * (month.value.length - 1)) / 2
);
console.log("length", moLength.value);
console.log("index", moIndex.value);
console.log("rotation", monthsRotation.value);

const dSpace = dCircumference.value / days.value.length;
const dUnit = (dSpace * 360) / dCircumference.value;
const dIndex = days.value.search(day.value);
const daysRotation = ref(
  dUnit * dIndex + dUnit - (days.value.length / 4) * dUnit
);

const hSpace = hCircumference.value / hours.value.length;
const hUnit = (hSpace * 360) / hCircumference.value;
const hIndex = hours.value.search(hour.value);
const hoursRotation = ref(
  hUnit * hIndex + hUnit - (hours.value.length / 4) * hUnit
);

const mSpace = mCircumference.value / minutes.length;
const mUnit = (mSpace * 360) / mCircumference.value;
const mIndex = minutes.search(minute.value);
const minutesRotation = ref(
  mUnit * mIndex + mUnit - (minutes.length / 4) * mUnit
);

// circumference -> 360
// one space -> ?
// one space * 360 / circumference
const sSpace = sCircumference.value / seconds.length;
const sUnit = (sSpace * 360) / sCircumference.value;
const sIndex = seconds.search(second.value);
const secondsRotation = ref(
  sUnit * sIndex + sUnit - (seconds.length / 4) * sUnit
);

// const focused = useWindowFocus();

watch(
  locale,
  () => {
    months.value = Array.from(
      { length: temporalDate.monthsInYear },
      (_: number, i: number) => {
        const date = Temporal.ZonedDateTime.from({
          day: 1,
          month: i + 1,
          year: temporalDate.year,
          calendar: cal.value,
          timeZone: temporalDate.timeZone,
        });
        return " ".concat(
          new Intl.DateTimeFormat(locale.value, {
            month: "short",
            calendar: cal.value,
          }).format(date)
        );
      }
    )
      .join("")
      .concat(" ");

    month.value = new Intl.DateTimeFormat(locale.value, {
      month: "short",
      calendar: cal.value,
    }).format(temporalDate);

    // arabic text combines some letters into one ligature
    monthsRotation.value = 0;
    monthsRotation.value =
      moUnit * moIndex.value -
      (moLength.value / 4) * moUnit +
      (moUnit * (month.value.length - 1)) / 2;

    console.log("local length", moLength.value);
    console.log("locale index", moIndex.value);
    console.log("locale rotation", monthsRotation.value);

    // daysRotation.value = dUnit * dIndex + dUnit - (days.value.length / 4) * dUnit;

    // hoursRotation.value =
    //   hUnit * hIndex + hUnit - (hours.value.length / 4) * hUnit;

    // minutesRotation.value = mUnit * mIndex + mUnit - (minutes.length / 4) * mUnit;

    // secondsRotation.value = sUnit * sIndex + sUnit - (seconds.length / 4) * sUnit;
  },
  { flush: "post" }
);

let monthsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value);
  const unit = circumference / moLength.value;
  return circumference - unit;
});

let daysTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + DAYS_R_CONST.value);
  const unit = circumference / days.value.length;
  return circumference - unit;
});

let hoursTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + HOURS_R_CONST.value);
  const unit = circumference / hours.value.length;
  return circumference - unit;
});

let minutesTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + MINUTES_R_CONST.value);
  const unit = circumference / minutes.length;
  return circumference - unit;
});

let secondsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value);
  const unit = circumference / seconds.length;
  return circumference - unit;
});

const flipValue = computed(() => {
  if (props.flip) {
    return rotation.value > 180 ? 0 : maxDimension.value / 2;
  } else {
    return rotation.value > 180 ? maxDimension.value / 2 : 0;
  }
});

const fill = computed(() =>
  rotation.value >= 90 && rotation.value <= 270
    ? "fill-white dark:fill-slate-300"
    : "fill-black dark:fill-slate-950"
);

watch(now, (_, oldNow) => {
  unref(now.value).toTemporalInstant = toTemporalInstant;

  temporalDate = unref(now.value).toTemporalInstant().toZonedDateTime({
    calendar: cal.value,
    timeZone: Temporal.Now.timeZone(),
  });

  hours.value = Array.from(
    { length: temporalDate.hoursInDay },
    (_: number, i: number) => (i + 1 <= 9 ? `0${i + 1}` : String(i + 1))
  )
    .join(" ")
    .concat(" ");

  days.value = Array.from(
    { length: temporalDate.daysInMonth },
    (_: number, i: number) => (i + 1 <= 9 ? `0${i + 1}` : String(i + 1))
  )
    .join(" ")
    .concat(" ");

  months.value = Array.from(
    { length: temporalDate.monthsInYear },
    (_: number, i: number) => {
      const date = Temporal.ZonedDateTime.from({
        day: 1,
        month: i + 1,
        year: temporalDate.year,
        calendar: cal.value,
        timeZone: temporalDate.timeZone,
      });
      return " ".concat(
        new Intl.DateTimeFormat(locale.value, {
          month: "short",
          calendar: cal.value,
        }).format(date)
      );
    }
  )
    .join("")
    .concat(" ");

  month.value = new Intl.DateTimeFormat(locale.value, {
    month: "short",
    calendar: cal.value,
  }).format(temporalDate);

  day.value =
    temporalDate.day <= 9 ? `0${temporalDate.day}` : String(temporalDate.day);

  hour = computed(() => {
    if (temporalDate.hour === 0) {
      return "24";
    } else if (temporalDate.hour <= 9) {
      return `0${temporalDate.hour}`;
    } else {
      return String(temporalDate.hour);
    }
  });

  minute.value =
    temporalDate.minute <= 9
      ? `0${temporalDate.minute}`
      : String(temporalDate.minute);

  second.value =
    temporalDate.second <= 9
      ? `0${temporalDate.second}`
      : String(temporalDate.second);

  if (oldNow.getMonth() !== now.value.getMonth()) {
    monthsRotation.value =
      monthsRotation.value + (moUnit * month.value.length + moUnit);
  }

  if (oldNow.getDay() !== now.value.getDay()) {
    daysRotation.value =
      daysRotation.value + (dUnit * day.value.length + dUnit);
  }

  if (oldNow.getHours() !== now.value.getHours()) {
    hoursRotation.value =
      hoursRotation.value + (hUnit * hour.value.length + hUnit);
  }

  if (oldNow.getMinutes() !== now.value.getMinutes()) {
    minutesRotation.value =
      minutesRotation.value + (mUnit * minute.value.length + mUnit);
  }

  if (oldNow.getSeconds() !== now.value.getSeconds()) {
    secondsRotation.value =
      secondsRotation.value + (sUnit * second.value.length + sUnit);
  }

  monthsTextLength = computed(() => {
    const circumference = 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value);
    const unit = circumference / moLength.value;
    return circumference - unit;
  });

  daysTextLength = computed(() => {
    const circumference = 2 * Math.PI * (props.moonSize + DAYS_R_CONST.value);
    const unit = circumference / days.value.length;
    return circumference - unit;
  });

  hoursTextLength = computed(() => {
    const circumference = 2 * Math.PI * (props.moonSize + HOURS_R_CONST.value);
    const unit = circumference / hours.value.length;
    return circumference - unit;
  });

  minutesTextLength = computed(() => {
    const circumference =
      2 * Math.PI * (props.moonSize + MINUTES_R_CONST.value);
    const unit = circumference / minutes.length;
    return circumference - unit;
  });

  secondsTextLength = computed(() => {
    const circumference =
      2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value);
    const unit = circumference / seconds.length;
    return circumference - unit;
  });

  rotation.value =
    props.moonDegree || props.moonDegree === 0
      ? props.moonDegree
      : (temporalDate.day * 360) / (temporalDate.daysInMonth + 1);

  moonDeg.value = `${rotation.value}deg`;
});

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
