<template>
  <form>
    <label for="locale-select">{{ $t("language") }}: </label> +
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en">en</option>
      <option value="fr">ar</option>
    </select>
  </form>
</template>
