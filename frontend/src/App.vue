<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
</script>

<template>
  <Header />
  <main class="container-fluid text-white">
      <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "./assets/sass/spacing";

/*main {
  div {
    margin: 0 calc(spacing.$spacer / 2);
  }
}
@media (min-width: 768px) {
  main {
    div {
      margin: 0 calc(spacing.$spacer * 2.5);
    }
  }
}*/
</style>
