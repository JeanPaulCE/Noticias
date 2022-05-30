<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
</script>

<template>
  <Header />
  <main class="container-fluid text-white">
    <div>
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "./assets/sass/spacing";

main {
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
}
</style>
