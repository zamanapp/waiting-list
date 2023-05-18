<template>
  <svg
    id="moon-symbol"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
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

    <text
      v-if="showGuide"
      class="transition-transform duration-500 ease-in-out origin-center"
      :transform="`rotate(${-monthsRotation})`"
    >
      <textPath
        class="font-mono fill-gray-300"
        :style="`font-size: ${monthsFontSize}px;`"
        :textLength="monthsTextLength"
        href="#months"
      >
        {{ months.split(month)[0] }}
        <tspan class="font-semibold fill-black" dy="0">{{ month }}</tspan>
        {{ months.split(month)[1] }}
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="transition-transform duration-500 ease-in-out origin-center"
      :transform="`rotate(${-daysRotation})`"
    >
      <textPath
        class="font-mono fill-gray-300"
        :style="`font-size: ${daysFontSize}px;`"
        side="right"
        :textLength="daysTextLength"
        href="#days"
      >
        {{ days.split(String(day))[0] }}
        <tspan class="font-semibold fill-black" dy="0">{{ day }}</tspan>
        {{ days.split(String(day))[1] }}
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="transition-transform duration-500 ease-in-out origin-center"
      :transform="`rotate(${-hoursRotation})`"
    >
      <textPath
        class="font-mono fill-gray-300"
        side="right"
        :style="`font-size: ${hoursFontSize}px;`"
        :textLength="hoursTextLength"
        href="#hours"
      >
        {{ hours.split(String(hour))[0] }}
        <tspan class="font-semibold fill-black" dy="0">{{ hour }}</tspan>
        {{ hours.split(String(hour))[1] }}
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="transition-transform duration-500 ease-in-out origin-center"
      :transform="`rotate(${-minutesRotation})`"
    >
      <textPath
        class="font-mono fill-gray-300"
        side="right"
        :style="`font-size: ${minutesFontSize}px;`"
        :textLength="minutesTextLength"
        href="#minutes"
      >
        {{ minutes.split(String(minute))[0] }}
        <tspan class="font-semibold fill-black" dy="0">{{ minute }}</tspan>
        {{ minutes.split(String(minute))[1] }}
      </textPath>
    </text>
    <text
      v-if="showGuide"
      class="transition-transform duration-500 ease-in-out origin-center"
      :transform="`rotate(${-secondsRotation})`"
    >
      <textPath
        class="font-mono fill-gray-300"
        side="right"
        :style="`font-size: ${secondsFontSize}px;`"
        :textLength="secondsTextLength"
        href="#seconds"
      >
        {{ seconds.split(String(second))[0].trim() }}
        <tspan class="font-semibold fill-black" dy="0">
          {{ second }}
        </tspan>
        {{ seconds.split(String(second))[1].trim() }}
      </textPath>
    </text>

    <rect
      class="illusion"
      clip-path="url(#clip-moon)"
      width="50%"
      height="100%"
      :x="flipValue"
      fill="black"
    />

    <use
      fill="white"
      fill-opacity="0"
      stroke="black"
      href="#moon"
      :stroke-width="lineWeight"
    ></use>
    <use :fill="fill" href="#crescent" class="disc" />
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
import { useNow } from "@vueuse/core";
// https://tc39.es/proposal-temporal/docs/calendar.html#writing-cross-calendar-code
// todo: customize https://github.com/GriffinJohnston/uiball-loaders
// realtime: https://dev.to/thormeier/use-your-i-moon-gination-lets-build-a-moon-phase-visualizer-with-css-and-js-aih
// https://css-tricks.com/set-text-on-a-circle/
// http://jsfiddle.net/alnitak/ah1k1mo3/
const props = defineProps(propsConfig);

const monthsFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface);
  const size =
    circumference / (months.value.length + (months.value.length - 1));
  return size * 3;
});
const daysFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface * (4 / 5));
  const size = circumference / (days.value.length + (days.value.length - 1));
  return size * 3;
});
const hoursFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface * (3 / 5));
  const size = circumference / (hours.value.length + (hours.value.length - 1));
  return size * 3;
});
const minutesFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface * (2 / 5));
  const size = circumference / (minutes.length + (minutes.length - 1));
  return size * 4;
});
const secondsFontSize = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + orbsSurface * (1 / 5));
  const size = circumference / (seconds.length + (seconds.length - 1));
  return size * 4;
});

const orbsSurface = props.moonSize * 0.8; // we take 63% of the remaining space to allow it to be used by the orbits
// we calculate the orbits radius additional constant by by dividing that space equally then we minus the font size used on the orb to shift the radius
const MONTHS_R_CONST = computed(() => orbsSurface); // the last orbit uses all the available space
const DAYS_R_CONST = computed(
  () => orbsSurface * (4 / 5) - daysFontSize.value / 3
);
const HOURS_R_CONST = computed(
  () => orbsSurface * (3 / 5) - hoursFontSize.value / 2
);
const MINUTES_R_CONST = computed(
  () => orbsSurface * (2 / 5) - minutesFontSize.value
);
const SECONDS_R_CONST = computed(
  () => orbsSurface * (1 / 5) - secondsFontSize.value
);

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
  .trim();
