<template>
  <footer
    class="fixed bottom-0 right-0 p-3 text-xs text-white bg-black shadow-md dark:text-slate-200 dark:bg-slate-900 rounded-tl-xl shadow-gray-400"
  >
    <!-- add copyrights -->
    <div>
      Copyright &copy; {{ new Date().getFullYear() }} {{ appConfig.appName }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
