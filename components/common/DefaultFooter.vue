<template>
  <footer class="fixed bottom-0 w-full text-center p-3">
    <!-- add copyrights -->
    <div>
      Copyright &copy; {{ new Date().getFullYear() }} {{ appConfig.appName }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