const minutes = Array.from({ length: 60 }, (_: number, i: number) =>
  i <= 9 ? `0${i}` : String(i)
)
  .join(" ")
  .trim();
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
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        calendar: cal.value,
      }).format(date)
    );
  })
    .join("")
    .concat(" ")
);

let month = new Intl.DateTimeFormat("en-US", {
  month: "short",
  calendar: cal.value,
}).format(temporalDate);

let day =
  temporalDate.day <= 9 ? `0${temporalDate.day}` : String(temporalDate.day);

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

let monthsRotation = computed(() => {
  const unit = 360 / months.value.length;
  const index = months.value.search(month);
  return (
    unit * (index - months.value.length / 4 + month.length / 2) -
    month.length / 2 -
    1 // the one represent the dot attached to each month we want to subtract so that the centring ignore it
  );
});

let daysRotation = computed(() => {
  const unit = 360 / days.value.length;
  const index = days.value.search(day);
  return (
    unit * (index - days.value.length / 4 + day.length / 2) - day.length / 2
  );
});

let hoursRotation = computed(() => {
  const unit = 360 / hours.value.length;
  const index = hours.value.search(hour.value);
  return (
    unit * (index - hours.value.length / 4 + hour.value.length / 2) -
    hour.value.length / 2
  );
});

let minutesRotation = computed(() => {
  const unit = 360 / minutes.length;
  const index = minutes.search(minute.value);
  return (
    unit * (index - minutes.length / 4 + minute.value.length / 2) -
    minute.value.length / 2
  );
});

let secondsRotation = computed(() => {
  const unit = 360 / seconds.length;
  const index = seconds.search(second.value);
  return (
    unit * (index - seconds.length / 4 + second.value.length / 2) -
    second.value.length / 2
  );
});

let monthsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value);
  const unit = circumference / months.value.length;
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
  return circumference - unit / 2;
});

let secondsTextLength = computed(() => {
  const circumference = 2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value);
  const unit = circumference / seconds.length;
  return circumference - unit / 2;
});

const flipValue = computed(() => {
  if (props.flip) {
    return rotation.value > 180 ? 0 : maxDimension.value / 2;
  } else {
    return rotation.value > 180 ? maxDimension.value / 2 : 0;
  }
});

const fill = computed(() =>
  rotation.value >= 90 && rotation.value <= 270 ? "white" : "black"
);

watch(now, () => {
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
        new Intl.DateTimeFormat("en-US", {
          month: "short",
          calendar: cal.value,
        }).format(date)
      );
    }
  )
    .join("")
    .concat(" ");

  month = new Intl.DateTimeFormat("en-US", {
    month: "short",
    calendar: cal.value,
  }).format(temporalDate);

  day =
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

  monthsRotation = computed(() => {
    const unit = 360 / months.value.length;
    const index = months.value.search(month);
    return (
      unit * (index - months.value.length / 4 + month.length / 2) -
      month.length / 2 -
      1 // the one represent the dot attached to each month we want to subtract so that the centring ignore it
    );
  });

  daysRotation = computed(() => {
    const unit = 360 / days.value.length;
    const index = days.value.search(day);
    return (
      unit * (index - days.value.length / 4 + day.length / 2) - day.length / 2
    );
  });

  hoursRotation = computed(() => {
    const unit = 360 / hours.value.length;
    const index = hours.value.search(hour.value);
    return (
      unit * (index - hours.value.length / 4 + hour.value.length / 2) -
      hour.value.length / 2
    );
  });

  minutesRotation = computed(() => {
    const unit = 360 / minutes.length;
    const index = minutes.search(minute.value);
    return (
      unit * (index - minutes.length / 4 + minute.value.length / 2) -
      minute.value.length / 2
    );
  });

  secondsRotation = computed(() => {
    const unit = 360 / seconds.length;
    const index = seconds.search(second.value);
    return (
      unit * (index - seconds.length / 4 + second.value.length / 2) -
      second.value.length / 2
    );
  });

  monthsTextLength = computed(() => {
    const circumference = 2 * Math.PI * (props.moonSize + MONTHS_R_CONST.value);
    const unit = circumference / months.value.length;
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
    return circumference - unit / 2;
  });

  secondsTextLength = computed(() => {
    const circumference =
      2 * Math.PI * (props.moonSize + SECONDS_R_CONST.value);
    const unit = circumference / hours.value.length;
    return circumference - unit / 2;
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
</style>
