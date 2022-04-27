<template>
  <NuxtPage />
</template>
<script setup>
useHead({
  titleTemplate: "Nuxt.js - %s", // or, title => `My App - ${title}`
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "app",
  },
});
</script>
