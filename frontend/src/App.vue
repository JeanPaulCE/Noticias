<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
</script>

<template>
  <Header />
  <main class="container-fluid p-0 text-white">
      <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "./assets/sass/spacing";

main {
  div {
    display: flex;
    flex-direction: column;
    gap: spacing.$spacer;
  }
}
</style>
