<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";

import ButtonGroup from "./layouts/ButtonGroup.vue";
import Nav from "./layouts/Nav.vue";
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
@import "./assets/sass/custom.scss";
main {
  div {
    margin: 0 calc($spacer/2);
  }
}
@media (min-width: 768px) {
  main {
    div {
      margin: 0 calc($spacer * 2.5);
    }
  }
}
</style>
