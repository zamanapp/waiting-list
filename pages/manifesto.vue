<template>
  <div
    class="grid justify-center max-w-sm grid-flow-row gap-12 pt-24 pb-12 mx-auto auto-rows-max"
  >
    <div class="flex flex-col items-center rtl:gap-3 rtl:font-logoArabic">
      <h1 class="text-4xl font-bold md:text-5xl">
        {{ $t("manifesto.title") }}
      </h1>
      <h2 class="italic font-medium text-gray-600 md:text-lg">
        {{ $t("manifesto.subtitle") }}
      </h2>
    </div>
    <div
      :class="`flex flex-col gap-6 mx-1 mb-12 text-center font-mono rtl:font-regular rtl:leading-loose rtl:font-logoArabic`"
    >
      <p v-for="(content, i) in $tm('manifesto.paragraphs')" :key="i">
        {{ $rt(content) }}
      </p>
    </div>
  </div>
</template>
