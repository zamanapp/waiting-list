<template>
  <footer
    class="fixed bottom-0 p-3 text-xs text-white bg-black rounded-tl-sm shadow-md end-0 dark:text-slate-200 dark:bg-slate-900 rtl:rounded-tr-sm shadow-slate-400"
  >
    <!-- add copyrights -->
    <div>
      {{ $t("footer.copyright") }} {{ new Date().getFullYear() }}
      {{ $t("footer.name") }}
    </div>
  </footer>
</template>
